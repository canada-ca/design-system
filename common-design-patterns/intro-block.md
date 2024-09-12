---
altLangPage: "https://conception.canada.ca/configurations-conception-communes/bloc-introduction.html"
date: 2023-08-20
dateModified: 2024-10-13
description: Guidance about using the introduction block pattern on Canada.ca.
title: Introduction block
---
<p><strong>Last updated</strong>: {{ page.dateModified }}</p>
<p>The introduction block pattern introduces the content of a landing page.</p>
<div class="pattern-demo mrgn-tp-lg mrgn-bttm-xl"><img src="../images/intro-block-full-en.png" class="img-responsive" alt="" /></div>
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
    <p>The introduction block pattern is a mandatory element for institutional landing pages and topic pages. It’s optional for other landing pages.</p>
</section>
<section>
    <h2 id="avoid">What to avoid</h2>
    <p>Don’t use this on destination pages when people are trying to complete a task.</p>
    <p>Don’t use the full-width image on topic pages, use a half-width image.</p>
</section>
<section>
    <h2 id="design">Content and design</h2>
    <p>Find content and design specifications and visual examples.</p>
    <h3>Content specifications</h3>
    <p>The introduction block pattern consists of:</p>
    <ul>
        <li><a href="#title">title</a></li>
        <li><a href="#short-desc">short description</a></li>
    </ul>
    <p>It can also include:</p>
    <ul>
        <li><a href="#image">image</a></li>
        <li><a href="#super-task">supertask button</a></li>
    </ul>
    <h4 id="title">Title</h4>
    <p>The page title should be descriptive and unique, but brief.</p>
    <p>Don’t use acronyms or abbreviations in the title.</p>
    <h4 id="short-desc">Short description</h4>
    <p>Keep the text short and concise, 1 or 2 lines is ideal.</p>
    <ul>
        <li>approximately 145 characters with spaces</li>
    </ul>
    <p>Write in plain language.</p>
    <h4 id="image">Image</h4>
    <p>Only use decorative images because the image is hidden on small screens.</p>
    <p>Don't apply a link to the image, use the featured link pattern instead.</p>
    <ul>
        <li><a href="./featured-link.html">Featured link pattern</a></li>
    </ul>
    <p>Limit use of text in images.</p>
    <ul>
        <li><a href="http://www.canada.ca/en/treasury-board-secretariat/services/government-communications/canada-content-style-guide.html">Consult the Canada.ca Style Guide</a> for further guidance on images.</li>
    </ul>
    <h4 id="super-task">Supertask button</h4>
    <p>Only include a supertask button if there’s a specific task that has at least 1/3 of the clickthrough rate from the page.</p>
    <p>Find out how to use a supertask button:</p>
    <ul>
        <li><a href="https://design.canada.ca/common-design-patterns/buttons.html">Buttons - Canada.ca design pattern</a></li>
    </ul>
    <h3>Design specifications</h3>
    <ul>
        <li>
            Title and short description
            <ul>
                <li>The title is an H1 and the short description uses body text</li>
                <li>Use <a href="https://design.canada.ca/styles/typography.html">standard typography styles</a></li>
            </ul>
        </li>
        <li>
            Full-width background image
            <ul>
                <li>1200px by 726px</li>
                <li>Image ratio: 1.65:1</li>
                <li>Visible on large screens, but hidden on medium and small screens</li>
                <li>Treated as a background image:
                    <ul>
                        <li>default design has the image positioned to the right, with a gradient fading out 50% of the image</li>
                    </ul>
                    </li>
            </ul>
        </li>
           <li>
            Half-width image
            <ul>
                <li>520px by 200px</li>
                <li>Image ratio: 1.65:1</li>
                <li>Visible on large screens, but hidden on medium and small screens</li>
                <li>Positioned to the right</li>
            </ul>
        </li>
        <li>
            Supertask button
            <ul>
                <li><a href="https://design.canada.ca/common-design-patterns/buttons.html#action">See details for the supertask button</a></li>
            </ul>
        </li>
    </ul>
    <h4>Accessibility</h4>
    <ul>
        <li>If you’re superimposing text over an image, ensure there’s a contrast ratio of at least 4.5:1.</li>
    </ul>
    <h3>Visual examples</h3>
    <div class="pattern-demo mrgn-tp-md mrgn-bttm-md">
        <figure class="mrgn-tp-md mrgn-bttm-lg">
            <figcaption><b>Introduction block with mandatory elements - Large screen</b></figcaption>
            <img src="../images/intro-block-en.png" class="img-responsive" alt="Introduction block pattern for large screens. Text version below:" />
            <details>
                <summary class="wb-toggle" data-toggle='{"print":"on"}'>Image description: introduction block - large screen</summary>
                <p>The introduction block appears below the global header and the Canada.ca breadcrumb. It consists of an h1 for Institution name and a short description of the institution’s mandate. This visual example does not include the optional image and supertask button.</p>
            </details>
        </figure>
    </div>
    <div class="pattern-demo mrgn-tp-md mrgn-bttm-md">
        <figure class="mrgn-tp-md mrgn-bttm-lg">
            <figcaption><b>Introduction block with mandatory elements - Small screen</b></figcaption>
            <img src="../images/intro-block-sm-en.png" class="img-responsive" alt="Introduction block pattern for small screens. Text version below:" />
            <details>
                <summary class="wb-toggle" data-toggle='{"print":"on"}'>Image description: introduction block - small screen </summary>
                <p>The introduction block appears below the global header and the Canada.ca breadcrumb. It consists of an h1 for Institution name and a short description of the institution’s mandate. This visual example does not include the optional image and supertask button.</p>
            </details>
        </figure>
    </div>
        <div class="pattern-demo mrgn-tp-md mrgn-bttm-md">
        <figure class="mrgn-tp-md mrgn-bttm-lg">
            <figcaption><b>Introduction block with half-width image - Large screen</b></figcaption>
            <img src="../images/intro-block-topic-en.png" class="img-responsive" alt="Introduction block pattern half-width image for large screens. Text version below:" />
            <details>
                <summary class="wb-toggle" data-toggle='{"print":"on"}'>Image description: introduction block with half-width image - large screen </summary>
                <p>The introduction block appears below the global header and the Canada.ca breadcrumb. It consists of an h1 for the topic title and a short description that describes the topics and top tasks that can be accessed on the page. It also includes a half-width image that is 520px by 200px positioned to the right of the h1 and description.</p>
            </details>
        </figure>
    </div>
