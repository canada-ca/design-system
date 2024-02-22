---
altLangPage: "https://conception.canada.ca/"
date: 2024-02-23
dateModified: 2024-02-23
description: "Metadata guidance about search findability for Canada.ca web pages"
keywords: "waffles"
section-title: "Metadata"
title: "Metadata for findability"
---
<p>Use this guidance to write good metadata.  It will make Canada.ca content easier for people to find with external search engines and the internal Canada.ca search engine.</p>
<h2>On this page</h2>
<ul>
  <li><a href="#m1">Metadata and findability defined</a></li>
  <li><a href="#m2">Canada.ca metadata</a></li>
  <li><a href="#m3">Which pages to focus on</a></li>
  <li><a href="#m4">Title</a></li>
  <li><a href="#m5">Description</a></li>
  <li><a href="#m6">Keywords</a></li>
</ul>
<section id="m1">
  <h2>Metadata and findability defined</h2>
  <p><strong>Findability</strong> refers to how easily someone can find what they are looking for online.</p>
  <p><strong>Metadata</strong> is data that describes data.  It is information about the content on your page, much like labels in a library filing system.   It plays a critical role in findability as each element is structured to make it easier for search tools to identify, categorize and prioritize content.  Metadata is found in the head tag and is not displayed.</p>
  <h3>Example of metadata in a HTML head tag</h3>
  <div class="row">
    <div class="col-md-8">
      <pre><code>
 &#60;head&#62;
   &#8230;   

   &#60;meta name="keywords" content="[keywords]"/&#62;
   &#60;meta name="title" content="[title]"/&#62;
   &#60;meta name="description" content="[description]"/&#62;

   &#8230;
 &#60;/head&#62;

</code></pre>
    </div>
  </div>
</section>
<section>
  <h2 id="m2">Canada.ca metadata</h2>
  <p>Three key metadata elements that require careful attention to improve the findability of your content are:</p>
  <ol>
    <li>page title</li>
    <li>meta description</li>
    <li>keywords</li>
  </ol>
  <p>Each element tells search engines something specific about your page so relevant links with helpful references to your content can appear on a search engine's results page.</p>
  <p>People use title and description metadata to help them decide whether to follow a search result. Keywords in titles and descriptions help search engines show relevant results.</p>
  <p>The two most important parts of metadata for external search engines, such as Google and Bing, are:</p>
  <ol>
    <li>title  &lt;title&gt;</li>
    <li>description &lt;meta name="description" content="Description of the page's content and purpose"&gt;</li>
  </ol>
  <p><strong>Note</strong>: some Canada.ca pages may use "dc.terms.title" or "dc.terms.description", as this was mandatory for key GC web pages under the Standard on Metadata from 2010 to 2024.  Pages with "dc" elements should use duplicate content to populate them.</p>
  <h3>Example of metadata on a Canada.ca page</h3>
  <div class="row">
    <div class="col-md-8">
      <pre><code>
&lt;head&gt;

   &lt;meta name="dcterms.title" content="Canada.ca Content Style Guide"/&gt;
   &lt;meta name="description" content="The Canada.ca Content Style Guide provides the rules to create web content that can be easily found, understood and used." /&gt;
   &lt;meta name="dcterms.description" content="The Canada.ca Content Style Guide provides the rules to create web content that can be easily found, understood and used."/&gt;
   
&lt;/head&gt;

</code></pre>
    </div>
  </div>
  <p>The third element is keywords. Keywords are only used by Canada.ca's internal search engine to rank search results.  They are generally ignored by external search engines, such as Google and Bing.</p>
  <ol start="3">
    <li>&lt;meta name="keywords" content="keyword, keyword, keyword phrase"&gt;</li>
  </ol>
  <p>When the words people use to search on external search engines match keywords in your your title and description metadata, there's a better chance that your page will rank higher in their search results.  Matches in the "keywords" element will improve results on a Canada.ca search.</p>
  <p>Today's external search engines use semantic search, not keyword matching (lexical search). A semantic search interprets the meaning and intent of words and phrases to improve results.  It infers what someone wants to find even when exact keywords are not matched. For example, Schema markup (Google calls this "structured data") is a form of metadata that helps search engines identify the important concepts in your content.</p>
  <p>The Canada.ca search assessment tool  [LINKS TO TOOL] can help you assess the quality of the content in these three metadata fields, and address gaps. To use the tool, visit [link to webtool], and follow the instructions.</p>
</section>
