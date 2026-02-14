---
altLangPage: https://conception.canada.ca/configurations-conception-communes/boutons.html
date: null
dateModified: '2022-09-23'
description: null
title: Buttons
---
<div class="row">
  <div class="col-md-12 pull-left">
    <ul class="list-inline small mrgn-bttm-sm" id="list-inline-desktop-only" style="line-height:1.65em">
      <li class="mrgn-rght-lg"> Last updated: 2022-09-23 </li>
    </ul>
  </div>
</div>
<section>
  <p> Buttons are clickable objects intended to encourage a person to take action. </p>
  <div class="pattern-demo mrgn-bttm-md">
    <button class="btn btn-call-to-action"> Supertask button </button>
    <button class="btn btn-primary"> Primary button </button>
    <button class="btn btn-default"> Secondary button </button>
  </div>
  <section>
    <h2> On this page </h2>
    <ul>
      <li> <a href="#when"> When to use </a> </li>
      <li> <a href="#avoid"> What to avoid </a> </li>
      <li> <a href="#how"> How to implement </a> </li>
      <li> <a href="#research"> Research and blog posts </a> </li>
      <li> <a href="#latest"> Latest changes </a> </li>
    </ul>
  </section>
  <section>
    <h2 id="when"> When to use </h2>
    <p> Use the button pattern to execute actions or commands that will change the system state at the front or back end, for example “Add comment,” “Submit,” “Send.” </p>
    <p> Use buttons when: </p>
    <ul>
      <li> helping a person into or through a transaction such as “Sign in” </li>
      <li> invoking functionality, for example “Share this page” </li>
      <li> providing a persistent set of UI controls across a series of pages, for example “previous”, “next”, or “back to table of contents” </li>
    </ul>
  </section>
  <section>
    <h2 id="avoid"> What to avoid </h2>
    <p> Do not use buttons when an ordinary text link will do the job just as well, like when providing a single, simple link to another page. </p>
    <p> Use buttons to activate system controls, or to draw attention to primary actions on the page. Limit their use to prevent their visual impact from being reduced by overuse. </p>
  </section>
  <section>
    <h2 id="how"> How to implement </h2>
    <p> Use the right type of button: </p>
    <ol>
      <li> <a href="#action"> Supertask </a> </li>
      <li> <a href="#primary"> Primary </a> </li>
      <li> <a href="#secondary"> Secondary </a> </li>
      <li> <a href="#danger"> Danger </a> </li>
      <li> <a href="#link"> Link </a> </li>
      <li> <a href="#sign-in"> Sign in </a> </li>
    </ol>
    <h3 id="action"> 1. Supertask button </h3>
    <p> <strong> When to use: </strong> Use a supertask button to launch the main task or next step that people are trying to complete from a specific page, such as: </p>
    <ul>
      <li> apply for a program or service </li>
      <li> launch a calculator </li>
      <li> start a wizard </li>
      <li> find a clinic </li>
    </ul>
    <p> You can also use it on the <a href="https://design.canada.ca/mandatory-templates/institutional-profile-pages.html"> Institutional landing page </a> , when there is evidence that a particular top task (a supertask) is clearly the most important. </p>
    <p> <strong> What to avoid: </strong> Don’t use a supertask button to promote something that is not the primary task people are looking for on that page. For promotions, use <a href="https://design.canada.ca/common-design-patterns/feature-tiles.html"> Context-specific features </a> or <a href="https://design.canada.ca/common-design-patterns/feature-banner.html"> Promotional feature banner </a> . </p>
    <p> Don't use supertask buttons more than once on a page. </p>
    <div class="pattern-demo mrgn-bttm-md">
      <button class="btn btn-call-to-action"> Calculate how much you can get </button>
    </div>
    <details>
      <summary> Code </summary>
      <pre><code>&lt;button class="btn btn-call-to-action"&gt;Calculate how much you can get&lt;/button&gt;</code></pre>
    </details>
    <h3 id="primary"> 2. Primary button </h3>
    <p> <strong> When to use: </strong> Use primary buttons for actions someone is likely to take on that page, such as the next or submit buttons in a form. </p>
    <p> <strong> What to avoid: </strong> Don't use more than one primary button on a page. </p>
    <div class="pattern-demo mrgn-bttm-md">
      <button class="btn btn-primary"> Submit </button>
    </div>
    <details>
      <summary> Code </summary>
      <pre><code>&lt;button class="btn btn-primary"&gt;Submit&lt;/button&gt;</code></pre>
    </details>
    <h3 id="secondary"> 3. Secondary button </h3>
    <p> <strong> When to use: </strong> Use secondary buttons for alternative, less important or less likely to be used options, such as the 'previous' button in a form. </p>
    <div class="pattern-demo mrgn-bttm-md">
      <button class="btn btn-default"> Previous </button>
    </div>
    <details>
      <summary> Code </summary>
      <pre><code>&lt;button class="btn btn-default"&gt;Previous&lt;/button&gt;</code></pre>
    </details>
    <h3 id="danger"> 4. Danger button </h3>
    <p> <strong> When to use: </strong> Use danger buttons to bring attention to an action that might have consequences, such as deleting a form or leaving an authenticated application. </p>
    <p> <strong> What to avoid: </strong> Don't use danger buttons unless they are absolutely needed. </p>
    <div class="pattern-demo mrgn-bttm-md">
      <button class="btn btn-danger"> Erase form </button>
    </div>
    <details>
      <summary> Code </summary>
      <pre><code>&lt;button class="btn btn-danger"&gt;Erase form&lt;/button&gt;</code></pre>
    </details>
    <h3 id="link"> 5. Link button </h3>
    <p> <strong> When to use: </strong> Use link buttons for infrequently used options, such as for restarting a wizard or calculator. Link buttons have a slightly larger target area than regular links. </p>
    <div class="pattern-demo mrgn-bttm-md">
      <button class="btn btn-link"> Restart calculator </button>
    </div>
    <details>
      <summary> Code </summary>
      <pre><code>&lt;button class="btn btn-link"&gt;Restart calculator&lt;/button&gt;</code></pre>
    </details>
    <h3 id="sign-in"> 6. Contextual Sign in button </h3>
    <p> <strong> When to use: </strong> The contextual Sign in button is an optional element of the <a href="global-header.html"> Global header </a> . Use it on pages where signing in to an account is an important task. Use the label "Sign in". </p>
    <ul>
      <li> <a href="https://blog.canada.ca/2022/09/23/introducing-contextual-sign-in-button"> Introducing the contextual Sign in button (Blog) </a> </li>
      <li> <a href="contextual-signin.html"> Contextual Sign in button guidance </a> </li>
    </ul>
    <div class="pattern-demo mrgn-bttm-md mrgn-tp-lg">
      <figure><img alt="A square blue sign-in button at the top right of the screen" class="img-responsive border" src="../images/sign-in-button.png" width="300"></figure>
    </div>
    <h3> Customizing buttons </h3>
    <table class="table">
      <thead>
        <tr>
          <th> Option </th>
          <th> Description </th>
          <th> How to use </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> Full width </td>
          <td> Make a button occupy the full width of its column. </td>
          <td> Add the class <code> btn-block </code> to button. </td>
        </tr>
        <tr>
          <td> Grouped buttons </td>
          <td> Group buttons side by side for controls such as a toggle. </td>
          <td> Surround the grouped buttons with a <code> div </code> with the class <code> btn-group </code> . </td>
        </tr>
        <tr>
          <td> Change sizing </td>
          <td> Resize buttons if you need to improve visibility of a call to action or to save space in designs such as a toggle. </td>
          <td> Apply the following classes to the button:
            <ul>
              <li> Large: <code> btn-lg </code> </li>
              <li> Small: <code> btn-sm </code> </li>
              <li> Extra small: <code> btn-xs </code> </li>
            </ul></td>
        </tr>
        <tr>
          <td> Disable button </td>
          <td> Grey out a button so it can't be clicked on. Generally, try to remove the button instead of disabling it. </td>
          <td> Add the class <code> disabled </code> to button. </td>
        </tr>
      </tbody>
    </table>
  </section>
  <h2 id="research"> Research and blog posts </h2>
  <ul>
    <li> <a href="https://blog.canada.ca/2022/09/23/introducing-contextual-sign-in-button"> Introducing the contextual Sign in button </a> </li>
    <li> <a href="https://blog.canada.ca/2020/12/17/choosing-buttons.html"> Choosing the right button for task success </a> </li>
  </ul>
  <section>
    <h2 id="latest"> Latest changes </h2>
    <section>
      <dl class="dl-horizontal">
        <dt>
          <time class="link-muted" datetime="2022-08-17"> 2022-08-17 </time>
        </dt>
        <dd> Expanded Sign in button guidance </dd>
        <dt>
          <time class="link-muted" datetime="2021-01-20"> 2021-01-20 </time>
        </dt>
        <dd> Added a new beta version of a contextual Sign in button </dd>
      </dl>
    </section>
  </section>
