---
altLangPage: "https://conception.canada.ca/configurations-conception-communes/fil-d-ariane.html"
date: 2017-10-05
dateModified: 2026-02-06
description: "Guidance on implementing breadcrumbs for Government of Canada websites."
title: "Breadcrumb trail"
---
<span class="small">Last updated: {{ page.dateModified }}</span>

<span class="label label-danger">Mandatory on standard and campaign pages</span>

The breadcrumb trail is a horizontal series of links that gives people a sense of where they are in Canada.ca's site structure. It represents the location of a page in relation to its parent and provides a clear way to navigate up to higher levels in the site structure.

<div class="pattern-demo mrgn-tp-lg">
  <figure class="mrgn-bttm-sm"><img src="{{ '/images/01-breadcrumbs-main-en.png' | absolute_url }}" class="img-responsive" alt=""></figure>
</div>

## On this page
- [When to use](#when-to-use)
- [What to avoid](#what-to-avoid)
- [Content and design](#content-and-design)
- [How to implement](#how-to-implement)
- [Research and rationale](#research-and-rationale)
- [Latest changes](#latest-changes)

## When to use

The breadcrumb trail is an element of the global header. It is mandatory on all pages, except transactional pages, error pages, and pages with content in both English and French.

## What to avoid

Don't program a breadcrumb trail to be generated dynamically based on how a visitor arrives on a page. It should represent a page's location in the site's navigation model.

Avoid long link labels that push content down on mobile. Use shortened versions of multi-word page titles when possible.

Don't display the current page at the end of the breadcrumb trail (linked or unlinked). It increases the length of the breadcrumb unnecessarily, especially on mobile. The heading of the page is enough to let people know where they are.

## Content and design

Find content and design specifications and visual examples.

### Content specifications

Use "Canada.ca" as the text of the first breadcrumb link on standard and campaign pages.

- Link to the Canada.ca home page in the language of the current page.

You can use either "Home" or the name of the process or application as the text of the first breadcrumb link on transactional pages that use a breadcrumb trail.

- Link to the starting page of the process or the landing page of the application.

Use a single right chevron icon to separate each breadcrumb link.

Include the parent page links in order of their corresponding level from the current page.

Reflect the title of each page in the breadcrumb label, but shorten them where possible to improve readability and reduce space.

For example, these breadcrumb labels:

<div class="container">
  <p class="breadcrumb">Canada.ca <span class="glyphicon glyphicon-chevron-right small"></span> Immigration and citizenship <span class="glyphicon glyphicon-chevron-right small"></span> Canadian citizenship <span class="glyphicon glyphicon-chevron-right small"></span> Apply for Canadian citizenship <span class="glyphicon glyphicon-chevron-right small"></span> Prepare for the Canadian citizenship test and interview</p>
</div>

Can be shortened to this:

<div class="container">
  <p class="breadcrumb">Canada.ca <span class="glyphicon glyphicon-chevron-right small"></span> Immigration and citizenship <span class="glyphicon glyphicon-chevron-right small"></span> Canadian citizenship <span class="glyphicon glyphicon-chevron-right small"></span> Apply <span class="glyphicon glyphicon-chevron-right small"></span> Prepare for the test and interview</p>
</div>

#### Accessibility

Include "You are here:" as invisible help text.

#### Interactions

When selected, each breadcrumb should bring the user to a unique page.

### Design specifications

Align the breadcrumb trail to the left directly below the menu button, or the divider line if there is no menu button.

- Font specification: Noto sans, 16px
- Use standard link colours for breadcrumb links
  - [Refer to colour guidance]({{ '/styles/colours.html' | absolute_url }})
- Spacing:
  - vertical padding: 13px
  - horizontal padding: 2px
  - margin top: 15px
  - line-height: 23px
- Icon: glyphicon-chevron-right

#### Accessibility

Code breadcrumbs as an ordered list.

#### Breadcrumb structure

Here are some examples of breadcrumbs for different locations on Canada.ca:

##### Theme pages, institutional and organizational pages
<div class="container">
  <p class="breadcrumb">Canada.ca</p>
</div>

##### First-level topic pages
<div class="container">
  <p class="breadcrumb">Canada.ca <span class="glyphicon glyphicon-chevron-right small"></span> [Parent theme]</p>
</div>

##### Second-level topic pages
<div class="container">
  <p class="breadcrumb">Canada.ca <span class="glyphicon glyphicon-chevron-right small"></span> [Parent theme] <span class="glyphicon glyphicon-chevron-right small"></span> [Parent topic]</p>
</div>

##### Corporate, program or policy content pages
<div class="container">
  <p class="breadcrumb">Canada.ca <span class="glyphicon glyphicon-chevron-right small"></span> [Institutional landing page]</p>
</div>

##### Partnering and collaborative arrangement profile pages
<div class="container">
  <p class="breadcrumb">Canada.ca</p>
</div>

##### Basic search pages
<div class="container">
  <p class="breadcrumb">Canada.ca</p>
</div>

##### Advanced search pages
<div class="container">
  <p class="breadcrumb">Canada.ca <span class="glyphicon glyphicon-chevron-right small"></span> [Basic search]</p>
</div>

##### Advertising or promotional campaigns

Breadcrumbs can lead back to the topic tree, a campaign landing page, the institutional landing page, or just to the Canada.ca home page.

##### News
<div class="container">
  <p class="breadcrumb">Canada.ca <span class="glyphicon glyphicon-chevron-right small"></span> [Institutional landing page]</p>
</div>

##### Application
<div class="container">
  <p class="breadcrumb">Home</p>
</div>

##### Error pages

For an error page, such as a 404 error (page not found) page, do not include a breadcrumb trail since:
- error pages are not normally navigated to and are not intended to be a part of the site’s navigation model
- these pages are system pages (could be considered transactional)
- error pages should have another path back to the home page, such as a link

### Visual examples
<div class="pattern-demo mrgn-tp-lg">
  <figure>
    <figcaption><b>Global header with breadcrumb trail - large screen</b></figcaption>
    <img src="{{ '/images/01-breadcrumbs-main-en.png' | absolute_url }}" class="img-responsive" alt=" ">
    <details class="mrgn-tp-md">
      <summary class="wb-toggle small" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Image description: global header with breadcrumb trail - large screen</summary>
      <p class="mrgn-tp-lg">The breadcrumbs appear under the menu button in a horizontal line.</p>
    </details>
  </figure>
</div>
<div class="pattern-demo mrgn-tp-lg">
  <figure>
    <figcaption><b>Global header – small screen</b></figcaption>
    <img src="{{ '/images/01-breadcrumbs-sm-en.png' | absolute_url }}" class="img-responsive" alt=" ">
    <details class="mrgn-tp-md">
      <summary class="wb-toggle small" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Image description: global header with breadcrumb trail - small screen</summary>
      <p class="mrgn-tp-lg">The breadcrumbs appear under the menu button.</p>
    </details>
  </figure>
</div>

## How to implement

Find working examples for implementing the breadcrumbs.

### GCweb (WET) theme implementation reference

The implementation reference includes how to configure each element of the header.

- [Breadcrumbs - GCWeb (WET) documentation](https://wet-boew.github.io/GCWeb/sites/breadcrumbs/breadcrumbs-en.html)
- [GCWeb (WET) header documentation](https://wet-boew.github.io/GCWeb/sites/header/header-docs-en.html)

### Implementations

Determine what best suits the type of page you're creating. Refer to your implementation's guidance if you want to exclude breadcrumbs.

<div class="wb-tabs mrgn-tp-lg">
  <div class="tabpanels">
    <details id="003" open="open">
      <summary><strong>GC-AEM</strong></summary>
      <p class="mrgn-tp-lg">For the Government of Canada Adobe Experience Manager (AEM):</p>
      <ul>
        <li><a href="https://www.gcpedia.gc.ca/gcwiki/images/9/9a/AEM-6.5-Documentation-Unit-3-7-Changing-the-Default-Breadcrumb.pdf">Changing the default breadcrumb (PDF - GCPedia link - only available on the Government of Canada network)</a></li>
        <li><a href="https://www.gcpedia.gc.ca/wiki/AEM_GC-specific_Documentation_6.5">AEM/Managed Web Service documentation (GCPedia link - only available on the Government of Canada network)</a></li>
      </ul>
    </details>
    <details id="004" open="open">
      <summary><strong>GC Design System</strong></summary>
      <p class="mrgn-tp-lg">For GC Design System:</p>
      <ul>
        <li><a href="https://design-system.alpha.canada.ca/en/components/breadcrumbs/">GC Design System documentation</a></li>
      </ul>
    </details>
    <details id="005">
      <summary><strong>CDTS</strong></summary>
      <p class="mrgn-tp-lg">For the Centrally Deployed Templates Solution (CDTS):</p>
      <ul>
        <li><a href="https://cdts.service.canada.ca/app/cls/WET/gcweb/v4_0_47/cdts/samples/breadcrumbs-en.html">Breadcrumbs - CDTS documentation</a></li>
        <li><a href="https://cenw-wscoe.github.io/sgdc-cdts/docs/index-en.html">CDTS documentation</a></li>
      </ul>
    </details>
    <details id="006">
      <summary><strong>Drupal</strong></summary>
      <p class="mrgn-tp-lg">For Drupal:</p>
      <ul>
        <li><a href="https://drupalwxt.github.io/">Drupal WxT documentation</a></li>
      </ul>
    </details>
  </div>
</div>

## Research and rationale

Consult research findings and policy rationale.

### Research findings

- [Canada.ca is a trusted source](https://blog.canada.ca/2020/08/10/CanadaDotCa-trusted-source.html)
Explains the decision to use "Canada.ca" as the label for the first link in the breadcrumb.
- [Wayfinding on Canada.ca research summary]({{ "/research-summaries/wayfinding-on-canada-ca.html" | absolute_url }})
Research showing that people navigating on the site use breadcrumb links nearly twice as often as they use the Theme and topic menu.

### Policy rationale

The spacing specifications for the breadcrumb links are designed so that touch targets meet WCAG AAA requirements.

As part of the global header, the breadcrumb is a mandatory element under the <cite>Canada.ca Specifications</cite>.

- [Mandatory elements of the design system]({{ '/specifications/mandatory-elements.html' | absolute_url }})

## Latest changes

<dl class="dl-horizontal">
  <dt><time>2026-02-06</time></dt>
  <dd>Updated <a href="{{ '/common-design-patterns/breadcrumb-trail.html' | absolute_url }}">breadcrumb trail</a> guidance to clarify:
<ul>
  <li>when breadcrumbs are required (and when they aren’t)</li>
  <li>how breadcrumbs apply to campaign pages</li>
  <li>which links should appear in a breadcrumb trail</li>
</ul>
  </dd>
  <dt><time>2023-06-26</time></dt>
  <dd>Updated the guidance to include content and design specifications, visual examples and implementation guidance.</dd>
</dl>
