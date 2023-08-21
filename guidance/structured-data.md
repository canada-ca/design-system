---
altLangPage: https://conception.canada.ca/directives/donnees-structurees.html
date: null
dateModified: '2020-03-16'
description: null
title: Adding structured data on Canada.ca pages
---


<div>
 <p>
  Adding structured data to a webpage can help deliver better answers to people.
 </p>
 <section>
  <h2 class="h3">
   On this page
  </h2>
  <ul>
   <li>
    <a href="#basics">
     What is structured data
    </a>
   </li>
   <li>
    <a href="#how">
     How to add structured data
    </a>
   </li>
   <li>
    <a href="#impact">
     How to measure the impact of structured data
    </a>
   </li>
   <li>
    <a href="#schemas">
     Schema code and examples
    </a>
   </li>
   <li>
    <a href="#additional">
     Additional resources
    </a>
   </li>
  </ul>
 </section>
 <section>
  <h2 id="basics">
   What is structured data
  </h2>
  <p>
   Structured data is a way to tag content in a “machine-readable” way.
  </p>
  <p>
   It helps search engines make sense of the page by allowing you to add information that clarifies the meaning of the content.
  </p>
  It should help deliver:
  <ul>
   <li>
    better and more informative search results (often in Google and Bing)
   </li>
   <li>
    better voice search results (for services like Alexa and Google Home)
   </li>
  </ul>
  <p>
   Search engines control how search results appear and what gets featured in snippets. Adding structured data may or may not change search results.
  </p>
  <h3>
   Example of a rich snippet
  </h3>
  <figure>
   <img alt="A long description can be found after the image." class="img-responsive border" src="../images/rich-snippet.png" title="Exampel of a rich snippet" width="700">
  </figure>
  <details>
   <summary>
    Example of a rich snippet: searching for "covid benefits"
   </summary>
   <p>
    When searching for "covid benefits" on Google, you may get a rich result that shows different sections that can be expanded to provide specific links. Expanding "For individuals" reveals 5 links:
   </p>
   <ul>
    <li>
     Employment Insurance (EI) program
    </li>
    <li>
     Canada Recovery Benefit (CRB)
    </li>
    <li>
     Canada Recovery Sickness Benefit (CRSB)
    </li>
    <li>
     Canada Recovery Caregiving Benefit (CRCB)
    </li>
    <li>
     All support for individuals
    </li>
   </ul>
  </details>
  <p>
   <br/>
   <figure>
    <p>
     Structured data needs to be a “true representation” of the page. You can’t add structured data about content that isn't covered in the page.
    </p>
    <p>
     Adding structured data is just one of the techniques you can use to optimize your content for search. Improving the actual content of the page should always be the first step you take.
    </p>
    <ul>
     <li>
      <a href="https://developers.google.com/search/docs/guides/intro-structured-data">
       Google: Understand how structured data works
      </a>
     </li>
     <li>
      <a href="https://developers.google.com/search/docs/guides/sd-policies">
       Google: Structured data guidelines
      </a>
     </li>
     <li>
      <a href="https://blog.canada.ca/2020/01/28/voice-search-optimization.html">
       Optimize your content for voice search
      </a>
     </li>
    </ul>
    <h2 id="how">
     How to add structured data
    </h2>
    <h3>
     Step 1: Choose a schema
    </h3>
    <p>
     A structured data schema is a set of field-and-value pairs you can use to add meaning to your page.
    </p>
    <p>
     There are multiple schemas you can choose from.
    </p>
    <p>
     Consult the list of schemas on Schema.org or Google, or look at the examples provided on this page.
    </p>
    <ul>
     <li>
      <a href="https://schema.org/docs/full.html">
       Schema.org schemas
      </a>
     </li>
     <li>
      <a href="https://developers.google.com/search/docs/data-types/article">
       Google structured data
      </a>
     </li>
     <li>
      <a href="#schemas">
       Schema code and examples for Canada.ca
      </a>
     </li>
    </ul>
    <h3>
     Step 2: Write JSON-LD code
    </h3>
    <p>
     While structured data can be written in RDFa, we suggest using JSON-LD instead. JSON-LD is becoming the preferred structured data language of search engines. It also allows a bit more flexibility, like allowing you to inject HTML in the rich snippets of search results.
    </p>
    <p>
     JSON-LD exists separate from the actual content. If you update the content, remember to adjust the JSON-LD code accordingly.
    </p>
    <p>
     Because some elements may already be coded in RDFa in your templates, make sure there is no collision between the two.
    </p>
    <p>
     Use a validator, such as
     <a href="https://jsonlint.com/">
      JSONLint
     </a>
     , to make sure your JSON-LD code is valid.
    </p>
    <h4>
     Adding JSON-LD in Adobe Experience Manager (AEM)
    </h4>
    <p>
     If your page is published in AEM, you can add structured data in JSON-LD by using the structured data component in the page properties.
    </p>
    <p>
     Follow the
     <a href="https://www.gcpedia.gc.ca/wiki/AEM_GC-specific_Documentation_6.5">
      instructions in GCPedia
     </a>
     (only available on the GC network).
    </p>
    <h3>
     Step 3: Test the structured data code
    </h3>
    <p>
     You can copy code snippets or full URLs to test your code in the
     <a href="https://search.google.com/test/rich-results">
      Rich results test
     </a>
     .
    </p>
    <p>
     It shows which rich result types (supported by Google) were found on the page, as well as any errors or suggestions for your structured data
    </p>
    <p>
     By pasting the URL or the code of the page, you can see if it’s valid, and if the values assigned to different fields are the correct ones.
    </p>
    <h3>
     Step 4: Validate HTML code and check accessibility
    </h3>
    <p>
     Before you publish the page with structured data, make sure that the HTML is valid and the page is accessible. You can use online validators to help you with this:
    </p>
    <ul>
     <li>
      <a href="https://validator.w3.org/">
       W3C HTML validator
      </a>
     </li>
     <li>
      <a href="https://wave.webaim.org/">
       WAVE Web Accessibility Evaluation Tool
      </a>
     </li>
    </ul>
    <h3>
     Step 5: Publish the page, reindex and monitor
    </h3>
    <p>
     Once your structured data is published, Google and Bing should reindex the page within a few days.
    </p>
    <p>
     Check the status of your code in the Canada.ca Google Search Console.
    </p>
    <h2 id="impact">
     How to measure the impact of structured data
    </h2>
    <p>
     You can measure the impact of structured data by looking at the Google Search console. You can get statistics on how the rich snippet is performing, such as:
    </p>
    <ul>
     <li>
      the proportion of the clicks to a page generated from a rich snippet
     </li>
     <li>
      the search queries that generate rich snippets
     </li>
     <li>
      whether the click-through rate is different with a rich snippet
     </li>
    </ul>
    <p>
     Adding tracking (UTM) codes to hyperlinks in the rich data can also help you understand when people are clicking the links in the rich snippet.
    </p>
    <ul>
     <li>
      <a href="https://www.gcpedia.gc.ca/gcwiki/images/2/26/UTM_Code_Guidelines.pdf">
       UTM code guidelines
      </a>
      (only available on the GC network)
     </li>
    </ul>
    <h2 id="schemas">
     Schema code and examples
    </h2>
    <details>
     <summary>
      <h3 class="h4">
       SpecialAnnouncement
      </h3>
     </summary>
     <h4>
      When to use
     </h4>
     <p>
      The SpecialAnnouncement schema is a new experimental schema developed for announcements related to COVID-19. It's mainly for health related information (symptoms, quarantine, testing, etc.), but also for closures, reopenings, and special government benefits.
     </p>
     <h4>
      Official guidance
     </h4>
     <ul>
      <li>
       <a href="https://schema.org/SpecialAnnouncement">
        Schema.org SpecialAnnouncement guidance
       </a>
      </li>
      <li>
       <a href="https://developers.google.com/search/docs/data-types/special-announcements">
        Google SpecialAnnouncement guidance
       </a>
      </li>
     </ul>
     <div class="pattern-demo mrgn-bttm-md">
      <div class="mrgn-rght-md mrgn-lft-md">
       <h4>
        Code
       </h4>
       <div class="wb-tabs">
        <div class="tabpanels">
         <details>
          <summary>
           JSON-LD
          </summary>
          <ul>
           <li>
            Add
            <code>
             id
            </code>
            attribute to the JSON-LD HTML script element named “wb-script”.
           </li>
           <li>
            Use the same JSON-LD root id anchor as the one for the main content of the page. Both will use “#wb-main” to specify semantically they are describing the same subject.
           </li>
          </ul>
          <pre class="prettyprint"><code>&lt;script id="wb-script"
