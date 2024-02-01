---
altLangPage: https://conception.canada.ca/configurations-conception-communes/cases-cocher-boutons-radio.html
date: null
dateModified: '2021-04-22'
description: null
title: Checkboxes and radio buttons
---


<div class="row">
 <div class="col-md-12 pull-left">
  <ul class="list-inline small mrgn-bttm-sm" id="list-inline-desktop-only" style="line-height:1.65em">
   <li class="mrgn-rght-lg">
    Last updated: 2021-06-02
   </li>
  </ul>
 </div>
</div>

<section>
 <p>
  Checkboxes and radio buttons are form controls. They help people select an answer to a question or confirm completion.
 </p>
 <p>
  Large checkboxes and radio buttons are easier to select and use, particularly on mobile devices.
 </p>
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
    <a href="#implement">
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
  <h2 id="use">
   When to use
  </h2>
  <p>
   Checkboxes and radio buttons should be used in interactive questions, like in application forms or wizards:
  </p>
  <ul>
   <li>
    <a href="./interactive-questions.html">
     Interactive questions
    </a>
   </li>
  </ul>
 </section>
 <section>
  <h2 id="avoid">
   What to avoid
  </h2>
  <p>
   Don't use checkboxes or radio buttons to present options that are not easily comparable. In these cases, use the Services and information (doormat) pattern:
  </p>
  <ul>
   <li>
    <a href="./services-information.html">
     Services and information (doormats)
    </a>
   </li>
  </ul>
  <p>
   For a stand alone question with few options and a manageable amount of content per option that does not require separate pages, use expand/collapse or tabs instead:
  </p>
  <ul>
   <li>
    <a href="./collapsible-content.html">
     Expand/collapse
    </a>
   </li>
   <li>
    <a href="./tabbed-interface.html">
     Tabbed interface
    </a>
   </li>
  </ul>
 </section>
 <section>
  <h2 id="implement">
   How to implement
  </h2>
  <h3 id="large-checkboxes">
   Large checkboxes
  </h3>
  <p>
   <b>
    When to use:
   </b>
   Large checkboxes are the recommended checkbox pattern. In particular, large checkboxes should be used when one or more selections can be made to answer a question.
  </p>
  <p>
   <b>
    What to avoid:
   </b>
   Don't use the large checkboxes when building a checklist with items that break across multiple lines or when only a single item can be checked. For these situations, use tickboxes instead.
  </p>
  <section>
   <h4>
    Large checkboxes target with explicit labels
   </h4>
   <div class="panel panel-default pattern-demo">
    <div class="panel-body">
     <fieldset class="gc-chckbxrdio">
      <legend>
       Choose your condiments:
      </legend>
      <ul class="list-unstyled lst-spcd-2">
       <li class="checkbox">
        <input id="cond1" type="checkbox"/>
        <label for="cond1">
         Ketchup
        </label>
       </li>
       <li class="checkbox">
        <input id="cond2" type="checkbox"/>
        <label for="cond2">
         Relish
        </label>
       </li>
       <li class="checkbox">
        <input id="cond3" type="checkbox"/>
        <label for="cond3">
         Mustard
        </label>
       </li>
      </ul>
     </fieldset>
    </div>
   </div>
   <details>
    <summary>
     Code
    </summary>
    <details>
     <summary>
      HTML
     </summary>
     <pre><code>&lt;fieldset class="gc-chckbxrdio"&gt;
	&lt;legend&gt;Choose your condiments:&lt;/legend&gt;
	&lt;ul class="list-unstyled lst-spcd-2"&gt;
		&lt;li class="checkbox"&gt;
			&lt;input type="checkbox" id="cond1"&gt;
			&lt;label for="cond1"&gt;Ketchup&lt;/label&gt;
		&lt;/li&gt;
		&lt;li class="checkbox"&gt;
			&lt;input type="checkbox" id="cond2"&gt;
			&lt;label for="cond2"&gt;Relish&lt;/label&gt;
		&lt;/li&gt;
		&lt;li class="checkbox"&gt;
			&lt;input type="checkbox" id="cond3"&gt;
			&lt;label for="cond3"&gt;Mustard&lt;/label&gt;
		&lt;/li&gt;
	&lt;/ul&gt;
