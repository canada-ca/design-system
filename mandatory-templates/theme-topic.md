---
altLangPage: https://conception.canada.ca/modeles-obligatoire/theme-sujet.html
date: null
dateModified: '2020-06-30'
description: null
title: Theme and topic page mandatory template
---


<p class="gc-byline">
 <strong>
  From:
  <a href="https://www.canada.ca/en/treasury-board-secretariat.html">
   Treasury Board of Canada Secretariat
  </a>
 </strong>
</p>

<p>
 <span class="label label-danger">
  Mandatory
 </span>
</p>

<p>
 Theme and topic pages provide access to topics and destination pages that support task completion.
</p>

<p>
 Theme and topic pages:
</p>

<ul>
 <li>
  provide support for theme navigation rather than institutional navigation of government-wide content (see
  <a href="{{ site.url }}/architecture/organizing-content.html#toc1">
   How people find tasks: theme and institutional navigation
  </a>
  )
 </li>
 <li>
  prioritize content and navigation by presenting the most visited information and services first
 </li>
</ul>

<section>
 <h2>
  On this page
 </h2>
 <ul>
  <li>
   <a href="#use">
    When to use
   </a>
  </li>
  <li>
   <a href="#avoid">
    What to avoid
   </a>
  </li>
  <li>
   <a href="#specifications">
    How to implement
   </a>
  </li>
  <li>
   <a href="#research">
    Research
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
</section>

<section>
 <h2 id="use">
  When to use
 </h2>
 <p>
  This template must be used for the theme page and the first 2 levels of topics of each theme in the
  <a href="https://www.canada.ca/en/government/about/design-system/topic-tree-content-types.html#tree">
   Canada.ca topic tree
  </a>
  .
 </p>
 <p>
  It is optional for lower-level topics.
 </p>
</section>

<section>
 <h2 id="avoid">
  What to avoid
 </h2>
 <p>
  Pages where people can initiate a task should be considered destination content, and should not use the theme and topic page template
 </p>
 <p>
  The theme and topic page template should not be used for promotion; instead, use
  <a href="../recommended-templates/promotional-events-pages.html">
   Promotional events pages
  </a>
  or
  <a href="../recommended-templates/campaign-pages.html">
   Campaign pages
  </a>
  .
 </p>
</section>

<section>
 <h2 id="specifications">
  How to implement
 </h2>
</section>

<p>
 You can use either the
 <strong>
  beta
 </strong>
 or the
 <strong>
  stable
 </strong>
 version of this template.
</p>

<section>
 <h3>
  Beta theme and topic page
 </h3>
 <p>
  The beta version is an improvement over the stable version. The code is still under review. It may still be subject to changes.
 </p>
 <p>
  The beta version will eventually replace the stable version.
 </p>
 <p>
  You will need to apply custom CSS to use this beta version.
 </p>
 <div class="row mrgn-tp-lg mrgn-bttm-lg">
  <div class="col-xs-10 col-md-8 col-lg-8">
   <div class="gc-dwnld">
    <div class="row">
     <div class="col-xs-10 col-sm-3 col-lg-2">
      <img alt="" class="thumbnail gc-dwnld-img" height="142" src="../images/theme-topic-img-cropped.jpg" width="110">
      </img>
     </div>
     <div class="col-xs-12 col-sm-9 col-lg-10">
      <p class="mrgn-tp-md lead">
       <span>
        Beta theme and topic page
       </span>
      </p>
      <p>
       <a class="btn btn-call-to-action" href="../coded-layout/theme_topic_guidance.html">
        Beta template with guidance
       </a>
      </p>
     </div>
    </div>
   </div>
  </div>
 </div>
 <details>
  <summary>
   Code
  </summary>
  <span id="code">
  </span>
  <div class="wb-tabs">
   <div class="tabpanels">
    <details id="details-panel1">
     <summary>
      HTML
     </summary>
     <pre><code>
&lt;div class="container"&gt;
	&lt;div class="row"&gt;
		&lt;div class="col-md-6"&gt;
			&lt;h1 property="name" id="wb-cont"&gt;[Theme - Topic title]&lt;/h1&gt;
			&lt;p&gt;1-2 sentences that describe the topics and top tasks that can be accessed on this page.&lt;/p&gt;
		&lt;/div&gt;
		&lt;div class="col-md-6 mrgn-tp-sm hidden-sm hidden-xs provisional gc-topic-bg"&gt;
			&lt;div data-bgimg="img/825x200.jpg"&gt;&lt;/div&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/div&gt;
&lt;section class="well well-sm provisional gc-most-requested"&gt;
	&lt;div class="container"&gt;
		&lt;div class="row"&gt;
			&lt;div class="col-md-2"&gt;
				&lt;h2&gt;Most requested&lt;/h2&gt;
			&lt;/div&gt;
			&lt;div class="col-md-10"&gt;
				&lt;ul class="colcount-md-2"&gt;
					&lt;li&gt;&lt;a href="#"&gt;[Top task hyperlink]&lt;/a&gt;&lt;/li&gt;
					&lt;li&gt;&lt;a href="#"&gt;[Top task hyperlink]&lt;/a&gt;&lt;/li&gt;
					&lt;li&gt;&lt;a href="#"&gt;[Top task hyperlink]&lt;/a&gt;&lt;/li&gt;
					&lt;li&gt;&lt;a href="#"&gt;[Top task hyperlink]&lt;/a&gt;&lt;/li&gt;
					&lt;li&gt;&lt;a href="#"&gt;[Top task hyperlink]&lt;/a&gt;&lt;/li&gt;
					&lt;li&gt;&lt;a href="#"&gt;[Top task hyperlink]&lt;/a&gt;&lt;/li&gt;
					&lt;li&gt;&lt;a href="#"&gt;[Top task hyperlink]&lt;/a&gt;&lt;/li&gt;
				&lt;/ul&gt;
			&lt;/div&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/section&gt;
