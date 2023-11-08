---
altLangPage: https://conception.canada.ca/configurations-conception-communes/signaler-probleme.html
date: 2023-10-03
dateModified: 2023-10-03
description: "We are decommissioning the Report a Problem pattern. We do not recommend adding this pattern to your pages."
title: "Report a problem"
---
<section class="alert alert-warning">
  <p>We are decommissioning the Report a Problem pattern. We do not recommend adding this pattern to your pages.</p>
  <p>If you would like to collect feedback for specific web pages you can use the <a href="https://design.canada.ca/common-design-patterns/page-feedback.html">Page Feedback Tool (PFT) pattern</a>. You should only add the PFT to pages where you plan to actively monitor and action feedback.</p>
</section>
<div class="gc-stp-stp">
  <div class="row">
    <ul class="toc lst-spcd col-md-12">
      <li class="col-md-4 col-sm-6"> <a class="list-group-item" href="site-footer-content.html"> Content
        footer </a> </li>
      <li class="col-md-4 col-sm-6"> <a class="list-group-item active"> Report a problem </a> </li>
      <li class="col-md-4 col-sm-6"> <a class="list-group-item" href="share-page.html"> Share this page </a> </li>
      <li class="col-md-4 col-sm-6"> <a class="list-group-item" href="date-modified.html"> Date modified </a> </li>
    </ul>
  </div>
</div>
<p>The Report a problem pattern allows people to provide feedback via a form for any problems they experience with the
  web page they are on.</p>
<p>This pattern enables page-level feedback. When people click on the Report a problem button on this page, they are
  presented with common issues to select using checkboxes. If none of these issues are applicable, they may select
  “Other” to provide more details.</p>
<section>
  <h2>On this page</h2>
  <ul>
    <li><a href="#when"> When to use</a></li>
    <li><a href="#avoid"> What to avoid</a></li>
    <li><a href="#how"> How to implement</a></li>
  </ul>
</section>
<section>
  <h2 id="when">When to use</h2>
  <p>Use this pattern to enable page-level feedback.</p>
</section>
<section>
  <h2 id="avoid"> What to avoid </h2>
  <p>Ensure that the feedback you receive is actionable. If you can, avoid implementing a form where people cannot
    give details on the issues they are experiencing.</p>
