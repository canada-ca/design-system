---
altLangPage: "https://conception.canada.ca/configurations-conception-communes/champ-recherche.html"
date: 2017-10-05
dateModified: 2023-06-26
description: "Guidance about using the site search box on Canada.ca. The site search box allows people to search Government of Canada content. It appears in the global header across Canada.ca."
title: "Site search box"
---
<div class="row">
  <div class="col-md-12 pull-left">
    <ul class="list-inline small mrgn-bttm-sm" id="list-inline-desktop-only">
      <li class="mrgn-rght-lg"> Last updated: {{ page.dateModified }}</li>
    </ul>
  </div>
</div>
<p><span class="label label-danger">Mandatory on standard and campaign pages</span></p>
<p>The site search box is an element of the global header. It allows people to search Government of Canada content using a simple search field.</p>
<p>Results for site search are at the level of all Government of Canada web content, or a subset of content at the department or agency level.</p>
<div class="pattern-demo mrgn-tp-lg">
  <figure class="mrgn-bttm-sm"><img src="../images/01-site-search-en.png" class="img-responsive" alt=""></figure>
</div>
<section>
  <h2>On this page</h2>
  <ul>
    <li><a href="#when">When to use</a></li>
    <li><a href="#avoid">What to avoid</a></li>
    <li><a href="#content">Content and design</a></li>
    <li><a href="#implementation">How to implement</a></li>
    <li><a href="#research">Research and rationale</a></li>
    <li><a href="#changes">Latest changes</a></li>
  </ul>
</section>
<h2 id="when">When to use</h2>
<p>The site search box is mandatory on all pages, except transactional pages.</p>
<h2 id="avoid">What to avoid</h2>
<p>Don’t use the site search box for searching anything other than content indexed by GC Search. Place search for other datasets within the content area of the page.</p>
<h2 id="content">Content and design</h2>
<p>Find content and design specifications and visual examples.</p>
<h3>Content specifications</h3>
<p>The site search box consists of 3 visual elements:</p>
<ul>
  <li>text input field (maximum 170 characters)</li>
  <li>input box placeholder text</li>
  <li>search button with magnifying glass icon</li>
</ul>
<p>In the text input field, the placeholder label is:</p>
<ul>
  <li>“Search Canada.ca” in English</li>
  <li>"Rechercher dans Canada.ca" in French</li>
</ul>
<p>The placeholder label in a contextualized search box is:</p>
<ul>
  <li>“Search [institution]” in English</li>
  <li>"Rechercher dans [institution]" in French</li>
</ul>
<h4>Interactions</h4>
<ul>
  <li>Searches query the GC Search index. Typing a search term in the input field and selecting the search icon opens a results page.</li>
</ul>
<h3>Design specifications</h3>
<ul>
  <li>Position: top-right corner of the global header area, below the language toggle link</li>
  <li>Form class: form-inline</li>
  <li>Button icon: glyphicon-search glyphicon</li>
  <li>Button class: btn btn-primary btn-small</li>
  <li>Colour: #26374a</li>
  <li>Length of input field: maxlength=170</li>
  <li>Value size: 34</li>
</ul>
<p>The search elements are responsive.  They scale according to screen size.</p>
<h3>Visual examples</h3>
<div class="pattern-demo mrgn-tp-lg">
  <figure>
    <figcaption><b>Site search box - large screen</b></figcaption>
    <img src="../../images/01-site-search-en.png" class="img-responsive" alt=" ">
    <details class="mrgn-tp-md">
      <summary class="wb-toggle small" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Image description: site search box - large screen</summary>
      <p class="mrgn-tp-lg">The search box appears in the top-right corner, underneath the language toggle and directly across from the Government of Canada signature. </p>
      <p>The site search bar is a rectangle, defined by a light grey border. Within the rectangle are the words, ‘Search Canada.ca’.  To the right of the rectangle is a blue square with a white magnifying glass icon within.</p>
         </details>
  </figure>