&lt;div class="container"&gt;
	&lt;section class="gc-srvinfo"&gt;
		&lt;h2 class="wb-inv"&gt;Services and information&lt;/h2&gt;
		&lt;div class="row wb-eqht-grd"&gt;
			&lt;div class="col-md-4"&gt;
				&lt;h3&gt;&lt;a href="#"&gt;[Subtopic hyperlink text with action]&lt;/a&gt;&lt;/h3&gt;
				&lt;p&gt;Summary of the information or tasks that can be accomplished on the sub-topic page. Use the following drop down to navigate to a relevant page.&lt;/p&gt;
				&lt;div class="wb-fieldflow" data-wb-fieldflow='{"inline": true, "defaultselectedlabel": false, "i18n": { "btn": "Go"} }'&gt;
					&lt;p&gt;[Navigate to a relevant page]&lt;/p&gt;
					&lt;ul&gt;
						&lt;li&gt;&lt;a href="../service-en.html"&gt;Service page&lt;/a&gt;&lt;/li&gt;
						&lt;li&gt;&lt;a href="../institutional/institution-en.html"&gt;Institutional page&lt;/a&gt;&lt;/li&gt;
						&lt;li&gt;&lt;a href="../content-en.html"&gt;Content page&lt;/a&gt;&lt;/li&gt;
					&lt;/ul&gt;
				&lt;/div&gt;
			&lt;/div&gt;
			&lt;div class="col-md-4"&gt;
				&lt;h3&gt;&lt;a href="#"&gt;[Subtopic hyperlink text]&lt;/a&gt;&lt;/h3&gt;
				&lt;p&gt;Summary of the information or tasks that can be accomplished on the sub-topic page. Remove prose or promotional messaging. Use action verbs.&lt;/p&gt;
			&lt;/div&gt;
			&lt;div class="col-md-4"&gt;
				&lt;h3&gt;&lt;a href="#"&gt;[Subtopic hyperlink text]&lt;/a&gt;&lt;/h3&gt;
				&lt;p&gt;Summary of the information or tasks that can be accomplished on the sub-topic page. Remove prose or promotional messaging. Use action verbs.&lt;/p&gt;
			&lt;/div&gt;
			&lt;div class="col-md-4"&gt;
				&lt;h3&gt;&lt;a href="#"&gt;[Subtopic hyperlink text]&lt;/a&gt;&lt;/h3&gt;
				&lt;p&gt;Summary of the information or tasks that can be accomplished on the sub-topic page. Remove prose or promotional messaging. Use action verbs.&lt;/p&gt;
			&lt;/div&gt;
			&lt;div class="col-md-4"&gt;
				&lt;h3&gt;&lt;a href="#"&gt;[Subtopic hyperlink text]&lt;/a&gt;&lt;/h3&gt;
				&lt;p&gt;Summary of the information or tasks that can be accomplished on the sub-topic page. Remove prose or promotional messaging. Use action verbs.&lt;/p&gt;
			&lt;/div&gt;
			&lt;div class="col-md-4"&gt;
				&lt;h3&gt;&lt;a href="#"&gt;[Subtopic hyperlink text]&lt;/a&gt;&lt;/h3&gt;
				&lt;p&gt;Summary of the information or tasks that can be accomplished on the sub-topic page. Remove prose or promotional messaging. Use action verbs.&lt;/p&gt;
			&lt;/div&gt;
			&lt;div class="col-md-4"&gt;
				&lt;h3&gt;&lt;a href="#"&gt;[Subtopic hyperlink text]&lt;/a&gt;&lt;/h3&gt;
				&lt;p&gt;Summary of the information or tasks that can be accomplished on the sub-topic page. Remove prose or promotional messaging. Use action verbs.&lt;/p&gt;
			&lt;/div&gt;
			&lt;div class="col-md-4"&gt;
				&lt;h3&gt;&lt;a href="#"&gt;[Subtopic hyperlink text]&lt;/a&gt;&lt;/h3&gt;
				&lt;p&gt;Summary of the information or tasks that can be accomplished on the sub-topic page. Remove prose or promotional messaging. Use action verbs.&lt;/p&gt;
			&lt;/div&gt;
			&lt;div class="col-md-4"&gt;
				&lt;h3&gt;&lt;a href="#"&gt;[Subtopic hyperlink text]&lt;/a&gt;&lt;/h3&gt;
				&lt;p&gt;Summary of the information or tasks that can be accomplished on the sub-topic page. Remove prose or promotional messaging. Use action verbs.&lt;/p&gt;
			&lt;/div&gt;
			&lt;div class="col-md-4"&gt;
				&lt;h3&gt;&lt;a href="#"&gt;[Subtopic hyperlink text]&lt;/a&gt;&lt;/h3&gt;
				&lt;p&gt;Summary of the information or tasks that can be accomplished on the sub-topic page. Remove prose or promotional messaging. Use action verbs.&lt;/p&gt;
			&lt;/div&gt;
			&lt;div class="col-md-4"&gt;
				&lt;h3&gt;&lt;a href="#"&gt;[Subtopic hyperlink text]&lt;/a&gt;&lt;/h3&gt;
				&lt;p&gt;Summary of the information or tasks that can be accomplished on the sub-topic page. Remove prose or promotional messaging. Use action verbs.&lt;/p&gt;
			&lt;/div&gt;
			&lt;div class="col-md-4"&gt;
				&lt;h3&gt;&lt;a href="#"&gt;[Subtopic hyperlink text]&lt;/a&gt;&lt;/h3&gt;
				&lt;p&gt;Summary of the information or tasks that can be accomplished on the sub-topic page. Remove prose or promotional messaging. Use action verbs.&lt;/p&gt;
			&lt;/div&gt;
		&lt;/div&gt;
	&lt;/section&gt;
	&lt;div class="row mrgn-tp-xl"&gt;
		&lt;div class="col-md-8"&gt;
			&lt;section class="gc-features"&gt;
				&lt;h2 class="wb-inv"&gt;Features&lt;/h2&gt;
				&lt;div class="row"&gt;
					&lt;div class="col-md-6"&gt;
						&lt;img class="img-responsive thumbnail mrgn-bttm-sm" src="../../components/gc-features/img/feature-360x203.png" alt=""/&gt;
					&lt;/div&gt;
					&lt;div class="col-md-6"&gt;
						&lt;h3 class="h5"&gt;&lt;a class="stretched-link" href="#"&gt;[Feature hyperlink text]&lt;/a&gt;&lt;/h3&gt;
						&lt;p&gt;Brief description of the feature being promoted.&lt;/p&gt;
					&lt;/div&gt;
				&lt;/div&gt;
			&lt;/section&gt;
		&lt;/div&gt;
		&lt;div class="col-md-4"&gt;&lt;section class="provisional gc-followus"&gt;
	&lt;h2&gt;On social media&lt;/h2&gt;
	&lt;ul&gt;
		&lt;li&gt;
			&lt;a href="#facebook" class="facebook wb-lbx"&gt;&lt;span class="wb-inv"&gt;Facebook: &lt;/span&gt;FacebookPageName&lt;/a&gt;
		&lt;/li&gt;
		&lt;li&gt;
			&lt;a href="#" rel="external" class="twitter"&gt;&lt;span class="wb-inv"&gt;Twitter: &lt;/span&gt;@TwitterAccount&lt;/a&gt;
		&lt;/li&gt;
		&lt;li&gt;
			&lt;a href="#" rel="external" class="youtube"&gt;&lt;span class="wb-inv"&gt;Youtube: &lt;/span&gt;YouTubeName&lt;/a&gt;
		&lt;/li&gt;
		&lt;li&gt;
			&lt;a href="#" rel="external" class="instagram"&gt;&lt;span class="wb-inv"&gt;Instagram: &lt;/span&gt;InstagramName&lt;/a&gt;
		&lt;/li&gt;
		&lt;li&gt;
			&lt;a href="#" rel="external" class="linkedin"&gt;&lt;span class="wb-inv"&gt;LinkedIn: &lt;/span&gt;LinkedInName&lt;/a&gt;
		&lt;/li&gt;
	&lt;/ul&gt;
