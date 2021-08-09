const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarTabs = document.getElementsByClassName('navbar-tabs')[0];

toggleButton.addEventListener('click', () =>{
  navbarTabs.classList.toggle('active');
})



