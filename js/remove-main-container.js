// Select the main container element
var mainContainer = document.querySelector('main'); // Adjust the selector as needed

// Check if the element exists and has the class
if (mainContainer && mainContainer.classList.contains('container')) {
  // Remove the 'container' class
  mainContainer.classList.remove('container');
}