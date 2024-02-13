---
altLangPage: "https://conception.canada.ca/configurations-conception-communes/pied-page-sous.html"
date: 2022-11-30
dateModified: 2023-04-06
description: "This is a mandatory element of the global (site-wide) footer."
title: "Global footer: Sub-footer band"
---
<p><strong>Last updated</strong>: {{ page.dateModified }}</p>
<section>
  <p><span class="label label-danger">Mandatory</span></p>
  <p>The sub-footer band is a secondary element of the global footer. It contains a series of corporate links and the Canada wordmark.</p>
  <p><strong>2022 design update</strong>: We’ve recently updated this pattern as part of a new navigation strategy coming
    out of the Wayfinding research project. To find out more about this project, visit the <a href="#research">Research and rationale</a> section on this page.</p>
  <div class="pattern-demo"> <img src="../../images/footer-sub-crop.jpg" class="img-responsive"
				alt=""> </div>
  <h2>On this page</h2>
  <ul>
    <li><a href="#use">When to use</a></li>
    <li><a href="#design">Content and design</a></li>
    <li><a href="#implement">How to implement</a></li>
    <li><a href="#research">Research and rationale</a></li>
    <li><a href="#latest">Latest changes</a></li>
    <li><a href="#discuss">Discussion</a></li>
  </ul>
  <h2 id="use">When to use</h2>
  <p>The sub-footer band is mandatory on all page types.</p>
  <h2 id="design">Content and design</h2>
  <h3>Content specifications</h3>
  <p>Links appear in the following order:</p>
  <ul>
    <li>Social media</li>
    <li>Mobile applications</li>
    <li>About Canada.ca</li>
    <li>Terms and conditions - can be contextualized to link to the Terms and conditions of the department or program responsible for the content on that page</li>
    <li>Privacy - can be contextualized to link to the privacy information of the department or program responsible for the content on that page</li>
  </ul>
  <p>On <strong>transactional</strong> and <strong>campaign</strong> pages, you can omit the Social media, Mobile applications and About Canada.ca links.</p>
  <p>On <strong>transactional</strong> pages, ensure that the Terms and conditions and Privacy links keep people within their current session (for authenticated applications, keep them within the application environment).</p>
