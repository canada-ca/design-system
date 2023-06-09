---
altLangPage: "https://conception.canada.ca/configurations-conception-communes/fil-ariane.html"
breadcrumbs:
  - title: "About Canada.ca"
    link:  "https://www.canada.ca/en/government/about.html"
  - title: Canada.ca design system
    link: "https://www.canada.ca/en/government/about/design-system.html"
  - title: Template and pattern library
    link: "https://www.canada.ca/en/government/about/design-system/pattern-library.html"    
  - title: Global header
    link: "https://design.canada.ca/common-design-patterns/global-header.html"
date: 2017-10-05
dateModified: 2023-05-17
description: "Guidance about using the language toggle on Canada.ca. Government of Canada content is available in both official languages. A language toggle in the global header provides access to the corresponding page in the other official language."
title: "Language toggle"
---
<div class="row">
  <div class="col-md-12 pull-left">
    <ul class="list-inline small mrgn-bttm-sm" id="list-inline-desktop-only">
      <li class="mrgn-rght-lg"> Last updated: YYYY-MM-DD</li>
    </ul>
  </div>
</div>
<p><span class="label label-danger">Mandatory</span></p>
<p>All public-facing Government of Canada content is available in both official languages. A language toggle in the global header provides access to the corresponding page in the other official language.</p>
<div class="pattern-demo mrgn-tp-lg">
  <figure class="mrgn-bttm-sm"><img src="../images/01-lang-toggle-en.png" class="img-responsive" alt=""></figure>
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
<p>The language toggle is mandatory on all pages.</p>
<p>New transactional pages for web applications must allow people to toggle between official languages. Legacy web applications that don’t support toggling should be updated or replaced. Until then, you can omit the language toggle if its use results in a loss of data.</p>
<h2 id="avoid">What to avoid</h2>
<p>Don’t put other language options in the language toggle. It is only for English and French. Links to content in other languages should appear in the content area of the page.</p>
<p>Don’t use the language toggle to point to anything other than the corresponding page in the equivalent language.</p>
<h2 id="content">Content and design</h2>
<p>Find content and design specifications and visual examples.</p>
<h3>Content specifications</h3>
<p>Ensure that the language toggle links to the corresponding page in the alternate language.</p>
<h4>Large screens</h4>
<ul>
  <li>On English pages, the link label text is “Français”</li>
  <li>On French pages, the link label text is “English”</li>
</ul>
<h4>Small screens</h4>
<p>For small screens, the language toggle uses a 2-letter abbreviation for each language:</p>
<ul>
  <li>On English pages, the link label text is “FR” in uppercase</li>
  <li>On French pages, the link label text is “EN” in uppercase</li>
</ul>
<h4>Accessibility</h4>
<ul>
  <li>Add the full name of the language in the title attribute for the abbreviated language toggle
    <ul>
      <li>the abbreviation title for EN is “English”</li>
      <li>the abbreviation title for FR is “Français”</li>
    </ul>
  </li>
</ul>
<h4>Interactions</h4>
<ul>
  <li>When selected, the language toggle brings the user to the alternate language version of the page they were on</li>
</ul>
<h3>Design specifications</h3>
<ul>
  <li>Type: link</li>
  <li>Position: top-right corner</li>
  <li>Font: Lato</li>
  <li>Size: 1.2 em</li>
  <li>Text colour:
    <ul>
      <li>default link: #284162</li>
      <li>selected link (on hover or focus): #0535d2</li>
      <li>visited link: #284162</li>
    </ul>
  </li>
</ul>
<h4>Accessibility</h4>
<ul>
  <li>Label the language toggle code so that it’s spoken in the correct language if read aloud by assistive technologies</li>
  <li>Ensure that the text label for the language toggle won’t be translated by browser translation tools</li>
</ul>
<h3>Visual examples</h3>
<div class="pattern-demo mrgn-tp-lg">
  <figure>
    <figcaption><b>Language toggle (English page) - large screen</b></figcaption>
    <img src="../images/01-lang-toggle-en.png" class="img-responsive" alt="">
    <details class="mrgn-tp-md">
      <summary class="wb-toggle small" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Image description: language toggle (English page) - large screen</summary>
      <p class="mrgn-tp-lg">Standard header of an English Canada.ca page with a highlight of the linked word Français in the top-right corner</p>
    </details>
  </figure>
</div>
<div class="pattern-demo mrgn-tp-lg">
  <figure>
    <figcaption><b>Language toggle (French page) - large screen</b></figcaption>
    <img src="../images/01-lang-toggle-fr.png" class="img-responsive" alt="">
    <details class="mrgn-tp-md">
      <summary class="wb-toggle small" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Image description: language toggle (French page) - large screen</summary>
      <p class="mrgn-tp-lg">Standard header of a French Canada.ca page with a highlight of the linked word English in the top-right corner</p>
    </details>
  </figure>
</div>
<div class="pattern-demo mrgn-tp-lg">
  <figure>
    <figcaption><b>Language toggle (English page) - small screen</b></figcaption>
    <img src="../images/01-lang-toggle-sm-en.png" class="img-responsive" alt="">
    <details class="mrgn-tp-md">
      <summary class="wb-toggle small" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Image description: language toggle - small screen</summary>
      <p class="mrgn-tp-lg">Standard header of an English Canada.ca page with a highlight of the linked abbreviation FR in the top-right corner</p>
    </details>
  </figure>
</div>
<div class="pattern-demo mrgn-tp-lg">
  <figure>
    <figcaption><b>Language toggle (French page) - small screen</b></figcaption>
    <img src="../images/01-lang-toggle-sm-fr.png" class="img-responsive" alt="">
    <details class="mrgn-tp-md">
      <summary class="wb-toggle small" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Image description: Language toggle (French page) - small screen</summary>
      <p class="mrgn-tp-lg">Standard header of a French Canada.ca page with a highlight of the linked abbreviation EN in the top-right corner</p>
    </details>
  </figure>
</div>
<h2 id="implementation">How to implement</h2>
<p>Find working examples for implementing the language toggle.</p>
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
<div class="cnt-wdth-lmtd">
  <h2 id="research">Research and rationale</h2>
  <p>Consult policy rationale.</p>
  <h3>Policy rationale</h3>
  <p>As part of the global header, the language toggle is a mandatory element under the <cite>Content and Information Architecture Specification.</cite></p>
  <ul>
    <li><a href="https://www.canada.ca/en/treasury-board-secretariat/services/government-communications/canada-content-information-architecture-specification/mandatory-elements.html">Mandatory elements of the design system</a></li>
  </ul>
  <p>All Government of Canada communications must be available in both official languages.</p>
  <ul>
    <li><a href="https://www.tbs-sct.canada.ca/pol/doc-eng.aspx?id=26160">Policy on Official Languages</a></li>
  </ul>
  <h2 id="changes">Latest changes</h2>
  <dl class="dl-horizontal">
    <dt>
      <time datetime="2023-MM-DD" class="link-muted">2023-MM-DD</time>
    </dt>
    <dd>Updated the guidance to include advice on what to avoid, content and design specifications, visual examples, implementation guidance, and policy rationale</dd>
  </dl>
</div>
