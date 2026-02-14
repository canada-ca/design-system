---
altLangPage: https://conception.canada.ca/configurations-conception-communes/contenu-reductible.html
date: 2021-04-22
dateModified: 2025-11-25
description: The expand/collapse pattern (also known as accordion) allows content to be hidden until requested
title: Expand/Collapse design pattern
---
<span class="wb-prettify lang-html"></span>

<p>The expand/collapse pattern (also known as accordion) allows content to be hidden until requested. The pattern consists of a trigger link that shows or hides the content.</p>
<div class="pattern-demo mrgn-bttm-md">
  <p>Example:</p>
  <details>
    <summary>You must click on this area to expand and collapse the content</summary>
    <p>This text is hidden until it is revealed.</p>
  </details>
</div>

<h2>On this page</h2>
<ul>
  <li><a href="#rationale">When to use</a></li>
  <li><a href="#cautions">What to avoid</a></li>
  <li><a href="#design-specifications">Design specifications</a></li>
  <li><a href="#how">How to implement</a></li>
  <li><a href="#research">Research and rationale</a></li>
  <li><a href="#changes">Latest changes</a></li>
</ul>

<section>
  <h2 id="rationale">When to use</h2>
  <p>The expand/collapse pattern can be used in two situations:</p>

  <h3>1. Presenting a choice between mutually exclusive answers</h3>
  <p>Use this pattern when people need to get different answers depending on their situation and when these answers are mutually exclusive.</p>
  <p>This reduces the risk of having people wrongly think they got the answer that applies to their situation.</p>

  <h3>2. Presenting secondary information</h3>
  <p>Use this pattern to prevent secondary content from interfering with the main task.</p>
  <p>This can be content that applies to most people, but that only a few people may need to use (for example, a privacy statement or additional details not needed to accomplish the main task).</p>
  <p>It can also be content that applies only to a minority of people (such as when there is specific information for a specific audience).</p>

  <h3>Using expand all/collapse all buttons</h3>
  <figure>
    <img src="{{ site.url }}/images/common-design-patterns/collapsible-content-expand-collapse-all.png" alt="Long description below the image">
    <details>
      <summary>Long description</summary>
      <p>Two grey buttons positioned side-by-side. Both have grey backgrounds. The button on the left has the text: Expand all. The button on the right has the text: Collapse all.</p>
    </details>
  </figure>
  <p>The expand all/collapse all option should only be used if it may benefit users to expose all information at once. This may include on a page containing many expand/collapse patterns with:</p>
  <ul>
    <li>secondary information, where exposing all information at once makes it easier to scan for something specific that may not be obvious based on the title of the expand/collapse
      <ul>
        <li>example: a latest updates page where the title of the expand/collapses are dates with the specific changes contained within the expand/collapse</li>
      </ul>
    </li>
    <li>potential answers, where more than one might apply to the user. In this case, showing all answers expanded at once may help the user quickly scan and find what they need</li>
  </ul>
</section>

<section>
  <h2 id="cautions">What to avoid</h2>
  <p>Don't use this pattern if:</p>
  <ul>
    <li>the majority of people need the content to accomplish the main task (unless the answers are mutually exclusive)</li>
    <li>people need to answer several questions to get the answer that applies to them (use <a href="https://design.canada.ca/common-design-patterns/interactive-questions.html">interactive questions</a> instead)</li>
    <li>one of the mutually exclusive answers has multiple sub-tasks or more than one page of supporting content (use <a href="https://design.canada.ca/common-design-patterns/interactive-questions.html">interactive questions</a> instead)</li>
  </ul>
</section>

<section>
  <h2 id="design-specifications">Design specifications</h2>

  <h3>Expand all/collapse all pattern</h3>
  <p>By default, all patterns should be closed.</p>
  <p><a href="#code-expand-collapse-pattern">Copy the code for the expand all/collapse all pattern.</a></p>

  <h3>Expand all/collapse all buttons</h3>
  <p>When clicked:</p>
  <ul>
    <li>expand all should open all the patterns, exposing the content within</li>
    <li>collapse all should close all the patterns</li>
  </ul>
  <p><a href="#code-expand-collapse-pattern">Copy the code for the expand all/collapse all buttons.</a></p>
