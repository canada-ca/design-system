---
altLangPage: "https://conception.canada.ca/specifications/information-trouvabilite/metadonnees.html"
date: 2024-02-23
dateModified: 2024-07-02
description: "Metadata guidance to improve search findability for Canada.ca web pages"
keywords: "metadata, what is metadata, keywords, keyword research, findability"
section-title: "Canada.ca design"
title: "Improving titles and metadata for findability"
breadcrumbs: [{
            "link": "https://design.canada.ca/about/",
            "title": "About Canada.ca"
          },
            {
            "link": "https://design.canada.ca/",
            "title": "Canada.ca design"
          },
           {
            "link": "https://design.canada.ca/specifications.html",
            "title": "Specifications"
          },
           {
            "link": "https://design.canada.ca/specifications/information-findability.html",
            "title": "IA and findability"
          }
        ]
---
<style>
  pre {
    white-space: pre-wrap;       /* Since CSS 2.1 */
    white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
    white-space: -pre-wrap;      /* Opera 4-6 */
    white-space: -o-pre-wrap;    /* Opera 7 */      
    word-break: keep-all;  /* Internet Explorer 5.5+ */

}
</style>
<p>Use this guidance to write effective titles and metadata. This can help make Government of Canada content easier for people to find using both internet search engines (like Google or Bing) and the Canada.ca site search engine.</p>
<h2>On this page</h2>
<ul>
    <li><a href="#m1">Metadata and findability for Canada.ca</a></li>
    <li><a href="#m2">Write effective content for &lt;title&gt; and &lt;h1&gt; elements</a></li>
    <li><a href="#m3">Write effective metadata descriptions</a></li>
    <li><a href="#m4">Add &lt;keywords&gt; for Canada.ca site search</a></li>
    <li><a href="#m5">Prioritize your search optimization efforts</a></li>
</ul>
<section id="m1">
    <h2>Metadata and findability for Canada.ca</h2>
    <p>
        <strong>Metadata</strong> is data that describes data. It’s information about the content on your page. It’s similar to a book’s listing in a library catalogue, that presents key data at a glance, like the author, title, description
        or publication date. Metadata allows each web page to be described uniquely, yet in a uniform way.
    </p>
    <p>Everything inside the header tag in an HTML document is metadata, and it is not visible on the web page. Only the &lt;body&gt; content of the document is displayed in a browser.</p>
    <p>
        The content of some metadata elements is used by search engines to rank results and to determine what content to display in a search engine result page (SERP). Improving your metadata contributes to search engine optimization
        efforts. Writing effective content for these metadata elements is the focus of this guidance.
    </p>
    <p>
        <strong>Findability</strong> is about how easily someone can find what they are looking for online. It refers to the quality of being locatable or navigable. It refers to how easy it is to find a resource (a web page) and how a
        system (a website) supports navigation and search.
    </p>
    <p>
        You need a good understanding of the user’s goals to properly optimize content and metadata for findability. This includes knowing what words someone will use to search for your content. You should include these keywords in the page
        content and the metadata. If you have access to primary sources (interviews, usability research, support tickets, emails, call centre transcripts, etc.) use these sources to identify your keywords. You can also use online keyword
        research tools.
    </p>
    <p>The guidance on this page will help you understand the best way to use your keywords in metadata.</p>
</section>
<section id="m2">
    <h2>Write effective content for &lt;title&gt; and &lt;h1&gt; elements</h2>
    <p>In the page header, the metadata &lt;title&gt; (also referred to as the HTML title or the title tag), looks like this:</p>
    <div class="row">
        <div class="col-md-8 mrgn-bttm-md">
            <pre><code>
   &lt;title&gt;Commercialization and licensing opportunities&lt;/title&gt;

</code></pre>
        </div>
    </div>
    <p>You can also include:</p>
    <div class="row">
        <div class="col-md-8">
            <pre><code>
   &lt;meta name="dcterms.title" content="Commercialization and licensing opportunities"&gt;

</code></pre>
        </div>
    </div>
    <p>If you use both the content should be identical. By using both you’re ensuring that your page is optimized for search engine visibility while also adhering to established metadata standards.</p>
    <h3>The &lt;title&gt; tag</h3>
    <p>The &lt;title&gt; tag is mandatory on all pages. Its primary purpose is to define the title of the page which is displayed in the browser’s tab.</p>
    <p>
        The &lt;title&gt; is the most important field for ranking search results. Search engines may display the &lt;title&gt; content as a clickable blue link on the search engine results page (SERP). According to how a search engine
        interprets the user’s goal, search engine results on Google and elsewhere can include other page content as the link text it displays on the SERP. The Canada.ca search engine will always source the link from the &lt;title&gt; tag.
    </p>
    <p>The contents of &lt;title&gt; tags are also used in social media posts, browser tabs, and bookmarks.</p>
    <p>
        <strong>Note:</strong> When you create a page in AEM "- Canada.ca" is automatically added to the end of your title tag. This helps people easily identify where the content came from when a page is shared. If your content is not in
        AEM you can manually add this tag to your title field.
    </p>
    <div class="row">
        <div class="col-md-8">
            <pre><code>
   &lt;title&gt;Continuous improvement of web content - Canada.ca&lt;/title&gt;

