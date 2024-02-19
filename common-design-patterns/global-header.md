---
altLangPage: "https://conception.canada.ca/configurations-conception-communes/en-tete-general.html"
date: 2017-10-05
dateModified: 2023-06-26
description: "The requirements listed in this design manual apply to departments and other portions of the federal public administration as set out in Schedules I, I.1 and II of the Financial Administration Act. As such, in-scope institutions must apply Canada.ca design requirements for all public-facing web sites or digital services."
title: "Global header"
---
<div class="row">
  <div class="col-md-12 pull-left">
    <ul class="list-inline small mrgn-bttm-sm" style="line-height:1.65em" id="list-inline-desktop-only">
      <li class="mrgn-rght-lg">Last updated:  {{ page.dateModified }}</li>
    </ul>
  </div>
</div>
<p><span class="label label-danger">Mandatory</span></p>
<p>The global header is at the top of each web page from the Government of Canada.</p>
<p>Having the same global header on all pages:</p>
<ul>
  <li>strengthens the Canada.ca brand</li>
  <li>promotes trust</li>
  <li>provides a unified experience on the Government of Canada web presence</li>
  <li>allows navigation across the broad range of services and information offered</li>
</ul>
<p><strong>2023 design update</strong>: We’ve recently updated this pattern as part of a new navigation strategy coming out of the Wayfinding research project. To find out more about this project, visit <a href="#research">Research and rationale</a>.</p>
<div class="pattern-demo mrgn-tp-lg">
  <figure class="mrgn-bttm-sm"><img src="../images/01-sign-in-desktop-en.jpg" class="img-responsive" alt=""></figure>
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
<p>The global header is mandatory on all Government of Canada web pages. Determine which header elements to use based on the type of page you’re creating.</p>
<div class="row">
  <div class="col-md-8">
    <div class="wb-tabs mrgn-tp-lg">
      <div class="tabpanels">
        <details id="001" open="open">
          <summary><strong>Standard pages</strong></summary>
          <p class="mrgn-tp-lg"><strong>Standard pages</strong> are pages where people can navigate away without losing data, triggering errors or terminating their session.</p>
          <h3>Global header requirements for a standard page</h3>
          <div class="panel panel-default mrgn-tp-md">
            <table class="table table-striped" id="mandatory-01" aria-live="polite">
              <caption class="wb-inv">
              Global header requirements
              </caption>
              <thead>
                <tr>
                  <th class="col-md-8">Header element</th>
                  <th class="col-md-4">Mandatory</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><a href="signature.html">Government of Canada signature (linked to Canada.ca home)</a></td>
                  <td><span class="far fa-check-circle text-success"></span><span class="wb-inv"> Mandatory</span></td>
                </tr>
                <tr>
                  <td><a href="language-toggle.html">Language toggle</a></td>
                  <td><span class="far fa-check-circle text-success"></span><span class="wb-inv"> Mandatory</span></td>
                </tr>
                <tr>
                  <td><a href="search-box.html">Site search box</a></td>
                  <td><span class="far fa-check-circle text-success"></span><span class="wb-inv"> Mandatory</span></td>
                </tr>
                <tr>
                  <td>Divider line</td>
                  <td><span class="far fa-check-circle text-success"></span><span class="wb-inv"> Mandatory</span></td>
                </tr>
                <tr>
                  <td><a href="site-menu.html">Theme and topic menu</a></td>
                  <td><span class="far fa-check-circle text-success"></span><span class="wb-inv"> Mandatory</span> <span class="small">(<a href="#smenu-note" id="smenu">Note</a>)</span></td>
                </tr>
                <tr>
                  <td><a href="breadcrumb-trail.html">Breadcrumb trail</a></td>
                  <td><span class="far fa-check-circle text-success"></span><span class="wb-inv"> Mandatory</span></td>
                </tr>
                <tr>
                  <td><a href="sign-in.html">Sign in button</a></td>
                  <td>Optional</td>
                </tr>
                <tr>
                  <td>Background colour (white)</td>
                  <td><span class="far fa-check-circle text-success"></span><span class="wb-inv"> Mandatory</span></td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="2"><div class="fn-rtn small mrgn-tp-md" id="smenu-note">
                      <p><a href="#smenu"><span class="wb-inv">Return to footnote </span>Note<span class="wb-inv"> referrer</span></a>: The menu must be applied to theme and topic pages. It can be removed from a standard page or group of pages when analytics show that the menu is used in less than 1% of visits.</p>
                    </div></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </details>
        <details id="002">
          <summary><strong>Transactional pages</strong></summary>
          <p class="mrgn-tp-lg"><strong>Transactional web pages</strong> are pages with an interaction task where people might lose data, trigger errors, or terminate their session if they navigate away from the page.</p>
          <h3>Global header requirements for transactional pages</h3>
          <div class="panel panel-default mrgn-tp-md">
            <table class="table table-striped" id="mandatory-02" aria-live="polite">
              <caption class="wb-inv">
              Global header requirements
              </caption>
              <thead>
                <tr>
                  <th class="col-md-8">Header element</th>
                  <th class="col-md-4">Mandatory</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><a href="signature.html">Government of Canada signature (linked to Canada.ca home)</a></td>
                  <td><span class="far fa-check-circle text-success"></span><span class="wb-inv"> Mandatory</span> <span class="small">(Link to Canada.ca home page is optional)</span></td>
                </tr>
                <tr>
                  <td><a href="language-toggle.html">Language toggle</a></td>
                  <td><span class="far fa-check-circle text-success"></span><span class="wb-inv"> Mandatory</span> <span class="small">(<a href="#lt-note" id="lt">Note</a>)</span></td>
                </tr>
                <tr>
                  <td><a href="search-box.html">Site search box</a></td>
                  <td>Optional</td>
                </tr>
                <tr>
                  <td><a href="sign-in.html">Sign in button</a></td>
                  <td>Optional</td>
                </tr>
                <tr>
                  <td>Divider line</td>
                  <td><span class="far fa-check-circle text-success"></span><span class="wb-inv"> Mandatory</span></td>
                </tr>
                <tr>
                  <td><a href="site-menu.html">Theme and topic menu</a></td>
                  <td>Optional</td>
                </tr>
                <tr>
                  <td><a href="breadcrumb-trail.html">Breadcrumb trail</a></td>
                  <td>Optional</td>
                </tr>
                <tr>
                  <td>Background colour (white)</td>
                  <td><span class="far fa-check-circle text-success"></span><span class="wb-inv"> Mandatory</span></td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="2"><div class="fn-rtn small mrgn-tp-md" id="lt-note">
                      <p><a href="#lt"><span class="wb-inv">Return to footnote </span>Note<span class="wb-inv"> referrer</span></a>: New transactional pages for web applications must allow people to toggle between official languages. Legacy web applications that don’t support toggling should be updated or replaced. Until then, you can omit the language toggle if its use results in a loss of data.</p>
                    </div></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </details>
        <details id="003">
          <summary><strong>Campaign pages</strong></summary>
          <p class="mrgn-tp-lg"><strong>Campaign pages</strong> are landing pages for external marketing or advertising campaigns. The flexibility in layout allows institutions to match elements of their external campaign with the landing page.</p>
          <h3>Global header requirements for a campaign page</h3>
          <div class="panel panel-default mrgn-tp-md">
            <table class="table table-striped" id="mandatory-03" aria-live="polite">
              <caption class="wb-inv">
              Global header requirements
              </caption>
              <thead>
                <tr>
                  <th class="col-md-8">Header element</th>
                  <th class="col-md-4">Mandatory</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><a href="signature.html">Government of Canada signature (linked to Canada.ca home)</a></td>
                  <td><span class="far fa-check-circle text-success"></span><span class="wb-inv"> Mandatory</span></td>
                </tr>
                <tr>
                  <td><a href="language-toggle.html">Language toggle</a></td>
                  <td><span class="far fa-check-circle text-success"></span><span class="wb-inv"> Mandatory</span></td>
                </tr>
                <tr>
                  <td><a href="search-box.html">Site search box</a></td>
                  <td><span class="far fa-check-circle text-success"></span><span class="wb-inv"> Mandatory</span></td>
                </tr>
                <tr>
                  <td><a href="sign-in.html">Sign in button</a></td>
                  <td>Optional</td>
                </tr>
                <tr>
                  <td>Divider line</td>
                  <td><span class="far fa-check-circle text-success"></span><span class="wb-inv"> Mandatory</span></td>
                </tr>
                <tr>
                  <td><a href="site-menu.html">Theme and topic menu</a></td>
                  <td>Optional</td>
                </tr>
                <tr>
                  <td><a href="breadcrumb-trail.html">Breadcrumb trail</a></td>
                  <td><span class="far fa-check-circle text-success"></span><span class="wb-inv"> Mandatory</span></td>
                </tr>
                <tr>
                  <td>Background colour (white)</td>
                  <td><span class="far fa-check-circle text-success"></span><span class="wb-inv"> Mandatory</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </details>
      </div>
    </div>
  </div>
