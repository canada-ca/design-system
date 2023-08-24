---
altLangPage: https://conception.canada.ca/configurations-conception-communes/X.html
date: null
dateModified: '2023-08-23'
description: Guidance about using the contact us band on Canada.ca
title: Contact us band
---
<p><strong>Last updated</strong>: {{ page.dateModified }}</p>

<p>The Contact us band provides relevant contact information.</p>

<div class="pattern-demo mrgn-tp-lg mrgn-bttm-xl"><img src="../images/contact-band-en.png" class="img-responsive" alt=""> </div>

<section>
  <h2>On this page</h2>
  <ul>
    <li><a href="#use">When to use</a></li>
    <li><a href="#avoid">What to avoid</a></li>
    <li><a href="#design">Content and design</a></li>
    <li><a href="#implement">How to implement</a></li>
    <li><a href="#research">Research and rationale</a></li>
    <li><a href="#latest">Latest changes</a></li>
    <li><a href="#discuss">Discussion</a></li>
  </ul>
</section>
<section>
  <h2 id="use">When to use</h2>
  <p>Use the contact us band on pages to:</p>
    <ul>
      <li>present contact information consistently in a variety of contexts</li>
      <li>provide access to multiple contact options</li>
    </ul>
</section>
<section>
  <h2 id="avoid">What to avoid</h2>
  <p>Don’t add borders to this band.</p>
  <p>Don’t add non-contact links in a contact band.</p>
</section>
<section>
  <h2 id="design">Content and design</h2>
  <p>Find content and design specifications and visual examples.</p>

  <h3>Content specifications</h3>
  <p>Use a descriptive heading that starts with ‘Contact’ or ‘Contacts’.</p>
  <p>Use descriptive link text so it's clear what contact information the user will be brought to.</p>
  <p>The optimal number of links is three.</p>
  <p>If you are using a contextual footer that contains the same contact links, ensure you use the same link labels.</p>

  <h3>Design specifications</h3>
  <ul>
  <li>Text uses standard Canada.ca styles:
    <ul>
        <li><a href="https://design.canada.ca/styles/typography.html">Typography</a></li>
        <li><a href="https://design.canada.ca/styles/colours.html">Colours</a></li>
        <li>Heading is coded as an H2 but styled as an H3</li>
        <li>Make the links bold and arrange them in a horizontal no-bullet list</li>
    </ul>
    </li>
    <li>Background:
        <ul>
        <li>Default colour: #f5f5f5</li>
        <li>Padding:
          <ul>
            <li>Bottom: 15px</li>
            <li>Top: 15px</li>
          </ul>
        </li>
      </li>
    <li>Layout:
     <ul>
        <li>If you have multiple sets of links to present on the same page, you can use more than one contact us band on the page in alternating background colours of white and grey (zebra striping).</li>
        </ul>
    </li>
  </ul>

  <h3>Visual examples</h3>
    <div class="pattern-demo mrgn-tp-md mrgn-bttm-md">
      <figure class="mrgn-tp-md mrgn-bttm-lg">
        <figcaption><b>Standard contact us band - large screen</b></figcaption>
        <img src="../images/contact-band-en.png" class="img-responsive"
				alt="Contact us band for large screens. Text version below:">
        <details>
          <summary class="wb-toggle" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Image description:</summary>
          <p>A horizontal grey band with a Contact us heading followed by three links in a single row. The first link is Contact [Institution], the following links are placeholders for top contact tasks.</p>
        </details>
      </figure>
    </div>
    <div class="pattern-demo mrgn-tp-md mrgn-bttm-md">
      <figure class="mrgn-tp-md mrgn-bttm-lg">
        <figcaption><b>Contact us band - small screen</b></figcaption>
        <img src="../images/contact-band-en-sm.png" class="img-responsive"
				alt="Contact us band for small screens. Text version below:">
        <details>
          <summary class="wb-toggle" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Image description:</summary>
          <p>A single column with light grey shading in the background. A Contact us heading is followed by three links. The first link is Contact [Institution], the following links are placeholders for top contact tasks.</p>
        </details>
      </figure>
    </div>
    <div class="pattern-demo mrgn-tp-md mrgn-bttm-md">
      <figure class="mrgn-tp-md mrgn-bttm-lg">
        <figcaption><b>Multiple contact us bands - large screen</b></figcaption>
        <img src="../images/contact-band-multi-en.png" class="img-responsive"
				alt="Multiple contact us bands for large screens. Text version below:">
        <details>
          <summary class="wb-toggle" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Image description:</summary>
          <p>A horizontal white band with a Contacts for [subject] heading followed by six links. The links are presented in two rows with three links in each row.</p>
          <p>Following the white band is a horizontal grey band with a Contacts for [subject] heading followed by six links. The links are presented in two rows with three links in each row.</p>
        </details>
      </figure>
    </div>
     <div class="pattern-demo mrgn-tp-md mrgn-bttm-md">
      <figure class="mrgn-tp-md mrgn-bttm-lg">
        <figcaption><b>Multiple contact us bands - small screen</b></figcaption>
        <img src="../images/contact-band-multi-en-sm.png" class="img-responsive"
				alt="Multiple contact us bands for small screens. Text version below:">
        <details>
          <summary class="wb-toggle" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Image description:</summary>
          <p>A single column with white shading contains a Contacts for [subject] heading followed by six links.</p>
          <p>Following that column is a single column with grey shading contains a Contacts for [subject] heading followed by six links.</p>
        </details>
      </figure>
    </div>
