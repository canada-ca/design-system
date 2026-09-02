---
altLangPage: https://conception.canada.ca/configurations-conception-communes/bloc-medias-sociaux.html
date: '2018-12-19'
dateModified: '2026-09-01'
description: The social media channels pattern provides links to official Government of Canada social media accounts on various social media platforms.
title: Social media channels
---
**Last updated**: {{ page.dateModified }}

The social media channels pattern provides links to official Government of Canada (GC) social media accounts.

<div class="pattern-demo mrgn-tp-lg mrgn-bttm-xl">
    <img src="../images/social-media-vertical-mask.png" class="img-responsive" alt="" />
</div>

## On this page

* [When to use](#when-to-use)
* [What to avoid](#what-to-avoid)
* [Content and design](#content-and-design)
* [How to implement](#how-to-implement)
* [Research and rationale](#research-and-rationale)
* [Latest changes](#latest-changes)

## When to use

Use the social media channels pattern on pages to promote official GC social media accounts that are relevant to the page.

Examples:

* Institutional landing page
* Blog
* Topic page

## What to avoid

Don’t use the social media channels pattern when a user’s flow must not be interrupted, such as in a transactional process.

## Content and design

Find content and design specifications and visual examples.

### Content specifications

The social media channels pattern is made up of the heading “On social media” and icons linking to official GC social media accounts.

Accounts referred to in the pattern must be fully compliant with the [Directive on the Management of Communications](https://www.tbs-sct.canada.ca/pol/doc-eng.aspx?id=30682).

You can use social media icons other than those provided in this pattern, as long as they represent official GC social media accounts.

The order of social media icons isn’t prescribed. You can arrange them in any order that makes sense for your context.

A maximum of 5 icons is recommended. Display icons aligned in a vertical column or horizontal row:

* Vertical display includes a label next to each icon
* Horizontal display only includes the icons

If there is more than one account from a platform:

* Include the platform name next to its icon (vertical only)
* Use a lightbox modal to display the name of each different account on that platform
  * the lightbox can have up to 8 text links
  * use the names of the accounts as labels

Place the social media channels after task and navigation content.

#### Optional link

You can add a link with the label “More ways to connect” if you want to link to additional social media accounts or other departmental communications platforms (e.g., podcasts, external magazine, etc.). The link should point to a page that lists all your social media accounts and additional ways to connect with/follow the department.

### Design specifications

* Lightbox design specifications
  * Modal header background colour: #2e5274
  * Header: Lato, H2, 27px (H2 styled as H4 size)
  * Button is styled as a primary button.
* Links:
  * Font: Noto Sans, 17px, [standard link colours](https://design.canada.ca/styles/colours.html)
* “More ways to connect” link:
  * Font: Noto Sans, 17px, [standard link colours](https://design.canada.ca/styles/colours.html)
  * Aligned to the left
  * Positioned under the list of icons

The following social media link classes and associated icons are available.

<div class="row mrgn-tp-lg">
    <div class="col-md-8">
        <div class="panel panel-default">
            <table class="table table-striped" id="social-media" aria-live="polite">
                <caption class="wb-inv">Social media link classes and associated icons</caption>
                <thead>
                    <tr>
                        <th class="col-md-4">Social media platform</th>
                        <th class="col-md-6">CSS class</th>
                        <th class="col-md-2">Link to SVG file (GitHub)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Facebook</td>
                        <td><code>facebook</code></td>
                        <td class="text-center">
                            <div class="provisional gc-followus">
                                <ul class="list-inline">
                                    <li><a href="https://github.com/wet-boew/GCWeb/blob/master/components/gc-follow-us/assets/facebook.svg" class="facebook"><span class="wb-inv">Facebook</span></a></li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Instagram</td>
                        <td><code>instagram</code></td>
                        <td class="text-center">
                            <div class="provisional gc-followus">
                                <ul class="list-inline">
                                    <li><a href="https://github.com/wet-boew/GCWeb/blob/master/components/gc-follow-us/assets/instagram.svg" class="instagram"><span class="wb-inv">Instagram</span></a></li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>LinkedIn</td>
                        <td><code>linkedin</code></td>
                        <td class="text-center">
                            <div class="provisional gc-followus">
                                <ul class="list-inline">
                                    <li><a href="https://github.com/wet-boew/GCWeb/blob/master/components/gc-follow-us/assets/linkedin.svg" class="linkedin"><span class="wb-inv">LinkedIn</span></a></li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>X</td>
                        <td><code>twitter</code></td>
                         <td class="text-center">
                            <div class="provisional gc-followus">
                                <ul class="list-inline">
                                    <li><a href="https://github.com/wet-boew/GCWeb/blob/master/components/gc-follow-us/assets/twitter.svg" class="twitter"><span class="wb-inv">X</span></a></li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>YouTube</td>
                        <td><code>youtube</code></td>
                        <td class="text-center">
                            <div class="provisional gc-followus">
                                <ul class="list-inline">
                                    <li><a href="https://github.com/wet-boew/GCWeb/blob/master/components/gc-follow-us/assets/youtube.svg" class="youtube"><span class="wb-inv">YouTube</span></a></li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>

### Visual examples

<div class="pattern-demo mrgn-tp-md mrgn-bttm-md">
    <figure class="mrgn-tp-md mrgn-bttm-lg">
        <figcaption><b>Social media channels (vertical view with labels) - large screen</b></figcaption>
        <img src="../images/social-media-vertical-mask.png" class="img-responsive" alt="Social media channels (vertical view with labels) for large screens. Text version below:" />
        <details>
            <summary class="wb-toggle" data-toggle='{"print":"on"}'>Image description: social media channels (vertical view with labels) - large screen</summary>
            <p>Social media channel links appear in a section with the heading “On social media”. Below the heading is a vertical list with associated icons and labels:</p>
            <ul>
                <li>Facebook icon followed by the placeholder text FacebookPageName</li>
                <li>Instagram icon followed by the placeholder text InstagramName</li>
                <li>LinkedIn icon followed by the placeholder text LinkedInName</li>
                <li>X icon followed by the placeholder text @XAccount</li>
                <li>YouTube icon followed by the placeholder text YouTubeName</li>
            </ul>
        </details>
    </figure>
</div>
<div class="pattern-demo mrgn-tp-md mrgn-bttm-md">
    <figure class="mrgn-tp-md mrgn-bttm-lg">
        <figcaption><b>Social media channels (horizontal view) - large screen</b></figcaption>
        <img src="../images/social-media-horizontal-mask.png" class="img-responsive" alt="Social media channels (horizontal view) for large screens. Text version below:" />
        <details>
            <summary class="wb-toggle" data-toggle='{"print":"on"}'>Image description: social media channels (horizontal view) - large screen</summary>
            <p>Social media channel links appear in a section with the heading “On social media”. Below the heading is a horizontal list with associated icons, but without labels:</p>
            <ul>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>LinkedIn</li>
                <li>X</li>
                <li>YouTube</li>
            </ul>
        </details>
    </figure>
</div>
<div class="pattern-demo mrgn-tp-md mrgn-bttm-md">
    <figure class="mrgn-tp-md mrgn-bttm-lg">
        <figcaption><b>Social media channels (vertical view with labels and more ways to connect link) - small screen</b></figcaption>
        <img src="../images/social-media-vertical-sm.png" class="img-responsive" alt="Social media channels (vertical view with labels and more ways to connect link) for small screens. Text version below:" />
        <details>
            <summary class="wb-toggle" data-toggle='{"print":"on"}'>Image description: social media channels (vertical view with labels and more ways to connect link) - small screen</summary>
            <p>Social media channel links appear in a section with the heading “On social media”. Below the heading is a vertical list with associated icons and labels:</p>
            <ul>
                <li>Facebook icon followed by the placeholder text FacebookPageName</li>
                <li>Instagram icon followed by the placeholder text InstagramName</li>
                <li>LinkedIn icon followed by the placeholder text LinkedInName</li>
                <li>X icon followed by the placeholder text @XAccount</li>
                <li>YouTube icon followed by the placeholder text YouTubeName</li>
            </ul>
          <p>Below the icons is a link with the label: More ways to connect</p>
        </details>
    </figure>
</div>
<div class="pattern-demo mrgn-tp-md mrgn-bttm-md">
    <figure class="mrgn-tp-md mrgn-bttm-lg">
        <figcaption><b>Social media channels (horizontal view with labels and more ways to connect link) - small screen</b></figcaption>
        <img src="../images/social-media-horizontal-sm.png" class="img-responsive" alt="Social media channels (horizontal view with more ways to connect link) for small screens. Text version below:" />
        <details>
            <summary class="wb-toggle" data-toggle='{"print":"on"}'>Image description: social media channels (horizontal view with more ways to connect link) - small screen</summary>
            <p>Social media channel links appear in a section with the heading “On social media”. Below the heading is a horizontal list with associated icons:</p>
            <ul>
                <li>Facebook icon</li>
                <li>Instagram icon</li>
                <li>LinkedIn icon</li>
                <li>X icon</li>
                <li>YouTube icon</li>
            </ul>
            <p>Below the icons is a link with the label: More ways to connect</p>
        </details>
    </figure>
</div>
<div class="pattern-demo mrgn-tp-md mrgn-bttm-md">
    <figure class="mrgn-tp-md mrgn-bttm-lg">
        <figcaption><b>Social media lightbox modal for multiple accounts</b></figcaption>
        <img src="../images/social-media-lightbox.png" class="img-responsive" alt="Social media lightbox modal for multiple accounts. Text version below:" />
        <details>
            <summary class="wb-toggle" data-toggle='{"print":"on"}'>Image description: social media lightbox modal for multiple accounts</summary>
            <p>An overlay lightbox for displaying multiple Facebook accounts. There is a header indicating which social media platform, below there are two links titled [First Facebook account title] and [Second Facebook account title]. The lightbox has a close button and an X in the corner to exit the modal.</p>
        </details>
    </figure>
</div>

## How to implement

Find working examples and code for implementing the social media channels pattern.

### GCweb (WET) theme implementation reference

The implementation reference includes how to configure elements of the design system.

* [Social media channels - GCWeb](https://wet-boew.github.io/GCWeb/components/gc-follow-us/gc-follow-us-en.html)
* [Quick implementation guide - GCWeb theme](https://wet-boew.github.io/GCWeb/docs/implementing-en.html)

### Implementations

Determine what best suits the type of page you're creating.

<div class="row">
    <div class="col-md-8">
        <div class="wb-tabs mrgn-tp-lg">
            <div class="tabpanels">
                <details id="004" open="open">
                    <summary><strong>GC-AEM</strong></summary>
                    <p class="mrgn-tp-lg">For the Government of Canada Adobe Experience Manager (AEM):</p>
                    <ul>
                        <li><a href="https://www.gcpedia.gc.ca/wiki/AEM_GC-specific_Documentation_6.5">AEM/Managed Web Service documentation (GCPedia link - only available on the Government of Canada network)</a></li>
                    </ul>
                </details>
                <details id="005">
                    <summary><strong>CDTS</strong></summary>
                    <p class="mrgn-tp-lg">For the Centrally Deployed Templates Solution (CDTS):</p>
                    <ul>
                        <li><a href="https://cenw-wscoe.github.io/sgdc-cdts/docs/index-en.html">CDTS documentation</a></li>
                    </ul>
                </details>
                <details id="006">
                    <summary><strong>Drupal WxT</strong></summary>
                    <p class="mrgn-tp-lg">For Drupal WxT:</p>
                    <ul>
                        <li><a href="https://drupalwxt.github.io/">Drupal WxT documentation</a></li>
                    </ul>
                </details>
            </div>
        </div>
    </div>
</div>

## Research and rationale

Consult the policy rationale.

### Policy rationale

The content within the social media channels section must follow the [Directive on the Management of Communications](https://www.tbs-sct.canada.ca/pol/doc-eng.aspx?id=30682).

This is an optional pattern for the following mandatory templates:

* [Institutional landing page](https://design.canada.ca/mandatory-templates/institutional-profile-pages.html)
* [Topic page template](https://design.canada.ca/mandatory-templates/topic.html)
* [Ministerial pages](https://design.canada.ca/mandatory-templates/ministerial-profile-pages.html)

## Latest changes

<dl class="dl-horizontal">
    <dt><time>2026-09-01</time></dt>
    <dd>Updated the guidance to clarify that 5 icons are recommended as a best practice, not a maximum limit.</dd>
    <dt><time>2026-01-30</time></dt>
    <dd>Updated the guidance to clarify that other social media icons can be used and that icons can be rearranged.</dd>
    <dt><time>2025-05-15</time></dt>
    <dd>Updated typography specifications in tandem with alignment activities for GCWeb and GC Design System.</dd>
    <dt><time>2024-09-19</time></dt>
    <dd>Updated the pattern to add an optional “More ways to connect” link.</dd>
    <dt><time>2024-04-03</time></dt>
    <dd>Updated the guidance to include content and design specifications, visual examples and implementation guidance.</dd>
</dl>