</div>
<h2 id="avoid">What to avoid</h2>
<p>Don’t customize the mandatory elements of the global header, beyond what is recommended in the guidance for each. Consistency in this space is essential for building brand awareness and user trust.</p>
<p>For example, the flag symbol in the Government of Canada signature should always be the proper red and the first breadcrumb link should always be labeled “Canada.ca” and point to the Canada.ca home page.</p>
<h2 id="content">Content and design</h2>
<p>Find content and design specifications and visual examples.</p>
<ul>
  <li><a href="signature.html">Government of Canada signature</a></li>
  <li><a href="language-toggle.html">Language toggle</a></li>
  <li><a href="search-box.html">Site search box</a></li>
  <li><a href="contextual-signin.html">Sign in button</a></li>
  <li><a href="site-menu.html">Theme and topic menu</a></li>
  <li><a href="breadcrumb-trail.html">Breadcrumb trail</a></li>
</ul>
<h3>Visual examples</h3>
<details>
  <summary class="bg-info">Standard pages</summary>
  <div class="pattern-demo mrgn-tp-lg">
    <figure>
      <figcaption><b>Global header – large screen</b></figcaption>
      <img src="../images/01-sign-in-desktop-en.jpg" class="img-responsive" alt="">
      <details class="mrgn-tp-md">
        <summary class="wb-toggle small" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Image description: global header – large screen</summary>
        <p class="mrgn-tp-lg">On large screens, the global header on a standard page has 4 rows:</p>
        <ol>
          <li>Language toggle in the top-right corner</li>
          <li>Government of Canada signature in the left corner, site search box on the right</li>
          <li>Below a divider line, the theme and topic menu is on the left, the optional Sign in button is on the right</li>
          <li>Breadcrumb on the left</li>
        </ol>
      </details>
    </figure>
  </div>
  <div class="pattern-demo mrgn-tp-lg">
    <figure>
      <figcaption><b>Global header – small screen</b></figcaption>
      <img src="../images/01-sign-in-mobile-en.jpg" class="img-responsive" alt="">
      <details class="mrgn-tp-md">
        <summary class="wb-toggle small" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Image description: global header – small screen</summary>
        <p class="mrgn-tp-lg">On small screens, the global header on a standard page has 4 rows:</p>
        <ol>
          <li>Government of Canada signature in the top-left corner, language toggle in the top-right corner</li>
          <li>Site search box directly below, it spans the entire row</li>
          <li>Below a divider line, the theme and topic menu is on the left, the optional Sign in button is on the right</li>
          <li>Breadcrumb on the left</li>
        </ol>
      </details>
    </figure>
  </div>