type="application/ld+json"&gt;
 {
  "@context":"http://schema.org",
  "@type":"SpecialAnnouncement",
  "@id": "#wb-main",
  "mainEntityOfPage":{
   "@type":"WebPage",
   "@id":"https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19.html"
   },
  "name":"Coronavirus disease (COVID-19): information from the government of Canada",
  "text":"Coronavirus disease (COVID-19) information for Canadians including links to disease updates, travel advice, how to be prepared, symptoms, prevention, risk, Canada's response, current case numbers, answers to questions and links to printable resources.",
  "spatialCoverage": {
   "@type": "Country",
   "name": "Canada"
   },
  "publisher":{
   "@type":"GovernmentOrganization",
   "@id":"#wb-publisher",
   "name":"Government of Canada",
   "url":"https://www.canada.ca/en.html"
   },
  "category":"https://www.wikidata.org/wiki/Q81068910",
  "datePosted":"2020-05-09",
  "diseasePreventionInfo":"https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection/prevention-risks.html",
  "diseaseSpreadStatistics":"https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection.html",
  "newsUpdatesAndGuidelines":"https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19.html",
  "quarantineGuidelines":"https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection/prevention-risks.html",
  "travelBans":"https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection/latest-travel-health-advice.html",
  "governmentBenefitsInfo": {
   "@type": "GovernmentService",
   "name": "Canada's COVID-19 Economic Response Plan",
   "url":  "https://www.canada.ca/en/department-finance/economic-response-plan.html",
   "provider": {
    "@id": "#wb-publisher"
    },
   "serviceType": "Emergency relief",
   "audience": {
   "@type": "Audience",
   "name": "Canadians affected by COVID-19"
   }
  }
 }
