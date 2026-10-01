---
altLangPage: https://conception.canada.ca/styles/typographie.html
date: 2018-10-01
dateModified: 2026-09-29
description: Typography and fonts for Canada.ca
title: Typography style
---
<span class="wb-prettify lang-css"></span>

<span class="label label-danger">Mandatory</span>

The typography guidance is mandatory on all pages.

[Mandatory elements of the design system]({{ '/specifications/mandatory-elements.html' | absolute_url }})

Fonts must be consistent across Canada.ca pages, and should be easily readable across devices. Use a combination of Lato for headings, and Noto Sans for body text.

## Core typography of Canada.ca

### Desktop and large tablet default font specification

- H1: Lato, 41px, bold
- H2: Lato, 39px, bold
- H3: Lato, 29px, bold
- H4: Lato, 27px, bold
- H5: Lato, 24px, bold
- H6: Lato, 22px, bold
- General body text: Noto Sans, 20px, plain text

### Smaller device default font specification

- H1: Lato, 37px, bold
- H2: Lato, 35px, bold
- H3: Lato, 26px, bold
- H4: Lato, 22px, bold
- H5: Lato, 20px, bold
- H6: Lato, 18px, bold
- General body text: Noto Sans, 18px, plain text

## Typography scale by patterns

Certain patterns use font sizes beyond the core typography for content pages. These patterns have specific use cases and their sizing is designed with that in mind, such as:

### Small text elements

Noto Sans 16px, plain text, non-responsive

Some examples of patterns that use small text include:

- Data tables
- Captions, subtitles or footnotes
- Footer and header elements
- Menus

This is the smallest size recommended on Canada.ca for readable text.

### Navigational page font scaling

Navigation pages are compact by design. These pages help users scan and find links to the task information they need.

To support scanning and fit more content on a page, navigational pages use a smaller heading scale. For example, headings in sections such as Services and information, Contact us, and Features use H3 styling instead of the larger H2 styling used elsewhere on Canada.ca.

When creating a standard Canada.ca navigational page, follow the typography and heading guidance for the design pattern you are using.

Examples of navigation pages:

- Topic pages, institutional landing pages, layered theme
- Canada.ca home page, Government of Canada services page

## Indigenous characters and other languages

Both Lato and Noto Sans support a wide variety of languages and non-Latin characters. However, Noto Sans has a larger range of additional font families than can be added to support additional character types.

The Noto Sans Canadian Aboriginal font-family is included by default in the typography of Canada.ca.

When publishing content that has unsupported character types, you can choose to add a Noto Sans font package for the characters you need for both headings and content as necessary.

By default, without this specific modification, the style of Canada.ca instructs the user’s browser to use an available font that will display the characters correctly.

Example:

Language tag applied to section with content

```html
<section lang="zh-Hans">
  <h2>标题</h2>
  <p>....</p>
</section>
```

CSS for the language tag

```css
:lang(zh-Hans) {
  font-family: 'Noto Sans SC';
}
:lang(zh-Hans) :is(h1, h2, h3, h4, h5, h6) {
  font-weight: bold;
}
```

Developers will need to make the Noto Sans language set available, for this example it would be:
- [Noto Sans Simplified Chinese](https://fonts.google.com/noto/specimen/Noto+Sans+SC)

Implementation resources:
- [Noto Sans: font families for additional characters](https://fonts.google.com/noto/fonts)
- [List of ISO 639 language codes](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes)

## Main page title

When the H1 is the main title of a page, it includes a red bar as part of the Canada.ca brand.

Specifications for the red bar (formerly known as gc-thickline):

- alignment: left
- colour: #A62A1E
- position: .2em (7.6px) underneath the H1
- size: 72px wide 6px thick

## Line length

Constrain text line length to 65 characters. This ensures that no lines extend beyond a comfortable reading length.

Page layouts may be wider than 65 characters. The line length restriction applies only to lines of text.

## Links

Underline links in an underline style that skips descenders.

## Latest updates

<dl class="dl-horizontal">
  <dt><time>2026-09-29</time></dt>
  <dd>Updated to clarify the differences between core Canada.ca typography and the typography used for navigational pages and components.</dd>
  <dt><time>2026-01-29</time></dt>
  <dd>Updated to reflect that the Noto Sans Canadian Aboriginal font family has been added to the typography of Canada.ca.</dd>
  <dt><time>2025-11-21</time></dt>
  <dd>Updated to include information about how to customize typography to support additional languages</dd>
  <dt><time>2025-05-15</time></dt>
  <dd>Updated typography specifications in tandem with alignment activities for GCWeb and GC Design System</dd>
</dl>
