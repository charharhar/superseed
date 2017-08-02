
import '../css/styles.css';

/**
 * Utility Functions
 */

function removeAllChildren(parent) {
  while (parent.hasChildNodes()) {
    parent.removeChild(parent.lastChild);
  }
}

function findParent(node, className) {
  let tempNode = node;

  while (!tempNode.classList.contains(className)) {
    tempNode = tempNode.parentNode;
  }

  return tempNode
}

function sliceArray(nodeArray) {
  return Array.prototype.slice.call(nodeArray)
}

function getDistanceFromLeft(el) {
  const rect = el.getBoundingClientRect();
  const docEl = document.documentElement;

  return (rect.left + (window.pageXOffset || docEl.scrollLeft || 0))
}

function scrollTop() {
  return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
}

function scrollTo(e, elem) {
  e.preventDefault();

  const target = `.${elem.getAttribute('scrollTo')}`

  $('html, body').animate({
    scrollTop: $(target).offset().top
  }, 1000);
}

window.addEventListener('load', function(e) {
  console.log('--> Application started')
})