&lt;/section&gt;
&lt;section id="facebook" class="modal-dialog modal-content overlay-def mfp-hide"&gt;
	&lt;header class="modal-header"&gt;
		&lt;h2 class="modal-title" id="lbx-title"&gt;Facebook&lt;/h2&gt;
	&lt;/header&gt;
	&lt;div class="modal-body"&gt;
		&lt;ul class="list-unstyled lst-spcd"&gt;
			&lt;li&gt;
				&lt;a href="#" rel="external"&gt;[First Facebook account title]&lt;/a&gt;
			&lt;/li&gt;
			&lt;li&gt;
				&lt;a href="#" rel="external"&gt;[Second Facebook account title]&lt;/a&gt;
			&lt;/li&gt;
		&lt;/ul&gt;
	&lt;/div&gt;
	&lt;div class="modal-footer"&gt;
		&lt;button type="button" class="btn btn-sm btn-primary pull-left popup-modal-dismiss"&gt;Close&lt;span class="wb-inv"&gt;Close overlay&lt;/span&gt;&lt;/button&gt;
	&lt;/div&gt;
&lt;/section&gt;
&lt;/div&gt;
	&lt;/div&gt;
	&lt;section class="provisional gc-contributors"&gt;
		&lt;h2&gt;From:&lt;/h2&gt;
		&lt;ul&gt;
			&lt;li&gt;&lt;a href="#"&gt;[Department or agency]&lt;/a&gt;&lt;/li&gt;
			&lt;li&gt;&lt;a href="#"&gt;[Department or agency]&lt;/a&gt;&lt;/li&gt;
		&lt;/ul&gt;
	&lt;/section&gt;
&lt;/div&gt;
									</code></pre>
    </details>
    <details id="details-panel2">
     <summary>
      CSS
     </summary>
     <pre><code>

.provisional.gc-topic-bg div {
	background: no-repeat;
	margin-left: -15px;
	min-height: 200px;
	overflow: hidden;
	width: calc(50vw - 15px);
}

.provisional.gc-most-requested {
	border: none;
}

.provisional.gc-most-requested h2 {
	font-size: 1.1em;
	margin-top: 15px;
}

