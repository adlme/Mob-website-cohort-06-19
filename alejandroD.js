'use strict';

function main() {
  var sections = document.querySelectorAll('section');

  sections.forEach(function(section) {
    hideSection(section)
  })
  
  function hideSection(section) {
    
    section.addEventListener('click', handleHide);
    
    function handleHide(event) {
      var title = event.target;
      var container = title.parentNode;
      console.log(container)
      container.classList.toggle('collapsed')
    };
  
    // function showShow() {
    //   var show = document.createElement('p');
    //   show.innerHTML = 'Show section';
    //   section.appendChild(show);
    // }
  }

};

window.addEventListener('load', main);