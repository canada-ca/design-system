---
altLangPage: https://conception.canada.ca/crise/alertes.html
date: null
dateModified: '2020-07-13'
description: null
title: Canada.ca alerts and service disruptions
---


<div>
 <p class="gc-byline mrgn-bttm-0">
  <strong>
   From:
   <a href="https://www.canada.ca/en/treasury-board-secretariat.html">
    Treasury Board of Canada Secretariat
   </a>
  </strong>
 </p>
 <p class="small">
  Last updated: 2022-05-10
 </p>
 <p>
  These recommendations will help bring consistency to each department's communications on service disruptions during a crisis.
 </p>
 <section>
  <h2>
   On this page
  </h2>
  <ul>
   <li>
    <a href="#alerts">
     How to use alerts for service disruptions
    </a>
   </li>
   <li>
    <a href="#examples">
     Examples and code
    </a>
   </li>
   <li>
    <a href="#dep-page">
     Alerts that repeat across several pages
    </a>
   </li>
  </ul>
 </section>
 <section>
  <h2 id="alerts">
   How to use alerts for service disruptions
  </h2>
  <p>
   Alerts are meant to draw attention to changes in regular content in 2 ways:
  </p>
  <ol>
   <li>
    a change to the content of the page on which the alert appears: in this case, place the alert next to the updated content
   </li>
   <li>
    a change that has been made elsewhere, such as new information being published: in this case, link to the new information from within the alert
   </li>
  </ol>
  <h3>
   What to include in alerts
  </h3>
  <p>
   Alert content should:
  </p>
  <ul>
   <li>
    be short and simple
   </li>
   <li>
    describe the impact on the user
   </li>
   <li>
    be tailored to the page on which it appears
   </li>
   <li>
    include the dates (if known) when the disruption will take place
   </li>
   <li>
    use the appropriate verb tense to reflect when the change is taking place
   </li>
   <li>
    use links sparingly - if a link is needed, only include one
   </li>
  </ul>
  <h3>
   Limit use of alerts
  </h3>
  <p>
   Be aware that alert fatigue reduces the effectiveness of the alert over time. The more people see alerts and warning messages the less receptive they are to them. To avoid this, follow these guidelines:
  </p>
  <ul>
   <li>
    only use alerts on a temporary basis (for the time it takes to integrate the information or resolve the situation)
   </li>
   <li>
    limit the number of alerts on each page
   </li>
   <li>
    limit the number of alerts used across pages:
    <ul>
     <li>
      use at impacted points of service or information delivery, such as service initiation pages, contact pages, etc.
     </li>
     <li>
      avoid beyond service or information delivery points - on theme and topic pages, consider using a new doormat instead
     </li>
    </ul>
   </li>
   <li>
    save alerts for significant situations that impact most users:
    <ul>
     <li>
      on the Canada.ca home page, only use when more than 50% of the population is affected
     </li>
     <li>
      on institutional landing pages, only use when more than 40% of users are impacted
     </li>
    </ul>
   </li>
   <li>
    avoid using alerts just for styling regular content (for emphasis or highlighting)
   </li>
  </ul>
  <section>
   <h3>
    Which alert to use
   </h3>
   <dl class="dl-horizontal">
    <dt>
     Danger alert (red)
    </dt>
    <dd>
     Use only if the service is cancelled or if there's a risk to health or safety to Canadians in completing an activity.
    </dd>
    <dt>
     Warning alert (yellow)
    </dt>
    <dd>
     Use for delays, closures at certain locations, and other types of service disruptions.
    </dd>
    <dt>
     Info alert (blue)
    </dt>
    <dd>
     Use for the length of time an application method takes, changes in wait times on a phone line, messages that there is no service disruption for a particular service if that is generating inquiries.
    </dd>
    <dt>
     Success alert (green)
    </dt>
    <dd>
     Use when a service disruption is resolved.
    </dd>
   </dl>
  </section>
  <h2 id="examples">
   Examples and code
  </h2>
  <div class="well">
   <section class="alert alert-warning">
    <h3>
     Limited service availability
    </h3>
    <p>
     This service is affected by the outbreak of coronavirus (COVID-19).
    </p>
    <a href="#">
     Check service status updates
    </a>
   </section>
  </div>
  <details>
   <summary>
    HTML to code an alert
   </summary>
   <p>
    Code:
   </p>
   <pre class="prettyprint"><code>&lt;section class="alert alert-warning"&gt;
	&lt;h3&gt;Limited service availability&lt;/h3&gt;
	&lt;p&gt;This service is affected by the outbreak of coronavirus (COVID-19).&lt;/p&gt;
	&lt;a href="#"&gt;Check service status updates&lt;/a&gt;&lt;/p&gt;
&lt;/section&gt;</code></pre>
   <p>
    Change the "alert-warning" class to "alert-info", "alert-danger" or "alert-success" based on the type of alert needed.
   </p>
  </details>
  <p>
   Use the
   <a href="https://design.canada.ca/common-design-patterns/contextual-alerts.html">
    Contextual alerts pattern
   </a>
  </p>
  <h3>
   Additional examples
  </h3>
  <p>
   Alert examples on specific page types:
  </p>
  <ul>
   <li>
    <a href="https://design.canada.ca/alerts/alerts-sit.html">
     Service initiation page
    </a>
   </li>
   <li>
    <a href="https://design.canada.ca/alerts/alerts-contact.html">
     Contact page
    </a>
   </li>
   <li>
    <a href="https://design.canada.ca/alerts/alerts-ilp.html">
     Beta institutional landing page
    </a>
   </li>
   <li>
    <a href="https://design.canada.ca/alerts/alerts-stable-ip.html">
     Institutional profile
    </a>
   </li>
  </ul>
 </section>
 <section>
  <h2 id="dep-page">
   Alerts that repeat across several pages
  </h2>
  <p>
   If you need to add the same alert on many different pages, it may make sense to make a single page that all these alerts can link to.
  </p>
  <p>
   The central page will:
  </p>
  <ul>
   <li>
    summarize the change in plain language
   </li>
   <li>
    explain the impact on the users of affected services
   </li>
   <li>
    be updated as soon as new information arises
   </li>
  </ul>
  <p>
   The breadcrumb for this central page should lead to the Government of Canada's main response page for the crisis.
  </p>
  <h3>
   How this helps
  </h3>
  <ul>
   <li>
    prevents scattered crisis and service disruption pages
   </li>
   <li>
    encourages a coordinated approach within each department and across the Government of Canada
   </li>
   <li>
    reduces the work required to maintain various alerts and related updates
   </li>
  </ul>
 </section>
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
    Revised headings to say “service disruption” rather than “crisis”.
    <br/>
    <br/>
    Added a recommendation to include dates in the alert and use the correct verb tense.
   </dd>
  </dl>
 </section>
</div>


