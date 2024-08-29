// Select the main container element
var mainContainer = document.querySelector('main'); // Adjust the selector if needed

// Remove the 'container' class from the main container if it exists
if (mainContainer && mainContainer.classList.contains('container')) {
  mainContainer.classList.remove('container');
}

// Select the section with the class 'pagedetails'
var pageDetailsSection = document.querySelector('section.pagedetails'); // Adjust the selector if needed

// Add the 'container' class to the 'pagedetails' section if it exists
if (pageDetailsSection) {
  pageDetailsSection.classList.add('container');
}