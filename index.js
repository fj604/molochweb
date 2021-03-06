'use strict';

function toggleToc () {
  $('#viewport').toggleClass('collapsed-toc');
}

function copyLink (event, page) {
  let copyText = `https://molo.ch/${page}#${event.parentNode.id}`;
  // create an input to copy from
  let input = document.createElement('input');
  document.body.appendChild(input);
  input.value = copyText;
  input.select();
  document.execCommand('copy', false);
  input.remove();
}