.provisional.gc-most-requested ul {
	margin-bottom: 15px;
	margin-top: 15px;
}

.provisional.gc-most-requested ul li {
	font-family: Lato,sans-serif;
	font-size: 87%;
	font-weight: 700;
	line-height: 1.5em;
}

.provisional.gc-followus .facebook::before,.provisional.gc-followus .instagram::before,.provisional.gc-followus .linkedin::before,.provisional.gc-followus .twitter::before,.provisional.gc-followus .youtube::before {
	background-repeat: no-repeat;
	background-size: cover;
	content: "";
	height: 38px;
	margin-right: 10px;
	min-width: 38px
}

.provisional.gc-followus h2 {
	font-size: 1.1em
}

.provisional.gc-followus ul {
	display: block;
	font-size: 87%;
	font-weight: 700;
	list-style: none;
	-webkit-margin-before: 1em;
	margin-block-start:1em;-webkit-padding-start: calc(1em + 6px);
	padding-inline-start:calc(1em + 6px)}

.provisional.gc-followus ul li {
	margin-bottom: 21px
}

.provisional.gc-followus ul li:last-child {
	margin-bottom: 15px
}

.provisional.gc-followus ul li a {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	line-height: 1.54;
	max-width: -webkit-max-content;
	max-width: -moz-max-content;
	max-width: max-content;
	text-decoration: none
}

.provisional.gc-followus ul li a::before {
	margin-right: 10px;
	margin-top: -6px
}

.provisional.gc-followus ul li a:active,.provisional.gc-followus ul li a:focus,.provisional.gc-followus ul li a:hover {
	text-decoration: underline
}

.provisional.gc-followus ul.list-inline {
	-webkit-padding-start: 0;
	padding-inline-start:0}

.provisional.gc-followus ul.list-inline li {
	display: inline-block;
	padding-right: 0
}

.provisional.gc-followus ul.list-inline li a {
	height: 38px;
	overflow: hidden;
	width: 38px
}

.provisional.gc-followus ul.list-inline li a::before {
	margin-top: 0
}

.provisional.gc-followus ul.list-inline li a:active,.provisional.gc-followus ul.list-inline li a:focus,.provisional.gc-followus ul.list-inline li a:hover {
	outline: solid 2px #0535d2
}

.provisional.gc-followus .facebook::before {
	background-image: url(../assets/gc-follow-us/facebook.svg)
}

.provisional.gc-followus .twitter::before {
	background-image: url(../assets/gc-follow-us/twitter.svg)
}

.provisional.gc-followus .youtube::before {
	background-image: url(../assets/gc-follow-us/youtube.svg)
}

.provisional.gc-followus .instagram::before {
	background-image: url(../assets/gc-follow-us/instagram.svg)
}

.provisional.gc-followus .linkedin::before {
	background-image: url(../assets/gc-follow-us/linkedin.svg)
}

.provisional.gc-contributors {
	margin-top: 38px
}

.provisional.gc-contributors h2,.provisional.gc-contributors ul {
	display: inline;
	font-size: 87%;
	margin-top: 0
}

.provisional.gc-contributors ul {
	-webkit-padding-start: 0;
	padding-inline-start:0}

.provisional.gc-contributors ul li {
	display: inline-block;
	font-weight: 700;
	margin-right: .7em
}

@media screen and (max-width: 991px)
.provisional.gc-contributors ul {
	-webkit-padding-start: 20px;
	padding-inline-start: 20px;
}

@media screen and (max-width: 991px)
.provisional.gc-contributors h2, .provisional.gc-contributors ul {
	display: block;
}

@media screen and (max-width: 991px)
.provisional.gc-contributors ul li {
	display: list-item;
	margin-right: 0;
}

</code></pre>
    </details>
   </div>
  </div>
 </details>
</section>

<div class="clearfix">
</div>

