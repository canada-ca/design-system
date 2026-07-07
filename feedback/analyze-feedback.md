---
altLangPage: https://conception.canada.ca/retroaction/methodes.html
date: null
dateModified: 2026-06-22
description: null
title: Methods for analyzing feedback
---

<div class="gc-stp-stp">
  <div class="row">
    <ul class="toc lst-spcd col-md-12">
      <li class="col-md-4 col-sm-6"><a class="list-group-item" href="access-feedback.html">Access feedback</a></li>
      <li class="col-md-4 col-sm-6"><a class="list-group-item active">Analysis methods</a></li>
      <li class="col-md-4 col-sm-6"><a class="list-group-item" href="ai-analysis.html">AI-assisted analysis</a></li>
      <li class="col-md-4 col-sm-6"><a class="list-group-item" href="insights.html">Sharing insights</a></li>
      <li class="col-md-4 col-sm-6"><a class="list-group-item" href="prioritize.html">Deciding what to improve</a></li>
    </ul>
  </div>
</div>

## On this page

* [Who should analyze feedback](#who-should-analyze-feedback)
* [How much feedback is needed](#how-much-feedback-is-needed)
* [Research questions shape analysis](#research-questions-shape-analysis)
* [AI-assisted feedback analysis](#ai-assisted-feedback-analysis)
* [Manual analysis methods](#manual-analysis-methods)
* [Include other supporting data sources](#include-other-supporting-data-sources)

## Who should analyze feedback?

This should be done by people who know the subject quite well.

People should be adept at spotting patterns and themes in data.

It’s best to have someone who is bilingual.

If more than one person is sharing the task of reading feedback, having a shared understanding of the issues (and how you will group feedback) is very important.

It’s good to get into the habit of looking at user feedback regularly to identify any emerging or persistent issues affecting task success.

## How much feedback is needed

There is no magic number for how many comments you need.

With feedback, you are looking for enough comments to sufficiently describe an issue or answer a research question. There is a point of diminishing returns when collecting more feedback does not lead to additional insights. This is called “saturation”.

If feedback shows that something is broken, you don’t need hundreds of comments to determine if you should take action.

When identifying issues, don’t rely on volume of feedback alone to prioritize improvements. Feedback submitted may be from people who face cultural, linguistic, geographical, disability, technological, socioeconomic, or other barriers to uptake.

You can seek confirmation of feedback insights using other data sources such as: web analytics, call volumes, social media trends, and GC Task Success Survey results.


## Research questions shape analysis

Start by thinking in terms of research questions and who you will be sharing your findings with. Doing this in advance can help clarify how to group feedback when doing manual analysis.

Common research questions:

* What are the most common issues being reported?
* Are there specific reasons for failure or specific suggestions to improve the experience?
* What pages are receiving the most feedback?
* Has feedback increased or decreased after a page update?
* What types of issues were the most common (findability, comprehension, technical)?

## AI-assisted feedback analysis
Approved AI tools such as Microsoft Copilot can help identify patterns, group comments into themes, summarize findings, and support qualitative analysis of GC Feedback and Task Success Survey comments.

AI-assisted analysis can reduce the time required to review large volumes of feedback. However, AI tools do not replace human judgment. Analysts remain responsible for validating outputs, reviewing theme groupings, verifying counts, and ensuring findings are appropriate before sharing.

Use AI tools as analytical support, not as authoritative decision-makers.

### Reusable prompts and guidance
Use the AI-assisted feedback analysis guidance for:
* approved prompts for common feedback analysis tasks
* privacy and security considerations
* prompt-writing best practices
* human review requirements
* limitations of AI-assisted analysis

[AI-assisted feedback analysis guidance](ai-analysis.html)


## Manual analysis methods

Manual analysis involves reviewing comments directly and grouping similar issues using tags or themes. This approach is useful for both small and large datasets and remains an effective method for understanding user feedback.

Manual analysis can be used on its own or alongside AI-assisted analysis.

A small dataset may only need a few tags to make sense of the feedback. A large dataset may require two levels of tags to understand specific content issues.

| Method | Best for |
|--------|----------|
| Manual analysis | Small datasets, detailed review, validation of findings |
| AI-assisted analysis | Large datasets, rapid theme identification, drafting summaries |
| Combined approach | Most operational use cases; AI supports analysis while humans validate findings |

### Best practices for choosing how to group and tag feedback

<details>
  <summary>Familiarize yourself with your data</summary>
  <p>Read through a sample of feedback data and try to spot recurring patterns. Jot them down to get a rough overview of WHAT tasks, topics, or issues people are talking about.</p>
  <p>Not every comment will be useful - sometimes it will be too unclear to use or be completely about another topic.</p>
</details>

<details>
  <summary>Consider tags based on a task or issue</summary>
  <p><strong>Task-based tags</strong> are recommended when analyzing feedback for a group of pages where there are multiple user tasks.</p>
  <p>To identify tasks, ask yourself why the user came to the site. What were they trying to do, or what question were they trying to answer? </p>
  <p><strong>Issue-based tags</strong> may be a better strategy when gathering feedback on a single page, single topic, or where a single task dominates your feedback.</p>
  <p><strong>For large datasets</strong> you may find a second level of tags is needed to add precision. This can be done at the same time you tag the feedback OR when you are ready to analyze a smaller set of feedback.</p>

  <h3>Example of some tags used for feedback on vaccine pages</h3>
  <table class="provisional gc-table table table-striped" id="myTable1">
    <caption class="wb-inv">Example feedback tagging model </caption>
    <thead>
      <tr>
        <th scope="col">Tag</th>
        <th scope="col">User task or issue</th>
        <th scope="col">Topics included</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Tag"><span class="text-left">Vaccine safety</span></td>
        <td data-label="User task"><span class="text-left">Is the vaccine safe for me?</span></td>
        <td data-label="Topics included"><span class="text-left">Pre-existing conditions, ingredients/allergies, side effects</span></td>
      </tr>
      <tr>
        <td data-label="Tag"><span class="text-left">Getting vaccinated</span></td>
        <td data-label="User task"><span class="text-left">How do I get vaccinated?</span></td>
        <td data-label="Topics included"><span class="text-left">Eligibility, when, where, how to register</span></td>
      </tr>
      <tr>
        <td data-label="Tag"><span class="text-left">Proof of vaccination</span></td>
        <td data-label="User task"><span class="text-left">How do I get a copy of my vaccine record?</span></td>
        <td data-label="Topics included"><span class="text-left">Vaccine records, provincial apps, federal vaccine proof</span></td>
      </tr>
    </tbody>
  </table>
</details>

<details>
  <summary>Limit the number of tags being used</summary>
  <p>Start with broad tags and only include those for which you have multiple examples. Your goal with this first review is to succinctly group recurring topics/issues.</p>
  <p>Aim to keep your set of tags to under 15 for the task.  Limiting the number of tags will help surface the issues that need the most assistance.</p>
  <p>“Other” is a tag too!  Tag one-offs or low-frequency comments as “Other” until there are enough for them to graduate into having a tag of their own.</p>
</details>

<details>
  <summary>Avoid using overlapping or ambiguous tags </summary>
  <p>Make sure each tag is clearly differentiated from the others. Your aim is to reduce doubt about which tag a comment should get.</p>
</details>

<details>
  <summary>Be prepared to tweak your choice of tags</summary>
  <p>As you read more of your dataset, review your initial tag choices. Are they clear and unambiguous? Does one tag alone cover the majority of feedback? Do you need to divide it into separate tags?</p>
  <p>There’s no one-size-fits-all strategy. As you collect more feedback, you may find you need to adjust your choice of tags.</p>
</details>

<details>
  <summary>Document and test your tagging strategy</summary>
  <p>Document your choice of tags with examples.   This is especially useful if more than one person will share the responsibility for reviewing feedback.</p>
  <p>Ask others to review your tag choices to make sure that the tags are clear to other people.  This is especially critical if more than one person will be helping to analyze feedback.  Agreeing on a common set of tags in the beginning (and when adjusting tags) avoids feedback being tagged poorly between people.</p>

  <h3>Example of some tags used for feedback on vaccine pages</h3>
  <table class="provisional gc-table table table-striped" id="myTable1">
    <caption class="wb-inv">Example feedback tagging model </caption>
    <thead>
      <tr>
        <th scope="col">Tag</th>
        <th scope="col">User task or issue</th>
        <th scope="col">Topics included</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Tag"><span class="text-left">Vaccine safety</span></td>
        <td data-label="User task"><span class="text-left">Is the vaccine safe for me?</span></td>
        <td data-label="Topics included"><span class="text-left">Pre-existing conditions, ingredients/allergies, side effects</span></td>
      </tr>
      <tr>
        <td data-label="Tag"><span class="text-left">Getting vaccinated</span></td>
        <td data-label="User task"><span class="text-left">How do I get vaccinated?</span></td>
        <td data-label="Topics included"><span class="text-left">Eligibility, when, where, how to register</span></td>
      </tr>
      <tr>
        <td data-label="Tag"><span class="text-left">Proof of vaccination</span></td>
        <td data-label="User task"><span class="text-left">How do I get a copy of my vaccine record?</span></td>
        <td data-label="Topics included"><span class="text-left">Vaccine records, provincial apps, federal vaccine proof</span></td>
      </tr>
    </tbody>
  </table>
  <a class="btn btn-primary" href="images/feedback-tagging-template.xlsx" role="button"><span class="fa fa-download" aria-hidden="true"></span> Download a tagging strategy template (Excel, 61KB)</a>
</details>

<h3>What to avoid when tagging feedback</h3>
<details>
  <summary>Mixing types of tags</summary>
  <p>If you want to add additional ways to analyse your dataset, it’s best to create new columns in your spreadsheet to note different kinds of facets. For example, adding a status or specifying a particular sub-issue.</p>
</details>

<details>
  <summary>Trying to be overly-precise</summary>
  <p>The purpose of tagging is to help you identify user priorities and group feedback into smaller datasets to analyze. A “good enough” approach to defining and assigning tags will do.</p>
  <p>If you have more feedback than you can manage to review, classify and analyze, adjust your strategy: choose a specific task or time frame to focus on.</p>
</details>



## Include other supporting data sources

Include other data sources in your reporting to build a more complete picture, confirm your insights, or add urgency from sources such as:

* GC Task Success Survey results and feedback
* analytics
* call centre volumes
* search trends
* usability study results
* questions received through social media

<nav role="navigation" class="mrgn-bttm-lg">
  <ul class="pager">
    <li class="next"><a href="insights.html" rel="next">Next: Sharing insights</a></li>
  </ul>
</nav>
