
import '../css/home.css';
import { hotReload } from './util.js'

window.addEventListener('load', function(e) {
  console.log('--> Application started  |  Current route: /')
  const patternOne = document.querySelector('#patternOne');
  const patternTwo = document.querySelector('#patternTwo');
  const patternThree = document.querySelector('#patternThree');
  const patternFour = document.querySelector('#patternFour');

  $('#fullpage').fullpage({
    afterLoad: function(anchorLink, index) {
      if (index === 1) {
        patternOne.classList.add('animate');
        patternTwo.classList.add('animate');
      } else if (index === 2) {
        patternThree.classList.add('animate');
      } else if (index === 3) {
        patternFour.classList.add('animate');
      }
    },

    afterRender() {
      patternOne.classList.add('animate');
      patternTwo.classList.add('animate');
    }
  })

  window.start = function() {
  }

})


hotReload();
