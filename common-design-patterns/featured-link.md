---
altLangPage: "https://conception.canada.ca/configurations-conception-communes/----.html"
date: 2023-07-13
dateModified: 2023-07-13
description: Guidance about using the featured links pattern on Canada.ca.
title: Featured link
---
<p><strong>Last updated</strong>: {{ page.dateModified }}</p>
<p>The featured link is a short, descriptive link that your institution needs to feature prominently.</p>
<div class="pattern-demo mrgn-tp-lg mrgn-bttm-xl"><img src="../images/featured-link-generic-en.png" class="img-responsive" alt="" /></div>
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
    <p>Use the featured link pattern to promote significant items of a temporary nature, such as a Remembrance day statement.</p>
    <p>Use this pattern on navigation pages only.</p>
    <p>You can manage multiple links in the featured link spot by randomizing them for every visit to the page.</p>
</section>
<section>
    <h2 id="avoid">What to avoid</h2>
    <p>Don’t use this pattern when you want people to stay on the page and do their task.</p>
    <p>Don't include images in this section.</p>
    <p>Don’t include more than one link within the pattern.</p>
    <p>Don’t include more than one featured link section on a page.</p>
</section>
<section>
    <h2 id="design">Content and design</h2>
    <p>Find content and design specifications and visual examples.</p>
    <h3>Content specifications</h3>
    <p>Within this pattern, left-align the text.</p>
    <p>Use descriptive link text so it's clear where the user will go if they click on the link.</p>
    <h3>Design specifications</h3>
    <ul>
        <li>
            Text:
            <ul>
                <li>Colour: #FFF</li>
                <li>Font type: Lato Sans</li>
                <li>Font size: 20px</li>
            </ul>
        </li>
        <li>
            Background:
            <ul>
                <li>Default colour: #31708F</li>
                <li>Opacity: 0.9</li>
                <li>
                    Padding:
                    <ul>
                        <li>Bottom: 15px</li>
                        <li>Top: 15px</li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
    <p>You can change the background colour to match design needs.</p>
    <h4>Accessibility</h4>
    <p>The "Featured" heading should have the wb-inv class, so it isn’t visible, but is still present for the semantic outline and screen readers.</p>
    <p>If you change the background colour, ensure there is a contrast ratio of at least 4.5:1.</p>
    <h3>Visual examples</h3>
    <div class="pattern-demo mrgn-tp-md mrgn-bttm-md">
        <figure class="mrgn-tp-md mrgn-bttm-lg">
            <figcaption><b>Featured link - large screen</b></figcaption>
            <img src="../images/featured-link-en.png" class="img-responsive" alt="Featured link for large screens. Text version below:" />
            <details>
                <summary class="wb-toggle" data-toggle='{"print":"on"}'>Image description:</summary>
                <p>
                    A featured link is displayed in a blue band that spans the length of the screen. Above the featured link is the department name (Natural Resources Canada) followed by a short description about the department. Below the
                    featured link is a Most requested heading followed by three links.
                </p>
            </details>
        </figure>
    </div>
</section>
<section>
    <h2 id="implement">How to implement</h2>
    <p>Find working examples and code for implementing the featured link, including the randomizer functionality.</p>
    <h3>GCWeb</h3>
    <ul>
        <li><a href="https://wet-boew.github.io/GCWeb/components/gc-featured-link/gc-featured-link-en.html">Featured link - Canada.ca</a></li>
    </ul>
    <h3>Randomizer in WET</h3>
    <ul>
        <li><a href="https://wet-boew.github.io/v4.0-ci/demos/wb-randomize/wb-randomize-en.html">Randomize</a> - working examples and code</li>
        <li><a href="https://wet-boew.github.io/GCWeb/docs/implementing-en.html">Quick implementation guide - GCWeb theme</a></li>
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
    <p>The featured link provides a controlled way to offer promotional space “above the fold” on landing pages.</p>
    <h3>Policy rationale</h3>
    <p>It’s an optional pattern for the following mandatory templates:</p>
    <ul>
        <li><a href="">Institutional landing page</a></li>
        <li>Canada.ca home page</li>
    </ul>
</section>
<section>
    <h2 id="latest">Latest changes</h2>
    <dl class="dl-horizontal">
        <dt>
            <time datetime="2023-08-23" class="link-muted">2023-08-23</time>
        </dt>
        <dd>Updated the guidance to include content and design specifications, visual examples and implementation guidance</dd>
    </dl>
</section>