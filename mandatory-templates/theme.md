---
altLangPage: https://conception.canada.ca/modeles-obligatoire/theme.html
date: null
dateModified: '2026-02-27'
description: Guidance on using a layered theme navigation page on Canada.ca. A layered theme navigation page allows people to find services and information from all Government of Canada websites grouped under one of the main themes of Canada.ca.
title: Layered theme page
---
 <span class="label label-danger">Mandatory</span>

**Last updated** {{ page.dateModified }}

The layered theme page works as a series of pages performing the role of the primary navigation on Canada.ca. Theme pages provide access to topics and destination pages that support task completion. This allows users to navigate government-wide content through one of the main themes rather than by institutions. These pages also prioritize content and navigation by presenting the most visited information and services first. 

<div class="pattern-demo mrgn-tp-lg mrgn-bttm-xl"><img src="../images/layered-theme-page-crop.png" class="img-responsive" alt=""></div>

## On this page 
- [When to use](#when-to-use)
- [What to avoid](#what-to-avoid)
- [Content and design](#content-and-design)
- [How to implement](#how-to-implement)
- [Research and rationale](#research-and-rationale)
- [Latest changes](#latest-changes)

## When to use {#when-to-use}

The layered theme template can only be used for theme pages. Only theme leads can use this template.

## What to avoid {#what-to-avoid}

Do not use the left-hand navigation pattern from this template on any other page type. This is for use on layered theme pages only. 

Do not put any links to social media channels. Instead, put these on topic pages.

## Content and design {#content-and-design}

The theme title must be a unique H1 and the first component on the page.

Include the Most requested band below the theme title to feature top tasks. Use the [Most requested band pattern](https://design.canada.ca/common-design-patterns/most-requested.html).

Add a link and brief description, also called doormats, for each theme-specific topic included on the page. Don’t repeat any of the links from the Most requested band. Use the 2 column variation of the [Services and information pattern](https://design.canada.ca/common-design-patterns/services-information.html). 

Include a contextual band in your footer. Use the [Contextual band pattern](https://design.canada.ca/common-design-patterns/site-footer-contextual.html).

The sign in button is included by default and will link to the general sign in page. You can customize the link and button name to go to a specific sign in page or a page managing multiple accounts for your theme. Multiple account pages should be labeled “CRA sign in” or “IRCC sign in”, otherwise be specific to the account such as “Sign in to [account name]”. See the [Contextual Sign in button pattern](https://design.canada.ca/common-design-patterns/contextual-signin.html).

You can include alerts when there is an urgent service disruption. Alert appears below the h1 inside the content of the right side. See the [guidance for using alerts during a crisis](https://design.canada.ca/crisis/alerts.html). 

You can include up to three context-specific features above the footer. See the [Context-specific features pattern](https://design.canada.ca/common-design-patterns/feature-tiles.html).

You can include a featured link when there is a need for a significant and temporary feature. See the [Featured link pattern](https://design.canada.ca/common-design-patterns/featured-link.html).

Customization requests will be considered on a case-by-case basis if your theme has the ability to research and monitor the impact of the customization. Please contact the Canada.ca Experience Office with any requests to deviate from the established template: 

- [cds.dto-btn.snc@servicecanada.gc.ca](mailto:cds.dto-btn.snc@servicecanada.gc.ca)

### Visual examples

 <div class="pattern-demo mrgn-tp-md mrgn-bttm-md">
    <figure class="mrgn-tp-md mrgn-bttm-lg">
      <figcaption><b>Layered theme page navigation - large screen</b></figcaption>
      <img src="../images/layered-theme-page-large.png" class="img-responsive" alt="Layered theme page navigation for large screens. Text version below:" />
      <details>
        <summary>Image description: layered theme page navigation - large screen</summary>
        <p>The layered theme page navigation consists of a left hand navigation including all the themes, and the content of the selected theme appears on the right. The theme “Jobs” is selected and is highlighted in dark blue. A thick dark blue bar visually separates the navigation from the content.</p>
        <p>The active theme content includes the theme heading, most requested items in a band, which is then followed by links and descriptions in two columns to navigate further into the theme. Below the theme navigation section is the heading “Features” and three theme context-specific features and a contextual footer for the theme’s contact information.</p>
      </details>
    </figure>
  </div>
   <div class="pattern-demo mrgn-tp-md mrgn-bttm-md">
    <figure class="mrgn-tp-md mrgn-bttm-lg">
      <figcaption><b>Layered theme page navigation - small screen</b></figcaption>
      <img src="../images/layered-theme-page-sme.png" class="img-responsive" alt="Layered theme page navigation for small screens. Text version below:" />
      <details>
        <summary>Image description: layered theme page navigation - small screen</summary>
        <p>In mobile the layered theme page navigation is a dark blue band that runs across the top with the text “Menu” and a chevron pointing down. When the user clicks the menu expands to expose all the themes.</p>
        <p>The active theme content includes the theme heading, most requested items in a band, which is then followed by links and descriptions in two columns to navigate further into the theme. Below the theme navigation section is the heading “Features” and three theme context-specific features and a contextual footer for the theme’s contact information.</p>
      </details>
    </figure>
  </div>

## How to implement {#how-to-implement}

Find working examples and code for implementing the layered theme page. 

### GCweb (WET) theme implementation reference 

The implementation reference includes how to configure the layered theme page. 

- [GCWeb (WET) layered theme documentation]()

## Research and rationale {#research-and-rationale}

Consult research findings and policy rationale. 

### Research findings

[Wayfinding on Canada.ca research summary](https://design.canada.ca/research-summaries/wayfinding-on-canada-ca.html)
Research showing that people navigating on the site use breadcrumb links nearly twice as often as they use the Theme and topic menu.

### Policy rationale

The layered theme page is a mandatory template under the Canada.ca Specifications.
- [Mandatory elements of the design system](https://design.canada.ca/specifications/mandatory-elements.html)


## Latest changes {#latest-changes}

<dl class="dl-horizontal">
  <dt><time>2026-02-27</time></dt>
  <dd>
    <p>Stabilized and launched the layered theme page.</p>
  </dd>
  <dt><time>2024-09-24</time></dt>
  <dd>
    <p>Updated the pattern to remove any reference of topic pages. Topic pages are now a separate pattern.</p>
  </dd>
  <dt><time>2020-07-10</time></dt>
  <dd>
    <ul>
      <li>Changes to doormat columns in tablet view.</li>
      <li>Clarify social media account guidance.</li>
    </ul>
  </dd>
  <dt><time>2020-06-30</time></dt>
  <dd>
    <p>A new beta version of this template was added.</p>
  </dd>
</dl>