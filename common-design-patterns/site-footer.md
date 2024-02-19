---
altLangPage: "https://conception.canada.ca/configurations-conception-communes/pied-page.html"
date: 2019-01-08
dateModified: 2023-04-06
description: "The global (site-wide) footer at the bottom of each page. It includes the main band, contextual band and sub-footer band. This is a mandatory pattern with optional elements."
title: "Global footer"
---
<p><strong>Last updated</strong>: {{ page.dateModified }}</p>
<p><span class="label label-danger">Mandatory</span></p>
<p>The global (site-wide) footer at the bottom of each web page contains up to 3 bands:</p>
<ul>
  <li>Contextual band</li>
  <li>Main band</li>
  <li>Sub-footer band</li>
</ul>
<p><strong>2022 design update</strong>: We’ve recently updated this pattern as part of a new navigation strategy coming
  out of the Wayfinding research project. To find out more about this project, visit the <a href="#research">Research and rationale</a> section on this page.</p>
<!--<a href="">Blog post link</a>-->
<div class="pattern-demo mrgn-tp-lg mrgn-bttm-xl"><img src="../images/footer-en-crop.png" class="img-responsive" alt=""> </div>
<p><a href="site-footer-content.html">See Content footer pattern</a> for guidance on how to apply the Date modified, Share this page, Report a problem or Page feedback tool components.</p>
<section>
  <h2>On this page</h2>
  <ul>
    <li><a href="#use">When to use</a></li>
    <li><a href="#avoid">What to avoid</a></li>
    <li><a href="#design">Content and design</a></li>
    <li><a href="#implement">How to implement</a></li>
    <li><a href="#research">Research and rationale</a></li>
    <li><a href="#latest">Latest changes</a></li>
  </ul>
</section>
<section>
  <h2 id="use">When to use</h2>
  <p>The footer acts as a rescue for people. They check it if they don't find what they want in the main content of the page.</p>
  <p>Each element of the global footer provides direct, centralized access to specific types of content (for example, Contacts, Departments and agencies, Privacy).</p>
  <p>Determine which footer elements to use based on the type of page you’re creating.</p>
  <div class="wb-tabs">
    <div class="tabpanels">
      <details id="001" open="open">
        <summary><strong>Standard pages</strong></summary>
        <div class="col-md-9">
          <p class="mrgn-tp-lg"><strong>Standard pages</strong> are pages where people can navigate away without losing data, triggering errors or terminating their session.</p>
        </div>
        <div class="col-md-12">
          <h3>Global footer requirements for a standard page</h3>
          <div class="panel panel-default mrgn-tp-md">
            <table class="table table-striped table-condensed" id="mandatory-01" aria-live="polite">
              <caption class="wb-inv">
              Global footer requirements
              </caption>
              <thead>
                <tr>
                  <th class="col-md-4">Footer element</th>
                  <th class="col-md-3">Mandatory</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1. <a href="site-footer-contextual.html">Contextual band</a></td>
                  <td>Optional</td>
                </tr>
                <tr>
                  <td>2. <a href="site-footer-main.html">Main band</a></td>
                  <td><span class="far fa-check-circle text-success"></span><span class="wb-inv"> Mandatory</span></td>
                </tr>
                <tr>
                  <td>3. <a href="site-footer-sub.html">Sub-footer band with Canada wordmark
                    <p></p>
                    </a></td>
                  <td><span class="far fa-check-circle text-success"></span><span class="wb-inv"> Mandatory</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </details>
      <details id="002">
        <summary><strong>Transactional pages</strong></summary>
        <div class="col-md-9">
          <p class="mrgn-tp-lg"><strong>Transactional pages</strong> are pages with an interaction task where people might lose data, trigger errors, or terminate their session if they navigate away from the page.</p>
        </div>
        <div class="col-md-12">
          <h3>Global footer requirements for a transactional page</h3>
          <div class="panel panel-default mrgn-tp-md">
            <table class="table table-striped table-condensed" id="mandatory-02" aria-live="polite">
              <caption class="wb-inv">
              Global footer requirements
              </caption>
              <thead>
                <tr>
                  <th class="col-md-4">Footer element</th>
                  <th class="col-md-3">Mandatory</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1. <a href="site-footer-contextual.html">Contextual band</a></td>
                  <td>Optional</td>
                </tr>
                <tr>
                  <td>2. <a href="site-footer-main.html">Main band</a></td>
                  <td>Optional</td>
                </tr>
                <tr>
                  <td>3. <a href="site-footer-sub.html">Sub-footer band with Canada wordmark</a></td>
                  <td><span class="far fa-check-circle text-success"></span><span class="wb-inv"> Mandatory</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </details>
      <details id="003">
        <summary><strong>Campaign pages</strong></summary>
        <div class="col-md-9">
          <p class="mrgn-tp-lg"><strong>Campaign pages</strong> are landing pages for external marketing or advertising
            campaigns. The flexibility in layout allows institutions to include elements of their external campaign in the page.</p>
        </div>
        <div class="col-md-12">
          <h3>Global footer requirements for a campaign page</h3>
          <div class="panel panel-default mrgn-tp-md">
            <table class="table table-striped table-condensed" id="mandatory-03" aria-live="polite">
              <caption class="wb-inv">
              Global footer requirements
              </caption>
              <thead>
                <tr>
                  <th class="col-md-4">Footer element</th>
                  <th class="col-md-3">Mandatory</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1. <a href="site-footer-contextual.html">Contextual band</a></td>
                  <td>Optional</td>
                </tr>
                <tr>
                  <td>2. <a href="site-footer-main.html">Main band</a></td>
                  <td>Optional</td>
                </tr>
                <tr>
                  <td>3. <a href="site-footer-sub.html">Sub-footer band with Canada wordmark</a></td>
                  <td><span class="far fa-check-circle text-success"></span><span class="wb-inv"> Mandatory</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </details>
    </div>
  </div>
