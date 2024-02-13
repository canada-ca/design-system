---
altLangPage: "https://conception.canada.ca/configurations-conception-communes/fil-ariane.html"
date: 2017-10-05
dateModified: 2023-06-26
description: "Guidance about using breadcrumbs on Canada.ca. The breadcrumb trail provides a series of navigational links that gives people a sense of where they are in relation to the site structure."
title: "Breadcrumb trail"
---
<div class="row">
  <div class="col-md-12 pull-left">
    <ul class="list-inline small mrgn-bttm-sm" id="list-inline-desktop-only">
      <li class="mrgn-rght-lg"> Last updated: {{ page.dateModified }}</li>
    </ul>
  </div>
</div>
<p><span class="label label-danger">Mandatory on standard and campaign pages</span></p>
<p>The breadcrumb trail is a horizontal series of links that gives people a sense of where they are in relation to Canada.ca's navigation model.  It represents the location of a page in relation to its parent and provides a clear way to navigate to higher levels in the site structure.</p>
<div class="pattern-demo mrgn-tp-lg">
  <figure class="mrgn-bttm-sm"><img src="../../images/01-breadcrumbs-main-en.png" class="img-responsive" alt=""></figure>
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
<p>The breadcrumb trail is mandatory on all pages, except transactional pages.</p>
<h2 id="avoid">What to avoid</h2>
<p>Don't program the breadcrumb trail to be generated dynamically based on a visitor's journey to a page. It should represent the location of a page as it stands in relation to the site's navigation model.</p>
<p>Avoid long link labels that push content down on mobile. Use shortened versions of multi-word page titles when possible.</p>
<p>Don't display the current page at the end of the breadcrumb trail (linked or unlinked). It increases the length of the breadcrumb unnecessarily, especially on mobile. The heading of the page is enough to let people know where they are.</p>
<h2 id="content">Content and design</h2>
<p>Find content and design specifications and visual examples.</p>
<h3>Content specifications</h3>
<p>Align the breadcrumb trail to the left directly below the menu button (or the divider line if there is no menu button).</p>
<p>Use "Canada.ca" as the text of the first breadcrumb link on standard and campaign pages.</p>
<ul>
  <li>Link to the Canada.ca home page in the language of the current page.</li>
</ul>
<p>You can use either "Home" or the name of the process or application as the text of the first breadcrumb link on transactional pages that use a breadcrumb trail.</p>
<ul>
  <li>Link to the starting page of the process or the landing page of the application.</li>
</ul>
<p>Use a single right chevron icon to separate each breadcrumb link.</p>
<p>Reflect the title of the page in the breadcrumb label.</p>
<ul>
  <li>Shorten breadcrumb labels where possible to improve readability and reduce space.</li>
</ul>
<p>For example, these breadcrumbs:</p>
<div class="container">
  <p class="breadcrumb">Canada.ca <span class="glyphicon glyphicon-chevron-right small"></span> Immigration and citizenship <span class="glyphicon glyphicon-chevron-right small"></span> Canadian citizenship <span class="glyphicon glyphicon-chevron-right small"></span> Apply for Canadian citizenship <span class="glyphicon glyphicon-chevron-right small"></span> Prepare for the Canadian citizenship test and interview</p>
</div>
<p>Can be shortened to this:</p>
<div class="container">
  <p class="breadcrumb">Canada.ca <span class="glyphicon glyphicon-chevron-right small"></span> Immigration and citizenship <span class="glyphicon glyphicon-chevron-right small"></span> Canadian citizenship <span class="glyphicon glyphicon-chevron-right small"></span> Apply <span class="glyphicon glyphicon-chevron-right small"></span> Prepare for the test and interview</p>
</div>
<h4>Accessibility</h4>
<p>Include "You are here:" as invisible help text.</p>
<h4>Interactions</h4>
<p>When selected, each breadcrumb should bring the user to a unique page.</p>
<h3>Design specifications</h3>
<ul>
  <li>Type: link</li>
  <li>Position: top left</li>
  <li>Font: Noto sans</li>
  <li>Size: 16px</li>
  <li>Text colour:
    <ul>
      <li>default link: #284162</li>
      <li>selected link (on hover or focus): #0535d2</li>
      <li>visited link: #7834bc</li>
    </ul>
  </li>
  <li>Spacing
    <ul>
      <li>vertical padding: 13px</li>
      <li>horizontal padding: 2px</li>
      <li>margin top: 15px</li>
      <li>line-height: 23px</li>
    </ul>
  </li>
  <li>Icon: glyphicon-chevron-right</li>
</ul>
<h4>Accessibility</h4>
<p>Code breadcrumbs as an ordered list.</p>
<h4>Breadcrumb structure</h4>
<p>Here are some examples of breadcrumbs for different locations on Canada.ca:</p>
<h5 class="mrgn-tp-lg">Theme pages, institutional and organizational pages</h5>
<div class="container">
  <p class="breadcrumb">Canada.ca</p>
</div>
<h5>First-level topic pages</h5>
<div class="container">
  <p class="breadcrumb">Canada.ca <span class="glyphicon glyphicon-chevron-right small"></span> [Parent theme]</p>
</div>
<h5>Second-level topic pages</h5>
<div class="container">
  <p class="breadcrumb">Canada.ca <span class="glyphicon glyphicon-chevron-right small"></span> [Parent theme] <span class="glyphicon glyphicon-chevron-right small"></span> [Parent topic]</p>
</div>
<h5>Corporate, program or policy content pages</h5>
<div class="container">
  <p class="breadcrumb">Canada.ca <span class="glyphicon glyphicon-chevron-right small"></span> [Institutional profile page]</p>
