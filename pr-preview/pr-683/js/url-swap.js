document.addEventListener("DOMContentLoaded", function() {
    // Select the div with the class 'brand'
    var brandDiv = document.querySelector('.brand');
    
    // Check if the div exists
    if (brandDiv) {
        // Find the <a> element within the div
        var link = brandDiv.querySelector('a');
        
        // Check if the <a> element exists
        if (link) {
            // Change the href attribute to the desired URL
            link.setAttribute('href', 'https://www.canada.ca/en');
        }
    }
});