</details>
<details>
  <summary class="bg-info">Transactional pages</summary>
  <div class="pattern-demo mrgn-tp-lg">
    <figure>
      <figcaption><b>Minimum global header - large screen</b></figcaption>
      <img src="../images/01-global-header-transactional-desktop-en.png" class="img-responsive" alt="">
      <details class="mrgn-tp-md">
        <summary class="wb-toggle small" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Image description: minimum global header - large screen</summary>
        <p class="mrgn-tp-lg">On large screens, the minimum global header on a transactional page has 2 rows:</p>
        <ol>
          <li>Language toggle in the top-right corner</li>
          <li>Government of Canada signature in the top-left corner with a divider line underneath</li>
        </ol>
      </details>
    </figure>
  </div>
  <div class="pattern-demo mrgn-tp-lg">
    <figure>
      <figcaption><b>Minimum global header - small screen</b></figcaption>
      <img src="../images/01-global-header-transactional-small-en.png" class="img-responsive" alt="">
      <details class="mrgn-tp-md">
        <summary class="wb-toggle small" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Image description: minimum global header - small screen</summary>
        <p class="mrgn-tp-lg">On small screens, the minimum global header on a transactional page has a single row:</p>
        <ol>
          <li>Government of Canada signature in the top-left corner, language toggle in the top-right corner, with a divider line underneath</li>
        </ol>
      </details>
    </figure>
  </div>
