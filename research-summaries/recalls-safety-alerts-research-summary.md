---
altLangPage: "https://conception.canada.ca/resumes-recherche/rappels-securite-resume-recherche.html"
date: 2020-08-07
dateModified: 2020-08-07
description: "Help Health Canada prepare for implementing search functionality in a new Drupal-based RSAMS publishing infrastructure, to be launched in the 2020 to 2021 fiscal year."
language: en
title: "Recalls and safety alerts search optimization, Round 2"
---
<p class="post-meta">August 7, 2020</p>
<p>In October of 2019, the Treasury Board’s Digital Transformation Office (DTO) identified an opportunity to follow up on a previous optimization project from 2018: Health Canada’s recalls and safety alerts management system (RSAMS).</p>
<p>In the first project, we had created a prototype search using the Canada.ca search engine. Results from that project validated many of the hypotheses that had informed the prototype’s design, but the search functionality was limited. This meant that the prototype couldn’t be deployed to the RSAMS environment that was in place at the time.</p>
<p>For this second project, the team was able to experiment with an open source search solution. We also added a search expert to the project team. The intent was to help Health Canada prepare for implementing search functionality in a new Drupal-based  RSAMS publishing infrastructure, to be launched in the 2020 to 2021 fiscal year.</p>
<p>For the DTO, our goal was to learn more about delivering effective specialized search, so we could provide advice and guidance to other GC institutions offering similar search functionality to their users.</p>
<h2>What made this project stand out</h2>
<h3>Search testbed</h3>
<p>To help us experiment with features and options, we created a search testbed. We got the data for the testbed’s index using a combination of a database extraction (from RSAMS) and open data sets for vehicle recalls, published by Transport Canada on <a href="https://open.canada.ca/en">open.canada.ca</a>. The testbed allowed the project team to experiment with a range of options for configuring the search solution and interface. This included features such as facets and filters, refinement mechanisms and feedback, auto-suggestion (typeahead), query correction, highlighting, and more. Applying these features to real data was extremely helpful.</p>
<h3>Optimization testing vs. product testing</h3>
<p>When we started the project, we planned for one round of testing. We planned to reuse tasks and baseline data from the first project, and compare task performance to complete the study. Our optimization studies require a minimum of 16 performances of each task for reliable comparison.</p>
<p>Implementing a full search solution within a constrained time frame is a complex task. We found ourselves implementing new features, updating the index, and making significant changes to the product as we tested. This was fantastic for learning and experimenting. It is exactly what should be done in a product development process. The drawback was that it meant we didn’t have our minimum of 16 task performances, so we couldn’t use the test data for comparison.</p>
<h2>Defining specialized search</h2>
<p>Specialized search is different from web search. It focuses on queries of a specific structured database, or a collection of related content, which may include both structured and unstructured content sources.</p>
<p>Unlike web search, all components of the search system should be within the control — or at least the influence — of the product manager. To help institutions deliver and maintain an effective user experience, we wanted to define these various components and the skills and activities required to support them.</p>
<h2>Components of specialized search</h2>
<p>A full search solution combines multiple components, each of which involves design decisions.</p>
<ul>
  <li>Content stores
    <ul>
      <li>Sources of structured content to be indexed and/or unstructured content to be crawled and indexed</li>
      <li>Content/data structure, changes and improvements, such as adding summaries to aid scanning and comprehension, and creating fields to support facets and filters</li>
    </ul>
  </li>
  <li>Content processing and indexing
    <ul>
      <li>Identifying what should be included or excluded from the search index</li>
      <li>Functions such as tokenization, lemmatization, stemming, and stop words that can be configured in the search solution</li>
    </ul>
  </li>
  <li>Query processing and search features
    <ul>
      <li>Constraining results by date or other criteria</li>
      <li>Classification, faceting, auto-suggest, error correction (“did you mean?”), etc.</li>
    </ul>
  </li>
  <li>Search interface design and results presentation
    <ul>
      <li>Snippets, sort order, refinement options, zero-result recovery, etc.</li>
    </ul>
  </li>
  <li>Search analytics and performance measurement</li>
</ul>
<h2>Supporting effective search</h2>
<p>At the end of the project, we gave Health Canada recommendations for the new RSAMS search implementation.</p>
<p>Our experience with the RSAMS project reinforced our understanding of the complexity of delivering effective specialized search. The key recommendations, summarized here, apply to any specialized search implementation.</p>
<h3>Understand search use cases</h3>
<p>It is important to look at the evidence of how people are using specialized search and design the solution to support this.</p>
<p> For example, earlier research had shown that RSAMS search behaviour follows distinct patterns: </p>
<ul>
  <li> searching by product (brand) or product category (toys, cars)</li>
  <li> searching by health concern (specific allergies)</li>
  <li> searching by issue (recalls due to food-borne listeria or E. Coli)</li>
</ul>
<p> A shared understanding of these patterns can help determine how to structure your content. For example, the RSAMS data did not capture brand names or product codes as a separate field. That undermined precision in search results.</p>
<h3>Fix the data at source, with the right people involved</h3>
<p>For RSAMS, a significant area of challenge has been that the content is sourced from multiple groups and institutions. Each has its own processes, templates and formats for publishing recalls and other notices related to the specific products it is responsible for monitoring.</p>
<p>For this project, we had a static dataset. That meant we could make manual additions and deletions to prepare a single, search-specific data source for indexing. Changes made to the data included:</p>
<ul>
  <li>separating multi-product notices into one-product-per-notice</li>
  <li>revising the format for recall titles</li>
  <li>making improvements to the RSAMS taxonomy, and applying updated values</li>
  <li>excluding outdated and redundant records from the index</li>
</ul>
<p>This “post-processing” of search data prior to indexing was labour-intensive. It was also difficult because of inconsistencies and issues with data quality.</p>
<p>Ideally, these types of issues should be fixed at the source, rather than patched afterwards. Getting this right requires bringing together the people most knowledgeable about the data or content.</p>
<h3>Dedicate resources to performance monitoring and data curation</h3>
<p>Is your search effective? To answer this question, you need to define metrics for search performance and perform routine analytics.</p>
<p>You need to continually monitor these metrics. They should drive improvements to the relevant search solution component.</p>
<p>If your search solution aggregates data and content from multiple sources, data curation is essential. The publishing infrastructure (content management system) should enforce structural consistency, and impose constraints (as in the use of controlled vocabularies for tagging content). Content needs to be monitored for quality. This monitoring should, in turn, inform improvements to structure, guidance and shared assets (such as those controlled vocabularies).</p>
<h2>Search is never done</h2>
<p>An effective search solution requires dedicated resources. It needs to involve multiple skill sets in its design and maintenance. This should include subject matter experts, information architects, content designers, developers, data and network specialists, search analysts, and user researchers.</p>
<p>To quote our search expert:</p>
<blockquote>“Search is hard. Good search is harder.”</blockquote>
<div class="clearfix"></div>
<h2>Request the research</h2>
<p>If you’d like to see the detailed research findings from this project, email us at <a href="mailto:{{ site.emails.dto }}">{{ site.emails.dto }}</a>.</p>
<h2>Let us know what you think</h2>
<p>Tweet using the hashtag #Canadadotca.</p>
<h2>Explore further</h2>
<ul>
  <li><a href="{{ site.url }}/research-summaries/recalls-research-summary.html">Project summary: Recalls and safety alerts</a> (Round 1)</li>
  <li>Read overviews of other <a href="https://blog.canada.ca/pages/project-overview.html#projects">projects with our partners</a></li>
</ul>