</code></pre>
        </div>
    </div>
    <h3>The dcterms.title</h3>
    <p>
        The dcterms.title is optional. This metadata field is part of the Dublin Core Metadata Initiative. It allows you to provide additional metadata that may be used by some systems to catalogue and index your page. If you use this
        field, the content should be identical to your &lt;title&gt; field.
    </p>
    <h3>Coordinate the &lt;title&gt; and the &lt;h1&gt; content</h3>
    <p>
        Web pages require both a metadata &lt;title&gt; and a visible title, typically an &lt;h1&gt; heading. It’s helpful to think about both titles early in the creation process. They are often identical but don’t have to be. In some
        cases, it’s important to have different text in these two titles.
    </p>
    <p>Example:</p>
    <div class="row">
        <div class="col-md-8">
            <pre><code>&lt;head&gt;
   &lt;title&gt;Sponsor your family to immigrate to Canada&lt;/title&gt;
&lt;/head&gt;
  
  &lt;body&gt;
  &lt;h1&gt;Sponsor your family members&lt;/h1&gt;
</code></pre>
        </div>
    </div>
    <h3>Tips for effective titles</h3>
    <ul>
        <li>Create your &lt;title&gt; content and &lt;h1&gt; at the same time</li>
        <li>Describe the page’s content as succinctly as possible</li>
        <li>Front-load with keywords</li>
        <li>Limit titles to 60 characters, including spaces
          <ul>
          <li>longer titles are more likely to be truncated on the SERP, especially on mobile</li>
          </ul>
        </li>
        <li>Include acronyms if they are well-known, and spell them out</li>
        <li>Preview your titles
          <ul>
          <li>use an online tool, such as the free <a href="https://moz.com/learn/seo/title-tag">title tag tester from Moz</a>, that will give you an idea of what your title tags may look like in a search result</li>
          </ul>
        </li>
        <li>Avoid duplicate titles</li>
    </ul>
    <h3>Avoiding duplicate titles in search results</h3>
    <ul>
        <li>
            There are many duplicate &lt;title&gt; tags in Canada.ca content. Since the &lt;title&gt; may be displayed as the clickable link on a search results page, duplicate titles make it challenging for users to clearly distinguish between
            different pages.
        </li>
        <li>
            Duplicate titles happen because there are pages in common across most GC institutions. Use the site search on Canada.ca to check if the title of the page you’re creating is already in use.
            <ul>
                <li>When you search, enter the title text in quotes (“your page title”). This tells the search engine to search for the exact words in order.</li>
            </ul>
        </li>
        <li>The content of the &lt;title&gt; tag is used to specify what users will see on the SERP. The &lt;h1&gt; title text does not need to be changed, as there will be other contextual clues visible on the page itself.</li>
        <li>
            Here are recommended techniques for different types of pages that often have duplicate titles:
            <ul>
                <li>
                    Common or ambiguous page titles for corporate content, such as Contact us, Transparency, and standard publications that every institution has to produce should include the name of the department in the meta titles
                    <table class="table table-condensed table-bordered small">
                        <tr>
                            <th>Instead of</th>
                            <th>Use</th>
                        </tr>
                        <tr>
                            <td>
                                Contact us<br />
                                <div>
            <pre><code>&lt;title&gt;Contact us&lt;/title&gt;
</code></pre>
    </div>
                            </td>
                              <td>
                                Contact Agriculture Canada<br />
                                <div>
            <pre><code>&lt;title&gt;Contact Agriculture Canada&lt;/title&gt;
</code></pre>
    </div>
                            </td>
                        </tr>
                        <tr>
                             <td>
                                2022-2023 Departmental Plan<br />
                                <div>
            <pre><code>&lt;title&gt;2022-2023 Departmental Plan&lt;/title&gt;
</code></pre>
    </div>
                            </td>
                            <td>
                                Canada Revenue Agency: 2022-2023 Departmental Plan<br />
                                <div>
            <pre><code>&lt;title&gt;Canada Revenue Agency: 2022-2023 Departmental Plan&lt;/title&gt;
</code></pre>
    </div>
                            </td>
                        </tr>
                    </table>
                </li>
                <li>
                    Common headings used within publications should have the publication name preceding the page title
                    <table class="table table-condensed table-bordered small">
                        <tr>
                            <th>Instead of</th>
                            <th>Use</th>
                        </tr>
                        <tr>
                            <td>
                                Introduction<br />
                                 <div>
            <pre><code>&lt;title&gt;Introduction&lt;/title&gt;
</code></pre>
    </div>
                            </td>
                            <td>
                                Federal actions for a clean growth economy: Introduction<br />
                                 <div>
            <pre><code>&lt;title&gt;Federal actions for a clean growth economy: Introduction&lt;/title&gt;
