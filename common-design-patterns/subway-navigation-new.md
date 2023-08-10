---
altLangPage: https://conception.canada.ca/configurations-conception-communes/boutons.html
date: null
dateModified: '2020-10-30'
description: null
title: Subway navigation
---


<div class="row">
 <div class="col-md-12 pull-left">
  <ul class="list-inline small mrgn-bttm-sm" id="list-inline-desktop-only" style="line-height:1.65em">
   <li class="mrgn-rght-lg">
    <span class="label label-info">
     Beta
    </span>
   </li>
   <li class="mrgn-rght-lg">
    Last updated: 2020-12-17
   </li>
  </ul>
 </div>
</div>

<p>
 Break up a service or content into sections that each focus on a step or specific answer people need to do before moving to the next step or section.
</p>

<div class="pattern-demo mrgn-bttm-md">
 <p>
  [Optional image or coded example of the pattern so it can be visually identified quickly]
 </p>
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
  <li>
   <a href="#discuss">
    Discussion
   </a>
  </li>
 </ul>
</section>

<section>
 <h2 id="when">
  When to use
 </h2>
 <p>
  Use to group related task pages together and provide navigation between these pages.
 </p>
 <p>
  Keep the number of pages tied together to a reasonable numner (maximum 6).
 </p>
</section>

<section>
 <h2 id="avoid">
  What to avoid
 </h2>
 <p>
  Don't use numbers when you use this pattern for sequenced steps. Testing has shown that Canadians are less likely to get to the section they need if the elements are numbered.
 </p>
 <p>
  Sub-steps haven't been tested properly yet - avoid using them.
 </p>
</section>

