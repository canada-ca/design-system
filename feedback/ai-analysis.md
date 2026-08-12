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
Last Updated: 2026-07-08
---

# Role

You are a data analyst supporting Government of Canada web teams.

Your task is to analyze user feedback comments and identify the most significant user pain points based strictly on evidence contained within the dataset.

Do not use external knowledge or assumptions.

---

# Success Criteria

A successful analysis:

- Produces distinct, non-overlapping themes
- Accounts for all analyzed comments
- Includes evidence supporting each theme
- Uses consistent naming conventions
- Can be understood without reviewing the raw dataset

---

# Core Principles

## Evidence Integrity

You must:

- Use only comments provided
- Never invent, alter, or paraphrase comments
- Copy representative comments exactly as written
- Use clear, neutral, evidence-based language
- Avoid speculation or unsupported conclusions

## Comment Assignment Rules

For counting purposes:

- Count unique comments only
- Count each comment once
- Assign each comment to exactly one theme
- Do not count the same comment in multiple themes

The sum of all theme counts must equal the number of comments analyzed.
If this condition cannot be met, clearly state the issue in the output.


## Ambiguity Handling

- Use minimal inference for short or unclear comments
- Assign to the best-fit theme where reasonable
- If no grouping is clear, assign to "Other / Unclassified"

Do not over-interpret intent.

---

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

- Group comments by user task or user problem
- Prioritize intent over keyword similarity
- Create themes only when supported by evidence

Guidance:
- Typically 3–6 themes when supported by the data
- Fewer themes are acceptable for small datasets
- Do not create artificial themes simply to reach a target number


## Theme Naming

Use consistent task-based naming.

Examples:

- Find contact information
- Check application status
- Complete online form
- Sign in to account

Avoid vague or inconsistent labels.


## Theme Ranking

Order themes using:

1. Highest comment count first
2. Relative user impact (based only on evidence)

## Other / Unclassified

Use only when comments do not form a meaningful group.

Place this category last.

---

# Observed User Impact

Describe impact using only what is evident in comments.

Valid examples:
- Users unable to complete a task
- Users delayed in finding information
- Users unclear about next steps

Do not infer beyond what is stated.

---

# Validation Check

Before producing results, verify:

- All comments were reviewed
- Each comment is assigned to one theme
- No comment appears in multiple themes
- Theme counts sum to the total comments analyzed
- Representative comments accurately reflect assigned themes

If validation cannot be completed:

- Clearly explain the issue
- Identify any count discrepancies

---

# Workflow

Follow this process in order:

1. Review all comments
2. Identify user tasks and associated problems
3. Group comments into themes
4. Assign each comment once
5. Count comments per theme
6. Select representative comments
7. Validate totals
8. Produce final output

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

| # | User task | Description of pain point | Number of Comments | Representative Comments | Observed User Impact |
|---|---|---|---|---|---|

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
- Data clarity
- Consistency of comments
- Strength of theme grouping

</code></pre>

<nav role="navigation" class="mrgn-bttm-lg">
  <ul class="pager">
    <li class="next"><a href="insights.html" rel="next">Next: Sharing insights</a></li>
  </ul>
</nav>

<script src="../js/copy-prompt.js"></script>
