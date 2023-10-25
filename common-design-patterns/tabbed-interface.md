---
altLangPage: https://conception.canada.ca/configurations-conception-communes/interface-onglets.html
date: null
dateModified: '2018-12-19'
description: null
title: Tabbed interface design pattern
---


<div>
 
 <section>
  <p>
   The tabbed interface pattern separates related content into different panes that are viewable one at a time when the respective tab is clicked.
  </p>
  <section>
   <h2>
    Objective
   </h2>
   <p>
    Use the tabbed interface pattern to group and present different aspects of content that are closely related, such as:
   </p>
   <ul>
    <li>
     Geographic places, where the tabs can be used to present content relating to a place’s location, demographics, economy, etc.
    </li>
    <li>
     Product catalogues, where the tabs can be used to present consistent facets of each product in the catalogue, such as specifications, features, etc.
    </li>
   </ul>
   <p>
    Do not use the tabbed interface pattern when:
   </p>
   <ul>
    <li>
     content must be presented in a specific sequential order (instead, use a step-by-step pattern)
    </li>
    <li>
     content needs to be compared and contrasted, which would lead to repeated switching between tabs (instead, use tables or other patterns that allow all content to be presented at once)
    </li>
    <li>
     content is lengthy or detailed, because of space limitations in the tabbed interface
    </li>
    <li>
     content presentation includes only 2 tabs (for greater efficiency, use subheadings)
    </li>
   </ul>
  </section>
  <section>
   <h2>
    How and when to use a tabbed interface
   </h2>
   <ul>
    <li>
     Use defined presentation classes for the tabbed interface included in
     <abbr title="Web Experience Toolkit">
      WET
     </abbr>
    </li>
    <li>
     Ensure that tab headers are clear and concise; avoid lengthy labels
    </li>
    <li>
     When repeating the tabbed interface across a set of related pages (for  example, on  country pages), always ensure the tab headers are presented consistently
    </li>
    <li>
     Make the default active tab first on page load; but another tab may be used as the active tab on page load if required
    </li>
   </ul>
   <div class="row">
    <div class="col-sm-2">
    </div>
    <div class="col-sm-8">
     <figure class="mrgn-bttm-lg">
      <figcaption class="text-center">
       <b>
        Tabbed interface pattern
       </b>
      </figcaption>
      <img alt="Image of tabbed interface pattern. Details on this graphic can be found in the surrounding text." class="img-responsive center-block" src="https://www.canada.ca/content/dam/tbs-sct/images/government-communications/canada-content-style-guide/tabbed-interface-pattern-eng.jpg"/>
     </figure>
    </div>
    <div class="col-sm-2">
    </div>
   </div>
   <div class="clearfix">
   </div>
  </section>
 </section>
</div>