&lt;/script&gt;
&lt;body vocab="http://schema.org/" typeof="WebPage"&gt;
 &lt;div typeof="Organisation" resource="#wb-publisher"&gt;
  &lt;img src="/link/to/a/logo" alt="Publisher name" property="logo" /&gt;
  &lt;meta property="name" content="Publisher name" /&gt;
 &lt;/div&gt;
 &lt;main property="mainContentOfPage" typeof="WebPageElement" resource="#wb-main"&gt;
 &lt;/main&gt;
&lt;/body&gt;</code></pre>
         </details>
         <details>
          <summary>
           AEM
          </summary>
          <p>
           Add the code in the Structured data component in the page properties.
          </p>
          <pre class="prettyprint"><code>{
  "@context":"http://schema.org",
  "@type":"SpecialAnnouncement",
  "@id": "#wb-main",
  "mainEntityOfPage":{
   "@type":"WebPage",
   "@id":"https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19.html"
   },
  "name":"Coronavirus disease (COVID-19): information from the government of Canada",
  "text":"Coronavirus disease (COVID-19) information for Canadians including links to disease updates, travel advice, how to be prepared, symptoms, prevention, risk, Canada's response, current case numbers, answers to questions and links to printable resources.",
  "spatialCoverage": {
   "@type": "Country",
   "name": "Canada"
   },
  "publisher":{
   "@type":"GovernmentOrganization",
   "@id":"#wb-publisher",
   "name":"Government of Canada",
   "url":"https://www.canada.ca/en.html"
   },
  "category":"https://www.wikidata.org/wiki/Q81068910",
  "datePosted":"2020-05-09",
  "diseasePreventionInfo":"https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection/prevention-risks.html",
  "diseaseSpreadStatistics":"https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection.html",
  "newsUpdatesAndGuidelines":"https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19.html",
  "quarantineGuidelines":"https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection/prevention-risks.html",
  "travelBans":"https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection/latest-travel-health-advice.html",
  "governmentBenefitsInfo": {
   "@type": "GovernmentService",
   "name": "Canada's COVID-19 Economic Response Plan",
   "url":  "https://www.canada.ca/en/department-finance/economic-response-plan.html",
   "provider": {
    "@id": "#wb-publisher"
    },
   "serviceType": "Emergency relief",
   "audience": {
   "@type": "Audience",
   "name": "Canadians affected by COVID-19"
   }
  }
 }</code></pre>
         </details>
        </div>
       </div>
      </div>
     </div>
    </details>
    <details>
     <summary>
      <h3 class="h4">
       FAQPage
      </h3>
     </summary>
     <h4>
      When to use
     </h4>
     <p>
      Use to add a set of headings and their respective content that provide answers for the key tasks associated with a page.
     </p>
     <p>
      Use on:
     </p>
     <ul>
      <li>
       service initiation pages
      </li>
      <li>
       guidance documents
      </li>
      <li>
       actual FAQs
      </li>
     </ul>
     <p>
      FAQ pages are strongly discouraged on Canada.ca in most cases.
     </p>
     <li>
      <a href="https://blog.canada.ca/2020/05/25/avoiding-faqs.html">
       Avoiding FAQs, with one exception
      </a>
      (blog post)
     </li>
     <h4>
      Official guidance
     </h4>
     <ul>
      <li>
       <a href="https://schema.org/FAQPage">
        Schema.org FAQPage guidance
       </a>
      </li>
      <li>
       <a href="https://developers.google.com/search/docs/data-types/faqpage">
        Google FAQPage guidance
       </a>
      </li>
     </ul>
     <div class="pattern-demo mrgn-bttm-md">
      <div class="mrgn-rght-md mrgn-lft-md">
       <h4>
        Code
       </h4>
       <div class="wb-tabs">
        <div class="tabpanels">
         <details>
          <summary>
           JSON-LD
          </summary>
          <ul>
           <li>
            Add
            <code>
             id
            </code>
            attribute to the JSON-LD HTML script element named “wb-script”.
           </li>
           <li>
            Use the same JSON-LD root id anchor as the one for the main content of the page. Both will use “#wb-main” to specify semantically they are describing the same subject.
           </li>
          </ul>
          <pre class="prettyprint"><code>&lt;script id="wb-script"