</div>
<h5>Partnering and collaborative arrangement profile pages</h5>
<div class="container">
  <p class="breadcrumb">Canada.ca</p>
</div>
<h5>Basic search pages</h5>
<div class="container">
  <p class="breadcrumb">Canada.ca</p>
</div>
<h5>Advanced search pages</h5>
<div class="container">
  <p class="breadcrumb">Canada.ca <span class="glyphicon glyphicon-chevron-right small"></span> [Basic search]</p>
</div>
<h5>Campaigns and promotions</h5>
<p>Promotion campaigns don't need a breadcrumb trail. If you add one, it can lead back to the topic tree, the Institutional/Organizational profile, or to the Home page of Canada.ca.</p>
<h5 class="mrgn-tp-lg">News</h5>
<div class="container">
  <p class="breadcrumb">Canada.ca <span class="glyphicon glyphicon-chevron-right small"></span> [Institutional profile page]</p>
</div>
<h5 class="mrgn-tp-lg">Application</h5>
<div class="container">
  <p class="breadcrumb">Home</p>
</div>
<h3>Visual examples</h3>
<div class="pattern-demo mrgn-tp-lg">
  <figure>
    <figcaption><b>Global header with breadcrumb trail  - large screen</b></figcaption>
    <img src="../../images/01-breadcrumbs-main-en.png" class="img-responsive" alt=" ">
    <details class="mrgn-tp-md">
      <summary class="wb-toggle small" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Image description: global header with breadcrumb trail  - large screen</summary>
      <p class="mrgn-tp-lg">The breadcrumbs appear under the menu button in a horizontal line.</p>
    </details>
  </figure>
</div>
<div class="pattern-demo mrgn-tp-lg">
  <figure>
    <figcaption><b>Global header – small screen</b></figcaption>
    <img src="../../images/01-breadcrumbs-sm-en.png" class="img-responsive" alt=" ">
    <details class="mrgn-tp-md">
      <summary class="wb-toggle small" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Image description: global header with breadcrumb trail  - small screen</summary>
      <p class="mrgn-tp-lg">The breadcrumbs appear under the menu button.</p>
    </details>
  </figure>
</div>
<h2 id="implementation">How to implement</h2>
<p>Find working examples for implementing the breadcrumbs.</p>
<h3>GCweb (WET) theme implementation reference</h3>
<p>The implementation reference includes how to configure each element of the header.</p>
<ul>
  <li><a href="https://wet-boew.github.io/GCWeb/sites/breadcrumbs/breadcrumbs-en.html">Breadcrumbs - GCWeb (WET) documentation</a></li>
  <li><a href="https://wet-boew.github.io/GCWeb/sites/header/header-docs-en.html">GCWeb (WET) header documentation</a></li>
</ul>
<h3>Implementations</h3>
<p>Determine what best suits the type of page you're creating. Refer to your implementation's guidance if you want to exclude breadcrumbs.</p>
<div class="row">
  <div class="col-md-8">
    <div class="wb-tabs mrgn-tp-lg">
      <div class="tabpanels">
        <details id="004" open="open">
          <summary><strong>GC-AEM</strong></summary>
          <p class="mrgn-tp-lg">For the Government of Canada Adobe Experience Manager (AEM):</p>
          <ul>
            <li><a href="https://www.gcpedia.gc.ca/gcwiki/images/9/9a/AEM-6.5-Documentation-Unit-3-7-Changing-the-Default-Breadcrumb.pdf">Changing the default breadcrumb (PDF - GCPedia link - only available on the Government of Canada network)</a></li>
            <li><a href="https://www.gcpedia.gc.ca/wiki/AEM_GC-specific_Documentation_6.5">AEM/Managed Web Service documentation (GCPedia link - only available on the Government of Canada network)</a></li>
          </ul>
        </details>
        <details id="005">
          <summary><strong>CDTS</strong></summary>
          <p class="mrgn-tp-lg">For the Centrally Deployed Templates Solution (CDTS):</p>
          <ul>
            <li><a href="https://cdts.service.canada.ca/app/cls/WET/gcweb/v4_0_47/cdts/samples/breadcrumbs-en.html">Breadcrumbs - CDTS documentation </a></li>
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
<ul>
  <li><a href="https://blog.canada.ca/2020/08/10/CanadaDotCa-trusted-source.html">Canada.ca is a trusted source</a><br>
    Explains the decision to use "Canada.ca" as the label for the first link in the breadcrumb</li>
  <li><a href="{{ site.url }}/research-summaries/wayfinding-on-canada-ca.html">Wayfinding on Canada.ca research summary</a><br>
    Research showing that people navigating on the site use breadcrumb links nearly twice as often as they use the Theme and topic menu</li>
</ul>
<h3>Policy rationale</h3>
<p>The spacing specifications for the breadcrumb links are designed so that touch targets meet WCAG AAA requirements.</p>
<p>As part of the global header, the breadcrumb is a mandatory element under the <cite>Content and Information Architecture Specification.</cite></p>
<ul>
  <li><a href="https://www.canada.ca/en/treasury-board-secretariat/services/government-communications/canada-content-information-architecture-specification/mandatory-elements.html">Mandatory elements of the design system</a></li>
</ul>
<h2 id="changes">Latest changes</h2>
<dl class="dl-horizontal">
  <dt>
    <time datetime="2023-06-26" class="link-muted">2023-06-26</time>
  </dt>
  <dd>Updated the guidance to include advice on what to avoid, content and design specifications, visual examples, implementation guidance, research findings and policy rationale</dd>
</dl>