<section>
 <h3>
  Stable theme and topic pages
 </h3>
 <p>
  The beta version will eventually replace this stable version.
 </p>
 <details>
  <summary>
   Guidance for the stable theme page
  </summary>
  <div class="btn-group mrgn-bttm-sm">
   <button class="btn btn-default wb-toggle" data-toggle='{"selector": "details", "parent": "#template-elements-1", "type": "on"}' type="button">
    Expand All
   </button>
   <button class="btn btn-default wb-toggle" data-toggle='{"selector": "details", "parent": "#template-elements-1", "type": "off"}' type="button">
    Collapse All
   </button>
  </div>
  <div class="row">
   <div class="col-lg-6 pull-right">
    <figure class="mrgn-bttm-lg">
     <figcaption class="text-center">
      <b>
       Theme page template
      </b>
     </figcaption>
     <img alt="Template of theme page showing sections that make up its structure. Read top to bottom and left to right. Specifications detailed below." class="full-width" src="../images/theme-page-en.jpg"/>
    </figure>
   </div>
   <div class="col-lg-6 pull-left">
    <div id="template-elements-1">
     <section>
      <h3>
       1: Theme title
      </h3>
      <p>
       <span class="label label-danger">
        Mandatory
       </span>
      </p>
      <p>
       Describes the theme and page content
      </p>
      <ul class="list-unstyled">
       <li id="element1-1">
        <details class="mrgn-bttm-sm">
         <summary class="wb-toggle" data-toggle='{"print":"on"}'>
          <strong>
           Presentation
          </strong>
         </summary>
         <ul>
          <li>
           theme title must be a unique H1
          </li>
          <li>
           must be the first component on the page
          </li>
         </ul>
        </details>
       </li>
      </ul>
     </section>
     <section>
      <h3>
       2: Theme introductory paragraph
      </h3>
      <p>
       <span class="label label-danger">
        Mandatory
       </span>
      </p>
      <p>
       Describes the top tasks and topics that can be accessed on this page
      </p>
      <ul class="list-unstyled">
       <li id="element1-2a">
        <details class="mrgn-bttm-sm">
         <summary class="wb-toggle" data-toggle='{"print":"on"}'>
          <strong>
           Content
          </strong>
         </summary>
         <ul>
          <li>
           provides an overview of all top tasks that can be accomplished on the given theme
          </li>
          <li>
           keep the text short and concise
          </li>
          <li>
           written for a grade 6-8 reading level
          </li>
         </ul>
        </details>
       </li>
       <li id="element1-2b">
        <details class="mrgn-bttm-sm">
         <summary class="wb-toggle" data-toggle='{"print":"on"}'>
          <strong>
           Presentation
          </strong>
         </summary>
         <ul>
          <li>
           appears below the theme title
          </li>
          <li>
           appears to the left of the theme carousel
          </li>
         </ul>
        </details>
       </li>
      </ul>
     </section>
     <section>
      <h3>
       3: Theme carousel
      </h3>
      <p>
       <span class="label label-info">
        Optional
       </span>
      </p>
      <p>
       Features theme-specific top tasks and topic information that is timely and relevant
      </p>
      <ul class="list-unstyled">
       <li id="element1-3a">
        <details class="mrgn-bttm-sm">
         <summary class="wb-toggle" data-toggle='{"print":"on"}'>
          <strong>
           Content
          </strong>
         </summary>
         <ul>
          <li>
           use the
           <a href="../common-design-patterns/carousels.html">
            Carousels
           </a>
           pattern
          </li>
         </ul>
        </details>
       </li>
       <li id="element1-3b">
        <details class="mrgn-bttm-sm">
         <summary class="wb-toggle" data-toggle='{"print":"on"}'>
          <strong>
           Presentation
          </strong>
         </summary>
         <ul>
          <li>
           appears at the top of the page
          </li>
          <li>
           appears to the right of the theme introductory paragraph
          </li>
         </ul>
        </details>
       </li>
      </ul>
     </section>
     <section>
      <h3>
       4: Theme social media channels
      </h3>
      <p>
       <span class="label label-warning">
        Conditional
       </span>
      </p>
      <p>
       Features theme-specific social media channels
      </p>
      <ul class="list-unstyled">
       <li id="element1-4a">
        <details class="mrgn-bttm-sm">
         <summary class="wb-toggle" data-toggle='{"print":"on"}'>
          <strong>
           Content
          </strong>
         </summary>
         <ul>
          <li>
           this component is mandatory when there is 1 or more theme related social media channels that exist
          </li>
          <li>
           use the
           <a href="../common-design-patterns/social-media-channels.html">
            Social media channels block (follow block)
           </a>
           pattern
          </li>
         </ul>
        </details>
       </li>
       <li id="element1-4b">
        <details class="mrgn-bttm-sm">
         <summary class="wb-toggle" data-toggle='{"print":"on"}'>
          <strong>
           Presentation
          </strong>
         </summary>
         <ul>
          <li>
           appears below the theme introductory paragraph
          </li>
         </ul>
        </details>
       </li>
      </ul>
     </section>
     <section>
      <h3>
       5: Services and information
      </h3>
      <p>
       <span class="label label-danger">
        Mandatory
       </span>
      </p>
      <p>
       Features theme-specific topics
      </p>
      <ul class="list-unstyled">
       <li id="element1-5a">
        <details class="mrgn-bttm-sm">
         <summary class="wb-toggle" data-toggle='{"print":"on"}'>
          <strong>
           Content
          </strong>
         </summary>
         <ul>
          <li>
           use the
           <a href="../common-design-patterns/services-information.html">
            Services and information
           </a>
           pattern
          </li>
         </ul>
        </details>
       </li>
       <li id="element1-5b">
        <details class="mrgn-bttm-sm">
         <summary class="wb-toggle" data-toggle='{"print":"on"}'>
          <strong>
           Presentation
          </strong>
         </summary>
         <ul>
          <li>
           appears below the theme social media channels and to the left of “Most requested”
          </li>
          <li>
           heading is labelled “Services and information”
          </li>
         </ul>
        </details>
       </li>
      </ul>
     </section>
     <section>
      <h3>
       6: Most requested
      </h3>
      <p>
       <span class="label label-danger">
        Mandatory
       </span>
      </p>
      <p>
       Features theme-specific top tasks
      </p>
      <ul class="list-unstyled">
       <li id="element1-6a">
        <details class="mrgn-bttm-sm">
         <summary class="wb-toggle" data-toggle='{"print":"on"}'>
          <strong>
           Content
          </strong>
         </summary>
         <ul>
          <li>
           use the
           <a href="../common-design-patterns/most-requested.html">
            Most requested
           </a>
           pattern
          </li>
         </ul>
        </details>
       </li>
       <li id="element1-6b">
        <details class="mrgn-bttm-sm">
         <summary class="wb-toggle" data-toggle='{"print":"on"}'>
          <strong>
           Presentation
          </strong>
         </summary>
         <ul>
          <li>
           appears to the right of “Services and information”
          </li>
          <li>
           heading is labelled “Most requested”
          </li>
         </ul>
        </details>
       </li>
      </ul>
     </section>
     <section>
      <h3>
       7: More information for
      </h3>
      <p>
       <span class="label label-warning">
        Conditional
       </span>
      </p>
      <p>
       Links to related government-wide audience information
      </p>
      <ul class="list-unstyled">
       <li id="element1-7a">
        <details class="mrgn-bttm-sm">
         <summary class="wb-toggle" data-toggle='{"print":"on"}'>
          <strong>
           Content
          </strong>
         </summary>
         <ul>
          <li>
           this component is mandatory when there is 1 or more theme-related government-wide audience page or audience topic page that exist
          </li>
          <li>
           use the
           <a href="../common-design-patterns/more-information.html">
            More information for
           </a>
           pattern
          </li>
         </ul>
        </details>
       </li>
       <li id="element1-7b">
        <details class="mrgn-bttm-sm">
         <summary class="wb-toggle" data-toggle='{"print":"on"}'>
          <strong>
           Presentation
          </strong>
         </summary>
         <ul>
          <li>
           appears below “Most requested”
          </li>
          <li>
           heading is labelled “More information for”
          </li>
         </ul>
        </details>
       </li>
      </ul>
     </section>
     <section>
      <h3>
       8: Theme features
      </h3>
      <p>
       <span class="label label-danger">
        Mandatory
       </span>
      </p>
      <p>
       Promotes theme-specific current activities being led by departments and agencies across the
       <abbr title="Government of Canada">
        GC
       </abbr>
      </p>
      <ul class="list-unstyled">
       <li id="element1-8a">
        <details class="mrgn-bttm-sm">
         <summary class="wb-toggle" data-toggle='{"print":"on"}'>
          <strong>
           Content
          </strong>
         </summary>
         <ul>
          <li>
           use the
           <a href="../common-design-patterns/feature-tiles.html">
            Context-specific features
           </a>
           pattern
          </li>
         </ul>
        </details>
       </li>
       <li id="element1-9b">
        <details class="mrgn-bttm-sm">
         <summary class="wb-toggle" data-toggle='{"print":"on"}'>
          <strong>
           Presentation
          </strong>
         </summary>
         <ul>
          <li>
           appears below “Services and information”
          </li>
         </ul>
        </details>
       </li>
      </ul>
     </section>
    </div>
   </div>
  </div>
  <h2 id="examples">
   Working examples
  </h2>
  <ul>
   <li>
    <a href="http://wet-boew.github.io/themes-dist/GCWeb/theme-en.html">
     English working example
    </a>
    (on GitHub)
   </li>
   <li>
    <a href="http://wet-boew.github.io/themes-dist/GCWeb/theme-fr.html">
     French working example
    </a>
    (on GitHub)
   </li>
  </ul>
  <h2 id="navigation">
   User navigation
  </h2>
  <p>
   Canada.ca is organized around 15 themes, based on an analysis of top tasks (most requested information and services) across the Government of Canada.
  </p>
  <p>
   While the themes emphasize top tasks related to information and service delivery, they also provide a window into activities of  the Government of Canada that are undertaken to support programs and services (for  example,  research, consultation, policy development).
  </p>
  <figure class="mrgn-bttm-lg">
   <figcaption class="text-center">
    <b>
     User navigation diagram
    </b>
   </figcaption>
   <img alt="Diagram of how to navigate to theme pages on Canada.ca. Text version below:" class="img-responsive center-block" src="https://www.canada.ca/content/dam/tbs-sct/images/government-communications/canada-content-style-guide/theme-pages-ia-eng.png"/>
   <details>
    <summary class="wb-toggle" data-toggle='{"print":"on"}'>
     Text version
    </summary>
    <p>
     Theme pages can be accessed from the Canada.ca home page.
    </p>
   </details>
  </figure>
 </details>
 <details>
  <summary>
   Guidance for the stable topic page
  </summary>
  <div class="btn-group mrgn-bttm-sm">
   <button class="btn btn-default wb-toggle" data-toggle='{"selector": "details", "parent": "#template-elements", "type": "on"}' type="button">
    Expand All
   </button>
   <button class="btn btn-default wb-toggle" data-toggle='{"selector": "details", "parent": "#template-elements", "type": "off"}' type="button">
    Collapse All
   </button>
  </div>
  <div class="row">
   <div class="col-lg-6 pull-right">
    <figure class="mrgn-bttm-lg">
     <figcaption class="text-center">
      <b>
       Topic page template
      </b>
     </figcaption>
     <img alt="Template of topic page showing sections that make up its structure. Read top to bottom and left to right. Specifications detailed below." class="full-width" src="https://www.canada.ca/content/dam/tbs-sct/images/government-communications/canada-content-style-guide/topic-page-eng.jpg"/>
    </figure>
   </div>
   <div class="col-lg-6 pull-left">
    <div id="template-elements-2">
     <section>
      <h3>
       1: Topic title
      </h3>
      <p>
       <span class="label label-danger">
        Mandatory
       </span>
      </p>
      <p>
       Names the current topic
      </p>
      <ul class="list-unstyled">
       <li id="element2-1">
        <details class="mrgn-bttm-sm">
         <summary class="wb-toggle" data-toggle='{"print":"on"}'>
          <strong>
           Presentation
          </strong>
         </summary>
         <ul>
          <li>
           the topic title must be a unique H1
          </li>
          <li>
           it must be the first component on the page
          </li>
         </ul>
        </details>
       </li>
      </ul>
     </section>
     <section>
      <h3>
       2: Topic introductory paragraph
      </h3>
      <p>
       <span class="label label-danger">
        Mandatory
       </span>
      </p>
      <p>
       Describes the current topic page
      </p>
      <ul class="list-unstyled">
       <li id="element2-2a">
        <details class="mrgn-bttm-sm">
         <summary class="wb-toggle" data-toggle='{"print":"on"}'>
          <strong>
           Content
          </strong>
         </summary>
         <ul>
          <li>
           provides an overview of the top tasks or sub-topics that can be accessed from the current topic
          </li>
          <li>
           keep the text short and concise
          </li>
          <li>
           written for a grade 6-8 reading level
          </li>
         </ul>
        </details>
       </li>
       <li id="element2-2b">
        <details class="mrgn-bttm-sm">
         <summary class="wb-toggle" data-toggle='{"print":"on"}'>
          <strong>
           Presentation
          </strong>
         </summary>
         <ul>
          <li>
           appears below the topic title
          </li>
          <li>
           appears to the left of the topic image
          </li>
         </ul>
        </details>
       </li>
      </ul>
     </section>
     <section>
      <h3>
       3: Topic image
      </h3>
      <p>
       <span class="label label-info">
        Optional
       </span>
      </p>
      <p>
       Supports and enhances key messages related to the topic page
      </p>
      <ul class="list-unstyled">
       <li id="element2-3a">
        <details class="mrgn-bttm-sm">
         <summary class="wb-toggle" data-toggle='{"print":"on"}'>
          <strong>
           Content
          </strong>
         </summary>
         <ul>
          <li>
           the image must reflect key messages related to the topic
          </li>
          <li>
           the image may appear elsewhere on the site
          </li>
          <li>
           carousels are not allowed on topic pages
          </li>
          <li>
           use the
           <a href="../common-design-patterns/images.html">
            Images
           </a>
           pattern
          </li>
         </ul>
        </details>
       </li>
       <li id="element2-3b">
        <details class="mrgn-bttm-sm">
         <summary class="wb-toggle" data-toggle='{"print":"on"}'>
          <strong>
           Presentation
          </strong>
         </summary>
         <ul>
          <li>
           the topic image appears at the top of the page
          </li>
          <li>
           appears to the right of the introductory paragraph
          </li>
          <li>
           the image is not hyperlinked
          </li>
          <li>
           consult the
           <a href="http://wet-boew.github.io/themes-dist/GCWeb/index-en.html">
            Canada.ca GitHub page
           </a>
           for image sizing
          </li>
         </ul>
        </details>
       </li>
      </ul>
     </section>
     <section>
      <h3>
       4: Topic social media channels
      </h3>
      <p>
       <span class="label label-info">
        Optional
       </span>
      </p>
      <p>
       Features topic-specific social media channels
      </p>
      <ul class="list-unstyled">
       <li id="element2-4a">
        <details class="mrgn-bttm-sm">
         <summary class="wb-toggle" data-toggle='{"print":"on"}'>
          <strong>
           Content
          </strong>
         </summary>
         <ul>
          <li>
           use the
           <a href="../common-design-patterns/social-media-channels.html">
            Social media channels block (follow block)
           </a>
           pattern
          </li>
         </ul>
        </details>
       </li>
       <li id="element2-4b">
        <details class="mrgn-bttm-sm">
         <summary class="wb-toggle" data-toggle='{"print":"on"}'>
          <strong>
           Presentation
          </strong>
         </summary>
         <ul>
          <li>
           appears below the topic introductory paragraph
          </li>
         </ul>
        </details>
       </li>
      </ul>
     </section>
     <section>
      <h3>
       5: Services and information
      </h3>
      <p>
       <span class="label label-danger">
        Mandatory
       </span>
      </p>
      <p>
       Lists the sub-topics and destination content related to the current topic
      </p>
      <ul class="list-unstyled">
       <li id="element2-5a">
        <details class="mrgn-bttm-sm">
         <summary class="wb-toggle" data-toggle='{"print":"on"}'>
          <strong>
           Content
          </strong>
         </summary>
         <ul>
          <li>
           use the
           <a href="../common-design-patterns/services-information.html">
            Services and information
           </a>
           pattern
          </li>
         </ul>
        </details>
       </li>
       <li id="element2-5b">
        <details class="mrgn-bttm-sm">
         <summary class="wb-toggle" data-toggle='{"print":"on"}'>
          <strong>
           Presentation
          </strong>
         </summary>
         <ul>
          <li>
           appears below the topic social media channels and to the left of “Most requested”
          </li>
         </ul>
        </details>
       </li>
      </ul>
     </section>
     <section>
      <h3>
       6: Most requested
      </h3>
      <p>
       <span class="label label-danger">
        Mandatory
       </span>
       on theme pages and first-level topic pages
      </p>
      <p>
       Features top tasks for the current topic
      </p>
      <ul class="list-unstyled">
       <li id="element2-6a">
        <details class="mrgn-bttm-sm">
         <summary class="wb-toggle" data-toggle='{"print":"on"}'>
          <strong>
           Content
          </strong>
         </summary>
         <ul>
          <li>
           use the
           <a href="../common-design-patterns/most-requested.html">
            Most requested
           </a>
           pattern
          </li>
         </ul>
        </details>
       </li>
       <li id="element2-6b">
        <details class="mrgn-bttm-sm">
         <summary class="wb-toggle" data-toggle='{"print":"on"}'>
          <strong>
           Presentation
          </strong>
         </summary>
         <ul>
          <li>
           appears to the right of “Services and information”
          </li>
         </ul>
        </details>
       </li>
      </ul>
     </section>
     <section>
      <h3>
       7: Contributors
      </h3>
      <p>
       <span class="label label-danger">
        Mandatory
       </span>
      </p>
      <p>
       Links to institutions that support the current topic
      </p>
      <ul class="list-unstyled">
       <li id="element2-7a">
        <details class="mrgn-bttm-sm">
         <summary class="wb-toggle" data-toggle='{"print":"on"}'>
          <strong>
           Content
          </strong>
         </summary>
         <ul>
          <li>
           use the
           <a href="../common-design-patterns/contributors.html">
            Contributors
           </a>
           pattern
          </li>
         </ul>
        </details>
       </li>
       <li id="element2-7b">
        <details class="mrgn-bttm-sm">
         <summary class="wb-toggle" data-toggle='{"print":"on"}'>
          <strong>
           Presentation
          </strong>
         </summary>
         <ul>
          <li>
           appears below “Most requested”
          </li>
         </ul>
        </details>
       </li>
      </ul>
     </section>
     <section>
      <h3>
       8: More information for
      </h3>
      <p>
       <span class="label label-danger">
        Conditional
       </span>
      </p>
      <p>
       Links to related government-wide audience information
      </p>
      <ul class="list-unstyled">
       <li id="element2-8a">
        <details class="mrgn-bttm-sm">
         <summary class="wb-toggle" data-toggle='{"print":"on"}'>
          <strong>
           Content
          </strong>
         </summary>
         <ul>
          <li>
           this component is mandatory when there are 1 or more doormat links in services and information related to the topic government-wide audience pages
          </li>
          <li>
           use the
           <a href="../common-design-patterns/more-information.html">
            More information for
           </a>
           pattern
          </li>
         </ul>
        </details>
       </li>
       <li id="element2-8b">
        <details class="mrgn-bttm-sm">
         <summary class="wb-toggle" data-toggle='{"print":"on"}'>
          <strong>
           Presentation
          </strong>
         </summary>
         <ul>
          <li>
           appears below “Contributors”
          </li>
         </ul>
        </details>
       </li>
      </ul>
     </section>
     <section>
      <h3>
       9: What we are doing
      </h3>
      <p>
       <span class="label label-danger">
        Conditional
       </span>
      </p>
      <p>
       Provides links to program and policy development content that is most relevant to the current topic
      </p>
      <ul class="list-unstyled">
       <li id="element2-9a">
        <details class="mrgn-bttm-sm">
         <summary class="wb-toggle" data-toggle='{"print":"on"}'>
          <strong>
           Content
          </strong>
         </summary>
         <ul>
          <li>
           this component is mandatory when program and policy development content related to the current topic exists
          </li>
          <li>
           use the
           <a href="../common-design-patterns/what-we-are-doing.html">
            What we are doing
           </a>
           pattern
          </li>
         </ul>
        </details>
       </li>
       <li id="element2-9b">
        <details class="mrgn-bttm-sm">
         <summary class="wb-toggle" data-toggle='{"print":"on"}'>
          <strong>
           Presentation
          </strong>
         </summary>
         <ul>
          <li>
           appears below “Services and information” and “Most requested”
          </li>
         </ul>
        </details>
       </li>
      </ul>
     </section>
     <section>
      <h3>
       10: Topic features
      </h3>
      <p>
       <span class="label label-info">
        Optional
       </span>
      </p>
      <p>
       Promotes ongoing activities being led by departments and agencies across the
       <abbr title="Government of Canada">
        GC
       </abbr>
       that are related to the current topic
      </p>
      <ul class="list-unstyled">
       <li id="element2-10a">
        <details class="mrgn-bttm-sm">
         <summary class="wb-toggle" data-toggle='{"print":"on"}'>
          <strong>
           Content
          </strong>
         </summary>
         <ul>
          <li>
           use the
           <a href="../common-design-patterns/feature-tiles.html">
            Context-specific features
           </a>
           pattern
          </li>
         </ul>
        </details>
       </li>
       <li id="element2-10b">
        <details class="mrgn-bttm-sm">
         <summary class="wb-toggle" data-toggle='{"print":"on"}'>
          <strong>
           Presentation
          </strong>
         </summary>
         <ul>
          <li>
           appears below “What we are doing”
          </li>
         </ul>
        </details>
       </li>
      </ul>
     </section>
    </div>
   </div>
  </div>
 </details>
</section>

<h2 id="research">
 Research
</h2>

<p>
 We successfully tested the new beta theme and topic page during an optimization project with Public Services and Procurement Canada (research summary to come later).
</p>

<section>
 <h2 id="changes">
  Latest changes
 </h2>
 <p>
  <strong>
   2020-07-10:
  </strong>
 </p>
 <ul>
  <li>
   Changes to doormat columns in tablet view
  </li>
  <li>
   Clarify social media account guidance
  </li>
 </ul>
 <p>
  <strong>
   2020-06-30:
  </strong>
  a new beta version of this template was added
 </p>
</section>

<section>
 <h2 id="discuss">
  Discussion
 </h2>
 <p>
  <a href="https://github.com/canada-ca/design-system-systeme-conception/issues">
   Discuss the template in GitHub issues
  </a>
 </p>
</section>





