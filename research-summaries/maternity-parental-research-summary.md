---
altLangPage: "https://conception.canada.ca/resumes-recherche/maternite-parentales-resume-recherche.html"
date: 2019-08-23
dateModified: 2019-08-23
description: "Our goal was to make employment insurance maternity and parental benefits easier to find and understand for Canadians planning to expand their family."
language: en
title: "Employment insurance maternity and parental benefits"
---
<p class="post-meta">August 23, 2019</p>
<p>This optimization project was undertaken by the Digital Transformation Office (DTO) in close collaboration with Service Canada’s Employment Insurance (EI) delivery and policy teams, and the Employment and Social Development Canada (ESDC) web team. Our goal was to make employment insurance maternity and parental benefits easier to find and understand for Canadians planning to expand their family.</p>
<p>During our discovery research, we looked at a lot of external websites. We wanted to know what Canadian parents were sharing about maternity leave, parental leave, and navigating the EI system. This helped us understand which aspects of accessing these benefits people find most complex.</p>
<p>We found that people struggled with:</p>
<ul>
  <li>qualifying conditions</li>
  <li>how much money you can get</li>
  <li>how much time you can be away from work</li>
</ul>
<p>Search analytics told us that searches using the keyword “leave” far exceed searches for “benefits.” This suggested that these concepts, although legally distinct, are not clearly differentiated. Leave is a right defined in the Canada Labour Code and in provincial employment standards acts. While on leave from work, <abbr title="Employment Insurance">EI</abbr> benefits provide a sum of money to Canadians who have paid <abbr title="Employment Insurance">EI</abbr> premiums. This sum represents a proportion of previous earnings.</p>
<p>When we spoke with EI service agents, we realized that many parents don't understand that they can't switch between benefit options. For example, parents may choose the extended option, planning to have more time at home. This provides 33% of earnings. Some parents later change their minds and want to switch to the standard option, which provides 55% of earnings over a shorter period. They don't understand that once they've chosen, the choice is final. </p>
<p>An extra challenge for this optimization effort was that we had to explain a new parental sharing benefit. This new “use it or lose it” benefit was set for launch in March of 2019. It is available only to partners who share EI parental benefits. It's tricky to understand the options available to each parent, and how one parent’s choices impact the other’s benefits.</p>
<p>From previous research, we knew that tasks that require people to do math are particularly challenging. Concepts and terms such as “hours of insurable employment” and “variable best weeks” are not self-explanatory. They make the task of figuring out a benefit amount more difficult.</p>
<h2>Baseline testing and results</h2>
<p>We worked with the EI team to define scenarios for testing. The 8 scenarios covered a range of circumstances (from high-risk pregnancy to adoption, etc.). We asked common questions about the benefits and the process for getting them. We tested with 22 participants between the ages of 25 and 39.  All were employed full-time, and none had applied for any form of EI within the last 5 years. </p>
<p>Out of a total of 155 task trials across the 8 task scenarios, participants found the right page 46% of the time. Participants succeeded at the tasks only 28% of the time.</p>
<h2>The design effort</h2>
<p>After analyzing the video evidence from baseline testing, we developed a prototype in GitHub. We used the same service initiation template that we used in the <a href="{{ site.url }}/research-summaries/caregiving-research-summary.html"><abbr title="Employment Insurance">EI</abbr> caregiving benefits optimization project</a>.</p>
<p>Through an intensive series of workshops with EI subject matter experts, we iterated the prototype. Key design features included:</p>
<ul>
  <li>A table summarizing the benefits offered
    <ul>
      <li>highlighted the differences between standard and extended benefits</li>
    </ul>
  </li>
  <li>Examples formatted as math equations to demonstrate the calculation
    <ul>
      <li>illustrated the differences between choices for two different families</li>
    </ul>
  </li>
  <li>An estimator, based on wages, start date, and choice of benefits
    <ul>
      <li>let people input their preferences and receive an estimate of both time (when benefits will end) and money (how much they will get)</li>
      <li>let people see the impact of different choices</li>
    </ul>
  </li>
  <li>A “special circumstances” section
    <ul>
      <li>helped people understand what to do in case of health complications</li>
      <li>explained entitlements for multiple births, surrogate mothers, and other situations</li>
    </ul>
  </li>
</ul>
<p>We continued to iterate the prototype throughout testing. We observed each session closely to identify where people struggled, and we implemented fixes. This approach significantly improved the design and the testing results.</p>
<h2>Validation testing results</h2>
<p>Our target was to improve both findability and task success by a minimum of 20 percentage points, or to exceed 80% for both measures. In the validation round, we tested with 20 participants for a total of 167 task performance tests.</p>
<ul>
  <li>Participants found the right page 90% of the time (an improvement of 44 percentage points)</li>
  <li>Participants succeeded at the task 78% of the time (an improvement of 50 percentage points) </li>
