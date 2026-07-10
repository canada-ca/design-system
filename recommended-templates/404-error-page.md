---
altLangPage: https://conception.canada.ca/modeles-recommandes/page-erreur-404.html
date: 2026-02-05
dateModified: 2026-07-06
description: A 404 error is generated when someone tries to access a page that cannot be found.
title: 404 error page template
---
A 404 error is generated when someone tries to access a page that cannot be found.

This 404 error page template provides the user with suggestions for resolving the error and contains links to key sections that may be helpful. There are two versions of this template:

- a unilingual page with a language toggle for users whose language preference is known
- a bilingual page for users whose language preference is not known

<div class="pattern-demo mrgn-tp-lg mrgn-bttm-xl">
  <img src="../images/404/bilingual-404-error-page.png" class="img-responsive" alt="" />
</div>

## On this page

- [When to use](#when-to-use)
- [What to avoid](#what-to-avoid)
- [Content and design](#content-and-design)
- [How to implement](#how-to-implement)

## When to use

Use this template to create a standard place for users to go to when encountering a 404 error.

## What to avoid

Don't use this template for any purpose other than indicating a 404 error.

Make sure the page includes, at a minimum, one rescue link (for example, the Canada.ca homepage). Do not provide irrelevant links that do not help the user navigate back to Government of Canada web content.

For the bilingual version, don't mix the languages within the same content block, paragraph or sentence.

## Content and design

Find content and design specifications and visual examples.

### Content specifications

Use "Page not found" for the H1 or page title.

Include a sentence stating that the page the user is looking for may have been moved or deleted.

Offer tips for what the user can try to resolve the error. This can include the following information:

- suggest they check the spelling of the web address (URL)
- explain that they should remove special characters or spaces in the URL
- if it exists, provide a way to report the broken link

Include the text "You may be looking for:" followed by a bulleted list of no more than 10 links. At the top of the list include these three common pages on Canada.ca:

- [Canada.ca home page](https://www.canada.ca/en.html)
- [Government of Canada services](https://www.canada.ca/en/services.html)
- [Contact the Government of Canada](https://www.canada.ca/en/contact.html)

After those links, you can list some of the most requested pages specific to your institution. Here are some most requested pages on Canada.ca that you can also include:

- [Sign in to an account](https://www.canada.ca/en/government/sign-in-online-account.html)
- [Benefits](https://www.canada.ca/en/services/benefits.html)
- [Taxes](https://www.canada.ca/en/services/taxes.html)
- [Visit or immigrate to Canada](https://www.canada.ca/en/services/immigration-citizenship.html)

**Note**: AEM does not currently support custom 404 pages as they are handled by the platform by default.

#### Additional content specifications for bilingual version

In addition to the content that is laid out in the general specifications, for the bilingual page include two anchor links that will appear above each language when the page resizes for mobile.

- For the link above the English content, use the text <span lang="fr">"Aller à la version française"</span>
- For the link above the French content, use the text "Go to the English version"

#### Interactions

- When the user's language preference **is known**, they should be brought to the 404 error page in that same language
- When the user's language preference is **not known**, they should be brought to a bilingual 404 error page

### Design specifications

- Include a danger label directly below the H1 heading that uses the text "404 error"
  - [Follow the implementation guidance for a danger label](../common-design-patterns/labels.html#danger)
- For all links, text uses standard Canada.ca styles:
  - [Typography](../styles/typography.html)
  - [Colours](../styles/colours.html)
- You can include an optional search bar below the list of suggested links
  - [Follow the guidance for the site search box](../common-design-patterns/search-box.html)

#### Additional design specifications for bilingual version

Use the following layouts for the bilingual version:

- two columns with all English content to the left and all French content to the right in large and medium screens
- a single column with all content stacked in small screens

Because language preference isn't known, limit the elements in the header and footer to the following:

- in the global header, include only the Government of Canada signature with a link to the Canada.ca splash page
- in the global footer, include only the Canada wordmark

#### Interactions

When the bilingual version of the page resizes for mobile, the English and French content will be stacked. When the content is stacked, a jump link should appear above each language that allows the user to jump from one language to the other.

### Visual examples

<div class="pattern-demo mrgn-tp-md mrgn-bttm-md">
    <figure class="mrgn-tp-md mrgn-bttm-lg">
        <figcaption><b>Unilingual 404 error page - large screen</b></figcaption>
        <img src="../images/404/unilingual-404-error-page.png" class="img-responsive" alt="Unilingual 404 error page - large screen. Text version below:" />
        <details>
            <summary class="wb-toggle" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Image description: unilingual 404 error page - large screen</summary>
            <p>At the top of the page is an H1 titled "Page not found," which is underlined with a short thick red line. Below the H1 is a danger label with the text "404 error."</p>
            <p>Following the label is a paragraph providing instructions to the user for how to find the page they are looking for.</p>
            <p>Below the paragraph is the sentence "You may be looking for" with a bulleted list of links under it.</p>
        </details>
    </figure>
</div>
<div class="pattern-demo mrgn-tp-md mrgn-bttm-md">
    <figure class="mrgn-tp-md mrgn-bttm-lg">
        <figcaption><b>Bilingual 404 error page - large screen</b></figcaption>
        <img src="../images/404/bilingual-404-error-page.png" class="img-responsive" alt="Bilingual 404 error page - large screen. Text version below:" />
        <details>
            <summary class="wb-toggle" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Image description: bilingual 404 error page - large screen</summary>
              <p>The bilingual version of the 404 error page appears in two columns.</p>
              <p>The first column has an H2 titled "Page not found." Below the H2 is a danger label with the text "404 error."</p>
              <p>Following the label is a paragraph providing instructions to the user for how to find the page they are looking for.</p>
              <p>Below the paragraph is the lead-in sentence "You may be looking for:" and under it is a bulleted list of links to most requested pages on Canada.ca.</p>
              <p>After the list of links there is a short search bar with placeholder text that says "Search Canada.ca." There is a search button with a magnifying glass icon beside the search bar.</p>
              <p>The second column has an H2 titled "Page non trouvée." Below the H2 is a danger label with the text "Erreur 404."</p>
              <p>Following the label is a paragraph providing instructions to the user for how to find the page they are looking for.</p>
              <p>Below the paragraph is the lead-in sentence <span lang="fr">"Vous cherchez peut-être l'une des pages suivantes&nbsp;: "</span> and under it is a bulleted list of links to most requested pages on Canada.ca.</p>
              <p>After the list of links there is a short search bar with placeholder text that says "Rechercher dans Canada.ca." There is a search button with a magnifying glass icon beside the search bar.</p>
        </details>
    </figure>
</div>
<div class="pattern-demo mrgn-tp-md mrgn-bttm-md">
    <figure class="mrgn-tp-md mrgn-bttm-lg">
        <figcaption><b>Bilingual 404 error page - small screen</b></figcaption>
        <img src="../images/404/bilingual-404-error-page-sm.png" class="img-responsive" alt="Bilingual 404 error page - small screen. Text version below:" />
        <details>
            <summary class="wb-toggle" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Image description: bilingual 404 error page - small screen</summary>
            <p>The bilingual version of the 404 error page appears in one column.</p>
            <p>At the top of the page is an H2 titled "Page not found." Below the H2 is a danger label with the text "404 error."</p>
            <p>Following the label is a link that says <span lang="fr">"Aller à la version française."</span></p>
            <p>After the link is a paragraph providing instructions to the user for how to find the page they are looking for.</p>
            <p>Below the paragraph is the lead-in sentence "You may be looking for:" and under it is a bulleted list of links to most requested pages on Canada.ca.</p>
            <p>After the list of links there is a short search bar with placeholder text that says "Search Canada.ca." There is a search button with a magnifying glass icon beside the search bar.</p>
            <p>Next there is a second H2 titled "Page non trouvée." Below this H2 is a danger label with the text "Erreur 404."</p>
            <p>Following the label is a link that says "Go to the English version."</p>
            <p>After the link is a paragraph providing instructions to the user for how to find the page they are looking for.</p>
            <p>Below the paragraph is the lead-in sentence "Vous cherchez peut-être l'une des pages suivantes&nbsp;: " and under it is a bulleted list of links to most requested pages on Canada.ca.</p>
            <p>After the list of links there is a short search bar with placeholder text that says <span lang="fr">"Rechercher dans Canada.ca."</span> There is a search button with a magnifying glass icon beside the search bar.</p>
        </details>
    </figure>
</div>

## How to implement

Find working examples and code for implementing the 404 error page.

### GCWeb (WET) theme implementation reference

The implementation reference includes how to configure the 404 error page.

- [Server error message documentation - GCWeb (WET)](https://wet-boew.github.io/GCWeb/templates/servermessage/servermessage-doc-en.html)
