---
altLangPage: https://conception.canada.ca/modeles-obligatoire/pages-profil-institutionnel.html
date: null
dateModified: '2023-08-23'
description: Guidance on how to use the institutional landing page template and its associated components on Canada.ca.
title: Institutional landing page
---
<p><strong>Last updated</strong>: {{ page.dateModified }}</p>
<p>This is the template for the landing page of each Government of Canada department, agency and organization that has an applied title under the <a href="https://www.tbs-sct.canada.ca/ap/fip-pcim/reg-eng.asp">Federal Identity Program (FIP) registry</a>.</p>
<div class="pattern-demo mrgn-tp-lg mrgn-bttm-xl"><img src="../images/[].png" class="img-responsive" alt="" /></div>
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
    <p>The purpose of this page is to help people find information and services with a focus on top tasks.</p>
    <p>It should also allow people to find additional content, including:</p>
    <ul>
        <li>mandate and organizational structure</li>
        <li>contact information</li>
        <li>news and promotions</li>
        <li>reports and publications</li>
    </ul>
</section>
<section>
    <h2 id="avoid">What to avoid</h2>
    <p>Don't use this template unless your department, agency or organization appears on the <a href="https://www.tbs-sct.canada.ca/ap/fip-pcim/reg-eng.asp">FIP registry</a>.</p>
</section>
<section>
    <h2 id="design">Content and design</h2>
   <div class="row mrgn-tp-lg">
  <div class="col-md-12">
    <div class="panel panel-default">
      <table class="table table-striped" id="ilp-01" aria-live="polite">
        <caption class="wb-inv">
        Content and design patterns for Institutional Landing Page
        </caption>
        <thead>
          <tr>
            <th class="col-md-3">Pattern</th>
            <th class="col-md-7">ILP Guidance</th>
            <th class="col-md-2 text-center">Required</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><a href="#">Introduction block</a></td>
            <td><p>Use the applied title of the institution (see <a href="https://www.tbs-sct.gc.ca/hgw-cgf/oversight-surveillance/communications/fip-pcim/reg-eng.asp">Registry of Applied Titles</a>).</p>
              <p>The description should be a very brief summary of what the institution does.</p></td>
            <td class="text-center"><span class="far fa-check-circle text-success"></span><span class="wb-inv"> Required</span></td>
          </tr>
          <tr>
            <td><a href="#">Most requested</a></td>
            <td><p>Features institution-specific top tasks.</p>
              <p>If any one of the institution's top tasks are already included as a direct link under Services and information, do not duplicate them here.</p></td>
            <td class="text-center"><span class="far fa-check-circle text-success"></span><span class="wb-inv"> Required</span></td>
          </tr>
          <tr>
            <td><a href="#">Services and information</a></td>
            <td><p>The services and information pattern points to the top-level categories of your organization’s information architecture.</p></td>
            <td class="text-center"><span class="far fa-check-circle text-success"></span><span class="wb-inv"> Required</span></td>
          </tr>
          <tr>
            <td><a href="#">Contact us band</a></td>
            <td><p>The first link should be the main contact for your institution. You should limit the band to three contact links.</p></td>
            <td class="text-center"><span class="far fa-check-circle text-success"></span><span class="wb-inv"> Required</span></td>
          </tr>
          <tr>
            <td><a href="#">About the institution</a></td>
            <td>No specific guidance related to the institutional landing page. Follow the pattern.</td>
            <td class="text-center"><span class="far fa-check-circle text-success"></span><span class="wb-inv"> Required</span></td>
          </tr>
          <tr>
            <td><a href="#">Ministers block</a></td>
            <td>No specific guidance related to the institutional landing page. Follow the pattern.</td>
            <td class="text-center"><span class="far fa-check-circle text-success"></span><span class="wb-inv"> Required</span></td>
          </tr>
          <tr>
            <td><a href="#">Social media pattern</a></td>
            <td>No specific ILP guidance.  Follow the pattern.</td>
            <td class="text-center">Optional</td>
          </tr>
          <tr>
            <td><a href="#">Super task button</a></td>
            <td><p>Only include a super task button if there is a specific task that has at least a third of the clickthrough on the institution's home page.</p></td>
            <td class="text-center">Optional</td>
          </tr>
          <tr>
            <td><a href="#">Flexible space</a></td>
            <td><p>The bottom portion of the page above the footer is considered a flexible space where departments may add content of their choosing.</p>
              <p>The use of this space is optional and the default patterns are the latest news and context-specific features.</p></td>
            <td class="text-center">Optional</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
    <h3>Visual example</h3>
</section>
<section>
    <h2 id="implement">How to implement</h2>
    <p>Find working examples and code for implementing the contact us band pattern.</p>
    <h3>GCweb (WET) theme implementation reference</h3>
    <p>The implementation reference includes how to configure each element of the institutional landing page.</p>
    <ul>
        <li><a href="#">Institutional landing page template - GCWeb</a></li>
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
</section>
<section>
    <h2 id="research">Research and rationale</h2>
    <p>Consult resarch findings and policy rationale.</p>
    <h3>Research findings</h3>
    <p>We validated the institutional landing page during two optimization projects with the Canada Revenue Agency. We found that this design was useful for providing access to the top tasks for an institution while also giving users access to corporate information about the organization.</p>
    <h3>Policy rationale</h3>
    <p>This template is a mandatory element of the Content and Information Architecture Specification.</p>
    <ul>
        <li><a href="https://www.canada.ca/en/treasury-board-secretariat/services/government-communications/canada-content-information-architecture-specification/mandatory-elements.html">Mandatory elements of the design system</a></li>
    </ul>
</section>
<section>
    <h2 id="latest">Latest changes</h2>
    <dl class="dl-horizontal">
     <dt>
            <time datetime="2023-10-xx" class="link-muted">2023-10-xx</time>
        </dt>
        <dd>
        <ul>
            <li>Moved template from beta to stable</li>
            <li>Updated the guidance to include content and design specifications, visual examples and implementation guidance</li>
        </ul>
        </dd>
    <dt>
            <time datetime="2020-07-23" class="link-muted">2020-07-23</time>
        </dt>
        <dd>
        <ul>
            <li>Front-end code review, creating changes to overall HTML/CSS</li>
            <li>Remove opacity from featured link for contrast</li>
            <li>Improvements to background image layout</li>
        </ul>
        </dd>
       <dt>
            <time datetime="2020-07-13" class="link-muted">2020-07-13</time>
        </dt>
        <dd>
        <ul>
            <li>Changes to fix accessibility issues</li>
            <li>Most requested pattern updated to bullets</li>
            <li>Changes to doormat columns in tablet view</li>
        </ul>
        </dd>
       <dt>
            <time datetime="2020-03-05" class="link-muted">2020-03-05</time>
        </dt>
        <dd>added an optional CSS class to hide the top image in tablet view</dd>
        <dt>
            <time datetime="2019-11-28" class="link-muted">2019-11-28</time>
        </dt>
        <dd> a new beta version of this template was added</dd>
    </dl>
</section>
