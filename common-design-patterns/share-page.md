---
altLangPage: https://conception.canada.ca/configurations-conception-communes/partagez-page.html
date: null
dateModified: '2022-11-30'
description: null
title: Share this page
---


<div>
 <p class="gc-byline">
  <strong>
   From:
   <a href="https://www.canada.ca/en/treasury-board-secretariat.html">
    Treasury Board of Canada Secretariat
   </a>
  </strong>
  <div class="gc-stp-stp">
   <div class="row">
    <ul class="toc lst-spcd col-md-12">
     <li class="col-md-4 col-sm-6">
      <a class="list-group-item" href="site-footer-content.html">
       Content footer
      </a>
     </li>
     <li class="col-md-4 col-sm-6">
      <a class="list-group-item" href="report-problem.html">
       Report a problem
      </a>
     </li>
     <li class="col-md-4 col-sm-6">
      <a class="list-group-item active">
       Share this page
      </a>
     </li>
     <li class="col-md-4 col-sm-6">
      <a class="list-group-item" href="date-modified.html">
       Date modified
      </a>
     </li>
    </ul>
   </div>
  </div>
  <section>
   <p>
    The Share this page component is intended to allow people to share the content of the page to other users.
   </p>
   <section>
    <h2>
     Objectives
    </h2>
    <p>
     The Share this page component allows people to share the current web page via a selection of sharing platforms
			and delivery services.
    </p>
   </section>
   <section>
    <h2>
     When to use Share this page
    </h2>
    <p>
     The Share this page pattern is optional on all pages. For more information, go to the
     <a href="{{ site.url }}/architecture/mandatory-elements.html#header-footer">
      Mandatory
				elements of the design system
     </a>
     .
    </p>
   </section>
   <section>
    <h2>
     How to implement Share this page
    </h2>
    <ul>
     <li>
      The component is presented as a button using
      <abbr title="Web Experience Toolkit">
       WET
      </abbr>
      style for
				secondary actions
     </li>
     <li>
      The label reads: “Share this page”, preceded by the sharing icon in the defined icon set included in
      <abbr title="Web Experience Toolkit">
       WET
      </abbr>
     </li>
     <li>
      Placement: positioned below the main content area, right-alignwed.
     </li>
     <li>
      When clicked, a dismissible overlay is triggered:
      <ul>
       <li>
        the overlay is labeled “Share this page” and includes buttons for a selection of sharing platforms and
						delivery services, and the message “No endorsement of any products or services is expressed or implied.”
       </li>
       <li>
        on large screens, the buttons appear in 2 columns
       </li>
       <li>
        on small screens, a person is presented with a single column of buttons
       </li>
      </ul>
     </li>
     <li>
      Within the overlay, the button for each sharing platform or delivery service uses
      <abbr title="Web Experience Toolkit">
       WET
      </abbr>
      style for secondary actions
     </li>
     <li>
      The label for each button within the overlay includes the name of the sharing platform or delivery service,
				preceded by a relevant logo or icon
     </li>
     <li>
      When clicked, each button within the overlay triggers a link to that platform or service, including
				appropriate parameters, such as the URL or title of the page being shared
      <ul>
       <li>
        these links open in new browser tabs or windows where feasible
       </li>
      </ul>
     </li>
    </ul>
    <figure class="mrgn-bttm-lg">
     <figcaption>
      <b>
       Share this page overlay (Large screen version)
      </b>
     </figcaption>
     <img alt="Diagram of share this page overlay for large screens. Text version below:" class="img-responsive" src="https://www.canada.ca/content/dam/tbs-sct/images/government-communications/canada-content-style-guide/share-this-page-overlay-en.jpg"/>
     <details>
      <summary class="wb-toggle" data-toggle='{"print":"on"}'>
       Text version
      </summary>
      <p>
       This large screen example of “share this page” contains links to various social media platforms.
      </p>
     </details>
    </figure>
    <figure class="mrgn-bttm-lg">
     <figcaption>
      <b>
       Share this page overlay (Small screen version)
      </b>
     </figcaption>
     <img alt="Diagram of share this page overlay for small screens. Text version below:" class="img-responsive" src="https://www.canada.ca/content/dam/tbs-sct/images/government-communications/canada-content-style-guide/share-this-page-overlay-small-screen-eng.jpg"/>
     <details>
      <summary class="wb-toggle" data-toggle='{"print":"on"}'>
       Text version
      </summary>
      <p>
       This small screen example of “share this page” contains links to various social media platforms that are
					arranged in one column.
      </p>
     </details>
    </figure>
   </section>
  </section>
 </p>
</div>




