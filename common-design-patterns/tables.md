---
altLangPage: https://conception.canada.ca/configurations-conception-communes/tableaux.html
date: null
dateModified: '2021-05-21'
description: null
title: Tables
---

<div class="row">
 <div class="col-md-12 pull-left">
  <ul class="list-inline small mrgn-bttm-sm" id="list-inline-desktop-only" style="line-height:1.65em">
   <li class="mrgn-rght-lg">
    Last updated: 2021-05-21
   </li>
  </ul>
 </div>
</div>

<p>
 Data tables allow you to communicate data efficiently using rows and columns.
</p>

<section>
 <h2>
  On this page
 </h2>
 <ul>
  <li>
   <a href="#when">
    When to use
   </a>
  </li>
  <li>
   <a href="#avoid">
    What to avoid
   </a>
  </li>
  <li>
   <a href="#how">
    How to implement
   </a>
  </li>
  <li>
   <a href="#research">
    Research and blog posts
   </a>
  </li>
  <li>
   <a href="#latest">
    Latest changes
   </a>
  </li>
 </ul>
</section>

<section>
 <h2 id="when">
  When to use
 </h2>
 <ul>
  <li>
   Use to present data visually
  </li>
  <li>
   Use to organize related information, such as contact numbers and details
  </li>
  <li>
   <a href="https://design.canada.ca/style-guide/#wp5-3">
    Use
						tables to organize data
   </a>
   <cite>
    (Canada.ca Content Style Guide)
   </cite>
  </li>
 </ul>
</section>

<section>
 <h2 id="avoid">
  What to avoid
 </h2>
 <ul>
  <li>
   Do not use data tables to force layout for text
  </li>
  <li>
   Never include a data table as an image
  </li>
  <li>
   <a href="https://design.canada.ca/style-guide/#wp5-3-3">
    Limit the use of texture and colour
   </a>
   <cite>
    (Canada.ca Content Style Guide)
   </cite>
  </li>
  <li>
   <a href="https://design.canada.ca/style-guide/#wp5-3-4">
    Avoid having blank cells
   </a>
   <cite>
    (Canada.ca Content Style Guide)
   </cite>
  </li>
 </ul>
</section>