</ul>
<p>This chart shows the baseline measurement at the start of the project compared with the validation measurement on the prototype redesigned by project team</p>
<div class="col-md-12"><img class="img-responsive hidden-sm hidden-xs" alt="See table that follows for data." src="/research-summaries/images/maternity-parental-task-success-chart.png"/>
  <details>
    <summary> Task completion success rates – table </summary>
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
            <td>When to apply</td>
            <td>33%</td>
            <td>75%</td>
          </tr>
          <tr>
            <td>Maternity/sickness </td>
            <td>22%</td>
            <td>80%</td>
          </tr>
          <tr>
            <td>Insurable earnings</td>
            <td>62%</td>
            <td>89%</td>
          </tr>
          <tr>
            <td>Max leave</td>
            <td>5%</td>
            <td>79%</td>
          <tr>
            <td>Variable best weeks</td>
            <td>32%</td>
            <td>53%</td>
          </tr>
            </tr>

          <tr>
            <td>Change parental benefit</td>
            <td>24%</td>
            <td>85%</td>
          </tr>
          <tr>
            <td>Bonus included in earnings</td>
            <td>0%</td>
            <td>69%</td>
          </tr>
          <tr>
            <td>When benefit payments end</td>
            <td>44%</td>
            <td>94%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </details>
</div>
<div class="clearfix"></div>
<h2>What we did that helped people succeed</h2>
<h3>Matched expectations</h3>
<p>We reorganized and regrouped content so that the content of each page was clearly related to the page heading.</p>
<h3>Reduced complexity of content</h3>
<p>To improve scannability, we added headings, and removed extraneous information. We hid technical details using the expand-collapse pattern. This kept pages from appearing overly complex. We guided people to EI-specific concepts and terms (such as  “best weeks”), explained them clearly, and used them sparingly. </p>
<h3>Saved them from doing math </h3>
<p>We designed a simple estimator, allowing people to see the impact of their choices. The estimator requests minimal inputs to provide a detailed, useful answer that can help people make better-informed choices.</p>
<h3>Used numbers with care</h3>
<p>Both eligibility requirements and benefit entitlements are based on numbers of weeks. We took great care in presenting numbers to help people successfully differentiate between these.</p>
<h3>Show the math</h3>
<div class="col-md-8">
  <figure class="mrgn-tp-lg mrgn-bttm-lg"> <img class="img-responsive border" alt="Before page for the number of benefit weeks." src="/research-summaries/images/ei-benefits-before.jpg"/>
    <figcaption>People focused on the higher number thinking it was the total, and didn't even consider the benefits being used in combination.</figcaption>
  </figure>
  <figure class="mrgn-tp-lg mrgn-bttm-lg"> <img class="img-responsive border" alt="After page for the number of benefit weeks." src="/research-summaries/images/ei-benefits-after.jpg"/>
    <figcaption>Showing a formula people can use and relate to helps them do the math. This also explains the 5 or 8 weeks "sharing bonus" in a simple way.</figcaption>
  </figure>
  <details>
    <summary> Detailed description </summary>
    <p>The image first shows a section of the original page content with red highlighting around a statement about a maximum of 15 weeks of <abbr title="Employment Insurance">EI</abbr> maternity benefits. There is red highlighting around a second statement about a maximum of 61 weeks.</p>
    <p>Below this is a second image from the prototype version of the same content. There is green highlighting around a simple math equation. The equation shows 15 weeks maternity plus 61 weeks of extended parental equals 76 weeks total for Janelle. </p>
  </details>
</div>
<div class="clearfix"></div>
<h2>Request the research</h2>
<p>If you’d like to see the detailed research findings from this project, email us at <a href="mailto:{{ site.emails.dto }}">{{ site.emails.dto }}</a>.</p>
<h2>Let us know what you think</h2>
<p>Tweet using the hashtag #Canadadotca.</p>
<h2>Explore further </h2>
<ul>
  <li>See the <a href="https://www.canada.ca/en/services/benefits/ei/ei-maternity-parental.html">updated EI maternity and parental benefits pages</a></li>
  <li>Read our blog post: <a href="https://blog.canada.ca/2019/08/26/content-design-tips.html">Six content design tips from our Student loans and Parental benefits optimization projects</a></li>
  <li>Read overviews of other <a href="https://blog.canada.ca/pages/project-overview.html#projects">projects with our partners</a></li>
</ul>
