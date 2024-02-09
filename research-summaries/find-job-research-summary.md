---
altLangPage: "https://conception.canada.ca/resumes-recherche/trouver-emploi-resume-recherche.html"
date: 2019-05-23
dateModified: 2019-05-23
description: "The Find a job optimization project was completed over the summer of 2018. The goal was to make it easier for Canadians to find government jobs on Canada.ca."
language: en
title: "Find a job"
---
<p class="post-meta">November 20th, 2020</p>
<p>The Government of Canada purchases upward of $23 billion in goods and services annually. They currently use a procurement process that is labour-intensive for all participants. It is still in large part paper-based.</p>
<p>Public Services and Procurement Canada (PSPC) is implementing an electronic procurement solution (EPS). This will transform the purchasing process for both government buyers and for the businesses from Canada and around the world who supply goods and services.</p>
<p>The project is a multi-year initiative. It will see existing processes modernized through the implementation of a single platform based on two commercial solutions (SAP’s Ariba and Fieldglass applications).</p>
<p>As part of the transition to the new EPS, PSPC is planning to implement a new entry point to replace the existing <a href="https://buyandsell.gc.ca/">Buy and Sell website</a>.</p>
<p>The role of this new site (CanadaBuys) will be to support tasks like learning about government procurement, finding out how to become a supplier to the government, and searching for opportunities open for competitive bidding (also called tenders).</p>
<p>Between April and July 2019, the Treasury Board's Digital Transformation Office (DTO) partnered with the PSPC team responsible for the design of the new CandaBuys site. </p>
<p>We focused on the needs of businesses new to government procurement. We tested with small and medium enterprises not currently registered as suppliers to the Government of Canada.</p>
<h2>Establishing a baseline</h2>
<p>We did our baseline task performance testing on the existing Buy and Sell site.</p>
<p>In the baseline study, 18 small and medium enterprises performed 158 tests. The most common problems participants encountered were:</p>
<ul>
  <li>complexity: the site has a lot of information, cluttered pages that are difficult to scan, technical terminology and jargon</li>
  <li>link splatter: too many links lead people away from the task they came to do</li>
  <li>poor search usability: homepage choices are actually canned searches that may include a large number of expired opportunities and award notices</li>
  <li>tender summaries make it difficult to differentiate relevant details from less important information</li>
  <li>crucial details buried in PDFs present a significant barrier </li>
  <li>PDF links had filenames that didn’t mean anything to the users so that in many cases it wasn’t obvious that these needed to be opened to find the relevant information</li>
</ul>
<h2>Designing for success</h2>
<p>The CanadaBuys prototype was developed in Drupal. This was the first time the DTO team used Drupal instead of Github for prototyping. The advantage of Drupal is its WYSIWIG (what you see is what you get) interface. It allows more non-coders to contribute to content design and iteration.</p>
<p>We developed the prototype design through a series of intensive collaborative workshops with PSPC procurement experts. This allowed us to have a prototype with several innovations including:</p>
<h4> Streamlined search interface and tender display </h4>
<p>The prototyped search experience used a single search box on its opening page. </p>
<figure> <img class="img-responsive border" alt="A long description can be found after the image."
src="/research-summaries/images/CanadaBuys.png" width="700"> </figure>
<details>
  <summary>The CanadaBuys prototype</summary>
  <p>Heading text reads: CanadaBuys. There is a search field entitled "Search active Government of Canada opportunities". Below the search field is a link to "Changes to procurement - what current suplliers need to know".</p>
</details>
<p>It then presented a simplified set of facet options for narrowing results.</p>
<figure> <img class="img-responsive border" alt="A long description can be found after the image."
src="/research-summaries//images/Category.png" width="500"> </figure>
<details>
  <summary>An example of the facets </summary>
  <p>Facets listed in this order: Category and code, Location, Type of notice, Who can bid, Buyer.</p>
</details>
<p>The options focused on considerations that would help suppliers to quickly eliminate irrelevant options.</p>
<ul>
  <li>What kind of opportunity is this? A request for proposal (RFP), or an invitation to qualify for a standing offer or supply arrangement?</li>
  <li> Am I eligible to respond?</li>
  <li> Does it match what I sell or provide?</li>
  <li> When and where would the work need to be done?</li>
  <li> What is the deadline for responding?</li>
</ul>
<h4>Scannable opportunity summary display</h4>
<p>In the prototype, tenders were formatted to provide essential details in a single, easy-to-scan format. They used the “on this page” pattern to aid navigation. Again, the focus was on making it easy for suppliers to determine: </p>
<ul>
  <li> what the buyer is looking for </li>
  <li> what the evaluation criteria will be </li>
  <li> how to find potential partners </li>