&lt;/fieldset&gt;</code></pre>
    </details>
    <details>
     <summary>
      CSS
     </summary>
     <pre><code>.gc-chckbxrdio label {
  cursor: pointer;
  display: block;
  font-size: 20px;
}

.gc-chckbxrdio legend {
  float: none;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 15px;
  margin-top: 0;
}

.gc-chckbxrdio input[type="checkbox"] {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.gc-chckbxrdio input[type="checkbox"][disabled] + label {
  cursor: not-allowed;
  opacity: .5;
}

.gc-chckbxrdio input[type="checkbox"] + label {
  display: inline-block;
  line-height: 2;
  margin-left: 36px;
  width: auto;
}

.gc-chckbxrdio input[type="checkbox"] + label::before {
  border: 4px solid #fff;
  -webkit-box-shadow: 0 0 0 2px #000;
          box-shadow: 0 0 0 2px #000;
  content: "";
  display: inline-block;
  height: 36px;
  left: 0;
  position: absolute;
  top: 2px;
  width: 36px;
}

.gc-chckbxrdio input[type="checkbox"] + label:hover::before {
  background-image: -webkit-gradient(linear, left top, left bottom, from(#e6e5e5), color-stop(50%, white));

  background-image: linear-gradient(to bottom, #e6e5e5, white 50%);
}

.gc-chckbxrdio input[type="checkbox"]:focus + label::before {
  -webkit-box-shadow: 0 0 0 2px #000, 0 0 8px 4px #3b99fc;
          box-shadow: 0 0 0 2px #000, 0 0 8px 4px #3b99fc;
}

.gc-chckbxrdio.checkbox input[type="checkbox"] + label,
.gc-chckbxrdio.checkbox input[type="checkbox"] + label + ul {
  font-size: 17px;
  min-height: 23px;
}

.gc-chckbxrdio.checkbox input[type="checkbox"] + label::before {
  height: 24px;
  left: 6px;
  top: 4px;
  width: 24px;
}

.gc-chckbxrdio.checkbox input[type="checkbox"]:checked + label::after {
  border-width: 0 3px 3px 0;
  height: 16px;
  left: 14px;
  top: 6px;
  width: 9px;
}

.gc-chckbxrdio input[type="checkbox"]:checked + label::after {
  border-color: #333;
  border-style: solid;
  border-width: 0 5px 5px 0;
  content: "";
  display: inline-block;
  height: 26px;
  left: 12px;
  position: absolute;
  top: 4px;
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
  width: 13px;
}</code></pre>
    </details>
   </details>
   <h4>
    Large disabled checkboxes target with explicit labels
   </h4>
   <div class="panel panel-default pattern-demo">
    <div class="panel-body">
     <fieldset class="gc-chckbxrdio">
      <legend>
       Choose your condiments:
      </legend>
      <ul class="list-unstyled lst-spcd-2">
       <li class="checkbox">
        <input disabled="" id="cond4" type="checkbox"/>
        <label for="cond4">
         Ketchup
        </label>
       </li>
       <li class="checkbox">
        <input id="cond5" type="checkbox"/>
        <label for="cond5">
         Relish
        </label>
       </li>
       <li class="checkbox">
        <input disabled="" id="cond6" type="checkbox"/>
        <label for="cond6">
         Mustard
        </label>
       </li>
      </ul>
     </fieldset>
    </div>
   </div>
   <details>
    <summary>
     Code
    </summary>
    <details>
     <summary>
      HTML
     </summary>
     <pre><code>&lt;fieldset class="gc-chckbxrdio"&gt;
	&lt;legend&gt;Choose your condiments:;&lt;/legend&gt;
	&lt;ul class="list-unstyled lst-spcd-2"&gt;
		&lt;li class="checkbox"&gt;
			&lt;input type="checkbox" id="cond4" disabled&gt;
			&lt;label for="cond1"&gt;Ketchup&lt;/label&gt;
		&lt;/li&gt;
		&lt;li class="checkbox"&gt;
			&lt;input type="checkbox" id="cond5"&gt;
			&lt;label for="cond2"&gt;Relish&lt;/label&gt;
		&lt;/li&gt;
		&lt;li class="checkbox"&gt;
			&lt;input type="checkbox" id="cond6" disabled&gt;
			&lt;label for="cond3"&gt;Mustard&lt;/label&gt;
		&lt;/li&gt;
	&lt;/ul&gt;
&lt;/fieldset&gt;</code></pre>
    </details>
    <details>
     <summary>
      CSS
     </summary>
     <pre><code>.gc-chckbxrdio label {
  cursor: pointer;
  display: block;
  font-size: 20px;
}

.gc-chckbxrdio legend {
  float: none;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 15px;
  margin-top: 0;
}

.gc-chckbxrdio input[type="checkbox"] {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.gc-chckbxrdio input[type="checkbox"][disabled] + label {
  cursor: not-allowed;
  opacity: .5;
}

.gc-chckbxrdio input[type="checkbox"] + label {
  display: inline-block;
  line-height: 2;
  margin-left: 36px;
  width: auto;
}

.gc-chckbxrdio input[type="checkbox"] + label::before {
  border: 4px solid #fff;
  -webkit-box-shadow: 0 0 0 2px #000;
          box-shadow: 0 0 0 2px #000;
  content: "";
  display: inline-block;
  height: 36px;
  left: 0;
  position: absolute;
  top: 2px;
  width: 36px;
}

.gc-chckbxrdio input[type="checkbox"] + label:hover::before {
  background-image: -webkit-gradient(linear, left top, left bottom, from(#e6e5e5), color-stop(50%, white));
  background-image: linear-gradient(to bottom, #e6e5e5, white 50%);
}

.gc-chckbxrdio input[type="checkbox"]:focus + label::before {
  -webkit-box-shadow: 0 0 0 2px #000, 0 0 8px 4px #3b99fc;
          box-shadow: 0 0 0 2px #000, 0 0 8px 4px #3b99fc;
}

.gc-chckbxrdio.checkbox input[type="checkbox"] + label,
.gc-chckbxrdio.checkbox input[type="checkbox"] + label + ul {
  font-size: 17px;
  min-height: 23px;
}

.gc-chckbxrdio.checkbox input[type="checkbox"] + label::before {
  height: 24px;
  left: 6px;
  top: 4px;
  width: 24px;
}

.gc-chckbxrdio.checkbox input[type="checkbox"]:checked + label::after {
  border-width: 0 3px 3px 0;
  height: 16px;
  left: 14px;
  top: 6px;
  width: 9px;
}

.gc-chckbxrdio input[type="checkbox"]:checked + label::after {
  border-color: #333;
  border-style: solid;
  border-width: 0 5px 5px 0;
  content: "";
  display: inline-block;
  height: 26px;
  left: 12px;
  position: absolute;
  top: 4px;
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
  width: 13px;
}</code></pre>
    </details>
   </details>
  </section>
  <section>
   <h3 id="small-checkboxes">
    Tickboxes (smaller checkboxes)
   </h3>
   <p>
    <b>
     When to use:
    </b>
    Only use tickboxes when there is a single item that can be checked, such as for confirmations.
   </p>
   <p>
    <b>
     What to avoid:
    </b>
    Don't use tickboxes for answers to questions or in checklists. For these situations, use the large checkboxes instead:
   </p>
   <ul>
    <li>
     <a href="#large-checkboxes">
      Large checkboxes
     </a>
    </li>
   </ul>
   <p>
    Consider using a button instead of tickbox, particularly in cases where it is the primary action or next step on the page:
   </p>
   <ul>
    <li>
     <a href="./buttons.html">
      Buttons
     </a>
    </li>
   </ul>
   <h4>
    Single smaller checkbox target with explicit label in an inline form
   </h4>
   <div class="panel panel-default pattern-demo">
    <div class="panel-body">
     <form action="#" class="form-inline" method="get">
      <div class="form-group">
       <label class="wb-inv" for="exampleInputEmail2">
        Email address
       </label>
       <input class="form-control" id="exampleInputEmail2" placeholder="Enter email" type="email">
       </input>
      </div>
      <div class="form-group">
       <label class="wb-inv" for="exampleInputPassword2">
        Password
       </label>
       <input class="form-control" id="exampleInputPassword2" placeholder="Password" type="password">
       </input>
      </div>
      <div class="checkbox gc-chckbxrdio">
       <input id="remember2" type="checkbox">
        <label for="remember2">
         Remember me
        </label>
       </input>
      </div>
      <button class="btn btn-default" type="submit">
       Sign in
      </button>
     </form>
    </div>
   </div>
   <details>
    <summary>
     Code
    </summary>
    <details>
     <summary>
      HTML
     </summary>
     <pre class="mrgn-tp-md"><code>&lt;form class="form-inline" method="get" action="#"&gt;
	&lt;div class="form-group"&gt;
		&lt;label class="wb-inv" for="exampleInputEmail2"&gt;Email address&lt;/label&gt;
		&lt;input type="email" class="form-control" id="exampleInputEmail2" placeholder="Enter email" /&gt;
	&lt;/div&gt;
	&lt;div class="form-group"&gt;
		&lt;label class="wb-inv" for="exampleInputPassword2"&gt;Password&lt;/label&gt;
		&lt;input type="password" class="form-control" id="exampleInputPassword2" placeholder="Password" /&gt;
	&lt;/div&gt;
	&lt;div class="checkbox gc-chckbxrdio"&gt;
		&lt;input id="remember2" type="checkbox" /&gt;
		&lt;label for="remember2"&gt;Remember me&lt;/label&gt;
	&lt;/div&gt;
	&lt;button type="submit" class="btn btn-default"&gt;Sign in&lt;/button&gt;
&lt;/form&gt;</code></pre>
    </details>
    <details>
     <summary>
      CSS
     </summary>
     <pre><code>.gc-chckbxrdio label {
  cursor: pointer;
  display: block;
  font-size: 20px;
}

.gc-chckbxrdio legend {
  float: none;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 15px;
  margin-top: 0;
}

.gc-chckbxrdio input[type="checkbox"] {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.gc-chckbxrdio input[type="checkbox"][disabled] + label {
  cursor: not-allowed;
  opacity: .5;
}

.gc-chckbxrdio input[type="checkbox"] + label {
  display: inline-block;
  line-height: 2;
  margin-left: 36px;
  width: auto;
}

.gc-chckbxrdio input[type="checkbox"] + label::before {
  border: 4px solid #fff;
  -webkit-box-shadow: 0 0 0 2px #000;
          box-shadow: 0 0 0 2px #000;
  content: "";
  display: inline-block;
  height: 36px;
  left: 0;
  position: absolute;
  top: 2px;
  width: 36px;
}

.gc-chckbxrdio input[type="checkbox"] + label:hover::before {
  background-image: -webkit-gradient(linear, left top, left bottom, from(#e6e5e5), color-stop(50%, white));
  background-image: linear-gradient(to bottom, #e6e5e5, white 50%);
}

.gc-chckbxrdio input[type="checkbox"]:focus + label::before {
  -webkit-box-shadow: 0 0 0 2px #000, 0 0 8px 4px #3b99fc;
          box-shadow: 0 0 0 2px #000, 0 0 8px 4px #3b99fc;
}

.gc-chckbxrdio.checkbox input[type="checkbox"] + label,
.gc-chckbxrdio.checkbox input[type="checkbox"] + label + ul {
  font-size: 17px;
  min-height: 23px;
}

.gc-chckbxrdio.checkbox input[type="checkbox"] + label::before {
  height: 24px;
  left: 6px;
  top: 4px;
  width: 24px;
}

.gc-chckbxrdio.checkbox input[type="checkbox"]:checked + label::after {
  border-width: 0 3px 3px 0;
  height: 16px;
  left: 14px;
  top: 6px;
  width: 9px;
}

.gc-chckbxrdio input[type="checkbox"]:checked + label::after {
  border-color: #333;
  border-style: solid;
  border-width: 0 5px 5px 0;
  content: "";
  display: inline-block;
  height: 26px;
  left: 12px;
  position: absolute;
  top: 4px;
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
  width: 13px;
}

.gc-chckbxrdio.form-inline .label-inline {
  padding-right: 20px;
}

.gc-chckbxrdio.form-inline .label-inline label {
  padding-left: 10px;
}</code></pre>
    </details>
   </details>
  </section>
  <section>
   <h3>
    Radio buttons
   </h3>
   <h4>
    Large radio buttons target with explicit labels
   </h4>
   <p>
    <b>
     When to use:
    </b>
    Use radio buttons when only one selection can be made in a list.
   </p>
   <div class="panel panel-default pattern-demo">
    <div class="panel-body">
     <fieldset class="gc-chckbxrdio">
      <legend>
       Which is your favorite pet?
      </legend>
      <ul class="list-unstyled lst-spcd-2">
       <li class="radio">
        <input id="animal-1" name="animal" type="radio"/>
        <label for="animal-1">
         Dog
        </label>
       </li>
       <li class="radio">
        <input id="animal-2" name="animal" type="radio"/>
        <label for="animal-2">
         Cat
        </label>
       </li>
       <li class="radio">
        <input id="animal-3" name="animal" type="radio"/>
        <label for="animal-3">
         Rat
        </label>
       </li>
      </ul>
     </fieldset>
    </div>
   </div>
   <details>
    <summary>
     Code
    </summary>
    <details>
     <summary>
      HTML
     </summary>
     <pre><code>&lt;fieldset class="gc-chckbxrdio"&gt;
	&lt;legend&gt;Which is your favorite pet?&lt;/legend&gt;
	&lt;ul class="list-unstyled lst-spcd-2"&gt;
		&lt;li class="radio"&gt;
			&lt;input type="radio" name="animal" id="animal-1"&gt;
			&lt;label for="animal-1"&gt;Dog&lt;/label&gt;
		&lt;/li&gt;
		&lt;li class="radio"&gt;
			&lt;input type="radio" name="animal" id="animal-2"&gt;
			&lt;label for="animal-2"&gt;Cat&lt;/label&gt;
		&lt;/li&gt;
		&lt;li class="radio"&gt;
			&lt;input type="radio" name="animal" id="animal-3"&gt;
			&lt;label for="animal-3"&gt;Rat&lt;/label&gt;
		&lt;/li&gt;
	&lt;/ul&gt;
&lt;/fieldset&gt;</code></pre>
    </details>
    <details>
     <summary>
      CSS
     </summary>
     <pre><code>

</code></pre>
    </details>
   </details>
   <h4>
    Large radio buttons target with explicit labels in an inline form
   </h4>
   <div class="panel panel-default pattern-demo">
    <div class="panel-body">
     <fieldset class="gc-chckbxrdio form-inline">
      <legend>
       Choose an option:
      </legend>
      <div class="label-inline">
       <input id="inlineRadio1" name="optradio" type="radio"/>
       <label for="inlineRadio1">
        Option 1
       </label>
      </div>
      <div class="label-inline">
       <input id="inlineRadio2" name="optradio" type="radio"/>
       <label for="inlineRadio2">
        Option 2
       </label>
      </div>
      <div class="label-inline">
       <input id="inlineRadio3" name="optradio" type="radio"/>
       <label for="inlineRadio3">
        Option 3
       </label>
      </div>
     </fieldset>
    </div>
   </div>
   <details>
    <summary>
     Code
    </summary>
    <details>
     <summary>
      HTML
     </summary>
     <pre><code>&lt;fieldset class="gc-chckbxrdio form-inline"&gt;
	&lt;legend&gt;Choose an option&lt;/legend&gt;
	&lt;div class="label-inline"&gt;
		&lt;input id="inlineRadio1" type="radio" name="optradio"&gt;
		&lt;label for="inlineRadio1"&gt;Option 1&lt;/label&gt;
	&lt;/div&gt;
	&lt;div class="label-inline"&gt;
		&lt;input id="inlineRadio2" type="radio" name="optradio"&gt;
		&lt;label for="inlineRadio2"&gt;Option 2&lt;/label&gt;
	&lt;/div&gt;
	&lt;div class="label-inline"&gt;
		&lt;input id="inlineRadio3" type="radio" name="optradio"&gt;
		&lt;label for="inlineRadio3"&gt;Option 3&lt;/label&gt;
	&lt;/div&gt;
&lt;/fieldset&gt;</code></pre>
    </details>
    <details>
     <summary>
      CSS
     </summary>
     <pre><code>.provisional.gc-chckbxrdio label {
	cursor: pointer;
	display: block;
	font-size: 20px;
}
.provisional.gc-chckbxrdio legend {
	float: none;
	font-size: 22px;
	font-weight: 700;
	margin-bottom: 15px;
	margin-top: 0;
}
.provisional.gc-chckbxrdio input[type="radio"] {
	border: 0;
	clip: rect(0 0 0 0);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	width: 1px;
}
.provisional.gc-chckbxrdio input[type="radio"][disabled] + label {
	cursor: not-allowed;
	opacity: .5;
}
.provisional.gc-chckbxrdio input[type="radio"] + label {
	display: inline-block;
	line-height: 2;
	margin-left: 36px;
	width: auto;
}
.provisional.gc-chckbxrdio input[type="radio"] + label::before {
	border: 4px solid #fff;
	-webkit-box-shadow: 0 0 0 2px #000;
	box-shadow: 0 0 0 2px #000;
	content: "";
	display: inline-block;
	height: 36px;
	left: 0;
	position: absolute;
	top: 2px;
	width: 36px;
}
.provisional.gc-chckbxrdio input[type="radio"] + label:hover::before {
	background-image: -webkit-gradient(linear, left top, left bottom, from(#e6e5e5), color-stop(50%, white));
	background-image: linear-gradient(to bottom, #e6e5e5, white 50%);
}
.provisional.gc-chckbxrdio input[type="radio"]:focus + label::before {
	-webkit-box-shadow: 0 0 0 2px #000, 0 0 8px 4px #3b99fc;
	box-shadow: 0 0 0 2px #000, 0 0 8px 4px #3b99fc;
}
.provisional.gc-chckbxrdio input[type="radio"] + label::before {
	border-radius: 50%;
}
.provisional.gc-chckbxrdio input[type="radio"]:checked + label::before {
	background: #444;
}
.provisional.gc-chckbxrdio.form-inline .label-inline {
	padding-right: 20px;
}
.provisional.gc-chckbxrdio.form-inline .label-inline label {
	padding-left: 10px;
}</code></pre>
    </details>
   </details>
  </section>
  <section>
   <h3 id="configuration">
    Configuration options
   </h3>
   <table class="table">
    <thead>
     <tr>
      <th>
       Option
      </th>
      <th>
       Description
      </th>
      <th>
       How to configure
      </th>
     </tr>
    </thead>
    <tbody>
     <tr>
      <td>
       Large input targets
      </td>
      <td>
       Design for large checkbox and radio buttons.
      </td>
      <td>
       Add the
       <code>
        gc-chckbxrdio
       </code>
       class to the
       <code>
        fieldset
       </code>
       or the container element surrounding the checkbox/radio-button inputs.
      </td>
     </tr>
     <tr>
      <td>
       Tickboxes
      </td>
      <td>
       Small checkboxes when there is a single item that can be checked, such as for confirmations.
      </td>
      <td>
       The class
       <code>
        gc-chckbxrdio
       </code>
       and the class
       <code>
        checkbox
       </code>
       have to be enabled on the container element surrounding the targeted checkbox.
      </td>
     </tr>
     <tr>
      <td>
       Disabled state
      </td>
      <td>
       Disabled inputs will not be clickable. Visual indications include greying out the control and adding a "stop" cursor icon on hover.
      </td>
      <td>
       To toggle a disabled state, add a
       <code>
        disabled
       </code>
       attribute to the input field
      </td>
     </tr>
     <tr>
      <td>
       Inline format
      </td>
      <td>
       Inline radio buttons or checkboxes will display side by side on larger screens and wrap to new lines, rather than vertically.
      </td>
      <td>
       Add the
       <code>
        form-inline
       </code>
       class to surrounding container of the checkboxes or radio buttons. Also add the
       <code>
        label-inline
       </code>
       class to each checkbox or radio button container.
      </td>
     </tr>
    </tbody>
   </table>
  </section>
  <h2 id="research">
   Research and blog posts
  </h2>
  <p>
   We successfully tested the use of interactive checklists during an optimization project with the Canada Revenue Agency and to create checklists for travel restrictions due to COVID-19.
  </p>
  <ul>
   <li>
    <a href="https://blog.canada.ca/2020/11/12/interactive-checklists.html">
     Using interactive checklists to simplify eligibility criteria
    </a>
    (blog post)
   </li>
   <li>
    <a href="{{ site.url }}/research-summaries/cra-contact-us-research-summary.html">
     Research summary: Contact the CRA
    </a>
   </li>
  </ul>
  <section>
   <h2 id="versions">
    Latest changes
   </h2>
   <dl class="dl-horizontal">
    <dt>
     Version 0.1:
     <br/>
     <small>
      <time class="link-muted" datetime="2020-10-21">
       October 21, 2020
      </time>
     </small>
    </dt>
    <dd>
     Launched the beta version of the checkboxes and radio buttons pattern.
    </dd>
   </dl>
  </section>
 </section>
</section>