</details>
<details>
  <summary class="bg-info">Campaign pages</summary>
  <div class="pattern-demo mrgn-tp-lg">
    <figure>
      <figcaption><b>Minimum global header - large screen</b></figcaption>
      <img src="../images/01-global-header-campaign-desktop-en.png" class="img-responsive" alt="">
      <details class="mrgn-tp-md">
        <summary class="wb-toggle small" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Image description: minimum global header - large screen</summary>
        <p class="mrgn-tp-lg">On large screens, the minimum global header on a campaign page has 3 rows:</p>
        <ol>
          <li>Language toggle in the top-right corner</li>
          <li>Government of Canada signature in the top-left corner, site search box on the right</li>
          <li>Below a divider line, the breadcrumb on the left</li>
        </ol>
      </details>
    </figure>
  </div>
  <div class="pattern-demo mrgn-tp-lg">
    <figure>
      <figcaption><b>Minimum global header - small screen</b></figcaption>
      <img src="../images/01-global-header-campaign-small-en.png" class="img-responsive" alt="">
      <details class="mrgn-tp-md">
        <summary class="wb-toggle small" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Image description: minimum global header - small screen</summary>
        <p class="mrgn-tp-lg">On small screens, the minimum global header on a campaign page has 3 rows:</p>
        <ol>
          <li>Government of Canada signature in the top-left corner, language toggle on the far right</li>
          <li>Site search box directly below, it spans the entire row</li>
          <li>Below a divider line, the breadcrumb on the left</li>
        </ol>
      </details>
    </figure>
  </div>
</details>
<h2 id="implementation">How to implement</h2>
<p>Find working examples and code for implementing the header.</p>
<h3>GCweb (WET) theme implementation reference</h3>
<p>The implementation reference includes how to configure each element of the header.</p>
<ul>
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
<p>Two research projects informed the latest updates to the header guidance.</p>
<h4>Trust Signals for Canada.ca study</h4>
<p>Our Canada.ca trust study and prior research show that a consistent header is necessary to maintaining a trusted brand.</p>
<p>For example, people trust:</p>
<ul>
  <li>the flag in the Government of Canada signature more when it’s red</li>
  <li>a white background more than dark mode</li>
</ul>
<p>If you want to know more about this research, contact the Digital Transformation Office at <a href="mailto:{{ site.emails.dto }}">{{ site.emails.dto }}</a>.</p>
<h4>Wayfinding on Canada.ca project</h4>
<p>We updated the global header for Canada.ca to align with a new overall navigation strategy that came out of the Wayfinding research project.</p>
<ul>
  <li><a href="{{ site.url }}/research-summaries/wayfinding-on-canada-ca">Wayfinding on Canada.ca research summary</a><br>
    Explains the context of the research and the insights that drove the design updates</li>
  <li><a href="https://blog.canada.ca/2022/12/21/wayfinding-research-project">Wayfinding research project improves our approach to navigation on Canada.ca</a><br>
    Blog post explaining the changes that are being made to the Canada.ca design, and how they are being implemented</li>
</ul>
<h3>Policy rationale</h3>
<p>This pattern is a mandatory element of the <cite>Content and Information Architecture Specification.</cite></p>
<ul>
  <li><a href="https://www.canada.ca/en/treasury-board-secretariat/services/government-communications/canada-content-information-architecture-specification/mandatory-elements.html">Mandatory elements of the design system</a></li>
</ul>
<h2 id="changes">Latest changes</h2>
<dl class="dl-horizontal">
  <dt>
    <time datetime="2023-06-26" class="link-muted">2023-06-26</time>
  </dt>
  <dd>Updated pattern to reflect design changes from the trust study and wayfinding project, added advice on what to avoid, added visual examples for the different types of pages, included links to research projects that inform header guidance</dd>
  <dt>
    <time datetime="2022-08-17" class="link-muted">2022-08-17</time>
  </dt>
  <dd>Updated content design for clarity, added contextual Sign in button, added implementation resources to the global header</dd>
  <dt>
    <time datetime="2020-06-25" class="link-muted">2020-06-25</time>
  </dt>
  <dd>The small screen version was modified to a slimmer version</dd>
</dl>
