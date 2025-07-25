---
altLangPage: "https://conception.canada.ca/configurations-conception-communes/en-demande.html"
date: 2018-12-19
dateModified: 2025-06-25
description: Guidance about using the most requested pattern on Canada.ca. The most requested pattern provides links to top tasks on navigation pages
title: Most requested band
---

<p><strong>Last updated</strong>: {{ page.dateModified }}</p>
<p>The most requested pattern features top tasks for landing pages that offer many choices. Top tasks are the main things that users are trying to do in a given context. The most requested pattern functions as a band that runs across the full width of the page on which it appears.</p>
<div class="pattern-demo mrgn-tp-lg mrgn-bttm-xl"><img src="../images/most-requested-en.png" class="img-responsive" alt="" /></div>
<h2>On this page</h2>
<ul>
    <li><a href="#use">When to use</a></li>
    <li><a href="#avoid">What to avoid</a></li>
    <li><a href="#design">Content and design</a></li>
    <li><a href="#implement">How to implement</a></li>
    <li><a href="#research">Research</a></li>
    <li><a href="#latest">Latest changes</a></li>
</ul>
<h2 id="use">When to use</h2>
<p>Use this pattern on landing pages where people are trying to find where to start their task, such as a topic page or an institutional landing page.</p>
<p>The most requested pattern is required in the following mandatory templates:</p>
<ul>
    <li><a href="https://design.canada.ca/mandatory-templates/institutional-profile-pages.html">Institutional landing page</a></li>
    <li><a href="https://design.canada.ca/mandatory-templates/theme.html">Theme page template</a></li>
</ul>
<h2 id="avoid">What to avoid</h2>
<p>Don’t use this pattern when you want people to stay on the page and do their task.</p>
<p>Don’t use this to promote departmental preferences. Use data and evidence to determine the top tasks people are trying to access.</p>
<p>Don’t present different top tasks on the English and French versions of the landing page. Top tasks should be the same in both languages.</p>
<h2 id="design">Content and design</h2>
<p>Find content and design specifications and visual examples.</p>
<h3>Content specifications</h3>
<p>The heading is “Most requested” in English and “En demande” in French.</p>
<p>Include links to relevant top tasks - use evidence and data to determine which links should appear.</p>
<p>Organize the links in a bulleted list.</p>
<p>Make bullets visible so links are easy to scan.</p>
<p>Recommended maximum of 8 links.</p>
<p>Use task-oriented, plain language link labels (avoid program names or titles that may be unfamiliar to people).</p>
<p>On large screens:</p>
<ul>
    <li>the heading appears to the left of the links</li>
    <li>the list of links appears in up to 2 columns</li>
</ul>
<p>On small screens:</p>
<ul>
    <li>the heading appears above the links</li>
    <li>the list of links appears in a single column</li>
</ul>
<h3>Design specifications</h3>
<ul>
    <li>
        Layout:
        <ul>
            <li>Columns: 2 columns of bullets on large and medium screens, single column of bullets on small screens (if you have only 2-3 links, make it a single column in all screen sizes)</li>
            <li>Tab order: left to right, then top to bottom</li>
        </ul>
    </li>
    <li>
        Styling:
        <ul>
            <li>Background colour: #f5f5f5</li>
            <li>Font family: Lato</li>
            <li>Font weight: Bold</li>
            <li>Heading: H2, Lato: 24px (desktop), 22px (mobile)</li>
            <li>Line height: 1.8em</li>
            <li>Text size: 18px (desktop and mobile)</li>
        </ul>
    </li>
</ul>
<h3>Visual examples</h3>
<div class="pattern-demo mrgn-tp-md mrgn-bttm-md">
    <figure class="mrgn-tp-md mrgn-bttm-lg">
        <figcaption><b>Most requested - large screen</b></figcaption>
        <img src="../images/most-requested-en.png" class="img-responsive" alt="Most requested pattern for large screens. Text version below:" />
        <details>
            <summary class="wb-toggle" data-toggle='{"print":"on"}'>Image description: most requested - large screen</summary>
            <p>Most requested links appear in a horizontal band with the heading “Most requested”. Links are organized in a bulleted list.</p>
        </details>
    </figure>
</div>
<div class="pattern-demo mrgn-tp-md mrgn-bttm-md">
    <figure class="mrgn-tp-md mrgn-bttm-lg">
        <figcaption><b>Most requested - small screen</b></figcaption>
        <img src="../images/most-requested-sm-en.png" class="img-responsive" alt="Most requested pattern for small screens. Text version below:" />
        <details>
            <summary class="wb-toggle" data-toggle='{"print":"on"}'>Image description: most requested - small screen</summary>
            <p>Most requested links appear in a bulleted list underneath the heading “Most requested”.</p>
        </details>
    </figure>
</div>
<h2 id="implement">How to implement</h2>
<p>Find working examples and code for implementing the most requested pattern.</p>
<h3>GCweb (WET) theme implementation reference</h3>
<p>The implementation reference includes how to configure elements of the most requested band.</p>
<ul>
  <li><a href="https://wet-boew.github.io/GCWeb/components/gc-most-requested/gc-most-requested-en.html">Most requested band - GCWeb</a></li>
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
<h2 id="research">Research</h2>
<p>The banded approach to the most requested pattern was successfully tested on the Canada.ca home page in 2018.</p>
<p>As part of the Contact the Canada Revenue Agency (CRA) project in 2019, the banded approach was successfully tested on a prototype of the CRA institutional landing page.</p>
<p>The usefulness of most requested links for navigation pages was reconfirmed as part of the Wayfinding project in 2022.</p>
<h2 id="latest">Latest changes</h2>
<dl class="dl-horizontal">
    <dt><time>{{ page.dateModified }}</time></dt>
    <dd>Removed optional label as the pattern is mandatory on some templates.</dd>
    <dt><time>2025-05-15</time></dt>
    <dd>Updated typography specifications in tandem with alignment activities for GCWeb and GC Design System.</dd>
    <dt><time>2024-04-03</time></dt>
    <dd>Updated guidance to reflect the banded style for the most requested pattern</dd>
    <dt><time>2018-12-19</time></dt>
    <dd>Documented the most requested pattern</dd>
</dl>