</section>
<section>
  <h2 id="how">How to implement</h2>
  <p>The button, label, placement and privacy statement are mandatory:</p>
  <ul>
    <li> the pattern is presented as a button using the <a href="./buttons.html"> button component styled for secondary
      actions </a> , which triggers a feedback form to expand when clicked </li>
    <li> the label reads: “Report a problem on this page” </li>
    <li> placement: positioned directly below the main content area, left-aligned </li>
    <li> privacy statement: positioned within a dismissible overlay </li>
  </ul>
  <p>The pattern for the contents of the feedback form is recommended. If meaningful data is not being received, a
    mailto link can be used as an alternative.</p>
  <p><b>Sending the form:</b> Make sure to replace the "#" placeholder in the form action line with whatever your
    institution uses to collect the data from the form. Consider sending the form to a generic email inbox if you
    don't have a server set up to handle this type of form.</p>
  <div class="pattern-demo mrgn-bttm-md">
    <div class="row">
      <div class="col-sm-6 col-md-5 col-lg-4">
        <details class="brdr-0">
          <summary class="btn btn-default text-center"> Report a problem on this page </summary>
          <div class="well row">
            <div class="gc-rprt-prblm">
              <div class="gc-rprt-prblm-tggl">
                <form action="#" id="gc-rprt-prblm-form" method="post">
                  <fieldset>
                    <legend> <span class="field-name"> Please select all that apply: </span> </legend>
                    <div class="checkbox">
                      <label for="problem1-demo">
                        <input data-reveal="#broken" id="problem1-demo" name="problem" type="checkbox" value="Something is broken"/>
                        Something is broken </label>
                    </div>
                    <div class="form-group hide" id="broken">
                      <label for="problem1-demo-detail"> Provide more details (optional): </label>
                      <input class="form-control full-width" id="problem1-demo-detail" type="text"/>
                    </div>
                    <div class="checkbox">
                      <label for="problem2-demo">
                        <input data-reveal="#spelling" id="problem2-demo" name="problem" type="checkbox" value="It has spelling or grammar mistakes"/>
                        It has spelling or grammar
                        mistakes </label>
                    </div>
                    <div class="form-group hide" id="spelling">
                      <label for="problem2-demo-detail"> Provide more details (optional): </label>
                      <input class="form-control full-width" id="problem2-demo-detail" type="text"/>
                    </div>
                    <div class="checkbox">
                      <label for="problem3-demo">
                        <input data-reveal="#wrong" id="problem3-demo" name="problem" type="checkbox" value="The information is wrong"/>
                        The information is wrong </label>
                    </div>
                    <div class="form-group hide" id="wrong">
                      <label for="problem3-demo-detail"> Provide more details (optional): </label>
                      <input class="form-control full-width" id="problem3-demo-detail" type="text"/>
                    </div>
                    <div class="checkbox">
                      <label for="problem4-demo">
                        <input data-reveal="#outdated" id="problem4-demo" name="problem" type="checkbox" value="The information is outdated"/>
                        The information is outdated </label>
                    </div>
                    <div class="form-group hide" id="outdated">
                      <label for="problem4-demo-detail"> Provide more details (optional): </label>
                      <input class="form-control full-width" id="problem4-demo-detail" type="text"/>
                    </div>
                    <div class="checkbox">
                      <label for="problem5-demo">
                        <input data-reveal="#find" id="problem5-demo" name="problem" type="checkbox" value="I can’t find what I’m looking for"/>
                        I can’t find what I’m looking
                        for </label>
                    </div>
                    <div class="form-group hide" id="find">
                      <label for="problem5-demo-detail"> Describe what you’re looking for (optional): </label>
                      <input class="form-control full-width" id="problem5-demo-detail" type="text"/>
                    </div>
                    <div class="checkbox">
                      <label for="problem6-demo">
                        <input data-reveal="#confusing" id="problem6-demo" name="problem" type="checkbox" value="Other"/>
                        Other </label>
                    </div>
                    <div class="form-group hide" id="confusing">
                      <label for="problem6-demo-detail"> Provide more details (optional): </label>
                      <input class="form-control full-width" id="problem6-demo-detail" type="text"/>
                    </div>
                  </fieldset>
                  <p> <a class="wb-lbx" href="#privacy-statement"> Privacy statement </a> </p>
                  <section class="mfp-hide modal-dialog modal-content overlay-def" id="privacy-statement">
                    <header class="modal-header">
                      <h2 class="modal-title"> Privacy statement </h2>
                    </header>
                    <div class="modal-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Turp is egestas maecenas pharetra convallis posuere morbi leo
                        urna.</p>
                    </div>
                  </section>
                  <button class="btn btn-primary wb-toggle" data-toggle='{"stateOff": "hide", "stateOn": "show", "selector": ".gc-rprt-prblm-tggl"}' type="submit">Submit</button>
                </form>
              </div>
              <div class="gc-rprt-prblm-thnk gc-rprt-prblm-tggl hide">
                <h3>Thank you for your help!</h3>
                <p>You will not receive a reply. For enquiries, please <a href="https://www.canada.ca/en/contact.html">contact us</a>.</p>
              </div>
            </div>
          </div>
        </details>
      </div>
    </div>
  </div>
  <details>
    <summary>Code</summary>
    <pre class="prettyprint"><code>&lt;div class="row"&gt;
	 &lt;div class="col-sm-6 col-md-5 col-lg-4"&gt;
	  &lt;details class="brdr-0" open=""&gt;
	   &lt;summary class="btn btn-default text-center"&gt;Report a problem on this page&lt;/summary&gt;
	   &lt;div class="well row"&gt;
	    &lt;div class="gc-rprt-prblm"&gt;
	     &lt;div class="gc-rprt-prblm-tggl" id="wb-auto-7"&gt;
	      &lt;form action="#"&gt;
	       &lt;fieldset&gt;
	        &lt;legend&gt;&lt;span class="field-name"&gt;Please select all that apply: &lt;/span&gt;&lt;/legend&gt;
	        &lt;div class="checkbox"&gt;
	         &lt;label for="problem1"&gt;&lt;input type="checkbox" data-reveal="#broken" name="problem" value="Something is broken" id="problem1"&gt;Something is broken&lt;/label&gt;
	        &lt;/div&gt;
	        &lt;div class="form-group hide" id="broken"&gt;
	         &lt;label for="problem1-detail"&gt;Provide more details (optional):&lt;/label&gt;
	         &lt;input type="text" class="form-control full-width" id="problem1-detail"&gt;
	        &lt;/div&gt;
	        &lt;div class="checkbox"&gt;
	         &lt;label for="problem2"&gt;&lt;input type="checkbox" data-reveal="#spelling" name="problem" value="It has spelling or grammar mistakes" id="problem2"&gt;It has spelling or grammar mistakes&lt;/label&gt;
	        &lt;/div&gt;
	        &lt;div class="form-group hide" id="spelling"&gt;
	         &lt;label for="problem2-detail"&gt;Provide more details (optional):&lt;/label&gt;
	         &lt;input type="text" class="form-control full-width" id="problem2-detail"&gt;
	        &lt;/div&gt;
	        &lt;div class="checkbox"&gt;
	         &lt;label for="problem3"&gt;&lt;input type="checkbox" data-reveal="#wrong" name="problem" value="The information is wrong" id="problem3"&gt;The information is wrong&lt;/label&gt;
	        &lt;/div&gt;
	        &lt;div class="form-group hide" id="wrong"&gt;
	         &lt;label for="problem3-detail"&gt;Provide more details (optional):&lt;/label&gt;
	         &lt;input type="text" class="form-control full-width" id="problem3-detail"&gt;
	        &lt;/div&gt;
	        &lt;div class="checkbox"&gt;
	         &lt;label for="problem4"&gt;&lt;input type="checkbox" data-reveal="#outdated" name="problem" value="The information is outdated" id="problem4"&gt;The information is outdated&lt;/label&gt;
	        &lt;/div&gt;
	        &lt;div class="form-group hide" id="outdated"&gt;
	         &lt;label for="problem4-detail"&gt;Provide more details (optional):&lt;/label&gt;
	         &lt;input type="text" class="form-control full-width" id="problem4-detail"&gt;
	        &lt;/div&gt;
	        &lt;div class="checkbox"&gt;
	         &lt;label for="problem5"&gt;&lt;input type="checkbox" data-reveal="#find" name="problem" value="I can’t find what I’m looking for" id="problem5"&gt;I can’t find what I’m looking for&lt;/label&gt;
	        &lt;/div&gt;
	        &lt;div class="form-group hide" id="find"&gt;
	         &lt;label for="problem5-detail"&gt;Describe what you’re looking for (optional):&lt;/label&gt;
	         &lt;input type="text" class="form-control full-width" id="problem5-detail"&gt;
	        &lt;/div&gt;
	        &lt;div class="checkbox"&gt;
	         &lt;label for="problem6"&gt;&lt;input type="checkbox" data-reveal="#confusing" name="problem" value="Other" id="problem6"&gt;Other&lt;/label&gt;
	        &lt;/div&gt;
	        &lt;div class="form-group hide" id="confusing"&gt;
	         &lt;label for="problem6-detail"&gt;Provide more details (optional):&lt;/label&gt;
	         &lt;input type="text" class="form-control full-width" id="problem6-detail"&gt;
	        &lt;/div&gt;
	       &lt;/fieldset&gt;
	       &lt;button type="submit" class="btn btn-primary wb-toggle wb-init wb-toggle-inited" data-toggle="{&amp;quot;stateOff&amp;quot;: &amp;quot;hide&amp;quot;, &amp;quot;stateOn&amp;quot;: &amp;quot;show&amp;quot;, &amp;quot;selector&amp;quot;: &amp;quot;.gc-rprt-prblm-tggl&amp;quot;}" aria-controls="wb-auto-7 wb-auto-8"&gt;Submit&lt;/button&gt;
	      &lt;/form&gt;
	     &lt;/div&gt;
	     &lt;div class="gc-rprt-prblm-thnk gc-rprt-prblm-tggl hide" id="wb-auto-8"&gt;
	      &lt;h3&gt;Thank you for your help!&lt;/h3&gt;
	      &lt;p&gt;You will not receive a reply. For enquiries, please &lt;a href="https://www.canada.ca/en/contact.html"&gt;contact us&lt;/a&gt;.&lt;/p&gt;
	     &lt;/div&gt;
	    &lt;/div&gt;
	   &lt;/div&gt;
	  &lt;/details&gt;
	 &lt;/div&gt;
	&lt;/div&gt;</code></pre>
  </details>
</section>
