
import '../css/home.css';
import { hotReload } from './util.js'

window.addEventListener('load', function(e) {
  console.log('--> Application started  |  Current route: /')
})

$(function() {
  const patternOne = document.querySelector('#patternOne');
  const patternTwo = document.querySelector('#patternTwo');
  const patternThree = document.querySelector('#patternThree');
  const patternFour = document.querySelector('#patternFour');

  $('#fullpage').fullpage({
    scrollingSpeed: 1000,

    afterLoad: function(anchorLink, index) {
      if (index === 1) {
        // patternOne.classList.add('animate');
        // patternTwo.classList.add('animate');
      } else if (index === 2) {
        patternThree.classList.add('animate');
      } else if (index === 3) {
        patternFour.classList.add('animate');
      }
    },

  })
})

hotReload();
