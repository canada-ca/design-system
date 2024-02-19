---
altLangPage: https://conception.canada.ca/configurations-conception-communes/nouveautes.html
date: null
dateModified: '2019-11-28'
description: null
title: Latest news
---


<div class="row">
 <div class="col-md-12 pull-left">
  <ul class="list-inline small mrgn-bttm-sm" id="list-inline-desktop-only" style="line-height:1.65em">
   <li class="mrgn-rght-lg">
    Last updated: 2022-09-23
   </li>
  </ul>
 </div>
</div>

<section>
 <p>
  The Latest news pattern features the most recent news items posted by the institution, organization or entity.
 </p>
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
    <a href="#cautions">
     What to avoid
    </a>
   </li>
   <li>
    <a href="#how">
     How to implement
    </a>
   </li>
  </ul>
 </section>
 <section>
  <h2 id="when">
   When to use
  </h2>
  <p>
   Use this pattern on the following templates:
  </p>
  <ul>
   <li>
    <a href="../mandatory-templates/institutional-profile-pages.html">
     Institutional landing page
    </a>
   </li>
   <li>
    <a href="../mandatory-templates/ministerial-profile-pages.html">
     Ministerial profile
    </a>
   </li>
  </ul>
 </section>
 <section>
  <h2 id="cautions">
   What to avoid
  </h2>
  <p>
   Make sure this pattern doesn't get in the way of top task content.
  </p>
 </section>
 <section>
  <h2 id="how">
   How to implement
  </h2>
  <p>
   You can use either the
   <strong>
    beta
   </strong>
   or the
   <strong>
    stable
   </strong>
   version of this pattern.
  </p>
  <h3>
   Beta latest news
  </h3>
  <p>
   The beta version is used on the institutional landing page. The code is still under review. It may still be subject to minor changes.
  </p>
  <p>
   The beta version will eventually replace the stable version.
  </p>
  <div class="pattern-demo mrgn-bttm-md">
   <div class="container">
    <div class="row col-lg-12">
     <section class="col-md-4">
      <h2 class="h3">
       News
      </h2>
      <ul class="feeds-cont list-unstyled lst-spcd feed-active">
       <li>
        <a href="#">
         [News title]
        </a>
        <br/>
        <small class="feeds-date">
         YYYY-MM-DD HH:MM
        </small>
       </li>
       <li>
        <a href="#">
         [News title]
        </a>
        <br/>
        <small class="feeds-date">
         YYYY-MM-DD HH:MM
        </small>
       </li>
       <li>
        <a href="#">
         [News title]
        </a>
        <br/>
        <small class="feeds-date">
         YYYY-MM-DD HH:MM
        </small>
       </li>
      </ul>
      <p>
       More:
       <a class="admin" href="#">
        [Institution] news
       </a>
      </p>
     </section>
     <section class="col-md-8 gc-prtts">
      <h2 class="h3">
       Features
      </h2>
      <div class="row wb-eqht">
       <div class="col-md-6 mrgn-bttm-md">
        <a class="figcaption hght-inhrt" href="#">
         <figure class="well well-sm brdr-rds-0 hght-inhrt">
          <img alt="#" class="img-responsive full-width" src="https://via.placeholder.com/360x203/000000/FFFFFF.png"/>
          <figcaption class="h5">
           [Featured hyperlink text]
          </figcaption>
          <p>
           Brief description of the feature being promoted.
          </p>
         </figure>
        </a>
       </div>
       <div class="col-md-6 mrgn-bttm-md">
        <a class="figcaption hght-inhrt" href="https://www.canada.ca/en/revenue-agency/campaigns/my-benefits-credits.html">
         <figure class="well well-sm brdr-rds-0 hght-inhrt">
          <img alt="#" class="img-responsive full-width" src="https://via.placeholder.com/360x203/000000/FFFFFF.png"/>
          <figcaption class="h5">
           [Featured hyperlink text]
          </figcaption>
          <p>
           Brief description of the feature being promoted.
          </p>
         </figure>
        </a>
       </div>
      </div>
     </section>
     <details>
      <summary>
       Code
      </summary>
      <pre class="prettyprint"><code>&lt;div class="row col-lg-12"&gt;
&lt;section class="col-md-4 wb-feeds limit-3 gc-nws"&gt;
 &lt;h2 class="h3"&gt;News&lt;/h2&gt;
&lt;!-- demonstrates the layout - use json feed where applicable --&gt;
&lt;ul class="feeds-cont list-unstyled lst-spcd feed-active"&gt;
 &lt;li&gt;&lt;a href="#"&gt;[News title]&lt;/a&gt;&lt;br&gt; &lt;small class="feeds-date"&gt;YYYY-MM-DD HH:MM&lt;/small&gt;&lt;/li&gt;
 &lt;li&gt;&lt;a href="#"&gt;[News title]&lt;/a&gt;&lt;br&gt; &lt;small class="feeds-date"&gt;YYYY-MM-DD HH:MM&lt;/small&gt;&lt;/li&gt;
 &lt;li&gt;&lt;a href="#"&gt;[News title]&lt;/a&gt;&lt;br&gt; &lt;small class="feeds-date"&gt;YYYY-MM-DD HH:MM&lt;/small&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;!-- json feed for news example