</ul>
<h4>Long document pattern for RFPs, statements of work</h4>
<p>Currently, most RFPs are published in PDF only. Businesses have to download the PDF before they can review or search within the document. The prototype experimented with a navigable HTML format for long documents. It used an interactive table of contents to allow people to easily access key sections like the statement of work.</p>
<h4>Navigable hierarchy for product and service codes</h4>
<p>The prototype used a simple keyword search to help businesses identify the UNSPSC or GSIN code for a specific product or service. Results showed the full hierarchy for context, and let users navigate through the tree.</p>
<figure> <img class="img-responsive border" alt="A long description can be found after the image."
src="/research-summaries/images/internet-hierarchy.png" width="700"> </figure>
<details>
  <summary>Internet or intranet client application development services</summary>
  <p>Heading text reads: Internet or intranet client application development services. Below the UNSPSC code for this type of service is listed in bold text: 81111509. </p>
  <p>In a coloured box, the hierarchy for the code is shown: </p>
  <ul>
    <li>Category codes (UNSPSC)</li>
    <li>Services (Segments 70-94)</li>
    <li>Technology, research and engineering – 81000000</li>
    <li>Computer services – 81110000</li>
    <li>Software or hardware engineering – 81115000</li>
    <li>Internet or intranet client application development services - 81111509</li>
  </ul>
</details>
<h4>A wizard to help suppliers identify their best “method of supply”</h4>
<p>Knowing whether there is a supply arrangement that will allow your company to pre-qualify for government opportunities is one of the more complex aspects of learning how procurement works. The prototyped wizard made this easy. It asked simple questions and presented the best options for your good or service.</p>
<div class="col-md-12">
  <figure> <img class="img-responsive border" alt="A long description can be found after the image."
src="/research-summaries/images/Find-the-way.png" width="700"> </figure>
</div>
<details>
  <summary>Identifying their best "method of supply" </summary>
  <p>The heading text for the wizard reads: Find the best way to compete for government contracts. It explains: We may have a preferred or mandatory method of supply for procuring specific types of goods or services. This is followed by a simple question: What do you sell or provide? The listed options are: Raw materials, Industrial equipment, components and supplies, end-use products, and services. Below is a button labelled Continue.</p>
</details>
<h2>Measuring success rates on the CanadaBuys prototype</h2>
<p>This chart shows a comparison of task success rates between the baseline and validation tests for all 37 participants.</p>
<img class="img-responsive hidden-sm hidden-xs" alt="Comparing task completion success rates in baseline and validation testing." src="/research-summaries/images/EPS-Graph.png"/>
<div class="row col-md-9">
  <details>
    <summary> Task completion success rates – table </summary>
    <div class="table-bravo">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Task</th>
            <th scope="col">Baseline</th>
            <th scope="col">Validation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tender search (landscaping)</td>
            <td>11%</td>
            <td>58%</td>
          </tr>
          <tr>
            <td>Join the list of interested suppliers</td>
            <td>39%</td>
            <td>79%</td>
          </tr>
          <tr>
            <td>Statement of work</td>
            <td>6%</td>
            <td>79%</td>
          </tr>
          <tr>
            <td>Tender search (proofreading)</td>
            <td>41%</td>
            <td>89%</td>
          <tr>
            <td>Remote work</td>
            <td>0%</td>
            <td>95%</td>
          </tr>
            </tr>

          <tr>
            <td>Dates + standing offer</td>
            <td>11%</td>
            <td>53%</td>
          </tr>
          <tr>
            <td>GSIN look-up</td>
            <td>29%</td>
            <td>47%</td>
          </tr>
          <tr>
            <td>Supply arrangement</td>
            <td>22%</td>
            <td>47%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </details>
</div>
<div class="clearfix"></div>
<div class="clearfix"></div>
<h2>Key drivers of success</h2>
<p>The features of the prototype that had the biggest impact on success rates were:</p>
<ul>
  <li>fewer words, clear labels, plain language</li>
  <li>a streamlined search experience with fewer, clearer choices for narrowing results</li>
  <li>simplified, scannable tender notice details that answer key questions for determining relevance and eligibility</li>
  <li>no PDFs</li>
</ul>
<div class="clearfix"></div>
<h2>Request the research</h2>
<p>If you’d like to see the detailed research findings from this project, email us at <a href="mailto:{{ site.emails.dto }}">{{ site.emails.dto }}</a>.</p>
<h2>Let us know what you think</h2>
<p>Tweet using the hashtag #Canadadotca.</p>
<h2>Explore further</h2>
<ul>
  <li>Read overviews of other <a href="https://blog.canada.ca/pages/project-overview.html#projects">projects with our partners</a></li>
</ul>