</section>
<section>
  <h2 id="avoid">What to avoid</h2>
  <p>Don’t customize the mandatory elements of the global footer, beyond what is recommended in the guidance for each. Consistency in this space is essential for building brand awareness and user trust.</p>
  <p>For example, the Canada wordmark should always appear in the lower right corner and the links in the main band should never change.</p>
</section>
<section>
  <h2 id="design">Content and design</h2>
  <p>Find detailed content and design specifications for each element of the footer:</p>
  <ol>
    <li><a href="site-footer-contextual.html">Contextual band</a></li>
    <li><a href="site-footer-main.html">Main band</a></li>
    <li><a href="site-footer-sub.html">Sub-footer band</a></li>
  </ol>
  <h3>Visual examples</h3>
  <details>
    <summary class="bg-info">Standard pages</summary>
    <div class="pattern-demo mrgn-tp-md mrgn-bttm-md">
      <figure class="mrgn-tp-md mrgn-bttm-lg">
        <figcaption><b>Global footer – large screen</b></figcaption>
        <img src="../images/footer-en.png" class="img-responsive"
				alt="Diagram of global footer for large screens. Text version below:">
        <details>
          <summary class="wb-toggle" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Text version</summary>
          <p>On large screens the global footer includes 3 distinct bands of links. The first is the
            contextual band. It contains a title and 3 contextual links in a single row. The second is the main band. It’s arranged in 3 columns and contains links to
            “All contacts,” “Departments and agencies,” and “About government.” There is a small decorative line as a break before
            continuing with links to all themes and audiences. The sub-footer is at the bottom and contains links to “Social media,”
            “Mobile applications,” “About Canada.ca,” “Terms and conditions,” and “Privacy.” These are all aligned to the left in a single
            row. It also includes the Canada wordmark in the same row, aligned to the right.</p>
        </details>
      </figure>
    </div>
    <div class="pattern-demo mrgn-tp-md mrgn-tp-lg">
      <figure class="mrgn-tp-md mrgn-bttm-lg">
        <figcaption><b>Global footer – small screen</b></figcaption>
        <img src="../images/footer-mobile-en.png" class="img-responsive"
				alt="Diagram of global footer for small screens. Text version below:">
        <details>
          <summary class="wb-toggle" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Text version</summary>
          <p>On small screens the global footer includes 3 distinct bands of links. The first is
            the contextual band. It contains a title and 3 contextual links in a single column. The second is the main band. It’s arranged in a single column and contains links
            to “All contacts,” “Departments and agencies,” and “About government.” There is a small decorative line as a break before
            continuing with links to all themes and audiences. The sub-footer is at the bottom and contains links to “Social media,”
            “Mobile applications,” “About Canada.ca,” “Terms and conditions,” and “Privacy,” arranged in 2 columns. Below these links is a final row with a “Top of page” link aligned to the left and the Canada wordmark aligned to the right.</p>
        </details>
      </figure>
    </div>
  </details>
  <details>
    <summary class="bg-info">Transactional and campaign pages</summary>
    <div class="pattern-demo mrgn-tp-md mrgn-bttm-md">
      <figure class="mrgn-tp-md mrgn-bttm-lg">
        <figcaption><b>Minimum global footer – large screen</b></figcaption>
        <img src="../images/footer-min-en.png" class="img-responsive"
					alt="Diagram of minimum global footer for large screens. Text version below:">
        <details>
          <summary class="wb-toggle" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Text version</summary>
          <p>On large screens, the minimum global footer for transactional and campaign pages includes only the sub-footer band with links
            to “Terms and conditions” and “Privacy.” These are aligned to the left in a single row. It also
            includes the Canada wordmark in the same row, aligned to the right.</p>
        </details>
      </figure>
    </div>
    <div class="pattern-demo mrgn-tp-md mrgn-tp-lg">
      <figure class="mrgn-tp-md mrgn-bttm-lg">
        <figcaption><b>Minimum global footer – small screen</b></figcaption>
        <img src="../images/footer-min-mobile-en.png" class="img-responsive"
					alt="Diagram of minimum global footer for small screens. Text version below:">
        <details>
          <summary class="wb-toggle" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Text version</summary>
          <p>On small screens, the minimum global footer for transactional and campaign pages includes only the sub-footer band, with
            links to “Terms and conditions” and “Privacy.” Below these links is a final row with a “Top of page”
            link, aligned to the left and the Canada wordmark aligned to the right.</p>
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
      <time datetime="2022-12-23" class="link-muted">2022-12-23</time>
    </dt>
    <dd>Added links to the research summary and blog post for the Wayfinding project</dd>
    <dt>
      <time datetime="2022-11-30" class="link-muted">2022-11-30</time>
    </dt>
    <dd>Updated pattern to reflect design changes from the Wayfinding project, moved detailed specifications to sub pages specific to individual bands</dd>
  </dl>
</section>