</code></pre>
    </div>
                            </td>
                        </tr>
                    </table>
                </li>
                <li>
                    Common service pages should have the name of the service preceding the page title
                    <table class="table table-condensed table-bordered small">
                        <tr>
                            <th>Instead of</th>
                            <th>Use</th>
                        </tr>
                        <tr>
                            <td>
                                How to apply<br />
                                <div>
            <pre><code>&lt;title&gt;How to apply&lt;/title&gt;
</code></pre>
    </div>
                            </td>
                            <td>
                                Study permit: How to apply<br />
                                <div>
            <pre><code>&lt;title&gt;Study permit: how to apply&lt;/title&gt;
</code></pre>
    </div>
                            </td>
                        </tr>
                    </table>
                </li>
            </ul>
        </li>
    </ul>
</section>
<section id="m3">
    <h2>Write effective metadata descriptions</h2>
    <p>In the page header, the &lt;description&gt; element looks like this:</p>
    <div class="row">
        <div class="col-md-8">
            <pre><code>
   &lt;meta name="description" content="Apply to travel, study, work or immigrate to Canada. Seek citizenship, permanent residency, or refugee protection."&gt;

</code></pre>
        </div>
    </div>
    <p>You can also include:</p>
    <div class="row">
        <div class="col-md-8">
            <pre><code>
   &lt;meta name="dcterms.description" content="Apply to travel, study, work or immigrate to Canada. Seek citizenship, permanent residency, or refugee protection."&gt;

</code></pre>
        </div>
    </div>
    <p>If you use both the content should be identical. By using both you’re ensuring that your page is optimized for search engine visibility while also adhering to established metadata standards.</p>
    <p>
        The metadata description should accurately summarize the content of your page, telling users what information they will find, or what action they can perform. A good description is more likely to be displayed in a SERP, where it can
        help users quickly determine whether the content is relevant. As with the &lt;title&gt;, if Google or other internet search engines determine that there is content on the page that is a better match to the user’s intent, they will
        display that.
    </p>
    <h3>Guidelines for writing metadata descriptions</h3>
    <p>The metadata description SHOULD:</p>
    <ul>
        <li>include 1 or 2 short and easy to read sentences that summarize what the page is about and how it can help people</li>
        <li>include keywords that your audience uses</li>
        <li>be concise
          <ul>
          <li>limit the description to 130 characters (standard search engine optimization (SEO) guidance suggests 160 characters but keeping it shorter will help accommodate both languages)
          </li>
          </ul>
          </li>
        <li>include acronyms and abbreviations only if they are well-known, along with the long-form description of the term</li>
    </ul>
    <p>The metadata description should NOT:</p>
    <ul>
        <li>repeat text from the title</li>
        <li>use a list of keywords as a description</li>
        <li>use duplicate metadata descriptions on multiple pages</li>
    </ul>
    <p>More:</p>
    <ul>
        <li>
            <a href="https://www.digitalprofession.gov.au/content-strategy/search-engine-optimisation/on-page-seo">Improve on-page SEO | Australian Government: A practical guide to proven on-page SEO techniques</a>
        </li>
    </ul>
</section>
<section id="m4">
    <h2>Add &lt;keywords&gt; for Canada.ca site search</h2>
    <p>A third metadata element, &lt;keywords&gt;, is used by the Canada.ca search engine, but not by Google or other internet search engines. It looks like this:</p>
    <div class="row">
        <div class="col-md-8">
            <pre><code>
   &lt;meta name="keywords" content="taxes, payment, income tax, business taxes, make a payment, CRA payments, paying income tax"&gt;

</code></pre>
        </div>
    </div>
    <h3>Guidelines for populating keywords</h3>
    <ul>
        <li>Do not enter words already found in the text, as this won’t improve how the page is ranked</li>
        <li>
            Add the common everyday terms people will use when searching, but that you may not use in your content
            <ul>
                <li>Example: “carbon tax” for “carbon pricing”</li>
            </ul>
        </li>
        <li>Add common term variations, such as older department or program names, abbreviations and acronyms</li>
        <li>Stay specific to the page’s content: don’t include concepts that are broad and applicable to many other pages</li>
        <li>You can include single keywords and keyword phrases</li>
        <li>In AEM your keywords have to be 400 characters or less in total. Other content management systems may have other limits. Generally you should include 5 to 10 keywords.</li>
    </ul>
</section>
<section id="m5">
    <h2>Prioritize your search optimization efforts</h2>
    <p>
        You can improve the findability of your web pages by focusing metadata creation efforts on the pages that matter most to Canada.ca visitors. Review both your page analytics and search analytics to identify your most visited pages to
        prioritize metadata improvements.
    </p>
    <p>We recommend optimizing the metadata on the following types of pages:</p>
    <ul>
        <li>Theme and topic pages</li>
        <li>Pages that support top tasks</li>
        <li>Sign-in pages</li>
        <li>Institutional landing pages</li>
        <li>Contact pages</li>
    </ul>
</section>