type="application/ld+json"&gt;
 {
  "@context":"http://schema.org",
  "@id": "#wb-main",
  "@type": "FAQPage",
  "publisher":{
   "@type":"GovernmentOrganization",
   "@id":"#wb-publisher",
   "name":"Government of Canada",
   "url":"https://www.canada.ca/en.html"
   },
  "headline": "How much you can get",
  "description":"Calculate your payments, shared custody and your payments, payments are recalculated in July, Related provincial and territorial benefits, children with a disability, repaying an overpayment",
  "mainEntity": [{
   "@type": "Question",
   "name": "Calculate your payments",
   "url": "https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-child-benefit-overview/canada-child-benefit-we-calculate-your-ccb.html",
   "acceptedAnswer": {
    "@type": "Answer",
    "url": "https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-child-benefit-overview/canada-child-benefit-we-calculate-your-ccb.html",
    "text": "&lt;p&gt;Use the child and family benefits calculator to help plan your budget.&lt;/p&gt;
     &lt;p&gt;&lt;a href='https://www.canada.ca/en/revenue-agency/services/child-family-benefits/child-family-benefits-calculator.html?utm_source=google&amp;utm_medium=organic&amp;utm_campaign=faq-data&amp;utm_content=ccbhowmuch-en-q1-001'&gt;  Calculate how much you can get&lt;/a&gt;&lt;/p&gt;

     &lt;p&gt;&lt;a href='https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-child-benefit-overview/canada-child-benefit-we-calculate-your-ccb.html?utm_source=google&amp;utm_medium=organic&amp;utm_campaign=faq-data&amp;utm_content=ccbhowmuch-en-q1-002#math'&gt;See the math behind CCB payments&lt;/a&gt;&lt;/p&gt;"
     }
	  },
 {
   "@type": "Question",
   "name": "Shared custody and your payments",
   "url": "https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-child-benefit-overview/canada-child-benefit-we-calculate-your-ccb.html",
   "acceptedAnswer": {
    "@type": "Answer",
    "url": "https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-child-benefit-overview/canada-child-benefit-we-calculate-your-ccb.html",
    "text": "
     &lt;p&gt;Each parent with shared custody will get 50% of what they would have gotten if they had full custody of the child, calculated based on their own adjusted family net income.&lt;/li&gt;
     &lt;p&gt;The CRA will not split the amount using other percentages, or give the full amount to one of the parents if CRA considers you to have shared custody.&lt;/li&gt;
     &lt;p&gt;If a child only lives with you &lt;strong&gt;part time&lt;/strong&gt;, go to  &lt;a href='https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-child-benefit-overview/canada-child-benefit-before-you-apply.html?utm_source=google&amp;utm_medium=organic&amp;utm_campaign=faq-data&amp;utm_content=ccbhowmuch-en-q2-001#shared'&gt;Custody arrangements and your benefits&lt;/a&gt; to find out if you are considered to have shared custody.&lt;/p&gt;"
    }
  }]
 }
