import { add } from 'add';
import ChromeSamples from 'chrome';

export { utilityFunction };

const EXAMPLE = 'EXAMPLE';
const EXAMPLE_2 = 'EXAMPLE';
const EXAMPLE_3 = `EXAMPLE`;

class Polygon {
  constructor(height, width) {
    this.name = 'Polygon';
    this.height = height;
    this.width = width;

    const text = `
      Multiline text
      Multiline text
      Multiline text
      Multiline text
    `;
  }

  /*
   * Some method
   */
  sayName() {
    // TODO: Some text
    ChromeSamples.log('Hi, I am a ', this.name + '.');
  }

  sayHistory() {
    ChromeSamples.log(
      '"Polygon" is derived from the Greek polus (many) ' +
        'and gonia (angle).',
    );

    add();

    const example = `Inside Out ${add}`;

    let i = 0;
    while (i < 10) {
      i += 1;
    }

    if (1 === 1) {
      console.log('Hello World');
    }

    console.log(true, null, undefined);

    try {
      hello = 10;
    } catch (err) {
      console.error(err);
    }

    app.get('/', (req, res) => {
      res.send('hello world');
    });
  }
}

function utilityFunction(damn) {
  console.log(damn);
}
