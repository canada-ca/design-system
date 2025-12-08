---
altLangPage: https://conception.canada.ca/configurations-conception-communes/collaborateurs.html
date: '2024-09-24'
dateModified: '2025-12-03'
description: Use the contributors pattern to link to the institutions, organizations or similar entities who are responsible for or support the content on the page.
title: Contributors
---
<p><strong>Last updated</strong>: {{ page.dateModified }}</p>
<div class="pattern-demo mrgn-tp-lg mrgn-bttm-xl">
  <img src="../images/contributors.png" class="img-responsive" alt="" />
</div>
<p>Use the contributors pattern to link to the institutions, organizations or similar entities who are responsible for or support the content on the page.</p>

<section>
  <h2>On this page</h2>
  <ul>
    <li><a href="#use">When to use</a></li>
    <li><a href="#content">Content specifications</a></li>
    <li><a href="#design">Design specifications</a></li>
    <li><a href="#visual">Visual example</a></li>
    <li><a href="#implement">How to implement</a></li>
    <li><a href="#changes">Latest changes</a></li>
  </ul>
</section>
<section>
  <h2 id="use">When to use</h2>
  <p>Only use the contributors pattern if one of these scenarios applies to your content:</p>
  <ul>
    <li>multiple departments, organizations or agencies have contributed to the content on the page</li>
    <li>only one organization has contributed content to a page, but it is difficult to understand who manages that content (such as when there is no contextual footer or breadcrumb with the department’s name)</li>
  </ul>
</section>
<section>
  <h2 id="content">Content specifications</h2>
  <p>The link to the institution or organization is introduced by the word "From:"</p>
  <p>List supporting institutions or organizations. Links must point to the organization’s main landing page.</p>
  <p>The link label must be the same as the name that appears on the institutional or organizational profile page it links to.</p>
</section>
<section>
  <h2 id="design">Design specifications</h2>
  <p>This pattern is positioned below all content on the page, but above the date modified field.</p>
  <p>Do not place the text block in line with other text blocks or layout elements.</p>
  <p>Left-align the heading and the links.</p>
  <p>Use standard paragraph, heading and link colours. <a href="https://design.canada.ca/styles/colours.html">Refer to the guidance about use of colour on Canada.ca</a>.</p>
  <p>The heading is an H2 styled at font-size: 87% (or 17px).</p>
  <p>The list items are bolded and sized at font-size: 87% (or 17px).</p>
  <p>The links are to the right of the H2 and are coded in a horizontal list. The first item in the list is unstyled (no bullet).</p>

  <h3>Visual example</h3>
  <div class="pattern-demo mrgn-tp-md mrgn-bttm-md">
    <figure class="mrgn-tp-md mrgn-bttm-lg">
      <figcaption><b>Contributors pattern</b></figcaption>
        <img src="../images/contributors.png" class="img-responsive" alt="Contributors pattern. Text version below:" />
        <details>
          <summary>Image description: contributors</summary>
          <p>The heading “From:” is aligned to the left. Two placeholder links appear in a list, aligned horizontally with the heading. The placeholder link text is [Department or agency 1]. This is followed by a vertical bar and then another placeholder link labeled [Department or agency 2].</p>
      </details>
    </figure>
  </div>
</section>
<section>
  <h2 id="implement">How to implement</h2>
  <p>Find working examples and code for implementing the contributors pattern.</p>
  <h3>GCweb (WET) theme implementation reference</h3>
  <ul>
    <li><a href="https://wet-boew.github.io/GCWeb/components/gc-contributors/gc-contributors-doc-en.html">Contributors - GCWeb</a></li>
  </ul>
</section>
<section>
  <h2 id="changes">Latest changes</h2>
  <dl class="dl-horizontal">
    <dt><time>2025-12-03</time></dt>
    <dd>Guidance was updated to clarify when it is appropriate to use a contributors pattern</dd>
  </dl>
</section>