&lt;/script&gt;
&lt;body vocab="http://schema.org/" typeof="WebPage"&gt;
 &lt;div typeof="Organisation" resource="#wb-publisher"&gt;
  &lt;img src="/link/to/a/logo" alt="Publisher name" property="logo" /&gt;
  &lt;meta property="name" content="Publisher name" /&gt;
 &lt;/div&gt;
 &lt;main property="mainContentOfPage" typeof="WebPageElement" resource="#wb-main"&gt;
 &lt;/main&gt;
&lt;/body&gt;</code></pre>
         </details>
         <details>
          <summary>
           AEM
          </summary>
          <ul>
           <p>
            Add the code in the Structured data component in the page properties.
           </p>
          </ul>
          <pre class="prettyprint"><code>{
  "@context":"http://schema.org",
  "@id": "#wb-main",
  "@type": "FAQPage",
  "publisher":{
   "@type":"GovernmentOrganization",
   "@id":"#wb-publisher",
   "name":"Government of Canada",
   "url":"https://www.canada.ca/en.html"
   },
  "headline": "How much you can get",
  "description":"Calculate your payments, shared custody and your payments, payments are recalculated in July, Related provincial and territorial benefits, children with a disability, repaying an overpayment",
  "mainEntity": [{
   "@type": "Question",
   "name": "Calculate your payments",
   "url": "https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-child-benefit-overview/canada-child-benefit-we-calculate-your-ccb.html",
   "acceptedAnswer": {
    "@type": "Answer",
    "url": "https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-child-benefit-overview/canada-child-benefit-we-calculate-your-ccb.html",
    "text": "&lt;p&gt;Use the child and family benefits calculator to help plan your budget.&lt;/p&gt;&lt;p&gt;&lt;a href='https://www.canada.ca/en/revenue-agency/services/child-family-benefits/child-family-benefits-calculator.html?utm_source=google&amp;utm_medium=organic&amp;utm_campaign=faq-data&amp;utm_content=ccbhowmuch-en-q1-001'&gt;  Calculate how much you can get&lt;/a&gt;&lt;/p&gt;&lt;p&gt;&lt;a href='https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-child-benefit-overview/canada-child-benefit-we-calculate-your-ccb.html?utm_source=google&amp;utm_medium=organic&amp;utm_campaign=faq-data&amp;utm_content=ccbhowmuch-en-q1-002#math'&gt;See the math behind CCB payments&lt;/a&gt;&lt;/p&gt;"
     }
	  },
 {
   "@type": "Question",
   "name": "Shared custody and your payments",
   "url": "https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-child-benefit-overview/canada-child-benefit-we-calculate-your-ccb.html",
   "acceptedAnswer": {
    "@type": "Answer",
    "url": "https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-child-benefit-overview/canada-child-benefit-we-calculate-your-ccb.html",
    "text": "&lt;p&gt;Each parent with shared custody will get 50% of what they would have gotten if they had full custody of the child, calculated based on their own adjusted family net income.&lt;/li&gt;&lt;p&gt;The CRA will not split the amount using other percentages, or give the full amount to one of the parents if CRA considers you to have shared custody.&lt;/li&gt;&lt;p&gt;If a child only lives with you &lt;strong&gt;part time&lt;/strong&gt;, go to  &lt;a href='https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-child-benefit-overview/canada-child-benefit-before-you-apply.html?utm_source=google&amp;utm_medium=organic&amp;utm_campaign=faq-data&amp;utm_content=ccbhowmuch-en-q2-001#shared'&gt;Custody arrangements and your benefits&lt;/a&gt; to find out if you are considered to have shared custody.&lt;/p&gt;"
    }
  }]
 }</code></pre>
         </details>
        </div>
       </div>
      </div>
     </div>
    </details>
    <details>
     <summary>
      <h3 class="h4">
       HowTo
      </h3>
     </summary>
     <h4>
      When to use
     </h4>
     <p>
      Use for tasks that require a very clear step-by-step approach.
     </p>
     <h4>
      Official guidance
     </h4>
     <ul>
      <li>
       <a href="https://schema.org/HowTo">
        Schema.org HowTo guidance
       </a>
      </li>
      <li>
       <a href="https://developers.google.com/search/docs/data-types/how-to">
        Google HowTo guidance
       </a>
      </li>
     </ul>
     <div class="pattern-demo mrgn-bttm-md">
      <div class="mrgn-rght-md mrgn-lft-md">
       <h4>
        Code
       </h4>
       <div class="wb-tabs">
        <div class="tabpanels">
         <details>
          <summary>
           JSON-LD
          </summary>
          <ul>
           <li>
            Add
            <code>
             id
            </code>
            attribute to the JSON-LD HTML script element named “wb-script”.
           </li>
           <li>
            Use the same JSON-LD root id anchor as the one for the main content of the page. Both will use “#wb-main” to specify semantically they are describing the same subject.
           </li>
          </ul>
          <pre class="prettyprint"><code>&lt;script id="wb-script"