</section>
<section>
  <h4>Canada wordmark</h4>
  <p>Include the Canada wordmark in the sub-footer band across all pages of Canada.ca. This serves to reinforce the brand and provide an additional cue to people that they are reading content from  the Government of Canada.</p>
  <h3>Design specifications</h3>
  <ul>
    <li>Background colour: sub-footer grey (#F8F8F8)</li>
    <li>Text colour: <a href="../styles/colours.html">standard link colours</a></li>
    <li>Text size: 14 px or 0.875 em</li>
    <li>Font: Noto Sans</li>
    <li>Canada wordmark position: set to the right</li>
    <li>Canada wordmark size: 40px height</li>
    <li>Layout: 1 row in large screen format, 2 columns in medium screen format, 1 column in small screen format</li>
  </ul>
  <h3>Visual examples</h3>
  <details>
    <summary>Standard pages (desktop and mobile)</summary>
    <div class="pattern-demo mrgn-bttm-md">
      <figure class="mrgn-bttm-lg">
        <figcaption><b>Sub-footer band – large screen</b></figcaption>
        <img src="../../images/footer-sub.jpg" class="img-responsive"
				alt="Diagram of sub-footer band for large screens. Text version below:">
        <details>
          <summary class="wb-toggle" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Text version</summary>
          <p>On large screens the sub-footer band contains links to “Social media,”
            “Mobile applications,” “About Canada.ca,” “Terms and conditions,” and “Privacy,” all aligned to the left in a single
            row. It also includes the Canada wordmark in the same row, aligned to the right.</p>
        </details>
      </figure>
    </div>
    <div class="pattern-demo">
      <figure class="mrgn-bttm-lg">
        <figcaption><b>Sub-footer band – small screen</b></figcaption>
        <img src="../../images/footer-sub-mobile.jpg" class="img-responsive"
				alt="Diagram of sub-footer band for small screens. Text version below:">
        <details>
          <summary class="wb-toggle" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Text version</summary>
          <p>On small screens the sub-footer band contains links to “Social media,”
            “Mobile applications,” “About Canada.ca,” “Terms and conditions,” and “Privacy,” arranged in 2
            columns. Below these links is a final row with the Canada wordmark aligned to the right.</p>
        </details>
      </figure>
    </div>
  </details>
  <details>
    <summary>Transactional and campaign pages (desktop and mobile)</summary>
    <div class="pattern-demo mrgn-bttm-md">
      <figure class="mrgn-bttm-lg">
        <figcaption><b>Minimum sub-footer – large screen</b></figcaption>
        <img src="../../images/footer-min-en.png" class="img-responsive"
						alt="Diagram of minimum sub-footer for large screens. Text version below:">
        <details>
          <summary class="wb-toggle" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Text version</summary>
          <p>On large screens, the minimum sub-footer for transactional and campaign pages includes only the links
            to “Terms and conditions” and “Privacy.” These are aligned to the left in a single row. It also
            includes the Canada wordmark in the same row, aligned to the right.</p>
        </details>
      </figure>
    </div>
    <div class="pattern-demo">
      <figure class="mrgn-bttm-lg">
        <figcaption><b>Minimum sub-footer – small screen</b></figcaption>
        <img src="../../images/footer-min-mobile-en.png" class="img-responsive"
						alt="Diagram of minimum sub-footer for small screens. Text version below:">
        <details>
          <summary class="wb-toggle" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Text version</summary>
          <p>On small screens, the minimum sub-footer for transactional and campaign pages includes only the
            links to “Terms and conditions” and “Privacy.” Below these links is a final row with the Canada wordmark aligned to the right.</p>
        </details>
      </figure>
    </div>
  </details>
</section>
<section>
  <h2 id="implement">How to implement</h2>
  <h3>GCweb (WET) theme implementation reference</h3>
  <h4>Default</h4>
  <ul>
    <li><a href="https://wet-boew.github.io/GCWeb/sites/footers/no-footer-contextual-en.html">Main band and sub-footer band</a></li>
  </ul>
  <h4>Alternate options for standard pages</h4>
  <ul>
    <li><a href="https://wet-boew.github.io/GCWeb/sites/footers/footers-en.html">Complete footer (contextual, main and sub-footer bands)</a></li>
  </ul>
  <h4>Alternate options for transactional or campaign pages</h4>
  <ul>
    <li><a href="https://wet-boew.github.io/GCWeb/sites/footers/no-footer-contextual-en.html">Main band and sub-footer band</a></li>
    <li><a href="https://wet-boew.github.io/GCWeb/sites/footers/only-footer-main-en.html">Main band and sub-footer band with no optional links</a></li>
    <li><a href="https://wet-boew.github.io/GCWeb/sites/footers/no-footer-main-en.html">Contextual band and sub-footer band</a></li>
    <li><a href="https://wet-boew.github.io/GCWeb/sites/footers/only-footer-contextual-en.html">Contextual band and sub-footer band with no optional links</a></li>
    <li><a href="https://wet-boew.github.io/GCWeb/sites/footers/only-footer-corporate-en.html">Sub-footer band only</a></li>
    <li><a href="https://wet-boew.github.io/GCWeb/sites/footers/no-footers-en.html">Sub-footer band only with no optional links</a></li>
  </ul>
</section>
<section>
  <h3>Implementations</h3>
  <p>Determine the footer configuration that best suits your needs for the type of page you're creating. Refer to your implementation's guidance to customize the contextual band or sub-footer band links.</p>
  <div class="wb-tabs mrgn-tp-lg">
    <div class="tabpanels">
      <details id="004" open="open">
        <summary><strong>GC-AEM</strong></summary>
        <p class="mrgn-tp-lg">For the Government of Canada Adobe Experience Manager (AEM):</p>
        <ul>
          <li><a href="https://www.gcpedia.gc.ca/gcwiki/images/2/22/AEM-6.5-Documentation-Unit_3-1-1-_Customizing_Global_Footer.pdf">Customizing the Global footer (PDF - only available on the Government of Canada network)</a></li>
          <li><a href="https://www.gcpedia.gc.ca/wiki/AEM_GC-specific_Documentation_6.5">AEM/Managed Web Service documentation (only available on the Government of Canada network)</a></li>
        </ul>
      </details>
      <details id="005">
        <summary><strong>CDTS</strong></summary>
        <p class="mrgn-tp-lg">For the Centrally Deployed Templates Solution (CDTS):</p>
        <ul>
          <li><a href="https://cdts.service.canada.ca/app/cls/WET/gcweb/v4_0_47/cdts/samples/footer-en.html">Complete footer (contextual, main, sub-footer bands)</a></li>
          <li><a href="https://cenw-wscoe.github.io/sgdc-cdts/docs/index-en.html">CDTS documentation</a></li>
        </ul>
      </details>
      <details id="006">
        <summary><strong>Drupal WxT</strong></summary>
        <p class="mrgn-tp-lg">For Drupal WxT:</p>
        <ul>
          <li><a href="https://drupalwxt.github.io/">Drupal WxT documentation</a></li>
        </ul>
        <p>2023 footer update:</p>
        <ul>
          <li><a href="https://github.com/drupalwxt/wxt/releases/tag/4.4.1">Drupal WxT (4.4.1) release notes</a></li>
          <li><a href="https://drupalwxt.github.io/en/docs/general/update/">Drupal WxT update process</a></li>
        </ul>
      </details>
    </div>
  </div>
</section>
<section>
  <h2 id="research">Research and rationale</h2>
  <p>We updated the global footer for Canada.ca to align with a new overall navigation strategy that came out of the
    Wayfinding research project.</p>
  <ul>
    <li><a href="{{ site.url }}/research-summaries/wayfinding-on-canada-ca">Wayfinding on Canada.ca research summary</a><br>
      This summary explains the context of the research and the insights that drove the design updates.</li>
    <li><a href="https://blog.canada.ca/2022/12/21/wayfinding-research-project">Wayfinding research project improves our approach to navigation on Canada.ca</a><br>
      This blog post explains the changes that are being made to the Canada.ca design, and how they are being implemented.</li>
  </ul>
</section>
<section>
  <h2 id="latest">Latest changes</h2>
  <dl class="dl-horizontal">
    <dt>
      <time datetime="2023-02-08" class="link-muted">2023-02-08</time>
    </dt>
    <dd>Added links to GC-AEM, CDTS and Drupal WxT implementation guidance</dd>
    <dt>
      <time datetime="2023-01-18" class="link-muted">2023-01-18</time>
    </dt>
    <dd>Clarified that on transactional pages, the Terms and conditions and Privacy links should keep people within their current session</dd>
    <dt>
      <time datetime="2022-12-23" class="link-muted">2022-12-23</time>
    </dt>
    <dd>Added links to the research summary and blog post for the Wayfinding project</dd>
    <dt>
      <time datetime="2022-11-30" class="link-muted">2022-11-30</time>
    </dt>
    <dd>Created a new page for guidance specific to this band, updated content specifications to include Canada wordmark, added design specifications and visual examples</dd>
  </dl>
</section>
<section>
  <h2 id="discuss">Discussion</h2>
  <ul>
    <li><a href="https://github.com/canada-ca/design-system-systeme-conception/issues">Discuss the pattern in GitHub
      issues</a></li>
    <li><a href="https://design-gc-conception.slack.com/join/shared_invite/enQtODE1OTc5Mzg5NzQ4LWQ3MjZjMTdjMjk2ZTZmMTJjYWQ3ZmRiNDYwYjRmN2NjYzQyNjFlNDBlY2FkNWE1ODg2YjExY2QwZmVjN2MwMGM">Join the conversation on Slack</a></li>
    <li><a href="mailto:{{ site.emails.dto }}">Send an email to the Digital Transformation Office</a></li>
  </ul>
</section>
