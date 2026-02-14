---
altLangPage: https://canada-ca.github.io/systeme-conception/configurations-conception-communes/tableaux.html
date: '2021-05-21'
dateModified: '2025-07-25'
description: null
script: ../js/plugins/gc-responsive-preview.js
title: Tables
---
<div class="row">
 <div class="col-md-12 pull-left">
	<ul class="list-inline small mrgn-bttm-sm" id="list-inline-desktop-only" style="line-height:1.65em">
	 <li class="mrgn-rght-lg">Last updated: {{ page.dateModified }}</li>
	</ul>
 </div>
</div>

<p>Data tables allow you to communicate data efficiently using rows and columns.</p>

<section>
 <h2>On this page</h2>
 <ul>
	<li><a href="#when">When to use</a></li>
	<li><a href="#avoid">What to avoid</a></li>
	<li><a href="#how">How to implement</a></li>
	<li><a href="#research">Research and blog posts</a></li>
	<li><a href="#latest">Latest changes</a></li>
 </ul>
</section>

<section>
 <h2 id="when">When to use</h2>
 <ul>
	<li>Use to present data visually</li>
	<li>Use to organize related information, such as contact numbers and details</li>
	<li><a href="https://design.canada.ca/style-guide/#wp5-3">Use tables to organize data</a> <cite>(Canada.ca Content Style Guide)</cite></li>
 </ul>
</section>

<section>
 <h2 id="avoid">What to avoid</h2>
 <ul>
	<li>Do not use data tables to force layout for text</li>
	<li>Never include a data table as an image</li>
	<li><a href="https://design.canada.ca/style-guide/#wp5-3-3">Limit the use of texture and colour</a> <cite>(Canada.ca Content Style Guide)</cite></li>
	<li><a href="https://design.canada.ca/style-guide/#wp5-3-4">Avoid having blank cells</a> <cite>(Canada.ca Content Style Guide)</cite></li>
 </ul>
</section>