</div>
<div class="pattern-demo mrgn-tp-lg">
  <figure>
    <figcaption><b>Site search box - small screen</b></figcaption>
    <img src="../../images/01-site-search-sm-en.png" class="img-responsive" alt=" ">
    <details class="mrgn-tp-md">
      <summary class="wb-toggle small" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Image description: site search box - small screen</summary>
      <p class="mrgn-tp-lg">The search box appears in the header, directly below the Government of Canada signature and the language toggle. It spans across the screen.</p>
      <p>The site search bar is a rectangle, defined by a light grey border. Within the rectangle are the words, ‘Search Canada.ca’.  To the right of the rectangle is a blue square with a white magnifying glass icon within. </p>
    </details>
  </figure>
</div>
<h2 id="implementation">How to implement</h2>
<p>Find working examples for implementing the site search box.</p>
<h3>GCweb (WET) theme implementation reference</h3>
<p>The implementation reference includes how to configure each element of the header.</p>
<ul>
  <li><a href="https://wet-boew.github.io/GCWeb/sites/header/header-docs-en.html">GCWeb (WET) header documentation</a></li>
</ul>
<h3>Implementations</h3>
<p>Determine what best suits the type of page you're creating.</p>
<div class="row">
  <div class="col-md-8">
    <div class="wb-tabs mrgn-tp-lg">
      <div class="tabpanels">
        <details id="004" open="open">
          <summary><strong>GC-AEM</strong></summary>
          <p class="mrgn-tp-lg">For the Government of Canada Adobe Experience Manager (AEM):</p>
          <ul>
            <li><a href="https://www.gcpedia.gc.ca/wiki/AEM_GC-specific_Documentation_6.5">AEM/Managed Web Service documentation (GCPedia link - only available on the Government of Canada network)</a></li>
          </ul>
        </details>
        <details id="005">
          <summary><strong>CDTS</strong></summary>
          <p class="mrgn-tp-lg">For the Centrally Deployed Templates Solution (CDTS):</p>
          <ul>
            <li><a href="https://cdts.service.canada.ca/app/cls/WET/gcweb/v4_0_45/cdts/samples/custom-search-en.html">Custom search</a> - configuration options for the site search box</li>
            <li><a href="https://cenw-wscoe.github.io/sgdc-cdts/docs/index-en.html">CDTS documentation</a></li>
          </ul>
        </details>
        <details id="006">
          <summary><strong>Drupal WxT</strong></summary>
          <p class="mrgn-tp-lg">For Drupal WxT:</p>
          <ul>
            <li><a href="https://drupalwxt.github.io/en/">Drupal WxT documentation</a></li>
          </ul>
        </details>
      </div>
    </div>
  </div>
</div>
<h3>Configure search</h3>
<p>The Principal Publisher provides support for GC Search adoption, search configuration, indexing of web pages, functionality errors and other search related requests:</p>
<ul>
  <li><a href="https://www.gcpedia.gc.ca/wiki/GC_Search_Support">GC Search Support (only available on the GC network)</a></li>
</ul>
<h2 id="research">Research and rationale</h2>
<p>Placing site search in the top-right corner of a web page is an established web convention.</p>
<h3>Policy rationale</h3>
<p>As part of the global header, the site search box is a mandatory element under the <cite>Content and Information Architecture Specification.</cite></p>
<ul>
  <li><a href="https://www.canada.ca/en/treasury-board-secretariat/services/government-communications/canada-content-information-architecture-specification/mandatory-elements.html">Mandatory elements of the design system</a></li>
</ul>
<h2 id="changes">Latest changes</h2>
<dl class="dl-horizontal">
  <dt>
    <time datetime="2023-06-26" class="link-muted">2023-06-26</time>
  </dt>
  <dd>Updated the guidance to include advice on what to avoid, content and design specifications, visual examples, implementation guidance, support for search configuration, and policy rationale</dd>
</dl>