type="application/ld+json"&gt;
 {
  "@context":"http://schema.org",
  "@id": "#wb-main",
  "@type":"HowTo",
  "publisher":{
   "@type":"GovernmentOrganization",
   "@id":"#wb-publisher",
   "name":"Government of Canada",
   "url":"https://www.canada.ca/en.html"
   },
  "description":"The Canada child benefit (CCB) is a tax-free monthly payment made to eligible families to help with the cost of raising children under 18 years of age. ",
  "name":"Canada child benefit",
  "step":[{
   "@type":"HowToStep",
   "image":"http://test.canada.ca/covid-19-guidance/proto/structured_data/step_1.svg",
   "name":"Who can apply",
   "url":"https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-child-benefit-overview/canada-child-benefit-before-you-apply.html",
   "Position":1,
   "text":"Who can get the Canada child benefit, who is primarily responsible for the care and upbringing of the child, and impact of shared custody on your benefits"
   },
   {"@type":"HowToStep",
   "image":"http://test.canada.ca/covid-19-guidance/proto/structured_data/step_2.svg",
   "name":"Apply",
   "url":"http://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-child-benefit-overview/canada-child-benefit-apply.html",
   "position":2,
   "text":"When and how to apply, and when you need to provide additional documents"
   }
  ]}
&lt;/script&gt;
&lt;body vocab="http://schema.org/" typeof="WebPage"&gt;
 &lt;div typeof="Organisation" resource="#wb-publisher"&gt;
  &lt;img src="/link/to/a/logo" alt="Publisher name" property="logo" /&gt;
  &lt;meta property="name" content="Publisher name" /&gt;
 &lt;/div&gt;
 &lt;main property="mainContentOfPage" typeof="WebPageElement" resource="#wb-main"&gt;
 &lt;/main&gt;
