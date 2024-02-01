---
altLangPage: https://conception.canada.ca/configurations-conception-communes/alertes-contextuelles.html
date: null
dateModified: '2022-08-24'
description: null
title: Contextual alerts
---


<div class="row">
 <div class="col-md-12 pull-left">
  <ul class="list-inline small mrgn-bttm-sm" id="list-inline-desktop-only" style="line-height:1.65em">
   <li class="mrgn-rght-lg">
    Last updated: 2022-08-24
   </li>
  </ul>
 </div>
</div>

<section>
 <p>
  Alerts are short, prominent notices meant to draw attention to an important message or change. They are often time-sensitive. The label, colour, and icon indicate the type of message and its urgency.
 </p>
 <div class="pattern-demo mrgn-bttm-md">
  <section class="provisional alert alert-danger">
   <h3>
    Alert heading
   </h3>
   <p>
    Alert description
   </p>
  </section>
 </div>
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
  <p>
   Use contextual alerts to:
  </p>
  <ul>
   <li>
    bring a person’s attention to an important change at the page or subsection level like a service or site outage
   </li>
   <li>
    draw attention to important recent or upcoming changes to a process or service
   </li>
   <li>
    provide the result of a user-action, for example, confirm success, or notify a person of an error
   </li>
   <li>
    warn a person of a consequence of an action or inaction related to their task
   </li>
  </ul>
  <p>
   To use contextual alerts during urgent service disruptions, follow these guidelines:
  </p>
  <ul>
   <li>
    <a href="../crisis/alerts.html">
     Canada.ca alerts and service disruptions
    </a>
   </li>
  </ul>
 </section>
 <section>
  <h2 id="avoid">
   What to avoid
  </h2>
  <p>
   Do not use contextual alerts:
  </p>
  <ul>
   <li>
    to provide information about a normal step in a process or task
   </li>
   <li>
    to simply add emphasis to content
   </li>
   <li>
    in cases where a warning is neither high risk nor frequently experienced
   </li>
   <li>
    to create labels, use this component instead:
    <ul>
     <li>
      <a href="https://design.canada.ca/common-design-patterns/labels.html">
       label pattern
      </a>
     </li>
    </ul>
   </li>
  </ul>
 </section>
 <section>
  <h2 id="how">
   How to implement
  </h2>
  <p>
   Write alert text for a grade 6 to 8 reading level.
  </p>
  <p>
   Keep alert text very brief. Provide further details in the appropriate section or page.
  </p>
  <p>
   Remove alert text once the issue is resolved or enough time has passed that the information provided is no longer new.
  </p>
  <p>
   Strictly limit the number of alerts on the page to avoid alert fatigue.
  </p>
  <p>
   Place the alert in the appropriate context:
  </p>
  <dl class="dl-horizontal">
   <dt>
    Applies to the entire site
   </dt>
   <dd>
    Place it at the top of the page above the main heading
   </dd>
   <dt>
    Applies to the page
   </dt>
   <dd>
    Place it underneath the page heading
   </dd>
   <dt>
    Applies to a subsection of the page
   </dt>
   <dd>
    Place it within that subsection, generally underneath the subsection heading or between 2 paragraphs
   </dd>
  </dl>
  <p>
   Use the appropriate type of alert:
  </p>
  <ol>
   <li>
    <a href="#danger">
     Danger alert
    </a>
   </li>
   <li>
    <a href="#warning">
     Warning alert
    </a>
   </li>
   <li>
    <a href="#info">
     Info alert
    </a>
   </li>
   <li>
    <a href="#success">
     Success alert
    </a>
   </li>
  </ol>
  <h3 id="danger">
   1. Danger alert
  </h3>
  <p>
   <strong>
    When to use:
   </strong>
   Use the danger alert to draw attention to a situation that could place someone in danger, such as a do not travel warning. You can also use it to alert a person of a technical issue that could cause them to be unable to complete their task, such as an invalid submission of data in a form.
  </p>
  <div class="pattern-demo mrgn-bttm-md">
   <section class="provisional alert alert-danger">
    <h3>
     If pregnant or considering pregnancy - Notice regarding both partners
    </h3>
    <p>
     Avoid travel to Costa Rica if you are pregnant or planning to conceive a child in the next 3 months.
    </p>
   </section>
  </div>
  <details>
   <summary>
    Code
   </summary>
   <pre><code>&lt;section class="alert alert-danger"&gt;
  &lt;h3&gt;If pregnant or considering pregnancy - Notice regarding both partners&lt;/h3&gt;
  &lt;p&gt;Avoid travel to Costa Rica if you are pregnant or planning to conceive a child in the next 3 months.&lt;/p&gt;
&lt;/section&gt;</code></pre>
  </details>
 </section>
 <section>
  <h3 id="warning">
   2. Warning alert
  </h3>
  <p>
   <strong>
    When to use:
   </strong>
   Use the warning alert to draw attention to:
  </p>
  <ul>
   <li>
    a possible consequence of an action or inaction, such as legal penalty that could apply
   </li>
   <li>
    the date of an upcoming change to a policy or process that will affect a significant number of people, such as a change to travel requirements
   </li>
  </ul>
  <div class="pattern-demo mrgn-bttm-md">
   <section class="provisional alert alert-warning">
    <h3>
     Changes to impaired driving and cannabis-related crime laws
    </h3>
    <p>
     New penalties for impaired driving and cannabis-related crimes may affect your immigration status in Canada. If you commit one of these crimes, you may not be able to come to or stay in Canada.
    </p>
    <p>
     <a href="https://www.canada.ca/en/immigration-refugees-citizenship/news/notices/impaired-driving-cannabis-penalties-affect-immigration-status.html">
      New penalties and how you could be afected
     </a>
    </p>
   </section>
  </div>
  <details>
   <summary>
    Code
   </summary>
   <pre><code>&lt;section class="alert alert-warning"&gt;
 &lt;h3&gt;Changes to impaired driving and cannabis-related crime laws&lt;/h3&gt;
 &lt;p&gt;New penalties for impaired driving and cannabis-related crimes may affect your immigration status in Canada. If you commit one of these crimes, you may not be able to come to or stay in Canada.&lt;/p&gt;
 &lt;p&gt;&lt;a href="https://www.canada.ca/en/immigration-refugees-citizenship/news/notices/impaired-driving-cannabis-penalties-affect-immigration-status.html"&gt;New penalties and how you could be afected&lt;/a&gt;&lt;/p&gt;
