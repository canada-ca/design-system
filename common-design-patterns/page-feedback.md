---
altLangPage: https://conception.canada.ca/configurations-conception-communes/outil-retroaction.html
date: "2023-03-03"
dateModified: "2023-10-06"
description: "The feedback tool is an optional pattern to collect feedback on the page experience."
title: "Page feedback tool"
---
<p class="small">Last updated: October 6, 2023</p>
<p><span class="label label-warning">Optional</span></p>
<p>The feedback tool is an <strong>optional</strong> pattern to collect feedback on the page experience. When in use, it is included at the bottom of the page before the date modified.</p>
<div class="mrgn-tp-md mrgn-bttm-md">
  <figure class="mrgn-tp-md mrgn-bttm-lg"><img src="/images/page-feedback.png" class="img-responsive" alt="" /></figure>
</div>
<h2 id="on-this-page">On this page</h2>
<ul>
  <li><a href="#when-to-use">When to use</a></li>
  <li><a href="#what-to-avoid">What to avoid</a></li>
  <li><a href="#content-and-design">Content and design</a></li>
  <li><a href="#how">How to implement</a></li>
  <li><a href="#research">Research and rationale</a></li>
  <li><a href="#discussion">Discussion</a></li>
</ul>
<section id="when-to-use">
  <h2>When to use</h2>
  <p>Consider adding the page feedback tool to:</p>
  <ul>
    <li>uncover specific page-level issues affecting your GC Task Success Survey task score</li>
    <li>research issues on pages you plan on working on in the future</li>
    <li>understand if new or existing pages are meeting user needs</li>
    <li>identify emerging issues</li>
    <li>monitor after page improvements have gone live</li>
  </ul>
</section>
<section id="what-to-avoid">
  <h2>What to avoid</h2>
  <p>Avoid using the page feedback tool on pages where there is no plan to monitor comments or take action. We also don’t recommend using the tool within secure spaces or pages with sensitive subject material.</p>
  <p><a href="/feedback/when.html#how-not-to-use-the-tool">Additional behaviours to avoid when analyzing feedback</a></p>