</section>

<section>
  <h2 id="how">How to implement</h2>

  <h3>Implementation notes</h3>
  <ul>
    <li>The content of an expand/collapse is picked by web browsers for search purposes</li>
    <li>Modern web browsers support the find-in-page function, even if the expand/collapse is not open. It will auto-expand to show results.</li>
    <li>Clicking to open an expand/collapse is equally accessible as clicking a link for users</li>
  </ul>

  <h3>Implementations</h3>
  <p>Determine what best suits the type of page you're creating.</p>
  <ul>
    <li><a href="https://wet-boew.github.io/wet-boew/docs/ref/details-close/details-close-en.html">Details closed - Plugins - Documentation - Web Experience Toolkit</a></li>
    <li><a href="https://design-system.alpha.canada.ca/en/components/details/">Details - GC Design System</a></li>
    <li><a href="https://wet-boew.github.io/GCWeb/common/button/button-en.html#bghorizontal">Button groups (horizontal) - GCWeb</a></li>
  </ul>

  <h3>Presenting a choice between mutually exclusive answers</h3>
  <div class="pattern-demo mrgn-bttm-md">
    <h3>Determine if you are in a shared custody situation</h3>
    <p>Does the child spend their time:</p>
    <ul class="list-unstyled">
      <li>
        <details>
        <summary>about equally between both parents</summary>
        <p>If the child shares their time about equally between the parents, then both parents are considered to have <strong>shared custody</strong> of that child...</p>
        </details>
      </li>
      <li>
        <details>
        <summary>mostly with you</summary>
        <p>If the child lives with you most of the time, you are considered to have <strong>primary custody</strong> for the purposes of the Canada child benefit...</p>
        </details>
      </li>
      <li>
        <details>
        <summary>mostly with the other parent</summary>
        <p>If the child lives with the other parent most of the time, the other parent is considered to have <strong>primary custody</strong> for the purposes of the Canada child benefit...</p>
        </details>
      </li>
    </ul>
  </div>
  <details>
    <summary>Code</summary>
    <pre class="prettyprint lang-html"><code>&lt;h3&gt;Determine if you are in a shared custody situation&lt;/h3&gt;
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

  <h3>Presenting secondary information</h3>
  <div class="pattern-demo mrgn-bttm-md">

    <h3>Estimate your payments</h3>
    <p>Use the estimator to help you plan your budget.</p>
    <p>For example, you can estimate what amount you would get if:</p>
    <ul>
      <li>you have a new child</li>
      <li>your income changes</li>
      <li>you start or end shared custody</li>
    </ul>
    <details>
      <summary>See the math behind Canada child benefit payments</summary>
      <h3>How are payments calculated</h3>
      <p>Every month, Canada child benefit payments are adjusted based on:</p>
      <ul>
        <li>the number of children in your care</li>
        <li>the age of your children</li>
        <li>your marital status</li>
        <li>your family net income from the previous year</li>
      </ul>
      <p>...</p>
    </details>
  </div>
  <details>
    <summary>Code</summary>
    <pre class="prettyprint lang-html"><code>&lt;h3&gt;Estimate your payments&lt;/h3&gt;
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
&lt;/details&gt;</code></pre>
  </details>

  <h3>With expand all / collapse all</h3>
  <div class="pattern-demo mrgn-bttm-md">
    <h4>[Information by category]</h4>
    <div class="btn-group mrgn-bttm-sm mrgn-tp-md">
      <button type="button" class="btn btn-default wb-toggle" data-toggle="{&quot;selector&quot;: &quot;details&quot;, &quot;parent&quot;: &quot;#expand-collapse&quot;, &quot;type&quot;: &quot;on&quot;}">Expand all</button>
      <button type="button" class="btn btn-default wb-toggle" data-toggle="{&quot;selector&quot;: &quot;details&quot;, &quot;parent&quot;: &quot;#expand-collapse&quot;, &quot;type&quot;: &quot;off&quot;}">Collapse all</button>
    </div>
    <div id="expand-collapse">
      <details>
        <summary>Topic 1 that is applicable to many</summary>
        <ul>
          <li>[Task link 1]</li>
          <li>[Task link 2]</li>
          <li>[Task link 3]</li>
          <li>...</li>
        </ul>
      </details>
      <details>
        <summary>Topic 2 that is applicable to many</summary>
        <ul>
          <li>[Task link 1]</li>
          <li>[Task link 2]</li>
          <li>[Task link 3]</li>
          <li>...</li>
        </ul>
      </details>
      <details>
        <summary>Topic 3 that is applicable to many</summary>
        <ul>
          <li>[Task link 1]</li>
          <li>[Task link 2]</li>
          <li>[Task link 3]</li>
          <li>...</li>
        </ul>
      </details>
      <details>
        <summary>...</summary>
        <p>...</p>
      </details>
    </div>
  </div>
  <details>
    <summary id="code-expand-collapse-pattern">Code</summary>
    <pre class="prettyprint lang-html"><code>&lt;h4&gt;[Information by category]&lt;/h4&gt;