<section>
 <h2 id="how">How to implement</h2>
 <p>You can use either the
	<strong>beta</strong> or the
	<strong>stable</strong> version of this pattern. The beta tables use provisional CSS to make the tables responsive on small screens.</p>
 <p>The beta version will eventually replace the stable version.</p>
 <details>
	<summary>Beta (responsive) data tables</summary>
	<p>Beta responsive tables are:</p>
	<ul>
	 <li>supported only for simple WET tables that don't have merged rows or columns</li>
	 <li>not supported by IE 11</li>
	</ul>
	<p>Responsive tables create cards in mobile and small tablet view.</p>
	<p>Because this is still in beta, make sure to test your tables in different views, especially if you add a lot of customization.</p>
	<div class="pattern-demo pattern-demo-component">
	 <div class="component-demo example-frame-bkg" id="basic-demo">
		<div class="layout-demo example-frame-bkg" id="unfiltered-layout">
      <h3 class="h4 hidden-xs hidden-sm">Screen size:</h3>
      <div class="btn-group hidden-xs hidden-sm">
        <button class="btn btn-default" id="resize-div-mobile">
          <span class="fas fa-mobile-alt"></span>
          <strong>Mobile</strong>
        </button>
        <button class="btn btn-default" id="resize-div-desktop">
          <span class="fas fa-desktop"></span>
          <strong>Desktop</strong>
        </button>
      </div>
      <div id="gc-responsive-preview-container" class="gc-responsive-preview-desktop" style="overflow: auto; border: 1px solid #ccc; padding: 1em;">
        {% include common-design-patterns/tables/responsive-table-example.html %}
      </div>
      <div class="gc-responsive-preview" data-gc-responsive-preview='{
              "container": "#gc-responsive-preview-container",
              "cssPath": "../css/gc-responsive-preview-tables.css",
              "buttons": {
                  "mobile": "#resize-div-mobile",
                  "desktop": "#resize-div-desktop"
              }
      }'></div>
      </div>
    </div>
	</div>
	<h3>Customizing tables</h3>
	<table class="table">
	 <thead>
		<tr>
		 <th>Option</th>
		 <th>Description</th>
		 <th>How to use</th>
		</tr>
	 </thead>
	 <tbody>
		<tr>
		 <td>Table borders</td>
		 <td>Adds a border to help visually separate the table cells when they have a lot of content</td>
		 <td>Add the class
			<code>table-bordered</code> to the
			<code>&lt;table&gt;</code>
		 </td>
		</tr>
		<tr>
		 <td>Condensed spacing</td>
		 <td>Narrows the height of the cells within the table</td>
		 <td>Add the class
			<code>table-condensed</code>to the
			<code>&lt;table&gt;</code>
		 </td>
		</tr>
		<tr>
		 <td>Striped rows</td>
		 <td>Alternates the colour of the table rows from white to grey</td>
		 <td>Add the class
			<code>table-striped</code>to the
			<code>&lt;table&gt;</code>
		 </td>
		</tr>
		<tr>
		 <td>Hover rows</td>
		 <td>Causes the background to darken when a mouse hovers over a row</td>
		 <td>Add the class
			<code>table-hover</code>to the
			<code>&lt;table&gt;</code>
		 </td>
		</tr>
		<tr>
		 <td>Left aligned</td>
		 <td>Align the text in any cell on mobile cards</td>
		 <td>Add the class
			<code>text-left</code>to the HTML item in the
			<code>&lt;td&gt;</code>you wish to align left, like a
			<code>&lt;span&gt;</code>or a
			<code>&lt;ul&gt;</code>
		 </td>
		</tr>
		<tr>
		 <td>Simple filter</td>
		 <td>Provides simple filtering for the table</td>
		 <td>Add the class
			<code>wb-filter</code>to the
			<code>&lt;table&gt;</code>
		 </td>
		</tr>
		<tr>
		 <td>Enable DataTables plugin</td>
		 <td>Provides searching, sorting, filtering, pagination, etc.
			<a href="https://wet-boew.github.io/v4.0-ci/demos/tables/tables-en.html">DataTables plugin documentation</a>
		 </td>
		 <td>Add the class
			<code>wb-tables</code>to the
			<code>&lt;table&gt;</code> and add the appropriate
			<code>data-wb-tables=""</code> values
		 </td>
		</tr>
	 </tbody>
	</table>
  <h3>Additional resources</h3>
  <p>For more information on how to use the beta responsive tables, see the <a href="https://wet-boew.github.io/GCWeb/components/gc-table/gc-table-en.html">GCWeb: GC tables</a> documentation. The complete source code can be found on <a href="https://github.com/wet-boew/GCWeb/blob/master/components/gc-table/gc-table-en.html">Github: gc-table-en.html</a>.</p>
 </details>
 <details>
	<summary>Stable data tables</summary>
	<ul>
	 <li>Use defined presentation classes for tables included in <abbr title="Web Experience Toolkit">WET</abbr></li>
	 <li>Ensure each column treats only one data facet</li>
	 <li>Where possible, use <abbr title="Web Experience Toolkit">WET</abbr> 4 tables to enable sorting and filtering controls
		<ul>
		 <li>this is recommended when there are more than 12 rows</li>
		</ul>
	 </li>
	 <li>Add optional pagination controls for any table with more than 12 rows</li>
	 <li>Never include tabular data as an image</li>
	</ul>
	<h2>Working example</h2>
	<ul>
	 <li>
		<a href="https://wet-boew.github.io/v4.0-ci/demos/tables/tables-en.html">WET: Tables</a>
	 </li>
	</ul>
	<section class="panel panel-primary">
	 <header class="panel-heading">
		<h3 class="panel-title">Example</h3>
	 </header>
	 <div class="panel-body">
		<figure class="mrgn-bttm-sm">
		 <figcaption class="text-center"><b>Data tables pattern</b></figcaption>
		 <img alt="Screenshot illustrating the data table pattern on Canada.ca. Details on this graphic can be found in the surrounding text." class="img-responsive center-block" src="https://www.canada.ca/content/dam/tbs-sct/images/government-communications/canada-content-style-guide/data-tables-pattern-eng.jpg"/>
		</figure>
	 </div>
	</section>
 </details>
 <section>
	<h2 id="research">Research and blog posts</h2>
	<p>We tested the use of responsive tables successfully during optimization projects with Health Canada for recalls and safety, with <abbr title="Canada Revenue Agency">CRA</abbr>for organizing contact information, and across various COVID-19 content. Responsive tables are easier for users on small screens to use without having to scroll sideways to see all the content.</p>
	<ul>
	 <li>
		<a href="{{ site.url }}/research-summaries/cra-contact-us-research-summary">Research summary: Contact the CRA</a>
	 </li>
	 <li>
		<a href="{{ site.url }}/research-summaries/recalls-research-summary">Project summary: Recalls and safety alerts</a>
	 </li>
	</ul>
 </section>
 <section>
	<h2 id="latest">Latest changes</h2>
	<dl class="dl-horizontal">
    <dt><time>{{ page.dateModified }}</time></dt>
    <dd>Updated the responsive viewer for the beta table</dd>
	  <dt><time>2021-05-21</time></dt>
	  <dd>Updated to include the provisional code for responsive cards</dd>
	</dl>
 </section>
