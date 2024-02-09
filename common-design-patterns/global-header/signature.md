---
altLangPage: "https://conception.canada.ca/configurations-conception-communes/signature.html"
date: 2017-10-05
dateModified: 2023-06-26
description: "Guidance about using the Government of Canada signature on Canada.ca. The signature is an official symbol of the Government of Canada. It always appears in the global header across Canada.ca."
title: "Government of Canada signature"
---
<div class="row">
  <div class="col-md-12 pull-left">
    <ul class="list-inline small mrgn-bttm-sm" id="list-inline-desktop-only">
      <li class="mrgn-rght-lg"> Last updated: {{ page.dateModified }}</li>
    </ul>
  </div>
</div>
<p><span class="label label-danger">Mandatory on all pages</span></p>
<p>The Government of Canada signature is a mandatory element of the global header. The signature is an official symbol of the Government of Canada. It combines the flag symbol and “Government of Canada” in both official languages.</p>
<p>The Government of Canada signature helps users identify that the page they are on belongs to the Government of Canada.</p>
<div class="pattern-demo mrgn-tp-lg">
  <figure class="mrgn-bttm-sm"><img src="../../images/01-sig-en.png" class="img-responsive" alt=""></figure>
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
<p>The Government of Canada signature is mandatory on all pages.</p>
<h2 id="avoid">What to avoid</h2>
<p>Don’t modify the signature.</p>
<p>Don’t change the colour of the flag. It must appear in colour (red), not in black and white.</p>
<p>Don’t modify the text (Government of Canada Gouvernement du Canada) or the font.</p>
<h2 id="content">Content and design</h2>
<p>Find content and design specifications and visual examples.</p>
<h3>Content specifications</h3>
  <p>The Government of Canada signature appears in the top-left corner of the page.</p>
  <p>The signature is composed of the flag symbol in Federal Identity Program red, followed by the words Government of Canada in English and Gouvernement du Canada in French, both in black text.</p>
  <p>The signature must appear as English first on English pages and French first on French pages.</p>
<h4>Accessibility</h4>
<p>Include Government of Canada as alt text on the English side, Gouvernement du Canada as alt text on the French side.</p>
<h4>Interactions</h4>
<p>When selected, the signature brings the user to the homepage of Canada.ca.</p>
<h3>Design specifications</h3>
<ul>
  <li>Type: image</li>
  <li>Position: top left</li>
  <li>Flag symbol colour: FIP red (#eb4837)</li>
  <li>Text colour: black (#000000)</li>
  <li>Alt text: Government of Canada</li>
</ul>
<p>The signature is a Scalable Vector Graphics (SVG) file, configured to scale automatically according to screen size.</p>
<p>The signature is an image file that must be formatted according to the <a href="https://www.canada.ca/en/treasury-board-secretariat/services/government-communications/design-standard.html">Design Standard for the Federal Identity Program</a>.</p>
<h3>Visual examples</h3>
<div class="pattern-demo mrgn-tp-lg">
  <figure>
    <figcaption><b>Government of Canada signature - large screen</b></figcaption>
    <img src="../../images/01-sig-en.png" class="img-responsive" alt="">
    <details class="mrgn-tp-md">
      <summary class="wb-toggle small" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Image description: Government of Canada signature - large screen</summary>
      <p class="mrgn-tp-lg">The Government of Canada signature is in the top-left corner of the website. It is composed of the flag symbol in red, followed by the words <strong>Government of Canada</strong> in English and <strong>Gouvernement du Canada</strong> in French, both in black text.</p>
    </details>
  </figure>
</div>
<div class="pattern-demo mrgn-tp-lg">
  <figure>
    <figcaption><b>Government of Canada signature - small screen</b></figcaption>
    <img src="../../images/01-sig-sm-en.png" class="img-responsive" alt="">
    <details class="mrgn-tp-md">
      <summary class="wb-toggle small" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Image description: Government of Canada signature - small screen</summary>
      <p class="mrgn-tp-lg">The Government of Canada signature is in the top-left corner of the website. It is composed of the flag symbol in red, followed by the words <strong>Government of Canada</strong> in English and <strong>Gouvernement du Canada</strong> in French, both in black text.</p>
    </details>
  </figure>
</div>
<h2 id="implementation">How to implement</h2>
<p>Find working examples for implementing the GC signature, an element of the global header.</p>
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
            <li><a href="https://drupalwxt.github.io/">Drupal WxT documentation</a></li>
          </ul>
        </details>
      </div>
    </div>
  </div>
</div>
<h2 id="research">Research and rationale</h2>
<p>Consult research findings and policy rationale.</p>
<h3>Research findings</h3>
<p>Trust and consistency are essential. Our Canada.ca Trust Study and prior research show that a consistent header is necessary to maintaining a trusted brand.</p>
<p>For example, people trust the page more when the flag in the Government of Canada signature is red.</p>
<p>If you want to know more about this research, contact the Digital Transformation Office at <a href="mailto:{{ site.emails.dto }}">{{ site.emails.dto }}</a>.</p>
<h3>Policy rationale</h3>
<p>The Government of Canada signature is defined by the Federal Identity Program. As a part of the global header, it is a mandatory element under the <cite>Content and Information Architecture Specification.</cite></p>
<ul>
  <li><a href="https://www.canada.ca/en/treasury-board-secretariat/services/government-communications/design-standard/colour-design-standard-fip.html">Design Standard for the Federal Identity Program</a></li>
  <li><a href="https://www.canada.ca/en/treasury-board-secretariat/services/government-communications/canada-content-information-architecture-specification/mandatory-elements.html">Mandatory elements of the design system</a></li>
</ul>
<h2 id="changes">Latest changes</h2>
<dl class="dl-horizontal">
  <dt>
    <time>2023-06-26</time>
  </dt>
  <dd>Updated the guidance to include advice on what to avoid, content and design specifications, visual examples, implementation guidance, research findings and policy rationale</dd>
</dl>
