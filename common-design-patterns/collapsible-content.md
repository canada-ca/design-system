---
altLangPage: https://conception.canada.ca/configurations-conception-communes/contenu-reductible.html
date: null
dateModified: '2021-04-22'
description: null
title: Expand/Collapse design pattern
---


<div>
 
 <p>
  The expand/collapse pattern (also known as accordion) allows content to be hidden until requested. The pattern consists of a trigger link that shows or hides the content.
 </p>
 <div class="pattern-demo mrgn-bttm-md">
  <p>
   Example:
  </p>
  <details>
   <summary>
    You must click on this area to expand and collapse the content
   </summary>
   <p>
    This text is hidden until it is revealed.
   </p>
  </details>
 </div>
 <h2>
  On this page
 </h2>
 <ul>
  <li>
   <a href="#rationale">
    When to use
   </a>
  </li>
  <li>
   <a href="#cautions">
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
   <a href="#changes">
    Latest changes
   </a>
  </li>
  <li>
   <a href="#discuss">
    Discussion
   </a>
  </li>
 </ul>
 <section>
  <h2 id="rationale">
   When to use
  </h2>
  <p>
   The expand/collapse pattern can be used in 2 situations:
  </p>
  <h3>
   1. Presenting a choice between mutually exclusive answers
  </h3>
  <p>
   Use this pattern when people need to get different answers depending on their situation and when these answers are mutually exclusive.
  </p>
  <p>
   This reduces the risk of having people wrongly think they got the answer that applies to their situation.
  </p>
  <h3>
   2. Presenting secondary information
  </h3>
  <p>
   Use this pattern to prevent secondary content from interfering with the main task.
  </p>
  <p>
   This can be content that applies to most people, but that only a few people may need to use (for example, a privacy statement or additional details not needed to accomplish the main task).
  </p>
  <p>
   It can also be content that applies only to a minority of people (such as when there is specific information for a specific audience).
  </p>
 </section>
 <section>
  <h2 id="cautions">
   What to avoid
  </h2>
  <p>
   Don't use this pattern if:
  </p>
  <ul>
   <li>
    the majority of people need the content to accomplish the main task (unless the answers are mutually exclusive)
   </li>
   <li>
    people need to answer several questions to get the answer that applies to them (use
    <a href="https://design.canada.ca/common-design-patterns/interactive-questions.html">
     interactive questions
    </a>
    instead)
   </li>
   <li>
    one of the mutually exclusive answers has multiple sub-tasks or more than one page of supporting content (use
    <a href="https://design.canada.ca/common-design-patterns/interactive-questions.html">
     interactive questions
    </a>
    instead)
   </li>
  </ul>
 </section>
 <section>
  <h2 id="how">
   How to implement
  </h2>
  <h3>
   Presenting a choice between mutually exclusive answers
  </h3>
  <div class="pattern-demo mrgn-bttm-md">
   <h3>
    Determine if you are in a shared custody situation
   </h3>
   <p>
    Does the child spend their time:
   </p>
   <ul class="list-unstyled">
    <li>
     <details>
      <summary>
       about equally between both parents
      </summary>
      <p>
       If the child shares their time about equally between the parents, then both parents are considered to have
       <strong>
        shared custody
       </strong>
       of that child...
      </p>
     </details>
    </li>
    <li>
     <details>
      <summary>
       mostly with you
      </summary>
      <p>
       If the child lives with you most of the time, you are considered to have
       <strong>
        primary custody
       </strong>
       for the purposes of the Canada child benefit...
      </p>
     </details>
    </li>
    <li>
     <details>
      <summary>
       mostly with the other parent
      </summary>
      <p>
       If the child lives with the other parent most of the time, the other parent is considered to have
       <strong>
        primary custody
       </strong>
       for the purposes of the Canada child benefit...
      </p>
     </details>
    </li>
   </ul>
  </div>
  <details>
   <summary>
    Code
   </summary>
   <pre class="prettyprint"><code>&lt;h3&gt;Determine if you are in a shared custody situation&lt;/h3&gt;
