---
altLangPage: "https://conception.canada.ca/resumes-recherche/meteo-resume-recherche.html"
date: 2018-07-23
dateModified: 2018-07-23
description: "Make it easier for Canadians to understand notifications about dangerous weather conditions."
language: en
title: "Weather optimization"
---
<p css="post-meta">
  <time datetime="2018-05-09T00:00:00+00:00" itemprop="datePublished">July 23, 2018</time>
</p>
<p>The Weather optimization project kicked off in July 2017. Environment and Climate Change Canada’s Weather Office pulled together a collaborative team from E-Communications, and the Meteorological Service of Canada. Combined with the designers and researchers from the Digital Transformation Office, we set out to make it easier for Canadians to understand notifications about dangerous weather conditions.</p>
<h2>Discovery</h2>
<p>We started with a discovery phase to understand the current situation, people's needs related to the current content, and problems they may be having. Sources included reviewing previous usability studies, analyzing website traffic patterns and search behaviours, and reviewing phone and support requests. This provided enough insight to determine target audiences, which we then used to talk to people affected by the current content. We also researched weather applications and how they are used.</p>
<p>We also found tt most people were accessing the content using mobile devices. People were checking daily weather forecasts, long-term forecasts, or extreme weather warnings on their smartphones.</p>
<p>From these disvery insights, the team generated 7 task scenarios:</p>
<ul>
  <li><strong>Task:</strong> What will the weather be like in your area for the rest of the day?</li>
  <li><strong>Task:</strong> You rode your bike to work. Is there more than a 50/50 chance (yes/no) you will get wet cycling home at 5:00?</li>
  <li><strong>Task:</strong> It's Sunday morning, and you need to drive to Kingston for a Monday noon meeting. Should you leave this evening, or tomorrow morning?</li>
  <li><strong>Task:</strong> You are camping, and hear a rumour around the campsite that there might be hail. Hail would rip holes in your expensive tent. Should you rush to pack up your camp site this morning or take your time this evening?</li>
  <li><strong>Task:</strong> You want to take the dog for a short walk before it rains. Is it already raining anywhere in the Ottawa area yet (yes/no)?</li>
  <li> <strong> Task:</strong> You are coaching children's soccer tonight. You have to cancel if the humidex is above 40 degrees. Should you cancel the game or not? </li>
  <li><strong>Task:</strong> You are a golf course manager - the sky looks dark. Find out (yes/no) whether you should clear the course because of the potential of lightning in the next 10-20 minutes.</li>
</ul>
<p>We used these task scenarios to test the website with people in our target audiences.</p>
<figure> <img class="img-responsive" alt="Hand-written sticky notes on top of page with design suggestions for improving icons. There are sticker dots on the note." src="/research-summaries/images/design-suggestions.jpg" width="800px" />
  <figcaption><small>Design suggestions with voting dots</small></figcaption>
</figure>
<div class="col-md-8 row">
  <details>
    <summary>Detailed description</summary>
    <p>Solutions being voted on, which is on a printed paper sheet.</p>
    <p>HMW (how might we) better match expectations about icons (people touched them a lot!)</p>
    <p>Task 2 and Task 3: 24 hour. Task 6: Humidex night-day.</p>
    <p>Sticky notes are placed on top of the print out, sticky notes with similar ideas are grouped together.</p>
    <p>Sticky grouping 1: </p>
    <p>There are 14 voting dots on this group.</p>
    <ul>
      <li>make forecast icon/text for today/tonight clickable </li>
      <li>tonight clickable to hourly </li>
      <li>click entire block not word </li>
      <li>clickable icons/block sections </li>
      <li>clickable icon </li>
      <li>clickable icons on (illegible) to 24 hr test page/ how do we handle accessibility </li>
      <li>make current conditions box clickable to display condition details - this would move forecast up </li>
    </ul>
    <p>Sticky note grouping 2: </p>
    <p>There are 2 voting dots on this group.</p>
    <ul>
      <li>icons are a very simplistic representation of the weather</li>
      <li>animate current icon</li>
    </ul>
  </details>
</div>
<h2>Establishing a baseline</h2>
<p>Before making changes, we established a baseline score through moderated usability testing. 16 participants attended research sessions with their smartphones, in Toronto, Gatineau, Montreal and Ottawa. A further 4 participants were tested remotely on their desktop computers. Recruitment focused on individuals who were either employed or self-employed full-time outside the home. Participants were asked to complete the 7 task scenarios on the Canada.ca website. </p>
<p>We watched videos of the testing sessions together. This helped the entire team understand the problems people had in trying to complete the tasks. We could observe and quantify behaviours and usability issues that caused task failures. We captured these observations in click paths (to understand how people moved throughout the site) and described the problems in detailed issues so we could address them during the design phase.</p>
<h2>Redesign to improve task success</h2>
<p>For the baseline test, the overall findability rate was 35%, and the overall success rate was 33% across the 7 tasks and 140 task trials.</p>
<p>To solve the long list of issues we captured, the team created a working prototype for a new design on the Github code-sharing site. We held several workshops to work intensively on issues that participants experienced.</p>
<p>Throughout the design process, we tested content with people through small, informal "guerilla" sessions. These tests revealed problems with our designs that we were able to address before beginning a second round of full-scale moderated usability testing.</p>
<h3>Alert design before and after mobile redesign for validation</h3>
<div class="mwsmediaplayer section col-md-10">
  <figure class="wb-mltmd">
    <video poster="/research-summaries/images/weather_phones_anim-alert.jpg" title="Alert design before and after mobile redesign for validation">
      <source src="/research-summaries/media/weather_phones_anim-alert.mp4" type="video/mp4" />
    </video>
  </figure>
