// main container elements
const headerBox = document.querySelector('.header');
const headerButton = document.querySelector('#navOpen');
const headerContainer = document.querySelector('.header-container');
const contentContainer1 = document.querySelector('#content-container-1');
const contentContainer2 = document.querySelector('#content-container-2');
const contentContainer3 = document.querySelector('#content-container-3');
const contentContainer4 = document.querySelector('#content-container-4');
const contentLink1 = document.querySelector('#content-link-1');
const contentLink2 = document.querySelector('#content-link-2');
const contentLink3 = document.querySelector('#content-link-3');
const contentLink4 = document.querySelector('#content-link-4');

// pane 2 elements
const code = document.querySelector('#keycodeBox');
const key = document.querySelector('#keypressBox');

//pane 3 elements
const newUserButton = document.querySelector('.fakenav button');
const form = document.querySelector('.fakenav form');
const createUserButton = document.querySelector('#submit-button');
const userList = document.querySelector('#userProfiles')

function showNavBox() { // function to open and close the nav bar
  if(headerBox.style.height!=='200px') {
    headerBox.style.height='200px';
  //  headerButton.style.top = '150px';
    headerButton.textContent = 'Close!';
    headerContainer.style.opacity = '1';
  } else {
    headerBox.style.height='10px';
    headerButton.style.top = '-20px';
    headerContainer.style.opacity = '0';
    headerButton.textContent = 'Open!';
  } //end if

}// end function showNavBox

function moveContent() { // function to move content
  let clickedBox = this.id.charAt(this.id.length - 1); // set clickedBox to whichever link was clicked by getting the last character of the id

  switch (clickedBox) {
    case '1':
      contentContainer1.classList.add('active-content');
      contentContainer2.classList.remove('active-content');
      contentContainer3.classList.remove('active-content');
      contentContainer4.classList.remove('active-content');
      break;

    case '2':
      contentContainer1.classList.remove('active-content');
      contentContainer2.classList.add('active-content');
      contentContainer3.classList.remove('active-content');
      contentContainer4.classList.remove('active-content');
      break;

    case '3':
      contentContainer1.classList.remove('active-content');
      contentContainer2.classList.remove('active-content');
      contentContainer3.classList.add('active-content');
      contentContainer4.classList.remove('active-content');
      break;

    case '4':
      contentContainer1.classList.remove('active-content');
      contentContainer2.classList.remove('active-content');
      contentContainer3.classList.remove('active-content');
      contentContainer4.classList.add('active-content');
      console.log(contentContainer4);
      break;

    default:
      console.log('no movement triggered');
      break;
  } //end switch
} //end function movecontent

//pane 2 functions

function outputText(event) { //pane 2 function for outputting keycodes and key press
  // function for processing the event triggered by a key press. for this funtcion, all the event info is stored in the function var 'event'
  console.log(event); // log all event info
  console.log(event.key, event.keyCode);

  //log the two attributes we're looking for
  key.innerHTML = event.key; // set the key pressed as the innerHTML in the keypressed  div
  code.innerHTML = event.keyCode; // and set the charcode for the key pressed as the innerhtml in the first div
  if (event.key == ' ') { key.innerHTML = 'Space'; } // because space will creat a text string as an actual space, lets make that look nicer
  if (event.ctrlKey == true) {key.innerHTML = 'Control + ' + key.innerHTML; } // check for ctrl key
  if (event.shiftKey == true) {key.innerHTML = 'Shift + ' + key.innerHTML; } // check for shift key
  if (event.altKey == true) {key.innerHTML = 'Alt + ' + key.innerHTML; } // check for alt key

}

//pane 3 functions
function toggleHide() { // shows or hides the form for the new user button
	if(form.classList.contains('form-hidden')) { form.classList.remove('form-hidden'); }
  else { form.classList.add('form-hidden'); }
}

function user(first, last, username) { // function for the user constructor
	this.firstName = first;
  this.lastName = last;
  this.userName = username;
}

function createUser(event) { //function for creating a user and outputting it on the screen
	event.preventDefault();
	let formData = document.querySelector('#user-form');
  let currentFirstName = formData.first.value;
  let currentLastName = formData.last.value;
  let currentUserName = formData.username.value;
  console.log(formData.username.value);

  let newUser = new user(currentFirstName, currentLastName, currentUserName);
  let createdDisplay = document.createElement('li');
  createdDisplay.setAttribute('class', 'text-center');
  createdDisplay.innerText = `${newUser.firstName} ${newUser.lastName} --  ${newUser.userName}`
  userList.append(createdDisplay);
}

headerButton.style.top = '-20px';

// set listeners
headerButton.addEventListener('click', showNavBox);
contentLink1.addEventListener('click', moveContent);
contentLink2.addEventListener('click', moveContent);
contentLink3.addEventListener('click', moveContent);
contentLink4.addEventListener('click', moveContent);

//pane 2 listeners
window.addEventListener('keydown', outputText);

//pane 3 listeners
newUserButton.addEventListener('click', toggleHide);
createUserButton.addEventListener('click', createUser);