</section>

<section>
  <h2 id="implement">How to implement</h2>

  <p>Find working examples and code for implementing the contact us band pattern.</p>

  <h3>GCweb (WET) theme implementation reference</h3>

  <p>The implementation reference includes how to configure elements of the design system.</p>
    <ul>
      <li><a href="https://wet-boew.github.io/GCWeb/docs/implementing-en.html">Quick implementation guide - GCWeb theme</a></li>
    </ul>

  <h3>Implementations</h3>
  <p>Determine what best suits the type of page you're creating.</p>

  <h4>GC-AEM</h4>
  <p>For the Government of Canada Adobe Experience Manager (AEM):</p>
  <ul>
    <li><a href="https://www.gcpedia.gc.ca/wiki/AEM_GC-specific_Documentation_6.5">AEM/Managed Web Service documentation (GCPedia link - only available on the Government of Canada network)</a></li>
  </ul>

  <h4>CDTS</h4>
  <p>For the Centrally Deployed Templates Solution (CDTS):</p>
  <ul>
    <li><a href="https://cenw-wscoe.github.io/sgdc-cdts/docs/index-en.html">CDTS documentation</li>
  </ul>

  <h4>Drupal WxT</h4>
  <p>For Drupal WxT:</p>
    <ul>
    <li><a href="https://drupalwxt.github.io/en/">Drupal WxT documentation</li>
  </ul>
</section>

<section>
  <h2 id="research">Research and rationale</h2>
  <p>Consult resarch findings and policy rationale.</p>
  
  <h3>Research findings</h3>
  <p>Canada Revenue Agency and the Digital Transformation Office developed contact bands as part of the optimization project for CRA contacts. We found contact bands to be useful for providing access to specific contact information for different services.</p>

  <p><a href="https://blog.canada.ca/2018/08/16/collab-gsthst-payroll.html">CRA and TBS collaborate to optimize GST/HST and Payroll webpage content</a></p>
  <p>This blog post explains how shorter keyword phrases showed significant advantages over full sentences on navigation pages. They made the key information easier to find.</p>

  <h3>Policy rationale</h3>

  <p>The Contact us band is required in the following mandatory templates:</p>
  <ul>
    <li><a href="">Institutional landing page</a></li>
  </ul>

</section>
<section>
  <h2 id="latest">Latest changes</h2>
  <dl class="dl-horizontal">
    <dt>
      <time datetime="2023-08-13" class="link-muted">2023-08-23</time>
    </dt>
    <dd>Updated the guidance to include content and design specifications, visual examples and implementation guidance</dd>
  </dl>
</section>