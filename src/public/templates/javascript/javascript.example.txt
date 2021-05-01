import { EventDispatcher } from './EventDispatcher.js';

function Geometry() {
  this.uuid = MathUtils.generateUUID();
  this.name = '';
  this.type = 'Geometry';

  this.vertices = [];
  this.faceVertexUvs = [[]];
  this.boundingSphere = null;

  // update flags
  this.elementsNeedUpdate = false;
  this.verticesNeedUpdate = false;
}

/**
 * Geometry
 */
Geometry = Object.assign(Object.create(EventDispatcher.prototype), {
  constructor: Geometry,

  isGeometry: true,

  applyMatrix4(matrix) {
    const normalMatrix = new Matrix3().getNormalMatrix(matrix);

    for (let i = 0, il = this.faces.length; i < il; i++) {
      const face = this.faces[i];
      face.normal.applyMatrix3(normalMatrix).normalize();

      for (let j = 0, jl = face.vertexNormals.length; j < jl; j++) {
        face.vertexNormals[j].applyMatrix3(normalMatrix).normalize();
      }
    }

    this.verticesNeedUpdate = true;
    this.normalsNeedUpdate = true;

    return this;
  },

  rotateZ(angle) {
    // TODO: Verify edge case
    // rotate geometry around world z-axis
    _m1.makeRotationZ(angle);
    this.applyMatrix4(_m1);
    return this;
  },

  fromBufferGeometry(geometry) {
    const scope = this;

    const index = geometry.index !== null ? geometry.index : undefined;
    const attributes = geometry.attributes;

    if (attributes.position === undefined) {
      console.error(
        'THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion.',
      );
      return this;
    }

    const position = attributes.position;
    if (uv2 !== undefined) this.faceVertexUvs[1] = [];

    for (let i = 0; i < position.count; i++) {
      scope.vertices.push(new Vector3().fromBufferAttribute(position, i));

      if (color !== undefined) {
        scope.colors.push(new Color().fromBufferAttribute(color, i));
      }
    }

    function addFace(a, b, c, materialIndex) {
      const vertexColors =
        color === undefined
          ? []
          : [
              scope.colors[a].clone(),
              scope.colors[b].clone(),
              scope.colors[c].clone(),
            ];

      const vertexNormals =
        normal === undefined
          ? []
          : [
              new Vector3().fromBufferAttribute(normal, a),
              new Vector3().fromBufferAttribute(normal, b),
              new Vector3().fromBufferAttribute(normal, c),
            ];
    }
    const groups = geometry.groups;

    if (groups.length > 0) {
      for (let i = 0; i < groups.length; i++) {
        const group = groups[i];

        const start = group.start;
        const count = group.count;

        for (let j = start, jl = start + count; j < jl; j += 3) {
          if (index !== undefined) {
            addFace(
              index.getX(j),
              index.getX(j + 1),
              index.getX(j + 2),
              group.materialIndex,
            );
          } else {
            addFace(j, j + 1, j + 2, group.materialIndex);
          }
        }
      }
    } else {
      if (index !== undefined) {
        for (let i = 0; i < index.count; i += 3) {
          addFace(index.getX(i), index.getX(i + 1), index.getX(i + 2));
        }
      } else {
        for (let i = 0; i < position.count; i += 3) {
          addFace(i, i + 1, i + 2);
        }
      }
    }

    return this;
  },

  center() {
    this.computeBoundingBox();
    this.boundingBox.getCenter(_offset).negate();
    this.translate(_offset.x, _offset.y, _offset.z);

    return this;
  },

  computeFaceNormals() {
    const cb = new Vector3(),
      ab = new Vector3();

    for (let f = 0, fl = this.faces.length; f < fl; f++) {
      const face = this.faces[f];

      const vA = this.vertices[face.a];
      const vB = this.vertices[face.b];
      const vC = this.vertices[face.c];

      cb.subVectors(vC, vB);
      ab.subVectors(vA, vB);
      cb.cross(ab);

      cb.normalize();

      face.normal.copy(cb);
    }
  },

  computeVertexNormals(areaWeighted = true) {
    const vertices = new Array(this.vertices.length);

    for (let v = 0, vl = this.vertices.length; v < vl; v++) {
      vertices[v] = new Vector3();
    }

    if (areaWeighted) {
      // vertex normals weighted by triangle areas
      // http://www.iquilezles.org/www/articles/normals/normals.htm

      const cb = new Vector3(),
        ab = new Vector3();

      for (let f = 0, fl = this.faces.length; f < fl; f++) {
        const face = this.faces[f];

        const vA = this.vertices[face.a];
        const vB = this.vertices[face.b];
        const vC = this.vertices[face.c];

        cb.subVectors(vC, vB);
        ab.subVectors(vA, vB);
        cb.cross(ab);

        vertices[face.a].add(cb);
        vertices[face.b].add(cb);
        vertices[face.c].add(cb);
      }
    } else {
      this.computeFaceNormals();

      for (let f = 0, fl = this.faces.length; f < fl; f++) {
        const face = this.faces[f];

        vertices[face.a].add(face.normal);
        vertices[face.b].add(face.normal);
        vertices[face.c].add(face.normal);
      }
    }

    for (let v = 0, vl = this.vertices.length; v < vl; v++) {
      vertices[v].normalize();
    }

    for (let f = 0, fl = this.faces.length; f < fl; f++) {
      const face = this.faces[f];

      const vertexNormals = face.vertexNormals;

      if (vertexNormals.length === 3) {
        vertexNormals[0].copy(vertices[face.a]);
        vertexNormals[1].copy(vertices[face.b]);
        vertexNormals[2].copy(vertices[face.c]);
      } else {
        vertexNormals[0] = vertices[face.a].clone();
        vertexNormals[1] = vertices[face.b].clone();
        vertexNormals[2] = vertices[face.c].clone();
      }
    }

    if (this.faces.length > 0) {
      this.normalsNeedUpdate = true;
    }
  },

  /*
   * Checks for duplicate vertices with hashmap.
   * Duplicated vertices are removed
   * and faces' vertices are updated.
   */
  sortFacesByMaterialIndex() {
    const faces = this.faces;
    const length = faces.length;

    function materialIndexSort(a, b) {
      return a.materialIndex - b.materialIndex;
    }

    faces.sort(materialIndexSort);

    // sort uvs

    const uvs1 = this.faceVertexUvs[0];
    const uvs2 = this.faceVertexUvs[1];

    let newUvs1, newUvs2;

    if (uvs1 && uvs1.length === length) newUvs1 = [];
    if (uvs2 && uvs2.length === length) newUvs2 = [];

    for (let i = 0; i < length; i++) {
      const id = faces[i]._id;

      if (newUvs1) newUvs1.push(uvs1[id]);
      if (newUvs2) newUvs2.push(uvs2[id]);
    }

    if (newUvs1) this.faceVertexUvs[0] = newUvs1;
    if (newUvs2) this.faceVertexUvs[1] = newUvs2;
  },
});

export { Geometry };