</section>
<section>
    <h2 id="implement">How to implement</h2>
    <p>Find working examples and code for implementing the introduction block pattern.</p>
    <h3>GCweb (WET) theme implementation reference</h3>
    <p>The implementation reference includes how to configure elements of the design system.</p>
    <ul>
        <li><a href="https://wet-boew.github.io/GCWeb/design-patterns/gc-intro/gc-intro-image-en.html">Introduction block - GCWeb</a></li>
        <li><a href="https://wet-boew.github.io/GCWeb/docs/implementing-en.html">Quick implementation guide - GCWeb theme</a></li>
    </ul>    <h3>Implementations</h3>
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
</section>
<section>
    <h2 id="research">Research and rationale</h2>
    <p>Consult research findings and policy rationale.</p>
    <h3>Research findings</h3>
    <p><a href="https://blog.canada.ca/research-summaries/cra-contact-us-research-summary.html">Research summary: Contact the CRA</a></p>
    <p>Canada Revenue Agency and DTO developed the introduction block as part of the optimization project for CRA contacts.</p>
    <p>
        We found the introduction block design to be useful on institutional landing pages, especially in situations where a supertask button is needed. Check the research summary for additional information about other aspects of the
        project.
    </p>
    <h3>Policy rationale</h3>
    <p>The introduction block pattern is required in the following mandatory templates:</p>
    <ul>
        <li><a href="https://design.canada.ca/mandatory-templates/institutional-profile-pages.html">Institutional landing page</a></li>
        <li><a href="https://design.canada.ca/mandatory-templates/topic.html">Topic page template</a></li>
    </ul>
</section>
<section>
    <h2 id="latest">Latest changes</h2>
    <dl class="dl-horizontal">
    <dt>
            <time datetime="2024-09-13" class="link-muted">2024-09-13</time>
        </dt>
        <dd>Updated the guidance to include the half-width image</dd>
        <dt>
            <time datetime="2024-04-03" class="link-muted">2024-04-03</time>
        </dt>
        <dd>Updated the guidance to include content and design specifications, visual examples and implementation guidance</dd>
    </dl>
</section>
