export { dragTrack };

function dragTrack(e, id, cb) {
  e.preventDefault();
  e.stopPropagation();

  const dragArea = document.getElementById(id);

  startDrag();

  function startDrag() {
    dragArea.className = dragArea.className + ' no-cursor';
    // dragArea.children[0].className =
    //   dragArea.children[0].className + ' no-cursor';

    window.addEventListener('mousemove', duringDrag, false);
    window.addEventListener('mouseup', stopDrag, false);

    onMove(e);
  }

  function duringDrag(e) {
    e.preventDefault();
    e.stopPropagation();
    onMove(e);
  }

  function stopDrag() {
    window.removeEventListener('mousemove', duringDrag, false);
    window.removeEventListener('mouseup', stopDrag, false);

    dragArea.className = dragArea.className.replace('no-cursor', '');
    // dragArea.children[0].className = dragArea.children[0].className.replace(
    //   'no-cursor',
    //   '',
    // );
  }

  function onMove(e) {
    e.preventDefault();
    e.stopPropagation();

    const bounds = dragArea.getBoundingClientRect();
    const w = bounds.width;
    const h = bounds.height;
    const x = e.clientX;
    const y = e.clientY;

    const relX = clamp(x - bounds.left, 0, w);
    const relY = clamp(y - bounds.top, 0, h);

    cb(relX / w, relY / h);
  }

  function clamp(val, min, max) {
    return Math.max(min, Math.min(val, max));
  }
}
