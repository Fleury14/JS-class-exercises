const headerBox = document.querySelector('.header');
const headerButton = document.querySelector('#navOpen');
const headerContainer = document.querySelector('.header-container');

function showNavBox() {
  if(headerBox.style.height!=='200px') {
    headerBox.style.height='200px';
    headerButton.style.top = '150px';
    headerContainer.style.opacity = '1';
  } else {
    headerBox.style.height='10px';
    headerButton.style.top = '-20px';
    headerContainer.style.opacity = '0';
  } //end if

}// end function

headerButton.style.top = '-20px';
headerButton.addEventListener('click', showNavBox);
