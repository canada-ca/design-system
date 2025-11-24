---
altLangPage: https://conception.canada.ca/styles/typographie.html
date: 2018-10-01
dateModified: 2025-11-21
description: Typography and fonts for Canada.ca
title: Typography style
---
<span class="wb-prettify lang-css"></span>
<p><span class="label label-danger">Mandatory</span></p>
<p>The typography guidance is mandatory on all pages.</p>
<p><a href="{{ site.url }}/specifications/mandatory-elements.html"> Mandatory elements of the design system</a></p>
<p>Fonts must be consistent across Canada.ca pages, and should be easily readable across devices. Use a combination of Lato for headings, and Noto sans for body text.</p>
<h2> Desktop and tablet default font specification</h2>
<ul>
  <li>H1: Lato, 41px, bold</li>
  <li>H2: Lato, 39px, bold</li>
  <li>H3: Lato, 29px, bold</li>
  <li>H4: Lato, 27px, bold</li>
  <li>H5: Lato, 24px, bold</li>
  <li>H6: Lato, 22px, bold</li>
  <li>Body: Noto sans, 20px, plain text</li>
</ul>
<h2> Smaller device default font specification </h2>
<ul>
  <li>H1: Lato, 37px, bold</li>
  <li>H2: Lato, 35px, bold</li>
  <li>H3: Lato, 26px, bold</li>
  <li>H4: Lato, 22px, bold</li>
  <li>H5: Lato, 20px, bold</li>
  <li>H6: Lato, 18px, bold</li>
  <li>Body: Noto sans, 18px, plain text</li>
</ul>

<h2>Headings for Indigenous characters and other languages</h2>
<p>Both Lato and Noto Sans support a wide variety of languages and non-latin characters; however, Noto Sans has a larger range and is designed with Canadian Indigenous fonts in mind when using Noto Sans Canadian Aboriginal.</p>
<p>When publishing content in another language, if Lato does not support the characters for the headings, you can change the font to one that does, such as Noto Sans or Noto Sans Canadian Aboriginal.</p>
<p>By default, without this specific modification, the style of Canada.ca instructs the user’s browser to use an available font that will display the characters correctly.</p>
<p>Example:</p>
<p>Language tag applied to section with content</p>
<pre class="prettyprint linenums lang-html"><code>&lt;section lang="iu"&gt;
  &lt;h2&gt;ᑐᓴᒐᒃᓴᖅ&lt;/h2&gt;
  &lt;p&gt;....&lt;/p&gt;
&lt;/section&gt;</code></pre>

<p>CSS for the language tag</p>
<pre class="prettyprint linenums lang-css"><code>:lang(iu) {
  font-family: 'Noto Sans Canadian Aboriginal';
}
:lang(iu) :is(h1, h2, h3, h4, h5, h6) {
  font-weight: bold;
}</code></pre>

<p>Style</p>
<pre class="prettyprint linenums lang-css"><code>&lt;link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Canadian+Aboriginal:wght@400;700&display=swap" rel="stylesheet"&gt;</code></pre>

<p><a href="https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes">List of ISO 639 language codes</a></p>
<h2>Main page title</h2>
<p>When the H1 is the main title of a page, it includes a red bar as part of the Canada.ca brand.</p>
<p>Specifications for the red bar (formerly known as gc-thickline):</p>
<ul>
  <li>alignment: left</li>
  <li>colour: #A62A1E</li>
  <li>position: .2em (7.6px) underneath the H1</li>
  <li>size: 72px wide 6px thick</li>
</ul>
<h2>Line length</h2>
<p>Constrain text line length to 65 characters. This ensures that no lines extend beyond a comfortable reading length.</p>
<p>Page layouts may be wider than 65 characters. The line length restriction applies only to lines of text.</p>
<h2>Links </h2>
<p>Underline links in an underline style that skips descenders.</p>

<h2>Latest updates</h2>
<dl class="dl-horizontal">
  <dt><time>2025-11-21</time></dt>
  <dd>Updated to include information about how to customize typography to support additional languages</dd>
  <dt><time>2025-05-15</time></dt>
  <dd>Updated typography specifications in tandem with alignment activities for GCWeb and GC Design System.</dd>
</dl>
