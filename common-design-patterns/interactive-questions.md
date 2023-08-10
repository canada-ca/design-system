---
altLangPage: https://conception.canada.ca/configurations-conception-communes/questions-interactives.html
date: null
dateModified: '2021-04-22'
description: null
title: Interactive questions design pattern
---


<div>
 <p class="gc-byline">
  <strong>
   From:
   <a href="https://www.canada.ca/en/treasury-board-secretariat.html">
    Treasury Board of Canada Secretariat
   </a>
  </strong>
 </p>
 <section>
  <p>
   The interactive questions pattern is used to present people with a sequence of simple questions that leads to the specific answer they need to continue with or complete their task. The interactive questions pattern can be used to help people understand eligibility criteria, applicability of rules, or compliance requirements that depend on specific situations or conditions.
  </p>
  <section>
   <h2>
    When to use this pattern
   </h2>
   <ul>
    <li>
     Use to guide people to an appropriate answer by asking them a series of questions
    </li>
   </ul>
  </section>
  <section>
   <h2>
    How to use this pattern
   </h2>
   <ul>
    <li>
     Use defined presentation classes for the field flow interface included in
     <abbr title="Web Experience Toolkit">
      WET
     </abbr>
    </li>
   </ul>
   <section>
    <h3>
     Introducing interactive questions
    </h3>
    <ul>
     <li>
      The heading for this pattern must express the goal of the set of interactive questions
      <ul>
       <li>
        for example, “Find out if you can renew your passport online”
       </li>
      </ul>
     </li>
     <li>
      Optionally provide an overview of the results people can expect from completing the interactive questionnaire
     </li>
     <li>
      Optionally provide brief instructions above the questions
     </li>
    </ul>
   </section>
   <section>
    <h3>
     Presenting questions
    </h3>
    <ul>
     <li>
      Keep the number of questions to a minimum (no more than 7 per sequence)
     </li>
     <li>
      Each question must be written to a person reading it (use “you” and “your”)
     </li>
     <li>
      Present choices or options immediately after each question, ensuring they are written as possible answers to the question above
     </li>
     <li>
      When presenting choices, use standard form controls like radio buttons, checkboxes, and drop-down menus; ensure you cover off all possible choices
     </li>
     <li>
      Where possible, pre-select the most common or optimal choice
     </li>
    </ul>
   </section>
   <section>
    <h3>
     Grouping questions
    </h3>
    <ul>
     <li>
      Present questions one at a time to keep focus on the current question; keep each subsequent question on the same page in the same place as the previous question
     </li>
     <li>
      Always place questions in context (for example, on the eligibility page within the
      <a href="../recommended-templates/service-initiation-pages.html">
       Service Initiation template
      </a>
      )
     </li>
    </ul>
   </section>
   <section>
    <h3>
     Moving through the sequence of questions
    </h3>
    <ul>
     <li>
      Always use buttons for navigating though the sequence of questions  (buttons labeled “continue” or “next” to trigger the next question or the answer)
     </li>
     <li>
      Ensure people are able to go back to undo or change an earlier selection, via buttons or links (such as a link labeled “change your selection”)
     </li>
     <li>
      Any buttons used for navigating through the questions must be labeled appropriately for the context (for example, “Continue” might make sense in one situation, but a clearer choice in another might be, “Find out if you’re eligible”)
     </li>
     <li>
      When interactive questions are combined with the
      <a href="./ordered-multipage.html">
       multi-page navigation pattern
      </a>
      (such as in a service initiation template), avoid using “next” to avoid confusion between the 2 types of buttons
     </li>
    </ul>
   </section>
   <section>
    <h3>
     Presenting answers
    </h3>
    <ul>
     <li>
      Always summarize the choices people have made and ensure they can go back to undo or change an earlier selection
     </li>
     <li>
      Explain the answer clearly and simply
     </li>
     <li>
      Provide links to the next action that people should take based on the answer they are given
     </li>
    </ul>
   </section>
  </section>
  <h2 id="research">
   Research and blog posts
  </h2>
  <ul>
   <li>
    <a href="https://blog.canada.ca/2021/04/08/using-interactive-questions.html">
     The magic of using interactive questions
    </a>
   </li>
  </ul>
  <section>
   <h2>
    Working example
   </h2>
   <ul>
    <li>
     <a href="http://wet-boew.github.io/themes-dist/GCWeb/demos/fieldflow/fieldflow-en.html">
      WET: Field flow
     </a>
    </li>
   </ul>
  </section>
  <header class="panel-heading">
   <h3 class="panel-title">
    Example
   </h3>
  </header>
  <div class="panel-body">
   <figure class="mrgn-bttm-sm">
    <figcaption class="text-center">
     <b>
      Interactive questions pattern
     </b>
    </figcaption>
    <img alt="Screenshot illustrating a demonstration of the interactive questions pattern on Canada.ca. Details on this graphic can be found in the surrounding text." class="img-responsive center-block" src="https://www.canada.ca/content/dam/tbs-sct/images/government-communications/canada-content-style-guide/interactive-questions-pattern-eng.jpg"/>
   </figure>
  </div>
 </section>
</div>