&lt;div class="btn-group mrgn-bttm-sm mrgn-tp-md"&gt;
  &lt;button type="button" class="btn btn-default wb-toggle" data-toggle="{&amp;quot;selector&amp;quot;: &amp;quot;details&amp;quot;, &amp;quot;parent&amp;quot;: &amp;quot;#expand-collapse&amp;quot;, &amp;quot;type&amp;quot;: &amp;quot;on&amp;quot;}"&gt;Expand all&lt;/button&gt;

  &lt;button type="button" class="btn btn-default wb-toggle" data-toggle="{&amp;quot;selector&amp;quot;: &amp;quot;details&amp;quot;, &amp;quot;parent&amp;quot;: &amp;quot;#expand-collapse&amp;quot;, &amp;quot;type&amp;quot;: &amp;quot;off&amp;quot;}"&gt;Collapse all&lt;/button&gt;
&lt;/div&gt;
&lt;div id="expand-collapse"&gt;
  &lt;details&gt;
    &lt;summary&gt;Topic 1 that is applicable to many&lt;/summary&gt;
    &lt;ul&gt;
      &lt;li&gt;[Task link 1]&lt;/li&gt;
      &lt;li&gt;[Task link 2]&lt;/li&gt;
      &lt;li&gt;[Task link 3]&lt;/li&gt;
      &lt;li&gt;...&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/details&gt;
  &lt;details&gt;
    &lt;summary&gt;Topic 2 that is applicable to many&lt;/summary&gt;
    &lt;ul&gt;
      &lt;li&gt;[Task link 1]&lt;/li&gt;
      &lt;li&gt;[Task link 2]&lt;/li&gt;
      &lt;li&gt;[Task link 3]&lt;/li&gt;
      &lt;li&gt;...&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/details&gt;
  &lt;details&gt;
    &lt;summary&gt;Topic 3 that is applicable to many&lt;/summary&gt;
    &lt;ul&gt;
      &lt;li&gt;[Task link 1]&lt;/li&gt;
      &lt;li&gt;[Task link 2]&lt;/li&gt;
      &lt;li&gt;[Task link 3]&lt;/li&gt;
      &lt;li&gt;...&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/details&gt;
  &lt;details&gt;
    &lt;summary&gt;...&lt;/summary&gt;
  &lt;/details&gt;
&lt;/div&gt;</code></pre>
  </details>
</section>

<section>
  <h2 id="research">Research and rationale</h2>
  <p>We successfully tested the use of the expand/collapse pattern to encourage people to choose between mutually exclusive options during two optimization projects with the Canada Revenue Agency.</p>
  <ul>
    <li><a href="https://blog.canada.ca/2020/09/18/expand-collapse.html">Using expand/collapse for making choices</a> (blog post)</li>
    <li><a href="{{ site.url }}/research-summaries/cra-contact-us-research-summary.html">Research summary: Contact the CRA</a></li>
  </ul>
</section>

<section>
  <h2 id="changes">Latest changes</h2>
  <dl class="dl-horizontal">
    <dt><time>{{ page.dateModified }}</time></dt>
    <dd>Added information about when to include expand all/collapse all buttons. Also added implementation notes.</dd>
    <dt><time>2019-11-28</time></dt>
    <dd>Guidance was changed to allow the use of expand/collapse for mutually exclusive answers.</dd>
  </dl>
 </section>