</div>
<div class="clearfix"></div>
<details>
  <summary>Video description</summary>
  <p>Two smartphones are shown with 2 different versions of a web page. One is labelled "Baseline", the other "Redesign".</p>
  <p>In the "Baseline" page, the title is "Ottawa (Kanata-Orléans) ON” followed by a weather alert box in yellow with the text "Severe thunderstorm watch in effect". An arrow points to the alert box with the annotation "Baseline: Few people realized they could click the warning to see details about the storm”.</p>
  <p>In the "Redesign" page, the weather alert box in yellow has been changed: there is now a small warning icon, the text is now underlined to show it can be clicked, and there is a chevron on the right. This image is animated, and the phone screen slowly scrolls up and down to show the alert is duplicated below the forecast which is lower on the page. An arrow points to alert text with the annotation "Redesign: Everyone noticed and clicked the warning - either at the top or in the forecast".</p>
</details>
<h3>City page design before and after mobile redesign for validation</h3>
<div class="mwsmediaplayer section col-md-9">
  <figure class="wb-mltmd">
    <video poster="/research-summaries/images/weather_phones_anim.jpg" title="City page design before and after mobile redesign for validation">
      <source src="/research-summaries/media/weather_phones_anim.mp4" type="video/mp4" />
    </video>
  </figure>
</div>
<div class="clearfix"></div>
<details>
  <summary>Video description</summary>
  <p>Two smartphones are shown with 2 different versions of a web page. One is labelled "Baseline", the other "Redesign".</p>
  <p>The "Baseline" page is animated and scrolls to the bottom, past the Current Conditions, Forecast, Averages and Extremes, etc. The page is very long and the commonly used links are found at the end. An arrow points to the list of links with the annotation "Baseline: Huge page to scroll. Participants didn't find important task links all the way at the bottom of the page".</p>
  <p>The "Redesign" page is also animated, and scrolls to just underneath the Current Conditions. This part of the page has been changed so that the content is in two columns, and the links are now easy to find. An arrow points to the list of links with the annotation "Redesign: Content has been streamlined. Short page. All participants found important links next to forecast".</p>
</details>
<h2>Measuring success rates on the redesigned prototype</h2>
<p>Once the revised design was ready, 20 new participants were recruited to complete the same 7 tasks. Our target was either 80% success, or an improvement of at least 20 points over the baseline score. The revised content and design improved findability rates from 35% up to 82%. Overall task completion success rose from 33% to 72%.</p>
<p>This chart shows the task completion success rates across the baseline and redesigned validation test on the prototype for all 40 participants:</p>
<div class="col-md-12"><img class="img-responsive hidden-sm hidden-xs" src="/research-summaries/images/Baseline_vs_Validation_Success_results.jpg" alt="Image of chart showing baseline and final test results." /></div>
<div class="row col-md-8">
  <details>
    <summary>Task completion success rates – table</summary>
    <p>Baseline measurement at start of project, validation on prototype redesigned by project team.</p>
    <div class="table-bravo">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Task</th>
            <th scope="col">Baseline</th>
            <th scope="col">Validation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1. Navigate to local forecast</td>
            <td>87%</td>
            <td>100%</td>
          </tr>
          <tr>
            <td>2. Understand &amp; find precipitation likelihood</td>
            <td>19%</td>
            <td>94%</td>
          </tr>
          <tr>
            <td>3. Snow statement: Driving</td>
            <td>25%</td>
            <td>75%</td>
          </tr>
          <tr>
            <td>4. Alert: Open thunderstorm watch for hail</td>
            <td>6%</td>
            <td>63%</td>
          </tr>
          <tr>
            <td>5. Radar: Decision based on current precipitation</td>
            <td>0%</td>
            <td>31%</td>
          </tr>
          <tr>
            <td>6. Humidex: Cancel soccer game</td>
            <td>88%</td>
            <td>81%</td>
          </tr>
          <tr>
            <td>7. Lightning map: Clear golf course </td>
            <td>6%</td>
            <td>63%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </details>
</div>
<h2>Key drivers of success</h2>
<p>The team derived this set of 6 design principles that appeared to have the most impact on improving success rates: </p>
<ul>
  <li>Design for mobile first: less prose, more space and interaction</li>
  <li>Reduce layers: group tasks and sub-tasks together to improve findability</li>
  <li>Shorten breadcrumbs: this made important weather details more visible </li>
  <li>Maximize real estate: changing the alert style helped Canadians find weather alert details</li>
  <li>Bring top tasks up: don’t dilute content with tiny tasks</li>
  <li>Show answers not information: craft answers for top tasks</li>
</ul>
<h2>Request the research </h2>
<p>Email us at <a href="mailto:{{ site.emails.dto }}">{{ site.emails.dto }}</a> if you have questions, or would like to know more about this research.</p>
<h2> What do you think? </h2>
<p>Let us know what you think about this project. Tweet using the hashtag #Canadadotca.</p>
<h2> Explore further </h2>
<ul>
  <li><a href="https://weather.gc.ca/canada_e.html">See the updated weather pages</a> based on the new designs in this project</li>
  <li><a href="https://blog.canada.ca/pages/project-overview.html">Read overviews of other projects</a> with our partners</li>
</ul>
