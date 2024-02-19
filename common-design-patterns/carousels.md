---
altLangPage: https://conception.canada.ca/configurations-conception-communes/carrousels.html
date: null
dateModified: '2020-10-30'
description: null
title: Carousels design pattern
---


<div>
 <section>
  <p>
   Responsive carousels are in-page components used to display multiple different items within the same content space.
  </p>
  <section>
   <h2>
    When to use this pattern
   </h2>
   <p>
    Use this component for situations such as image or video galleries.
   </p>
  </section>
  <section>
   <h2>
    What to avoid
   </h2>
   <p>
    Don't use this component:
   </p>
   <ul>
    <li>
     to promote activities and initiatives
    </li>
    <li>
     when a person’s flow must not be interrupted, as in a transactional process
    </li>
    <li>
     when it would duplicate content from other components on the page
    </li>
   </ul>
  </section>
  <section>
   <h2>
    How to use this pattern
   </h2>
   <ul>
    <li>
     Responsive carousels are a set of 2 to 4 rotating slides that refresh on page load, with user-controls to rotate through the slides and to toggle to auto-rotation
    </li>
    <li>
     The default controls for stepping through the slides are thumbnails for large screens and forward/back buttons, including an “Item X of X” message for small screens
    </li>
    <li>
     When auto-play is activated, the default slide for the start of auto-rotation is slide one
    </li>
    <li>
     The default timing for auto-rotation is 9 seconds per slide
    </li>
    <li>
     The default style for transitioning between slides is horizontal sliding transition, starting from the right edge
    </li>
    <li>
     Carousels may be implemented at various sizes, ranging from a single column to the full width of the screen
    </li>
    <li>
     Each slide is made up of a combination of text and imagery, with the option to add a button link
    </li>
    <li>
     Both text and imagery must be linked, but all links in the carousel slide must point to the same destination
    </li>
    <li>
     Any call to action must be described in the hyperlink text or button link
    </li>
    <li>
     A maximum of 65 characters is allowed for all of the text on a carousel slide (including link label)
    </li>
    <li>
     Textual elements must be coded as HTML text—do not embed text into imagery
    </li>
    <li>
     Use the defined presentation classes included in the Canada.ca
     <abbr title="Web Experience Toolkit">
      WET
     </abbr>
     theme
    </li>
    <li>
     For image sizing details, consult the
     <a href="http://wet-boew.github.io/themes-dist/GCWeb/index-en.html">
      Canada.ca GitHub page
     </a>
    </li>
   </ul>
  </section>
  <section>
   <h2>
    Latest changes
   </h2>
   <p>
    <strong>
     2020-10-30:
    </strong>
    clarified when to use carousels and when not to use them
   </p>
  </section>
  <section>
   <h2>
    Working example
   </h2>
   <ul>
    <li>
     <a href="https://wet-boew.github.io/v4.0-ci/demos/tabs/tabs-carousel-en.html#carousel-s2">
      WET: Carousels
     </a>
     – use style 2
    </li>
   </ul>
  </section>
  <section class="panel panel-primary">
   <header class="panel-heading">
    <h3 class="panel-title">
     Example
    </h3>
   </header>
   <div class="panel-body">
    <figure class="mrgn-bttm-sm">
     <figcaption class="text-center">
      <b>
       Carousels pattern
      </b>
     </figcaption>
     <img alt="Screenshot illustrating the full-width carousel pattern on Canada.ca. Details on this graphic can be found in the surrounding text." class="img-responsive center-block" src="https://www.canada.ca/content/dam/tbs-sct/images/government-communications/canada-content-style-guide/carousels-pattern-eng.jpg"/>
    </figure>
   </div>
  </section>
 </section>
</div>




