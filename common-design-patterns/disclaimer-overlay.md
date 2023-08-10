---
altLangPage: https://conception.canada.ca/configurations-conception-communes/couche-avertissement.html
date: null
dateModified: '2018-12-19'
description: null
title: Disclaimer overlay design pattern
---


<div>
 <p class="gc-byline">
  <strong>
   From:
   <a href="https://www.canada.ca/en/treasury-board-secretariat.html">
    Treasury Board of Canada Secretariat
   </a>
  </strong>
 </p>
 <section>
  <p>
   The disclaimer overlay pattern ensures that terms of use, privacy statements and similar forms of disclaimer are available where required, but do not obstruct access to the main content of the page. It consists of a trigger link that activates a dismissible overlay where the disclaimer text appears.
  </p>
  <section>
   <h2>
    When to use this pattern
   </h2>
   <ul>
    <li>
     Use where disclaimers (privacy statements, terms of use, etc.) are required, to avoid linking away from the current page
    </li>
    <li>
     Never use for content that is essential to completing the primary task of the page
    </li>
   </ul>
  </section>
  <section>
   <h2>
    How to use this pattern
   </h2>
   <ul>
    <li>
     Label the trigger link with “Terms and conditions,” “Privacy statement,” or similar
    </li>
    <li>
     When triggered, the overlay displays the disclaimer content in a secondary window (modal dialogue)
    </li>
    <li>
     Disclaimer overlays must only include one action, which is to close them – this action is enabled by a clickable “X” in the upper right corner and a button labeled “Close” at the bottom of the overlay
    </li>
    <li>
     Closing the overlay returns a person to the page containing the link that was used to activate it
    </li>
    <li>
     Until the overlay is dismissed, the window under the disclaimer overlay is inert; people cannot interact with content outside of the overlay window (to avoid issues with assistive technology interpreting what is displayed)
    </li>
    <li>
     Use only
     <a href="http://wet-boew.github.io/wet-boew/demos/overlay/overlay-en.html">
      <abbr title="Web Experience Toolkit">
       WET
      </abbr>
      Centred popup (Lightbox)
     </a>
     for this pattern
    </li>
   </ul>
  </section>
  <section>
   <h2>
    Working example
   </h2>
   <ul>
    <li>
     <a href="http://wet-boew.github.io/themes-dist/GCWeb/demos/lightbox/lightbox-en.html">
      WET: Lightbox
     </a>
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
       Disclaimer overlay pattern
      </b>
     </figcaption>
     <img alt="Screenshot illustrating the Web Experience Toolkit (WET) centered overlay pop-up, being used to display disclaimers and legal information on Canada.ca. Details on this graphic can be found in the surrounding text." class="img-responsive center-block" src="https://www.canada.ca/content/dam/tbs-sct/images/government-communications/canada-content-style-guide/disclaimer-overlay-pattern-eng.jpg"/>
    </figure>
   </div>
  </section>
 </section>
</div>