&lt;p&gt;Does the child spend their time:&lt;/p&gt;
&lt;ul class="list-unstyled"&gt;
 &lt;li&gt;
  &lt;details&gt;
   &lt;summary&gt;about equally between both parents&lt;/summary&gt;
   &lt;p&gt;If the child shares their time about equally between the parents, then both parents are considered to have &lt;strong&gt;shared custody&lt;/strong&gt; of that child...&lt;/p&gt;
  &lt;/details&gt;
 &lt;/li&gt;
 &lt;li&gt;
  &lt;details&gt;
   &lt;summary&gt;mostly with you&lt;/summary&gt;
   &lt;p&gt;If the child lives with you most of the time, you are considered to have &lt;strong&gt;primary custody&lt;/strong&gt; for the purposes of the Canada child benefit...&lt;/p&gt;
  &lt;/details&gt;
 &lt;/li&gt;
 &lt;li&gt;
  &lt;details&gt;
   &lt;summary&gt;mostly with the other parent&lt;/summary&gt;
   &lt;p&gt;If the child lives with the other parent most of the time, the other parent is considered to have &lt;strong&gt;primary custody&lt;/strong&gt; for the purposes of the Canada child benefit...&lt;/p&gt;
  &lt;/details&gt;
 &lt;/li&gt;
&lt;/ul&gt;</code></pre>
  </details>
  <h3>
   Presenting secondary information
  </h3>
  <div class="pattern-demo mrgn-bttm-md">
   <h3>
    Estimate your payments
   </h3>
   <p>
    Use the estimator to help you plan your budget.
   </p>
   <p>
    For example, you can estimate what amount you would get if:
   </p>
   <ul>
    <li>
     you have a new child
    </li>
    <li>
     your income changes
    </li>
    <li>
     you start or end shared custody
    </li>
   </ul>
   <details>
    <summary>
     See the math behind Canada child benefit payments
    </summary>
    <h3>
     How are payments calculated
    </h3>
    <p>
     Every month, Canada child benefit payments are adjusted based on:
    </p>
    <ul>
     <li>
      the number of children in your care
     </li>
     <li>
      the age of your children
     </li>
     <li>
      your marital status
     </li>
     <li>
      your family net income from the previous year
     </li>
    </ul>
    <p>
     ...
    </p>
   </details>
  </div>
  <details>
   <summary>
    Code
   </summary>
   <pre class="prettyprint"><code>&lt;h3&gt;Estimate your payments&lt;/h3&gt;
&lt;p&gt;Use the estimator to help you plan your budget.&lt;/p&gt;
&lt;p&gt;For example, you can estimate what amount you would get if:&lt;/p&gt;
&lt;ul&gt;
 &lt;li&gt;you have a new child&lt;/li&gt;
 &lt;li&gt;your income changes&lt;/li&gt;
 &lt;li&gt;if you start or end shared custody&lt;/li&gt;
&lt;/ul&gt;
&lt;details&gt;
 &lt;summary&gt;See the math behind Canada child benefit payments&lt;/summary&gt;
 &lt;h3&gt;How are payments calculated&lt;/h3&gt;
 &lt;p&gt;Every month, Canada child benefit payments are adjusted based on:&lt;/p&gt;
 &lt;ul&gt;
  &lt;li&gt;the number of children in your care&lt;/li&gt;
  &lt;li&gt;the age of your children&lt;/li&gt;
  &lt;li&gt;your marital status&lt;/li&gt;
  &lt;li&gt;your family net income from the previous year&lt;/li&gt;
 &lt;/ul&gt;
 &lt;p&gt;...&lt;/p&gt;
&lt;/details&gt;
        </code></pre>
  </details>
 </section>
 <section>
  <h2 id="research">
   Research and blog posts
  </h2>
  <p>
   We successfully tested the use of the expand/collapse pattern to encourage people to choose between mutually exclusive options during 2 optimization projects with the Canada Revenue Agency.
  </p>
  <ul>
   <li>
    <a href="https://blog.canada.ca/2020/09/18/expand-collapse.html">
     Using expand/collapse for making choices
    </a>
    (blog post)
   </li>
   <li>
    <a href="{{ site.url }}/research-summaries/cra-contact-us-research-summary.html">
     Research summary: Contact the CRA
    </a>
   </li>
  </ul>
  <h2 id="changes">
   Latest changes
  </h2>
  <p>
   <strong>
    2019-11-28:
   </strong>
   guidance was changed to allow the use of expand/collapse for mutually exclusive answers.
  </p>
 </section>
</div>




