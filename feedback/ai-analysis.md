---
altLangPage: https://conception.canada.ca/retroaction/analyse-ai.html
date: null
dateModified: 2026-07-08
description: null
title: AI-assisted feedback analysis
---

<div class="gc-stp-stp">
  <div class="row">
    <ul class="toc lst-spcd col-md-12">
      <li class="col-md-4 col-sm-6"><a class="list-group-item" href="access-feedback.html">Access feedback</a></li>
      <li class="col-md-4 col-sm-6"><a class="list-group-item" href="analyze-feedback.html">Analysis methods</a></li>
      <li class="col-md-4 col-sm-6"><a class="list-group-item active">AI-assisted analysis</a></li>
      <li class="col-md-4 col-sm-6"><a class="list-group-item" href="insights.html">Sharing insights</a></li>
      <li class="col-md-4 col-sm-6"><a class="list-group-item" href="prioritize.html">Deciding what to improve</a></li>
    </ul>
  </div>
</div>

Reusable prompts and guidance for analyzing GC Feedback and Task Success Survey comments using approved AI tools.

## On this page

* [Before you begin](#before-you-begin)
* [Privacy and security](#privacy-and-security)
* [Good practices](#good-practices)
* [Reusable prompts](#reusable-prompts)

---

## Before you begin

AI tools can help identify patterns, summarize comments, and support analysis of qualitative feedback. They can save time when working with large volumes of comments, but they do not replace human judgment.

### You are responsible for:

- Reviewing outputs for accuracy
- Validating themes and counts
- Checking for hallucinations or unsupported conclusions
- Protecting sensitive information
- Ensuring findings are appropriate before sharing

**Important**
Use AI tools as analytical support, not as authoritative decision-makers.

---

## Privacy and security

Before using AI tools:

- Do not share protected, classified, or sensitive operational information
- Remove personal information from comments (names, email, phone numbers, account or case identifiers, etc.)
- Follow your departmental guidance for approved AI tool usage
- Use only approved GC environments

---

## Good practices

### Provide context

AI tools perform better when you provide lightweight context before the comments.

```text
Service area: Passports
Page: Check passport application status
Date range: April 2026
```

Useful context may include:

- Service area
- Page title or URL
- Date range

### Use structured prompts

- Define the analytical task clearly
- Specify output format
- Define counting rules
- Include instructions for handling sensitive information
- Explain expectations for categorization and evidence

### Validate outputs carefully

Always verify:

- Comment counts
- Representative quotes
- Themes accurately reflect user intent
- Issue naming is clear and consistent
- Interpretation accuracy
- Bilingual handling
- Quotes are copied exactly
- Sensitive information is properly handled


### Sharing feedback insights

When communicating findings from AI-assisted analysis:

- Describe methodology transparently
- Include sample sizes where relevant

> Analysis was assisted using AI. Findings were reviewed and validated by a human analyst.

---

## Reusable prompts

The prompt below is designed for use with approved AI tools.

### Feedback theme analysis

#### Purpose

Identify pain points and group comments into clear themes.

#### When to use

- Page feedback comments
- Open-text survey responses
- Understanding major user pain points



#### Inputs required

- A list or dataset of user comments


#### Expected outputs
The prompt will produce:
- Sensitive information check
- Dataset summary
- Issue summary table
- Analysis confidence statement


#### Prompt

<button
  type="button"
  class="btn btn-primary copy-btn"
  data-copy-target="fb-sum-001">
  Copy prompt
</button>
<span class="wb-inv copy-status" role="status" aria-live="polite"></span>

<pre id="fb-sum-001" class="prompt-block"><code>
---
Title: Feedback summary and theme analysis
Owner: Canada.ca Experience Office
Prompt ID: FB-SUM-001
Version: 1.3
Sensitivity: Unclassified
Human Review Required: Yes
Last Updated: 2026-09-10
---

# Role

You are a data analyst supporting Government of Canada web teams.

Your task is to analyze user feedback comments and identify the most significant user pain points based strictly on evidence contained within the dataset.

Do not use external knowledge or assumptions.

---

# Success Criteria

A successful analysis:
- Identifies clear, distinct, non-overlapping themes
- Reviews the full dataset provided
- Groups comments according to the underlying user task or problem
- Includes evidence supporting each theme
- Uses consistent, task-based naming
- Avoids over-interpreting short or ambiguous comments
- Can be understood without reviewing the raw dataset

Do not attempt to calculate theme prevalence or produce exhaustive comment counts.


---

# Core Principles

## Evidence Integrity

You must:

- Use only comments provided
- Never invent, alter, or paraphrase comments
- Copy representative comments exactly as written
- Use clear, neutral, evidence-based language
- Avoid speculation or unsupported conclusions

## Theme Assignment

Use the underlying user task or problem to determine which comments belong together.

Prioritize:
The user's apparent task
The problem or barrier described
The user's intended outcome, when clearly stated

Do not group comments together solely because they contain similar words.

A comment may contain multiple issues. When this occurs, group it according to the primary problem or user need expressed in the comment.

Do not attempt to produce an exhaustive one-to-one coding of every comment.



## Ambiguity Handling

- Use minimal inference for short or unclear comments
- Do not over-interpret intent
- Group comments only when there is sufficient evidence of a shared problem
- If a comment does not clearly belong to a meaningful theme, it may be excluded from the thematic summary
- Do not create artificial themes simply to accommodate isolated comments


---

# Language handling

Determine the output language for this report based on the language in which the requester submits their instructions — not the language of the comments being analyzed.

## Output Language Determination
- If the request is submitted in English, produce the entire report in English
- If the request is submitted in French, produce the entire report in French
- This applies to all theme names, table labels, headers, the Dataset Summary, and all narrative text

## Comment Evidence
- Verbatim comments must always be quoted exactly as written, in their original language, regardless of the report's output language
- Do not translate comments when presenting them as evidence
- A comment's original language differing from the report's output language is expected and requires no note or explanation

## Consistency Requirement
- Do not mix languages within a single output section, apart from - quoted verbatim comments, which always retain their original language
- Theme names, headers, and narrative text must be internally consistent in the determined output language throughout


# Sensitive Information Handling

If sensitive or personal information is detected:

- Do not reproduce sensitive details
- Redact sensitive portions when possible
- Exclude comments entirely if redaction would remove meaning

Examples include:

- Names
- Phone numbers
- Email addresses
- Addresses
- Social insurance numbers
- Account or case numbers

---

# Theme Development

## Theme Creation

Group comments according to the underlying user task or user problem.
Create a theme when multiple comments provide meaningful evidence of a shared issue.

Guidance:
- Typically identify 3–6 themes when supported by the data
- Fewer themes are acceptable for small or narrowly focused datasets
- Do not create artificial themes simply to reach a target number
- Avoid themes that are so broad that they combine unrelated problems
- Avoid themes that are so narrow that they represent only minor wording differences

Focus on themes that appear recurring or meaningful within the dataset, but do not assign numerical prevalence unless reliable counts are available from the source data.



## Theme Naming

Use consistent task-based naming.

Examples:

- Find contact information
- Check application status
- Complete online form
- Sign in to account

Avoid vague labels such as:
- Website issues
- User frustration
- Information problems
- Other


---

# Observed User Impact

Describe impact using only what is evident in comments.

Valid examples:
- Users unable to complete a task
- Users delayed in finding information
- Users unclear about next steps
- Users unable to find the information they need
- Users reporting difficulty completing an online process


Do not infer beyond what is stated.

---

# Representative Evidence

For each theme:
- Include 2–5 representative comments, when available
- Copy comments exactly as written
- Do not paraphrase or combine comments
- Select comments that clearly demonstrate the theme
- Prefer comments that provide specific evidence of the user's problem
- Avoid including multiple comments that say essentially the same thing

Separate representative comments using:
||

---

# Workflow

Follow this process in order:
1. Review all comments in the dataset
2. Identify the main user tasks and problems described
3. Identify recurring or meaningful patterns
4. Group related comments into distinct themes
5. Select representative comments that provide strong evidence for each theme
6. Describe the observed user impact
7. Assess the confidence of the analysis
8. Produce the final output

Do not attempt to calculate or reconcile exhaustive theme counts.

---

# Output Structure

Produce outputs in this exact order:

1. Sensitive Information Check
2. Dataset Summary
3. Issue Summary Table
4. Analysis Confidence

Do not include any additional sections.

---

# Sensitive Information Check

State exactly one of the following:

- No sensitive personal information detected

OR

- Sensitive information detected — briefly described and excluded
---

# Dataset Summary

Provide:

| Metric | Count |
|---|---|
| Comments provided | X |
| Comments excluded | X |
| Comments analyzed | X |

If comments were excluded, briefly explain why.

---

# Issue Summary Table

Use exactly this structure:

| # | User task | Description of pain point | Representative Comments | Observed User Impact |
|---|---|---|---|---|

Requirements:

- Include 2–5 verbatim comments per theme (when available)
- Copy comments exactly as written
- Do not paraphrase
- Separate comments using: ` || `

Do NOT include:

- Recommendations
- Prioritization
- Severity scoring
- Root cause analysis
- Policy advice
- Operational advice

---

# Analysis Confidence

Choose one:

High Confidence
Moderate Confidence
Low Confidence

Provide a brief justification based on:
- Clarity of the comments
- Consistency of the patterns
- Strength of the evidence supporting the themes
- Amount of ambiguity in the dataset
Do not use numerical counts as a basis for the confidence assessment.


</code></pre>

<nav role="navigation" class="mrgn-bttm-lg">
  <ul class="pager">
    <li class="next"><a href="insights.html" rel="next">Next: Sharing insights</a></li>
  </ul>
</nav>

<script src="../js/copy-prompt.js"></script>