<section>
 <h2 id="how">
  How to implement
 </h2>
 <p>
  You can use either the
  <strong>
   beta
  </strong>
  or the
  <strong>
   stable
  </strong>
  version of this pattern. The beta tables use provisional CSS to make the tables responsive on small screens.
 </p>
 <p>
  The beta version will eventually replace the stable version.
 </p>
 <details>
  <summary>
   Beta (responsive) data tables
  </summary>
  <p>
   Beta responsive tables are:
  </p>
  <ul>
   <li>
    supported only for simple WET tables that don't have merged rows or columns
   </li>
   <li>
    not supported by IE 11
   </li>
  </ul>
  <p>
   Responsive tables create cards in mobile and small tablet view.
  </p>
  <p>
   Because this is still in beta, make sure to test your tables in different views, especially if you add a lot of customization.
  </p>
  <div class="pattern-demo pattern-demo-component">
   <div class="component-demo example-frame-bkg" id="basic-demo">
    <div class="layout-demo example-frame-bkg" id="unfiltered-layout">
     <h3 class="h4 hidden-xs hidden-sm">
      Screen size:
     </h3>
     <div class="btn-group hidden-xs hidden-sm">
      <button class="btn btn-default" id="resize-iframe-mobile">
       <span class="fas fa-mobile-alt">
       </span>
       <strong>
        Small
       </strong>
      </button>
      <button class="btn btn-default" id="resize-iframe-tablet">
       <span class="fas fa-tablet-alt">
       </span>
       <strong>
        Medium
       </strong>
      </button>
      <button class="btn btn-default" id="resize-iframe-desktop">
       <span class="fas fa-desktop">
       </span>
       <strong>
        Large
       </strong>
      </button>
     </div>
     <iframe class="example-frame example-frame-resizable example-frame-m" loading="lazy" onload="resizeIframe(this);" src="fragments/basic.html" title="Basic table example">
     </iframe>
    </div>
   </div>
  </div>
  <details>
   <summary>
    Code
   </summary>
   <pre><code>&lt;table class="provisional gc-table table" id="myTable1"&gt;
 &lt;caption&gt;Population growth in Canadian cities&lt;/caption&gt;
 &lt;thead&gt;
  &lt;tr&gt;
   &lt;th&gt;City&lt;/th&gt;
   &lt;th&gt;Population in 2007&lt;/th&gt;
   &lt;th&gt;Population in 2017&lt;/th&gt;
   &lt;th&gt;Percentage change&lt;/th&gt;
  &lt;/tr&gt;
 &lt;/thead&gt;
 &lt;tbody&gt;
  &lt;tr&gt;
   &lt;td data-label="City"&gt;Toronto&lt;/td&gt;
   &lt;td data-label="Population in 2007"&gt;5,418,207&lt;/td&gt;
   &lt;td data-label="Population in 2017"&gt;6,346,088&lt;/td&gt;
   &lt;td data-label="Percentage change"&gt;17.1%&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
   &lt;td data-label="City"&gt;Montréal&lt;/td&gt;
   &lt;td data-label="Population in 2007"&gt;3,714,846&lt;/td&gt;
   &lt;td data-label="Population in 2017"&gt;4,138,254&lt;/td&gt;
   &lt;td data-label="Percentage change"&gt;11.4%&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
   &lt;td data-label="City"&gt;Vancouver&lt;/td&gt;
   &lt;td data-label="Population in 2007"&gt;2,218,134&lt;/td&gt;
   &lt;td data-label="Population in 2017"&gt;2,571,262&lt;/td&gt;
   &lt;td data-label="Percentage change"&gt;15.9%&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
   &lt;td data-label="City"&gt;Ottawa–Gatineau&lt;/td&gt;
   &lt;td data-label="Population in 2007"&gt;1,188,073&lt;/td&gt;
   &lt;td data-label="Population in 2017"&gt;1,377,016 &lt;/td&gt;
   &lt;td data-label="Percentage change"&gt;15.9%&lt;/td&gt;
  &lt;/tr&gt;
 &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
  </details>
  <h3>
   Customizing tables
  </h3>
  <table class="table">
   <thead>
    <tr>
     <th>
      Option
     </th>
     <th>
      Description
     </th>
     <th>
      How to use
     </th>
    </tr>
   </thead>
   <tbody>
    <tr>
     <td>
      Table borders
     </td>
     <td>
      Adds a border to help visually separate the table cells when they have a lot of content
     </td>
     <td>
      Add the class
      <code>
       table-bordered
      </code>
      to the
      <code>
       &lt;table&gt;
      </code>
     </td>
    </tr>
    <tr>
     <td>
      Condensed spacing
     </td>
     <td>
      Narrows the height of the cells within the table
     </td>
     <td>
      Add the class
      <code>
       table-condensed
      </code>
      to the
      <code>
       &lt;table&gt;
      </code>
     </td>
    </tr>
    <tr>
     <td>
      Striped rows
     </td>
     <td>
      Alternates the colour of the table rows from white to grey
     </td>
     <td>
      Add the class
      <code>
       table-striped
      </code>
      to the
      <code>
       &lt;table&gt;
      </code>
     </td>
    </tr>
    <tr>
     <td>
      Hover rows
     </td>
     <td>
      Causes the background to darken when a mouse hovers over a row
     </td>
     <td>
      Add the class
      <code>
       table-hover
      </code>
      to the
      <code>
       &lt;table&gt;
      </code>
     </td>
    </tr>
    <tr>
     <td>
      Left aligned
     </td>
     <td>
      Align the text in any cell on mobile cards
     </td>
     <td>
      Add the class
      <code>
       text-left
      </code>
      to the HTML item in the
      <code>
       &lt;td&gt;
      </code>
      you wish to align left, like a
      <code>
       &lt;span&gt;
      </code>
      or a
      <code>
       &lt;ul&gt;
      </code>
     </td>
    </tr>
    <tr>
     <td>
      Simple filter
     </td>
     <td>
      Provides simple filtering for the table
     </td>
     <td>
      Add the class
      <code>
       wb-filter
      </code>
      to the
      <code>
       &lt;table&gt;
      </code>
     </td>
    </tr>
    <tr>
     <td>
      Enable DataTables plugin
     </td>
     <td>
      Provides searching, sorting, filtering, pagination, etc.
      <a href="https://wet-boew.github.io/v4.0-ci/demos/tables/tables-en.html">
       DataTables plugin documentation
      </a>
     </td>
     <td>
      Add the class
      <code>
       wb-tables
      </code>
      to the
      <code>
       &lt;table&gt;
      </code>
      and add the appropriate
      <code>
       data-wb-tables=""
      </code>
      values
     </td>
    </tr>
   </tbody>
  </table>
 </details>
 <details>
  <summary>
   Stable data tables
  </summary>
  <ul>
   <li>
    Use defined presentation classes for tables included in
    <abbr title="Web Experience Toolkit">
     WET
    </abbr>
   </li>
   <li>
    Ensure each column treats only one data facet
   </li>
   <li>
    Where possible, use
    <abbr title="Web Experience Toolkit">
     WET
    </abbr>
    4 tables to enable sorting and filtering controls
    <ul>
     <li>
      this is recommended when there are more than 12 rows
     </li>
    </ul>
   </li>
   <li>
    Add optional pagination controls for any table with more than 12 rows
   </li>
   <li>
    Never include tabular data as an image
   </li>
  </ul>
  <h2>
   Working example
  </h2>
  <ul>
   <li>
    <a href="https://wet-boew.github.io/v4.0-ci/demos/tables/tables-en.html">
     WET: Tables
    </a>
   </li>
  </ul>
  <section class="panel panel-primary">
   <header class="panel-heading">
    <h3 class="panel-title">
     Example
    </h3>
   </header>
   <div class="panel-body">
    <figure class="mrgn-bttm-sm">
     <figcaption class="text-center">
      <b>
       Data tables pattern
      </b>
     </figcaption>
     <img alt="Screenshot illustrating the data table pattern on Canada.ca. Details on this graphic can be found in the surrounding text." class="img-responsive center-block" src="https://www.canada.ca/content/dam/tbs-sct/images/government-communications/canada-content-style-guide/data-tables-pattern-eng.jpg"/>
    </figure>
   </div>
  </section>
 </details>
 <section>
  <h2 id="research">
   Research and blog posts
  </h2>
  <p>
   We tested the use of responsive tables successfully during optimization projects with Health Canada for recalls and safety, with
   <abbr title="Canada Revenue Agency">
    CRA
   </abbr>
   for organizing contact information, and across various COVID-19 content. Responsive tables are easier for users on small screens to use without having to scroll sideways to see all the content.
  </p>
  <ul>
   <li>
    <a href="{{ site.url }}/research-summaries/cra-contact-us-research-summary">
     Research summary: Contact the CRA
    </a>
   </li>
   <li>
    <a href="{{ site.url }}/research-summaries/recalls-research-summary">
     Project summary: Recalls and safety alerts
    </a>
   </li>
  </ul>
 </section>
 <section>
  <h2 id="latest">
   Latest changes
  </h2>
  <dl class="dl-horizontal">
   <dt>
    <time class="link-muted" datetime="2021-05-21">
     2021-05-21
    </time>
   </dt>
   <dd>
    Updated to include the provisional code for responsive cards
   </dd>
  </dl>
 </section>
</section>