&lt;/body&gt;</code></pre>
         </details>
         <details>
          <summary>
           AEM
          </summary>
          <p>
           Add the code in the Structured data component in the page properties.
          </p>
          <pre class="prettyprint"><code>{
  "@context":"http://schema.org",
  "@id": "#wb-main",
  "@type":"HowTo",
  "publisher":{
   "@type":"GovernmentOrganization",
   "@id":"#wb-publisher",
   "name":"Government of Canada",
   "url":"https://www.canada.ca/en.html"
   },
  "description":"The Canada child benefit (CCB) is a tax-free monthly payment made to eligible families to help with the cost of raising children under 18 years of age. ",
  "name":"Canada child benefit",
  "step":[{
   "@type":"HowToStep",
   "image":"http://test.canada.ca/covid-19-guidance/proto/structured_data/step_1.svg",
   "name":"Who can apply",
   "url":"https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-child-benefit-overview/canada-child-benefit-before-you-apply.html",
   "Position":1,
   "text":"Who can get the Canada child benefit, who is primarily responsible for the care and upbringing of the child, and impact of shared custody on your benefits"
   },
   {"@type":"HowToStep",
   "image":"http://test.canada.ca/covid-19-guidance/proto/structured_data/step_2.svg",
   "name":"Apply",
   "url":"http://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-child-benefit-overview/canada-child-benefit-apply.html",
   "position":2,
   "text":"When and how to apply, and when you need to provide additional documents"
   }
  ]}</code></pre>
         </details>
        </div>
       </div>
      </div>
     </div>
    </details>
    <details>
     <summary>
      <h3 class="h4">
       Speakable
      </h3>
     </summary>
     <h4>
      When to use
     </h4>
     <p>
      Use to identify any section of content that would be best suitable for text-to-speech: the part of the page that encapsulates the most important content people are looking for on that page.
     </p>
     <p>
      You can use this schema on any page.
     </p>
     <h4>
      Official guidance
     </h4>
     <ul>
      <li>
       <a href="https://schema.org/SpeakableSpecification">
        Schema.org Speakable guidance
       </a>
      </li>
      <li>
       <a href="https://developers.google.com/search/docs/data-types/speakable">
        Google Speakable guidance
       </a>
      </li>
     </ul>
     <div class="pattern-demo mrgn-bttm-md">
      <div class="mrgn-rght-md mrgn-lft-md">
       <h4>
        Code
       </h4>
       <div class="wb-tabs">
        <div class="tabpanels">
         <details>
          <summary>
           JSON-LD
          </summary>
          <ul>
           <li>
            Add
            <code>
             id
            </code>
            attribute to the JSON-LD HTML script element named “wb-script”.
           </li>
           <li>
            Use the same JSON-LD root id anchor as the one for the main content of the page. Both will use “#wb-main” to specify semantically they are describing the same subject.
           </li>
          </ul>
          <pre class="prettyprint"><code>&lt;script id="wb-script"
type="application/ld+json"&gt;
 {
  "@context":"http://schema.org",
  "@id": "#wb-main",
  "@type": "WebPage",
  "name": "How much Canada Child Benefit you could get",
  "speakable":{
   "@type": "SpeakableSpecification","cssSelector": [".speakable1"]
   },
  "url":"https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-child-benefit-overview/canada-child-benefit-we-calculate-your-ccb.html"}
&lt;/script&gt;
&lt;body vocab="http://schema.org/" typeof="WebPage"&gt;
 &lt;div typeof="Organisation" resource="#wb-publisher"&gt;
  &lt;img src="/link/to/a/logo" alt="Publisher name" property="logo" /&gt;
  &lt;meta property="name" content="Publisher name" /&gt;
 &lt;/div&gt;
 &lt;main property="mainContentOfPage" typeof="WebPageElement" resource="#wb-main"&gt;
  &lt;p class="speakable1	"&gt;The maximum Canada child benefit you could get is $6,639 per year for children under 6, and $5,602 per year for children aged 6 to 17.&lt;/p&gt;
 &lt;/main&gt;
&lt;/body&gt;</code></pre>
         </details>
         <details>
          <summary>
           AEM
          </summary>
          <p>
           Add the code in the Structured data component in the page properties.
          </p>
          <pre class="prettyprint"><code>{
  "@context":"http://schema.org",
  "@id": "#wb-main",
  "@type": "WebPage",
  "name": "How much Canada Child Benefit you could get",
  "speakable":{
   "@type": "SpeakableSpecification","cssSelector": [".speakable1"]
   },
  "url":"https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-child-benefit-overview/canada-child-benefit-we-calculate-your-ccb.html"}</code></pre>
         </details>
        </div>
       </div>
      </div>
     </div>
    </details>
    <details>
     <summary>
      <h3 class="h4">
       Event
      </h3>
     </summary>
     <h4>
      When to use
     </h4>
     <p>
      Use for events.
     </p>
     <h4>
      Official guidance
     </h4>
     <ul>
      <li>
       <a href="https://schema.org/Event">
        Schema.org Event guidance
       </a>
      </li>
      <li>
       <a href="https://developers.google.com/search/docs/data-types/event">
        Google Event guidance
       </a>
      </li>
     </ul>
     <div class="pattern-demo mrgn-bttm-md">
      <div class="mrgn-rght-md mrgn-lft-md">
       <h4>
        Code
       </h4>
       <div class="wb-tabs">
        <div class="tabpanels">
         <details>
          <summary>
           JSON-LD
          </summary>
          <ul>
           <li>
            Add
            <code>
             id
            </code>
            attribute to the JSON-LD HTML script element named “wb-script”.
           </li>
           <li>
            Use the same JSON-LD root id anchor as the one for the main content of the page. Both will use “#wb-main” to specify semantically they are describing the same subject.
           </li>
          </ul>
          <pre class="prettyprint"><code>&lt;script