</section>
<section id="content-and-design">
  <h2>Content and design</h2>
  <p>The feedback tool invites visitors to:</p>
  <ul>
    <li>indicate if they found what they were looking for (yes / no)</li>
    <li>offer their feedback describing the problem</li>
  </ul>
  <p>Place the tool at the bottom of the page before the date modified. It's aligned to the left of the page before the “Share this page” widget. You can opt to use the page feedback tool in place of the "Report a problem" pattern. It's not mandatory to add the feedback pattern when removing “Report a problem” from your page.</p>
  <p>The page feedback pattern has 3 states:</p>
  <ul>
    <li>“Did you find what you were looking for?” prompt with “Yes” and “No” buttons</li>
    <li>Feedback text entry box (with an option to add a customizable contact link)</li>
    <li>Thank you message</li>
  </ul>
  <p>This pattern also has detailed documentation for use and analysis of feedback.</p>
  <h3>Content specifications</h3>
  <p>When you first add the feedback tool to your page, use the default option without the contact link.</p>
  <p><strong>Only consider adding a contact link if</strong> you have tried to make the page content clearer for how to contact the program or service and users are still using the feedback tool to get a response for their situation.</p>
  <p>The link can go to an HTML page or an email address.</p>
  <p>Keep the link text short. The recommended wording is “Contact [the Service Name]”</p>
  <h3>Interactions</h3>
  <p>The feedback pattern has 3 states:</p>
  <ul>
    <li>"Did you find what you were looking for" prompt</li>
    <li>feedback entry</li>
    <li>thank you message</li>
  </ul>
  <p>For all of these states, the user stays on the same HTML page as they interact with the feedback pattern.</p>
  <p><strong>On page load</strong>, the feedback pattern displays the prompt “Did you find what you were looking for” followed by buttons for “Yes” and “No”.</p>
  <p><strong>If a user selects "No"</strong> the next step asks the user to provide more details about their experience.</p>
  <p>It begins with a heading labelled "Please provide more details", followed by the text "You will not receive a reply. Don't include personal information (telephone, email, SIN, financial, medical, or work details). Maximum 300 characters". After selecting "Submit", the user is shown a thank you message.</p>
  <p>Then there is an open text field to capture the feedback.</p>
  <p>If the contact option is used, a contact link for the service is placed inside an expand/collapse pattern labeled “Need urgent help with a problem? Contact us” located before the heading and open text field.</p>
  <p>The user selects the “Submit” button to send their feedback. After selecting "Submit", the user is shown a thank you message with a green checkmark to indicate that their feedback has been successfully sent.</p>
  <p><strong>If a user selects "Yes"</strong> they will only be shown a thank you message.</p>
  <h3>Design specifications</h3>
  <p>The feedback pattern replaces the "Report a problem" pattern when in use.</p>
  <h4>Grey well</h4>
  <ul>
    <li>Well class: well mrgn-bttm-0</li>
  </ul>
  <h4>Typography</h4>
  <ul>
    <li>Heading: font-size: 16px</li>
    <li>Body text: small font-size: 87%</li>
  </ul>
  <h4>Buttons</h4>
  <ul>
    <li>Position: The buttons are to the right of the "Did you find what you were looking for" prompt. The ‘Yes’ button is to the left of the ‘No’ button</li>
    <li>Button class: btn btn-primary</li>
  </ul>
  <h4>Thank you checkmark icon</h4>
  <ul>
    <li>Position: left of the "Thank you" message</li>
    <li>Checkmark icon: glyphicon glyphicon-ok</li>
    <li>Checkmark colour: success class</li>
  </ul>
  <h3>Visual examples</h3>
  <div class="row">
    <div class="col-md-8">
      <div class="mrgn-tp-md mrgn-bttm-md">
        <figure class="mrgn-tp-md mrgn-bttm-lg">
          <figcaption><b>1. Initial view of the feedback tool</b></figcaption>
          <img src="/images/page-feedback.png" class="img-responsive" alt="1. Initial view of the feedback tool. Text version below:" />
          <details>
            <summary class="wb-toggle" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Image description:</summary>
            <p>On page load, the feedback is located at the bottom of the web page above the date modified. A small gray well includes the prompt “Did you find what you were looking for?” followed by buttons for “Yes” and “No”.</p>
          </details>
        </figure>
      </div>
      <figure class="mrgn-tp-md mrgn-bttm-lg">
        <figcaption><b>2. View after selecting "No"</b></figcaption>
        <img src="/images/description-en.jpg" class="img-responsive" alt="2. View after selecting No. Text version below:" />
        <details>
          <summary class="wb-toggle" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Image description:</summary>
          <p>After interacting with the “No” button in, a text entry screen will replace the prompt. There is a heading for “Please provide more details” followed by instructions to not include personal information: “You will not receive a reply. Don’t include personal information (telephone, email, SIN financial, medical, or work details. Maximum 300 characters.” There is a small text entry box followed by a button for “Submit”.</p>
        </details>
      </figure>
      <figure class="mrgn-tp-md mrgn-bttm-lg">
        <figcaption><b>2b. Optional view after selecting "No" with contact option</b> The expand/collapse pattern labeled “Need urgent help with a problem? Contact us” will be closed by default.</figcaption>
        <img src="/images/urgent-help-en.jpg" class="img-responsive" alt="2b. Optional view after selecting No with contact option. Text version below:" />
        <details>
          <summary class="wb-toggle" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Image description:</summary>
          <p>After interacting with the “No” button in, a text entry screen will replace the prompt.</p>
          <p>In the contact option, there is an expand/collapse pattern with the header “Need urgent help with a problem? Contact us”. When the expand/collapse pattern is opened, there is a customizable link to contact the service.</p>
          <p>After the expand/collapse pattern, there is a heading for “Please provide more details” followed by instructions to not include personal information: “You will not receive a reply. Don’t include personal information (telephone, email, SIN financial, medical, or work details. Maximum 300 characters.” There is a small text entry box followed by a button for “Submit”.</p>
        </details>
      </figure>
      <figure class="mrgn-tp-md mrgn-bttm-lg">
        <figcaption><b>3. View after selecting "Yes" or after submitting feedback</b></figcaption>
        <img src="/images/thank-you-en.jpg" class="img-responsive" alt="3. View after selecting Yes or after submitting feedback. Text version below:" />
        <details>
          <summary class="wb-toggle" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Image description:</summary>
          <p>When users select “Yes” from the initial prompt or after submitting their feedback, a thank you message is displayed. There is a green checkmark icon followed by the heading “Thank you for your feedback”</p>
        </details>
      </figure>
    </div>
  </div>
</section>
<section id="how">
  <h2>How to implement</h2>
  <p>Add it to the bottom of a content page after the page content and before the date modified. </p>
  <div class="row">
    <div class="col-md-12">
      <h3>Feedback tool code for AEM pages</h3>
      <p>Use this feedback code for any page hosted on the Adobe Managed Web Service.</p>
      <details>
        <summary>Instructions</summary>
        <ol class="lst-spcd mrgn-tp-lg">
          <li>Add a Generic HTML component at the bottom of the main content. Take the HTML code (below) as your baseline. This will be the “Did you find what you were looking for?” and “Share this page” section. </li>
          <li>Update the values of the hidden input  fields with the information specific to your implementation. These hidden fields are for:</li>
          <ul>
            <li>Institution (your department acronym) - required</li>
            <li>Theme - required</li>
            <li>Section (a section of your website) - required but can be left blank</li>
            <li>Page title - required</li>
          </ul>
          <p><strong><span class="bg-warning">Important note!</span></strong> Institution, Theme, Section values should be the SAME in English and French.</p>
          <li>Save and publish your changes! </li>
          <li><strong>For machine learning pilots only:</strong> Tell the DTO the URLS that the feedback tool has been added to.</li>
          <li><strong>For all pilots:</strong> Tell the DTO if you are adding a new section or theme, so we can add these filters into the Feedback Viewer.</li>
        </ol>
      </details>
      <details>
        <summary>Code</summary>
        <span class="wb-prettify all-pre"></span>
        <pre><code>
&lt;div class&#x3D;&quot;row row-no-gutters mrgn-tp-xl&quot;&gt;
  &lt;div class&#x3D;&quot;col-sm-7 col-lg-6&quot;&gt;
    &lt;section class&#x3D;&quot;gc-pg-hlpfl provisional&quot;&gt;
      &lt;div class&#x3D;&quot;well mrgn-bttm-0&quot;&gt;
        &lt;form id&#x3D;&quot;gc-pg-hlpfl-frm&quot; action&#x3D;&quot;&#x2F;gc&#x2F;services&#x2F;generateemail&quot; method&#x3D;&quot;post&quot; autocomplete&#x3D;&quot;off&quot; class&#x3D;&quot;provisional wb-postback&quot; data-wb-postback&#x3D;&quot;{&quot;success&quot;:&quot;.gc-pg-hlpfl-thnk&quot;,&quot;content&quot;:&quot;#gc-pg-hlpfl-frm&quot;}&quot;&gt;
          &lt;input type&#x3D;&quot;hidden&quot; name&#x3D;&quot;institutionopt&quot; value&#x3D;&quot;Institution - required - must use same acronym value EN and FR&quot;&gt;
          &lt;input type&#x3D;&quot;hidden&quot; name&#x3D;&quot;themeopt&quot; value&#x3D;&quot;Theme - required - must use same value EN and FR&quot;&gt;
          &lt;input type&#x3D;&quot;hidden&quot; name&#x3D;&quot;sectionopt&quot; value&#x3D;&quot;Section - required but can be blank - same value EN and FR&quot;&gt;
          &lt;input type&#x3D;&quot;hidden&quot; name&#x3D;&quot;pageTitle&quot; value&#x3D;&quot;Page title (EN) - required&quot;&gt;
          &lt;input type&#x3D;&quot;hidden&quot; name&#x3D;&quot;emailTemplate&quot; value&#x3D;&quot;servcan&#x2F;gc-pagesuccessen&quot;&gt;
          &lt;div class&#x3D;&quot;gc-pg-hlpfl-btn&quot;&gt;
            &lt;div class&#x3D;&quot;row row-no-gutters&quot;&gt;
              &lt;div class&#x3D;&quot;col-xs-12 col-sm-7 mrgn-tp-sm&quot;&gt;
                &lt;h2 class&#x3D;&quot;mrgn-tp-sm h5&quot;&gt;Did you find what you were looking for?&lt;&#x2F;h2&gt;
              &lt;&#x2F;div&gt;
              &lt;div class&#x3D;&quot;col-xs-8 col-sm-5 text-right&quot;&gt;
                &lt;button type&#x3D;&quot;submit&quot; name&#x3D;&quot;helpful&quot; value&#x3D;&quot;Yes&quot; class&#x3D;&quot;btn btn-primary&quot; data-gc-analytics-wtph&gt;Yes&lt;&#x2F;button&gt;
                &lt;button type&#x3D;&quot;button&quot; class&#x3D;&quot;btn btn-primary mrgn-lft-sm nojs-hide&quot; data-wb-doaction&#x3D;&quot;[ {&quot;action&quot;:&quot;removeClass&quot;,&quot;source&quot;:&quot;.gc-pg-hlpfl-no&quot;,&quot;class&quot;:&quot;nojs-show&quot;}, {&quot;action&quot;:&quot;addClass&quot;,&quot;source&quot;:&quot;.gc-pg-hlpfl-btn&quot;,&quot;class&quot;:&quot;hide&quot;} ]&quot; data-gc-analytics-wtph-no&gt;
                No
                &lt;&#x2F;button&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
          &lt;p class&#x3D;&quot;h3 hidden nojs-show&quot;&gt;If not, tell us why:&lt;&#x2F;p&gt;
          &lt;div class&#x3D;&quot;gc-pg-hlpfl-no nojs-show&quot;&gt;
            &lt;fieldset&gt;
              &lt;legend class&#x3D;&quot;h4 mrgn-tp-0 mrgn-bttm-md&quot;&gt;What was wrong?&lt;&#x2F;legend&gt;
              &lt;div class&#x3D;&quot;radio&quot;&gt;
                &lt;label for&#x3D;&quot;problem1&quot;&gt;
                  &lt;input name&#x3D;&quot;problem&quot; id&#x3D;&quot;problem1&quot; type&#x3D;&quot;radio&quot; value&#x3D;&quot;I can&#39;t find the information&quot; data-gc-analytics-wtph-value&#x3D;&quot;I can&#39;t find the information-Je ne peux pas trouver l&#39;information&quot; data-gc-analytics-collect&#x3D;&quot;notPrivate&quot;&gt;
                  I can&#39;t &lt;strong&gt;find&lt;&#x2F;strong&gt; the information &lt;&#x2F;label&gt;
              &lt;&#x2F;div&gt;
              &lt;div class&#x3D;&quot;radio&quot;&gt;
                &lt;label for&#x3D;&quot;problem2&quot;&gt;
                  &lt;input name&#x3D;&quot;problem&quot; id&#x3D;&quot;problem2&quot; type&#x3D;&quot;radio&quot; value&#x3D;&quot;The information is hard to understand&quot; data-gc-analytics-wtph-value&#x3D;&quot;The information is hard to understand-L&#39;information est difficile à comprendre&quot; data-gc-analytics-collect&#x3D;&quot;notPrivate&quot;&gt;
                  The information is hard to &lt;strong&gt;understand&lt;&#x2F;strong&gt; &lt;&#x2F;label&gt;
              &lt;&#x2F;div&gt;
              &lt;div class&#x3D;&quot;radio&quot;&gt;
                &lt;label for&#x3D;&quot;problem3&quot;&gt;
                  &lt;input name&#x3D;&quot;problem&quot; id&#x3D;&quot;problem3&quot; type&#x3D;&quot;radio&quot; value&#x3D;&quot;There was an error &#x2F; something didn&#39;t work&quot; data-gc-analytics-wtph-value&#x3D;&quot;There was an error or something didn&#39;t work-Il y avait une erreur ou quelque chose ne fonctionnait pas&quot; data-gc-analytics-collect&#x3D;&quot;notPrivate&quot;&gt;
                  There was an error or something &lt;strong&gt;didn&#39;t work&lt;&#x2F;strong&gt; &lt;&#x2F;label&gt;
              &lt;&#x2F;div&gt;
              &lt;div class&#x3D;&quot;radio&quot;&gt;
                &lt;label for&#x3D;&quot;problem4&quot;&gt;
                  &lt;input name&#x3D;&quot;problem&quot; id&#x3D;&quot;problem4&quot; type&#x3D;&quot;radio&quot; value&#x3D;&quot;Other reason&quot; data-gc-analytics-wtph-value&#x3D;&quot;Other reason-Autre raison&quot; data-gc-analytics-collect&#x3D;&quot;notPrivate&quot;&gt;
                  Other reason &lt;&#x2F;label&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;fieldset&gt;
            &lt;label for&#x3D;&quot;problem6&quot; class&#x3D;&quot;mrgn-bttm-0&quot;&gt;Please provide more details&lt;&#x2F;label&gt;
            &lt;p class&#x3D;&quot;small&quot;&gt; &lt;strong&gt;You will not receive a reply. Don&#39;t include personal information (telephone, email, SIN, financial, medical, or work details).&lt;&#x2F;strong&gt; &lt;br&gt;
              &lt;span class&#x3D;&quot;small&quot;&gt;Maximum 300 characters&lt;&#x2F;span&gt; &lt;&#x2F;p&gt;
            &lt;textarea id&#x3D;&quot;problem6&quot; name&#x3D;&quot;details&quot; class&#x3D;&quot;full-width&quot; maxlength&#x3D;&quot;300&quot;&gt;&lt;&#x2F;textarea&gt;
            &lt;button type&#x3D;&quot;submit&quot; name&#x3D;&quot;helpful&quot; value&#x3D;&quot;No&quot; class&#x3D;&quot;btn btn-primary mrgn-tp-md mrgn-bttm-sm&quot; data-gc-analytics-wtph-submit&gt;Submit&lt;&#x2F;button&gt;
          &lt;&#x2F;div&gt;
          &lt;input type&#x3D;&quot;hidden&quot; name&#x3D;&quot;problem&quot; value&#x3D;&quot;&quot;&gt;
        &lt;&#x2F;form&gt;
        &lt;div class&#x3D;&quot;gc-pg-hlpfl-thnk hide&quot;&gt;
          &lt;p class&#x3D;&quot;h6 mrgn-tp-sm mrgn-bttm-sm&quot;&gt;&lt;span class&#x3D;&quot;far fa-check-circle text-success mrgn-rght-sm&quot; aria-hidden&#x3D;&quot;true&quot;&gt;&lt;&#x2F;span&gt; Thank you for your feedback&lt;&#x2F;p&gt;
        &lt;&#x2F;div&gt;
      &lt;&#x2F;div&gt;
    &lt;&#x2F;section&gt;
  &lt;&#x2F;div&gt;
  &lt;div class&#x3D;&quot;col-sm-3 col-sm-offset-1 col-lg-offset-3&quot;&gt;
    &lt;div class&#x3D;&quot;wb-share&quot; data-wb-share&#x3D;&quot;{&quot;pnlId&quot;:&quot;pnlShrPg&quot;, &quot;lnkClass&quot;: &quot;btn btn-default btn-block mrgn-tp-md&quot;}&quot;&gt;&lt;&#x2F;div&gt;
  &lt;&#x2F;div&gt;
&lt;&#x2F;div&gt;
        </code></pre>
      </details>
    </div>
  </div>
  <div class="row">
    <div class="col-md-12">
      <h3>Feedback tool code for non-AEM pages</h3>
      <p>Use this feedback tool code for any page that is not hosted on the Adobe Managed Web Service.</p>
      <details>
        <summary>Instructions</summary>
        <ol class="lst-spcd">
          <li>Insert this HTML code where the  “Did you find what you were looking for?” and “Share this page” are located.</li>
          <li>Update the values of the hidden input  fields with the information specific to your implementation.  These hidden fields are for:</li>
          <ul>
            <li>Institution (your department acronym) - required</li>
            <li>Theme - required</li>
            <li>Section (a section of your website) - required but can be left blank</li>
            <li>Page title - required</li>
            <li>Submission page (URL) - required</li>
            <li>Page language (Use EN or FR) - required</li>
          </ul>
          <p><strong><span class="bg-warning">Important note! </span></strong>Institution, Theme, Section values should be the SAME in English and French.</p>
          <li>Add the Javascript just above the closing /body tag</li>
          <li>When someone submits a comment, they will see a checkmark icon and a thank you message.  If you do not see a checkmark, you may need to include a reference to the Font Awesome icon catalog in your page header.</li>
          <pre class="prettyprint"><code>
&lt;link rel=&quot;stylesheet&quot; href=&quot;https://use.fontawesome.com/releases/v5.8.1/css/all.css&quot; integrity=&quot;sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf&quot; crossorigin=&quot;anonymous&quot; /&gt;&lt;/li&gt;
 </code></pre>
          <li><strong>For machine learning pilots only:</strong> Tell the DTO the URLS that the feedback tool has been added to.</li>
          <li><strong>For all pilots:</strong> Tell the DTO if you are adding a new section or theme, so we can add these filters into the Feedback Viewer.</li>
        </ol>
      </details>
      <details>
        <summary>Code</summary>
        <pre class="prettyprint"><code>
   &lt;!-- START PAGE FEEDBACK WIDGET --&gt;
   &lt;div class=&quot;row row-no-gutters mrgn-tp-xl&quot;&gt;
   &lt;div class=&quot;col-sm-7 col-lg-6&quot;&gt;
      &lt;section class=&quot;gc-pg-hlpfl provisional&quot;&gt;
         &lt;div class=&quot;well mrgn-bttm-0&quot;&gt;
            &lt;form id=&quot;gc-pg-hlpfl-frm&quot; action=&quot;#&quot; method=&quot;post&quot; autocomplete=&quot;off&quot;&gt;
               &lt;input type=&quot;hidden&quot; name=&quot;institutionopt&quot; value=&quot;Institution acronym - required - must use same value EN and FR&quot;&gt;
               &lt;input type=&quot;hidden&quot; name=&quot;themeopt&quot; value=&quot;Theme - required - must use same value EN and FR&quot;&gt;
               &lt;input type=&quot;hidden&quot; name=&quot;language&quot; value=&quot;Language - required - use EN or FR&quot;&gt;
               &lt;input type=&quot;hidden&quot; name=&quot;pageTitle&quot; value=&quot;Page title EN - required&quot;&gt;
               &lt;input type=&quot;hidden&quot; name=&quot;submissionPage&quot; value=&quot;Page URL - required&quot;&gt;
               &lt;input type=&quot;hidden&quot; name=&quot;sectionopt&quot; value=&quot;Section - required but can be blank - must use same value EN and FR&quot;&gt;
               &lt;input type=&quot;hidden&quot; id=&quot;helpful&quot; name=&quot;helpful&quot; value=&quot;Yes&quot;&gt;
               &lt;div class=&quot;gc-pg-hlpfl-btn&quot;&gt;
                  &lt;div class=&quot;row row-no-gutters&quot;&gt;
                     &lt;div class=&quot;col-xs-12 col-sm-7 mrgn-tp-sm&quot;&gt;
                        &lt;h2 class=&quot;mrgn-tp-sm h5&quot;&gt;Did you find what you were looking for?&lt;/h2&gt;
                     &lt;/div&gt;
                     &lt;div class=&quot;col-xs-8 col-sm-5 text-right&quot;&gt;
                        &lt;button id=&quot;btnyes&quot; type=&quot;submit&quot; value=&quot;Yes&quot; class=&quot;btn btn-primary&quot;&gt;Yes&lt;/button&gt;
                        &lt;button id=&quot;btnno&quot; type=&quot;button&quot; class=&quot;btn btn-primary mrgn-lft-sm nojs-hide&quot;&gt;No&lt;/button&gt;
                     &lt;/div&gt;
                  &lt;/div&gt;
               &lt;/div&gt;
               &lt;p class=&quot;h3 hidden nojs-show&quot;&gt;If not, tell us why:&lt;/p&gt;
               &lt;div class=&quot;gc-pg-hlpfl-no nojs-show&quot;&gt;
                  &lt;fieldset&gt;
                     &lt;legend class=&quot;h4 mrgn-tp-0 mrgn-bttm-md&quot;&gt;What was wrong?&lt;/legend&gt;
                     &lt;div class=&quot;radio&quot;&gt;
                        &lt;label for=&quot;problem1&quot;&gt;
                        &lt;input name=&quot;problem&quot; id=&quot;problem1&quot; type=&quot;radio&quot; value=&quot;I can't find the information&quot; data-gc-analytics-wtph-value=&quot;I can't find the information-Je ne peux pas trouver l'information&quot; data-gc-analytics-collect=&quot;notPrivate&quot;&gt;
                        I can't &lt;strong&gt;find&lt;/strong&gt; the information
                        &lt;/label&gt;
                     &lt;/div&gt;
                     &lt;div class=&quot;radio&quot;&gt;
                        &lt;label for=&quot;problem2&quot;&gt;
                        &lt;input name=&quot;problem&quot; id=&quot;problem2&quot; type=&quot;radio&quot; value=&quot;The information is hard to understand&quot; data-gc-analytics-wtph-value=&quot;The information is hard to understand-L'information est difficile à comprendre&quot; data-gc-analytics-collect=&quot;notPrivate&quot;&gt;
                        The information is hard to &lt;strong&gt;understand&lt;/strong&gt;
                        &lt;/label&gt;
                     &lt;/div&gt;
                     &lt;div class=&quot;radio&quot;&gt;
                        &lt;label for=&quot;problem3&quot;&gt;
                        &lt;input name=&quot;problem&quot; id=&quot;problem3&quot; type=&quot;radio&quot; value=&quot;There was an error / something didn't work&quot; data-gc-analytics-wtph-value=&quot;There was an error or something didn't work-Il y avait une erreur ou quelque chose ne fonctionnait pas&quot; data-gc-analytics-collect=&quot;notPrivate&quot;&gt;
                        There was an error or something &lt;strong&gt;didn't work&lt;/strong&gt;
                        &lt;/label&gt;
                     &lt;/div&gt;
                     &lt;div class=&quot;radio&quot;&gt;
                        &lt;label for=&quot;problem4&quot;&gt;
                        &lt;input name=&quot;problem&quot; id=&quot;problem4&quot; type=&quot;radio&quot; value=&quot;Other reason&quot; data-gc-analytics-wtph-value=&quot;Other reason-Autre raison&quot; data-gc-analytics-collect=&quot;notPrivate&quot;&gt;
                        Other reason
                        &lt;/label&gt;
                     &lt;/div&gt;
                  &lt;/fieldset&gt;
                  &lt;label for=&quot;problem6&quot; class=&quot;mrgn-bttm-0&quot;&gt;Please provide more details&lt;/label&gt;
                  &lt;p class=&quot;small&quot;&gt;
                     &lt;strong&gt;You will not receive a reply. Don't include personal information (telephone, email, SIN, financial, medical, or work details).&lt;/strong&gt;
                     &lt;br&gt;
                     &lt;span class=&quot;small&quot;&gt;Maximum 300 characters&lt;/span&gt;
                  &lt;/p&gt;
                  &lt;textarea id=&quot;problem6&quot; name=&quot;details&quot; class=&quot;full-width&quot; maxlength=&quot;300&quot;&gt;&lt;/textarea&gt;
                  &lt;button type=&quot;submit&quot; value=&quot;No&quot; class=&quot;btn btn-primary mrgn-tp-md mrgn-bttm-sm&quot;&gt;Submit&lt;/button&gt;
               &lt;/div&gt;
            &lt;/form&gt;
            &lt;div class=&quot;gc-pg-hlpfl-thnk hide&quot;&gt;
               &lt;p class=&quot;h6 mrgn-tp-sm mrgn-bttm-sm&quot;&gt;&lt;span class=&quot;far fa-check-circle text-success mrgn-rght-sm&quot; aria-hidden=&quot;true&quot;&gt;&lt;/span&gt; Thank you for your feedback&lt;/p&gt;
            &lt;/div&gt;
         &lt;/div&gt;
      &lt;/section&gt;
   &lt;/div&gt;
   &lt;div class=&quot;col-sm-3 col-sm-offset-1 col-lg-offset-3&quot;&gt;
      &lt;div class=&quot;wb-share&quot; data-wb-share=&quot;{&quot;pnlId&quot;:&quot;pnlShrPg&quot;, &quot;lnkClass&quot;: &quot;btn btn-default btn-block mrgn-tp-md&quot;}&quot;&gt;&lt;/div&gt;
   &lt;/div&gt;
   &lt;/div&gt;
   &lt;!-- END PAGE FEEDBACK WIDGET --&gt;
   &lt;!-- START SCRIPT PAGE FEEDBACK WIDGET --&gt;
   &lt;script&gt;
   $(document).on(&quot;wb-ready.wb&quot;, function() {
      $(&quot;#btnno&quot;).click(function(e) {
          $(&quot;.gc-pg-hlpfl-no&quot;).removeClass(&quot;nojs-show&quot;);
          $(&quot;.gc-pg-hlpfl-btn&quot;).addClass(&quot;hide&quot;);
          $(&quot;#helpful&quot;).val(&quot;No&quot;);
      });
      $(&quot;#gc-pg-hlpfl-frm&quot;).submit(function(e) {
          e.preventDefault();
          $(&quot;.gc-pg-hlpfl-thnk&quot;).removeClass(&quot;hide&quot;);
          $(&quot;#gc-pg-hlpfl-frm&quot;).addClass(&quot;hide nojs-show&quot;);
          $.ajax({
              url: 'https://pagesuccessemailqueue.azurewebsites.net/api/QueueProblemForm',
              type: 'POST',
              dataType: 'text',
              data: $('form#gc-pg-hlpfl-frm').serialize(),
              success: function(data) {},
              error: function(xhr, status, err) {
                  console.log(xhr.responseText);
              }
          });
      });
   });
   &lt;/script&gt;
   &lt;!-- END SCRIPT PAGE FEEDBACK WIDGET --&gt;

 </code></pre>
      </details>
    </div>
  </div>
  <h3 id="guidance">Accessing and analyzing feedback</h3>
  <p>Feedback can be viewed and downloaded as CSV or Excel files at any time using the Feedback Viewer website.</p>
  <p>The Feedback Viewer is a password protected environment available to all page feedback participants. Contact the DTO to access to the site.</p>
  <p>Email: <a href="mailto:dto.btn@tbs-sct.gc.ca">dto.btn@tbs-sct.gc.ca</a></p>
  <p><a href="https://design.canada.ca/feedback/index.html">Full guidance for using and analyzing page feedback</a></p>
</section>
<section id="research">
  <h2>Research and rationale</h2>
  <h3>Research findings</h3>
  <p><a href="https://blog.canada.ca/2020/10/09/collect-feedback.html">Blog post: Collect feedback, find issues</a></p>
  <h3>Policy rationale</h3>
  <p>The <cite>Guideline for Service and Digital</cite> requires <a href="https://www.canada.ca/en/government/system/digital-government/guideline-service-digital.html#ToC2_2">client feedback</a> to be an integral part of service or product design. It can take several forms, including using the page feedback tool.</p>
  <a id="discussion"></a>
  <h2>Discussion</h2>
  <ul>
    <li><a href="mailto:dto.btn@tbs-sct.gc.ca">Send an email to the Digital Transformation Office</a></li>
  </ul>
</section>