&lt;/section&gt;</code></pre>
  </details>
  <br/>
  <div class="pattern-demo mrgn-bttm-md">
   <section class="provisional alert alert-warning">
    <p>
     <strong>
      Starting April 1, 2022,
     </strong>
     pre-entry tests will no longer be required for fully vaccinated travellers entering Canada by land, air, or water. Until then, follow the pre-entry test requirements.
    </p>
    <p>
     <a href="https://www.canada.ca/en/public-health/news/2022/03/government-of-canada-will-remove-pre-entry-test-requirement-for-fully-vaccinated-travellers-on-april-1.html">
      News release
     </a>
    </p>
   </section>
  </div>
  <details>
   <summary>
    Code
   </summary>
   <pre><code>&lt;section class="alert alert-warning"&gt;

&lt;p&gt;&lt;strong&gt;Starting April 1, 2022,&lt;/strong&gt; pre-entry tests will no longer be required for fully vaccinated travellers entering Canada by land, air, or water. Until then, follow the pre-entry test requirements.&lt;/p&gt;
&lt;p&gt;&lt;a href="https://www.canada.ca/en/public-health/news/2022/03/government-of-canada-will-remove-pre-entry-test-requirement-for-fully-vaccinated-travellers-on-april-1.html"&gt;News release&lt;/a&gt;&lt;/p&gt;
&lt;/section&gt;</code></pre>
  </details>
 </section>
 <section>
  <h3 id="info">
   3. Info alert
  </h3>
  <p>
   <strong>
    When to use:
   </strong>
   Use the info alert to draw attention to a clarification of surrounding content or helpful advice, such as the number of weeks it will take to receive a refund when an application is sent by mail vs by phone.
  </p>
  <div class="pattern-demo mrgn-bttm-md">
   <section class="provisional alert alert-info">
    <h3>
     Current status of the call for applications: Closed
    </h3>
    <p>
     Thank you for your interest in Canada Summer Jobs. Applications are now closed.
    </p>
   </section>
  </div>
  <details>
   <summary>
    Code
   </summary>
   <pre><code>&lt;section class="alert alert-info"&gt;
  &lt;h3&gt;Current status of the call for applications: Closed&lt;/h3&gt;
  &lt;p&gt;Thank you for your interest in Canada Summer Jobs. Applications are now closed.&lt;/p&gt;
&lt;/section&gt;</code></pre>
  </details>
 </section>
 <section>
  <h3 id="success">
   4. Success alert
  </h3>
  <p>
   <strong>
    When to use:
   </strong>
   Use success alert to draw attention to a successful action, such as to confirm a submission or the completion of a task.
  </p>
  <div class="pattern-demo mrgn-bttm-md">
   <section class="provisional alert alert-success">
    <h3>
     Your request for publicly available data from the list of charities has been successful
    </h3>
    <p>
     The turnaround time to process your request may take up to four (4) weeks. We will contact you if we need more information.
    </p>
   </section>
  </div>
  <details>
   <summary>
    Code
   </summary>
   <pre><code>&lt;section class="alert alert-success"&gt;
  &lt;h3&gt;Your request for publicly available data from the List of charities has been successful&lt;/h3&gt;
  &lt;p&gt;The turnaround time to process your request may take up to four (4) weeks. We will contact you if we need more information.&lt;/p&gt;
&lt;/section&gt;</code></pre>
  </details>
 </section>
 <h2 id="research">
  Research and blog posts
 </h2>
 <p>
  This style of alert was used successfully during a project to improve content on travel advisories:
 </p>
 <ul>
  <li>
   <a href="https://blog.canada.ca/2022/07/28/news-releases">
    Using alerts to keep news releases and web content in sync
   </a>
  </li>
  <li>
   <a href="{{ site.url }}/research-summaries/travel-advice-research-summary.html">
    Research summary: Travel advice and advisories
   </a>
  </li>
  <li>
   <a href="https://blog.canada.ca/2020/07/15/alert-fatigue">
    Alert fatigue
   </a>
  </li>
 </ul>
 <h2 id="latest">
  Latest changes
 </h2>
 <section>
  <dl class="dl-horizontal">
   <dt>
    <time class="link-muted" datetime="2022-05-10">
     2022-05-10
    </time>
   </dt>
   <dd>
    Added an additional warning alert example that includes a date.
    <br/>
    <br/>
    Added link to a blog post on alert fatigue.
    <br/>
    <br/>
    Adjusted definition and implementation advice.
   </dd>
  </dl>
  <dl class="dl-horizontal">
   <dt>
    <time class="link-muted" datetime="2020-12-18">
     2022-08-24
    </time>
   </dt>
   <dd>
    Promoted the beta alert pattern to the stable alert pattern.
   </dd>
  </dl>
 </section>
</section>