type="application/ld+json"&gt;
 {
  "@context": "http://schema.org",
  "@type": "Event",
  "name": "Great event under the sun",
	"@id": "#wb-main",
  "startDate": "2020-07-15",
  "location": {
   "@type": "Place",
   "name": "Parliament Hill",
    "address": {
    "@type": "PostalAddress",
    "addressLocality": "Ottawa",
    "addressRegion": "ON",
    "postalCode": "K1A 0A9",
    "streetAddress": "Wellington Street"
    }
   },
  "image": "./canada-day.jpg",
  "description": "Celebrating the sun in the nation's capital."
 }
&lt;/script&gt;
&lt;body vocab="http://schema.org/" typeof="WebPage"&gt;
 &lt;div typeof="Organisation" resource="#wb-publisher"&gt;
  &lt;img src="/link/to/a/logo" alt="Publisher name" property="logo" /&gt;
  &lt;meta property="name" content="Publisher name" /&gt;
 &lt;/div&gt;
 &lt;main property="mainContentOfPage" typeof="WebPageElement" resource="#wb-main"&gt;
 &lt;/main&gt;
&lt;/body&gt;</code></pre>
         </details>
         <details>
          <summary>
           AEM
          </summary>
          <p>
           Add the code in the Structured data component in the page properties.
          </p>
          <pre class="prettyprint"><code>{
"@context": "http://schema.org",
"@type": "Event",
"name": "Great event under the sun",
"@id": "#wb-main",
"startDate": "2020-07-15",
"location": {
"@type": "Place",
"name": "Parliament Hill",
"address": {
"@type": "PostalAddress",
"addressLocality": "Ottawa",
"addressRegion": "ON",
"postalCode": "K1A 0A9",
"streetAddress": "Wellington Street"
}
},
"image": "./canada-day.jpg",
"description": "Celebrating the sun in the nation's capital."
}</code></pre>
         </details>
        </div>
       </div>
      </div>
     </div>
    </details>
    <h2 id="additional">
     Additional resources
    </h2>
    <ul>
     <li>
      <a href="https://blog.canada.ca/2020/01/28/voice-search-optimization.html">
       Optimize your content for voice search
      </a>
     </li>
     <li>
      <a href="https://gds.blog.gov.uk/2019/12/19/making-gov-uk-more-than-a-website/">
       Making GOV.UK more than a website
      </a>
     </li>
     <li>
      <a href="https://docs.publishing.service.gov.uk/manual/schemas.html">
       What data GOV.UK exposes as schema.org structured data
      </a>
     </li>
     <li>
      <a href="https://digital.gov/2020/05/11/experimenting-with-specialannouncement-markup/">
       USA.gov: Experimenting with SpecialAnnouncement Markup
      </a>
     </li>
     <li>
      <a href="https://www.searchenginejournal.com/google-structured-data-preference/297479/">
       Google On Which Structured Data it Prefers: JSON-LD or Microdata?
      </a>
     </li>
     <li>
      <a href="https://www.w3.org/TR/rdf11-primer/">
       W3C RDF 1.1 primer
      </a>
     </li>
     <li>
      <a href="	https://www.schemaapp.com/newsletter/measuring-results-schema-org-markup/">
       Measuring results from Schema.org markup JSON-LD
      </a>
     </li>
    </ul>
   </figure>
  </p>
 </section>
</div>