<section>
 <h2 id="how">
  How to implement
 </h2>
 <p>
  This pattern is still in beta, and the code is still under review. Use it sparingly, as it may still be subject to changes.
 </p>
 <p>
  You will need to use provisional CSS to use this design pattern.
 </p>
 <ol>
  <li>
   <a href="#1">
    Index page
   </a>
  </li>
  <li>
   <a href="#2">
    Step page
   </a>
  </li>
 </ol>
 <h3 id="1">
  1. Index page
 </h3>
 <p>
  <strong>
   When to use:
  </strong>
  use as the landing page for a set of related pages that use the subway naviation.
 </p>
 <div class="pattern-demo mrgn-bttm-md">
  <p>
   [Coded example of variant 1]
  </p>
 </div>
 <details>
  <summary>
   Code
  </summary>
  <pre><code>&lt;p&gt;[Coded example of variant 1]&lt;/p&gt;</code></pre>
 </details>
 <h3 id="primary">
  2. Step page
 </h3>
 <p>
  <strong>
   When to use:
  </strong>
  Use on each page tied by the subway navigation.
 </p>
 <div class="pattern-demo pattern-demo-component no-pddng" id="demo-tabs">
  <div class="component-demo mrgn-rght-lg mrgn-lft-lg mrgn-tp-lg mrgn-bttm-lg" id="tabs-demo">
   <nav class="provisional gc-subway">
    <h1>
     [Service name]
    </h1>
    <ul class="gc-subway-steps">
     <li>
      <a href="#">
       [Step / section page name 1]
       <span class="wb-inv">
        : Service name
       </span>
      </a>
     </li>
     <li>
      <a href="#">
       [Step / section page name 1]
       <span class="wb-inv">
        : Service name
       </span>
      </a>
     </li>
     <li>
      <a href="#">
       [Step / section page name 2]
       <span class="wb-inv">
        : Service name
       </span>
      </a>
     </li>
     <li class="active">
      <a aria-current="page">
       [Step / section page name 3]
       <span class="wb-inv">
        : Service name
       </span>
      </a>
     </li>
     <li>
      <a href="#">
       [Step / section page name 4]
       <span class="wb-inv">
        : Service name
       </span>
      </a>
     </li>
     <li>
      <a href="#">
       [Step / section page name 5]
       <span class="wb-inv">
        : Service name
       </span>
      </a>
     </li>
    </ul>
   </nav>
   <h1 class="provisional gc-thickline" id="wb-cont-demo" property="name">
    [Service/step name 3]
   </h1>
   <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo elementum est, ac ultrices urna convallis vitae. Nulla nec convallis felis. Ut pretium nisl nisi. Nam gravida gravida aliquet. Morbi tincidunt lorem in purus imperdiet, id rutrum mauris sodales. Vivamus nec mattis tellus. Nunc turpis dolor, malesuada non magna nec, scelerisque tristique velit.
   </p>
   <p>
    Sed consectetur eu ligula a molestie. Vivamus convallis libero malesuada pharetra suscipit. In a pulvinar mi, quis aliquet mauris. Duis convallis nunc nunc, in euismod nisi volutpat sit amet. Integer convallis lacus non orci imperdiet, ac convallis massa mollis.
   </p>
  </div>
 </div>
 <div class="col-md-12 mrgn-tp-lg">
  <details class="wb-prettify all-pre">
   <summary>
    Code
   </summary>
   <details>
    <summary>
     HTML
    </summary>
    <pre><code>&lt;nav class="provisional gc-subway"&gt;
		&lt;h1&gt;[Service name]&lt;/h1&gt;
		&lt;ul class="gc-subway-steps"&gt;
			&lt;li&gt;&lt;a href="#"&gt;[Step / section page name 1]&lt;span class="wb-inv"&gt;: [Service name]&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
			&lt;li&gt;&lt;a href="#"&gt;[Step / section page name 1]&lt;span class="wb-inv"&gt;: [Service name]&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
			&lt;li&gt;&lt;a href="#"&gt;[Step / section page name 2]&lt;span class="wb-inv"&gt;: [Service name]&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
			&lt;li class="active"&gt;&lt;a aria-current="page"&gt;[Step / section page name 3]&lt;span class="wb-inv"&gt;: [Service name]&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
			&lt;li&gt;&lt;a href="#"&gt;[Step / section page name 4]&lt;span class="wb-inv"&gt;: [Service name]&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
			&lt;li&gt;&lt;a href="#"&gt;[Step / section page name 5]&lt;span class="wb-inv"&gt;: [Service name]&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
		&lt;/ul&gt;
		&lt;/nav&gt;
		&lt;h1 property="name" id="wb-cont" class="provisional gc-thickline"&gt;[Step / section page name 3]&lt;/h1&gt;
		&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo elementum est, ac ultrices urna convallis vitae. Nulla nec convallis felis. Ut pretium nisl nisi. Nam gravida gravida aliquet. Morbi tincidunt lorem in purus imperdiet, id rutrum mauris sodales. Vivamus nec mattis tellus. Nunc turpis dolor, malesuada non magna nec, scelerisque tristique velit.&lt;/p&gt;
		&lt;p&gt;Sed consectetur eu ligula a molestie. Vivamus convallis libero malesuada pharetra suscipit. In a pulvinar mi, quis aliquet mauris. Duis convallis nunc nunc, in euismod nisi volutpat sit amet. Integer convallis lacus non orci imperdiet, ac convallis massa mollis.&lt;/p&gt;</code></pre>
   </details>
   <details>
    <summary>
     CSS
    </summary>
    <pre class="prettyprint lang-css"><code>.provisional.gc-subway {
		  border-radius: 0px 6px 6px 0px;
		  border-right: 4px solid #26374a;
		  border-top: 4px solid #26374a;
		  margin-top: 38px;
		}
		.provisional.gc-subway ul {
		  clear: both;
		  list-style: none;
		  padding-left: .57em;
		  padding-top: 10px;
		  position: relative;
		}
		.provisional.gc-subway ul li {
		  border-left: 4px solid #26374a;
		  padding: 0px 20px 30px 1em;
		}
		.provisional.gc-subway ul li::first-line {
		  line-height: 1 !important;
		}
		.provisional.gc-subway ul li :first-child::before {
		  background-color: #fff;
		  border: 3px solid #26374a;
		  border-radius: 50%;
		  content: "";
		  height: 1.2em;
		  left: .05em;
		  position: absolute;
		  -webkit-transition: width .2s, height .2s, left .2s, margin-top .2s;
		  transition: width .2s, height .2s, left .2s, margin-top .2s;
		  width: 1.2em;
		}
		.provisional.gc-subway ul li.active &gt; :first-child::before {
		  background-color: #26374a;
		}
		.provisional.gc-subway ul li a[href]:hover::before,
		.provisional.gc-subway ul li a[href]:focus::before {
		  height: 1.4em;
		  left: -.05em;
		  margin-top: -.1em;
		  width: 1.4em;
		}
		.provisional.gc-subway ul li:last-child {
		  border-bottom: 4px solid #26374a;
		  border-bottom-left-radius: 6px;
		  border-left: 4px solid #26374a;
		}
		.provisional.gc-subway ul li ul {
		  margin-top: 20px;
		  padding-left: .55em;
		}
		.provisional.gc-subway ul li ul li:last-child {
		  border-bottom-width: 0px;
		  padding-bottom: 0px;
		}
		.provisional.gc-subway ul li ul.noline li {
		  -o-border-image: none;
		  border-image: none;
		  border-left: 4px solid transparent;
		}
		.provisional.gc-subway h1 {
		  float: left;
		}
		.provisional.gc-subway h1,
		.provisional.gc-subway-section .gc-subway-h1 {
		  background-color: #fff;
		  border-bottom-width: 0px;
		  color: #555;
		  font-size: 1.3em;
		  margin-right: 20px;
		  margin-top: -19px;
		  padding: 0px 20px 10px 0px;
		}
		@media screen and (min-width: 992px) {
		  .provisional.gc-subway {
			border-right: 0;
			border-top: 0;
			display: none;
			margin-top: 25px;
			padding-left: 15px;
		  }
		  .provisional.gc-subway.no-blink {
			display: block;
		  }
		  .provisional.gc-subway .gc-subway-menu-nav {
			float: right;
			width: 33.33%;
		  }
		  .provisional.gc-subway ul li:last-child {
			border-bottom: 0;
			border-left: 4px solid transparent;
		  }
		  .provisional.gc-subway-section {
			padding-right: 15px;
			width: 66.66%;
		  }
		  .provisional.gc-subway-section .gc-subway-h1,
		  .provisional.gc-subway-section h1 {
			margin-top: 0;
		  }
		  .provisional.gc-subway-section .gc-subway-h1 {
			font-family: Lato, sans-serif;
			font-weight: inherit;
			margin-bottom: 0;
			margin-right: 0;
			padding-bottom: 0 !important;
			padding-left: 0;
		  }
		  .wb-disable .provisional.gc-subway {
			display: block;
		  }
		}</code></pre>
   </details>
   <details>
    <summary>
     JS
    </summary>
    <pre><code>( function( $, window, wb ) {
		"use strict";

		var $document = wb.doc,
		  componentName = "gc-subway",
		  selector = ".provisional." + componentName,
		  initEvent = "wb-init ." + componentName,
		  views = {
			xxs: "xxsmallview",
			xs: "xsmallview",
			sm: "smallview",
			md: "mediumview",
			lg: "largeview",
			xl: "xlargeview"
		  },
		  mainClass = "gc-subway-section",
		  toggleClass = "wb-inv",
		  desktopInited = false,
		  $html = wb.html,
		  $h1, $h2, $h1Copy, $menu, $main,

		  /**
		   * @method init
		   * @param {jQuery Event} event Event that triggered the function call
		   */
		  init = function( event ) {

			// Start initialization
			// returns DOM object = proceed with init
			// returns undefined = do not proceed with init (e.g., already initialized)
			var elm = wb.init( event, componentName, selector ),
			  $elm;

			if ( elm ) {
			  $elm = $( elm );

			  // trigger resizing
			  onResize( $elm );

			  // Identify that initialization has completed
			  wb.ready( $elm, componentName );
			}
		  },

		  /**
		   * Mutate DOM depending on breakpoint
		   * @method onResize
		   * @param {jQuery DOM element | jQuery Event} $elm Element targeted by this plugin, which is the nav | Resizing event
		   */
		  onResize = function( $elm ) {

			if ( !$elm.length ) {
			  $elm = $( selector );
			}

			// Desktop view, setup and mutate H1s
			if ( $html.hasClass( views.md ) || $html.hasClass( views.lg ) ||
			  $html.hasClass( views.xl ) ) {

			  // Initiate desktop mode only once
			  if ( !desktopInited ) {
				initDesktop( $elm );
			  }
			  $h1.addClass( toggleClass );
			  $h1Copy.prependTo( $main );
			  $h2.prependTo( $menu );
			} else if ( ( $html.hasClass( views.sm ) || $html.hasClass( views.xs ) || $html.hasClass( views.xxs ) ) &amp;&amp; desktopInited ) {

			  // Mobile view, mutate back to mobile first if needed
			  $h1.removeClass( toggleClass );
			  $h1Copy.remove();
			  $( "h2:first-child", $menu ).remove();
			}
		  },

		  /**
		   * Initiate setup for desktop mode
		   * @method initDesktop
		   * @param {jQuery DOM element} $elm Element targeted by this plugin, which is the nav
		   */
		  initDesktop = function( $elm ) {
			$h1 = $( "h1", $elm );
			$h2 = $( "<h2 class="h3 hidden-xs visible-md visible-lg mrgn-tp-0">Sections</h2>" );
			$h1Copy = $( "<p aria-hidden="true" class="gc-subway-h1">" + $h1.text() + "</p>" );
			$( "ul", $elm ).first().wrap( "<div class="gc-subway-menu-nav"></div>" );
			$menu = $( ".gc-subway-menu-nav", $elm );
			$elm.nextUntil( ".pagedetails, .gc-subway-section-end" ).wrapAll( "<section class='provisional " + mainClass + "'>" );
			$main = $elm.next();

			// Prevent on-load blinking on desktop
			$elm.addClass( "no-blink" );

			desktopInited = true;
		  };

		// Listen for resizing and mutate the DOM accordingly
		$document.on( wb.resizeEvents, onResize );

		// Bind the init event of the plugin
		$document.on( "timerpoke.wb " + initEvent, selector + ".provisional", init );

		// Add the timer poke to initialize the plugin
		wb.add( selector );

		} )( jQuery, window, wb );</section></code></pre>
   </details>
  </details>
 </div>
</section>

<h2 id="research">
 Research and blog posts
</h2>

<p>
 This pattern was developed with CRA during an optimization project on the Canada Child Benefit. It has shown to work well to show the relationship between related pages and to work well on mobile devices.
</p>

<h2 id="latest">
 Latest changes
</h2>

<section>
 <dl class="dl-horizontal">
  <dt>
   <time class="link-muted" datetime="2020-12-27">
    2020-12-27
   </time>
  </dt>
  <dd>
   Launched the subway navigation pattern in Beta
  </dd>
 </dl>
</section>

<section>
 <h2 id="discuss">
  Discussion
 </h2>
 <p>
  <a href="https://github.com/canada-ca/design-system-systeme-conception/issues">
   Discuss the pattern in github issues
  </a>
 </p>
</section>