&lt;ul class="feeds-cont list-unstyled lst-spcd"&gt;
 &lt;li&gt; &lt;a data-ajax="https://www.canada.ca/content/canadasite/api/nws/fds/en/web-feeds/revenue-agency.json" href="https://www.canada.ca/en/revenue-agency.atom.xml" rel="external"&gt;Canada Revenue Agency news items&lt;/a&gt; &lt;/li&gt;
 &lt;/ul&gt;
--&gt;
&lt;p&gt;More: &lt;a href="#" class="admin"&gt;[Institution] news&lt;/a&gt;&lt;/p&gt;
&lt;/section&gt;
&lt;section class="col-md-8 gc-prtts"&gt;
 &lt;h2 class="h3"&gt;Features&lt;/h2&gt;
  &lt;div class="row wb-eqht"&gt;
   &lt;div class="col-md-6 mrgn-bttm-md"&gt;
    &lt;a class="figcaption hght-inhrt" href="#"&gt;
     &lt;figure class="well well-sm brdr-rds-0 hght-inhrt"&gt;&lt;img class="img-responsive full-width" alt="#" src="https://wet-boew.github.io/themes-dist/GCWeb/img/360x203.png"&gt;
      &lt;figcaption class="h5"&gt;[Featured hyperlink text]&lt;/figcaption&gt;
        &lt;p&gt;Brief description of the feature being promoted.&lt;/p&gt;
        &lt;/figure&gt;
       &lt;/a&gt;
      &lt;/div&gt;
    &lt;div class="col-md-6 mrgn-bttm-md"&gt;
     &lt;a class="figcaption hght-inhrt" href="https://www.canada.ca/en/revenue-agency/campaigns/my-benefits-credits.html"&gt;
     &lt;figure class="well well-sm brdr-rds-0 hght-inhrt"&gt;&lt;img class="img-responsive full-width" alt="#" src="https://wet-boew.github.io/themes-dist/GCWeb/img/360x203.png"&gt;
      &lt;figcaption class="h5"&gt;[Featured hyperlink text]&lt;/figcaption&gt;
      &lt;p&gt;Brief description of the feature being promoted.&lt;/p&gt;
        &lt;/figure&gt;
     &lt;/a&gt;
     &lt;/div&gt;
    &lt;/div&gt;
  &lt;/section&gt;
 &lt;/div&gt;
&lt;/div&gt;</code></pre>
     </details>
    </div>
    <div class="clearfix">
    </div>
    <h3>
     Stable latest news
    </h3>
    <p>
     The beta version will eventually replace the stable version.
    </p>
    <details>
     <summary>
      Guidance for the latest news stable version
     </summary>
     <ul>
      <li>
       It features the most recent news items posted by the entity
      </li>
      <li>
       The heading is labelled “Latest”
      </li>
      <li>
       2 of the featured news items must include an image, a headline hyperlink, additional information and a description text:
       <ul>
        <li>
         can include promotional content, and be prioritized at the institution’s discretion
        </li>
        <li>
         keep description text short and concise
        </li>
       </ul>
      </li>
      <li>
       The types of news products that must be listed as text-only are limited to only those available through news.gc.ca:
       <ul>
        <li>
         media advisories
        </li>
        <li>
         backgrounders
        </li>
        <li>
         news releases
        </li>
        <li>
         speeches
        </li>
        <li>
         statements
        </li>
       </ul>
      </li>
      <li>
       Consult the
       <a href="http://wet-boew.github.io/themes-dist/GCWeb/index-en.html">
        Canada.ca GitHub page
       </a>
       for details on image sizing
      </li>
     </ul>
     <section>
      <h2>
       Working example
      </h2>
      <ul>
       <li>
        <a href="https://wet-boew.github.io/GCWeb/templates/institutional/institution-en.html">
         Institutional profile template
        </a>
       </li>
      </ul>
      <section class="panel panel-primary">
       <header class="panel-heading">
        <h2 class="panel-title">
         Examples
        </h2>
       </header>
       <div class="panel-body">
        <div class="row">
         <figure class="mrgn-bttm-sm">
          <figcaption class="text-center">
           <b>
            Latest news pattern: 2 images
           </b>
          </figcaption>
          <img alt="Screenshot illustrating the latest news pattern with 2 images on Canada.ca. Details on this graphic can be found in the surrounding text." class="img-responsive center-block" src="https://www.canada.ca/content/dam/tbs-sct/images/government-communications/canada-content-style-guide/latest-news-pattern-eng.jpg"/>
         </figure>
        </div>
       </div>
      </section>
     </section>
    </details>
   </div>
  </div>
 </section>
</section>
