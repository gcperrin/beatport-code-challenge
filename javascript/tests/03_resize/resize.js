const initResize = () => {
  /**
   * Implement a function that handles JavaScript events. When the user clicks
   * and drags the `resize` node, its parent node `panel` should grow or shrink
   * vertically.
   */
  const resize = document.getElementById('resize');
  const panel = document.getElementById('panel');

  let panelHeight = 0;
  let diff = 0;
  let start = 0;
  let end = 0;

  resize.addEventListener('mousedown', startDrag);

  function startDrag(e) {
    panelHeight = parseInt(document.defaultView.getComputedStyle(panel).height);
    start = e.clientY;
    document.addEventListener('mousemove', dragPanel);
    document.addEventListener('mouseup', endDrag);
  }

  function dragPanel(e) {
    end = e.clientY;
    diff = start - end;
    panel.style.height = panelHeight + diff;
  }

  function endDrag(e) {
    document.removeEventListener('mousemove', dragPanel);
    document.removeEventListener('mouseup', endDrag);
  }
};

window.initResize = initResize;
export default initResize;
