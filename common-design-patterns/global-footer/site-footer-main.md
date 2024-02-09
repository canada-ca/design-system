---
altLangPage: "https://conception.canada.ca/configurations-conception-communes/pied-page-principale.html"
date: 2022-11-30
dateModified: 2023-04-06
description: "The requirements listed in this design manual apply to departments and other portions of the federal public administration as set out in Schedules I, I.1 and II of the Financial Administration Act. As such, in-scope institutions must apply Canada.ca design requirements for all public-facing web sites or digital services."
title: "Global footer: Main band"
---
<p><strong>Last updated</strong>: {{ page.dateModified }}</p>
<p><span class="label label-danger">Mandatory on standard pages</span></p>
<p>The main footer band is the primary element of the global footer. It provides links to the Government of Canada All contacts
  page, the directory of departments and agencies and the About government theme page. It also provides links to all the
  theme pages within Canada.ca.</p>
<p><strong>2022 design update</strong>: We’ve recently updated this pattern as part of a new navigation strategy coming
  out of the Wayfinding research project. To find out more about this project, visit the <a href="#research">Research and rationale</a> section on this page.</p>
<div class="pattern-demo mrgn-tp-lg"><img src="../../images/footer-main-crop.jpg" class="img-responsive" alt=""></div>
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
<h2 id="use">When to use</h2>
<p>The main footer band is a <strong>mandatory element</strong> for <strong>all standard pages</strong> from the Government of Canada.</p>
<p>It’s optional for transactional and campaign pages.</p>
<h2 id="avoid">What to avoid</h2>
<p>Don’t adjust links or content in the main band. It should stay consistent across the Government of Canada web
  presence. For links that are specific to an organization or program, use the <a href="./site-footer-contextual.html">contextual band</a>.</p>
<h2 id="design">Content and design</h2>
<h3>Content specifications</h3>
<p>There are 2 groups of links in the main band, separated by a short dividing bar.</p>
<p>Global links:</p>
<ul>
  <li>All contacts</li>
  <li>Departments and agencies</li>
  <li>About government</li>
</ul>
<p>Theme links in the following order:</p>
<ul>
  <li>Jobs</li>
  <li>Immigration and citizenship</li>
  <li>Travel and tourism</li>
  <li>Business</li>
  <li>Benefits</li>
  <li>Health</li>
  <li>Taxes</li>
  <li>Environment and natural resources</li>
  <li>National security and defence</li>
  <li>Culture, history and sport</li>
  <li>Policing, justice and emergencies</li>
  <li>Transport and infrastructure</li>
  <li>Canada and the world</li>
  <li>Money and finance</li>
  <li>Science and innovation</li>
  <li>Indigenous peoples</li>
  <li>Veterans and military</li>
  <li>Youth</li>
</ul>
<h3>Design specifications</h3>
<ul>
  <li>Background colour: Primary accent colour (#26374a)</li>
  <li>Text colour: white (#FFFFFF)</li>
  <li>Font family:
    <ul>
      <li>header: Lato</li>
      <li>links: Noto Sans</li>
    </ul>
  </li>
  <li>Text size (base size for the footer is 16px):
    <ul>
      <li>header: 19px or 1.2em</li>
      <li>links: 14px or 0.875em</li>
    </ul>
  </li>
  <li>Font weight:
    <ul>
      <li>header: 700 or bold</li>
      <li>links: 400 or regular</li>
    </ul>
  </li>
  <li>Silhouette image of parliament set to the lower right</li>
  <li>Columns: 3 column in large and medium screen formats, 1 column in small screen format</li>
</ul>
<h3>Visual examples</h3>
<div class="pattern-demo mrgn-bttm-md">
  <figure class="mrgn-bttm-lg">
    <figcaption><b>Main band – large screen</b></figcaption>
    <img src="../../images/footer-main.jpg" class="img-responsive"
				alt="Diagram of main band for large screens. Text version below:">
    <details>
      <summary class="wb-toggle" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Text version</summary>
      <p>On large screens the main band is arranged in 3 columns and contains links to “All contacts,” “Departments and agencies,” and “About government.” There is a small decorative line as a break before continuing with links to all themes and audiences.</p>
    </details>
  </figure>
</div>
<div class="pattern-demo">
  <figure class="mrgn-bttm-lg">
    <figcaption><b>Main band – small screen</b></figcaption>
    <img src="../../images/footer-main-mobile.jpg" class="img-responsive"
				alt="Diagram of main band for small screens. Text version below:">
    <details>
      <summary class="wb-toggle" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Text version</summary>
      <p>On small screens the main band is arranged in a single column and contains links to “All contacts,” “Departments and agencies,” and “About government.” There is a small decorative line as a break before continuing with links to all themes and audiences.</p>
    </details>
  </figure>
</div>
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
      <time datetime="2022-12-23" class="link-muted">2022-12-23</time>
    </dt>
    <dd>Added links to the research summary and blog post for the Wayfinding project</dd>
    <dt>
      <time datetime="2022-11-30" class="link-muted">2022-11-30</time>
    </dt>
    <dd>Created a new page for guidance specific to this band, updated content specifications to adjust global links and include
      theme links, added design specifications and provided implementation resources</dd>
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
