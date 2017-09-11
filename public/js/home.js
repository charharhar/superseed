
import '../css/home.css';
import { hotReload } from './util.js'

const patternOne = document.querySelector('#patternOne');
const patternTwo = document.querySelector('#patternTwo');
const patternThree = document.querySelector('#patternThree');
const patternFour = document.querySelector('#patternFour');
const logoImage = document.querySelector('.logo-image');
const splashHeading = document.querySelector('.splashHeading');

window.addEventListener('load', function(e) {
  console.log('--> Application started  |  Current route: /')
  patternOne.classList.add('animate');
  patternTwo.classList.add('animate');
  logoImage.classList.add('animate');
  splashHeading.classList.add('animate');
})

$(function() {

  $('#fullpage').fullpage({
    scrollingSpeed: 1000,

    afterLoad: function(anchorLink, index) {
      if (index === 2) {
        patternThree.classList.add('animate');
      } else if (index === 3) {
        patternFour.classList.add('animate');
      }
    },

  })
})

hotReload();
