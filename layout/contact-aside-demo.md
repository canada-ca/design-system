---
altLangPage: https://conception.canada.ca/configurations-conception-communes/alertes-contextuelles.html
date: null
dateModified: '2018-12-19'
description: null
section-title: Demo and code
title: Contact aside
---


<div class="row profile">
 <div class="col-md-9">
  <p class="pagetag">
   Consistent layout to concisely show links to contact pages or simple contact information as an aside.
  </p>
 </div>
 <div class="col-md-3">
  <div class="small">
   <ul class="list-unstyled">
    <li class="mrgn-rght-lg">
     <strong>
      Version:
     </strong>
     x.x
    </li>
    <li class="mrgn-rght-lg">
     <strong>
      Updated:
     </strong>
     Jan 10, 2020
    </li>
   </ul>
  </div>
 </div>
 <div class="col-md-12">
  <div class="btn-group mrgn-bttm-sm mrgn-tp-md">
   <a class="btn btn-default" href="./contact-aside.html">
    <span class="fas fa-pen-square">
    </span>
    Design guidelines
   </a>
   <a class="btn btn-default active">
    <span class="fas fa-laptop-code">
    </span>
    <strong>
     Demo and code
    </strong>
   </a>
   <a class="btn btn-default" href="./contact-aside-rationale.html">
    <span class="fas fa-microscope">
    </span>
    Rationale
   </a>
  </div>
 </div>
</div>

<div class="row">
 <div class="col-md-9 col-xs-12 mrgn-tp-md pull-right">
  <div class="pattern-demo pattern-demo-component" id="demo">
   <div class="component-demo" id="contact-links-demo">
    <iframe class="example-frame example-frame-resizable example-frame-m" frameborder="0" loading="lazy" onload="resizeIframe(this);" src="./demos/link-description/wet4/link-description-3col.html" title="List of contact page links">
    </iframe>
   </div>
   <div class="component-demo hidden" id="phone-channel-demo">
    <div class="layout-demo example-frame-bkg" id="complex-phone-layout">
     <iframe class="example-frame example-frame-resizable example-frame-m" frameborder="0" loading="lazy" onload="resizeIframe(this);" src="./demos/contact/wet4/phone-only.html" title="Phone only contact example with before you call layout">
     </iframe>
    </div>
    <div class="layout-demo example-frame-bkg hidden" id="simple-phone-layout">
     <iframe class="example-frame example-frame-resizable example-frame-m" frameborder="0" loading="lazy" onload="resizeIframe(this);" src="./demos/link-description/wet4/link-description-3col.html" title="Phone only contact example to save space layout">
     </iframe>
    </div>
   </div>
   <div class="component-demo hidden" id="mail-channel-demo">
    <div class="layout-demo example-frame-bkg" id="phone-only-layout">
     <iframe class="example-frame example-frame-resizable example-frame-m" frameborder="0" loading="lazy" onload="resizeIframe(this);" src="./demos/link-description/wet4/link-description-3col.html" title="Phone only contact example with before you call layout">
     </iframe>
    </div>
    <div class="layout-demo example-frame-bkg hidden" id="simple-phone-only-layout">
     <iframe class="example-frame example-frame-resizable example-frame-m" frameborder="0" loading="lazy" onload="resizeIframe(this);" src="./demos/link-description/wet4/link-description-3col.html" title="Phone only contact example to save space layout">
     </iframe>
    </div>
    <div class="layout-demo example-frame-bkg hidden" id="mail-only-layout">
     <iframe class="example-frame example-frame-resizable example-frame-m" frameborder="0" loading="lazy" onload="resizeIframe(this);" src="./demos/link-description/wet4/link-description-2col.html" title="Link and description in 2 columns example layout">
     </iframe>
    </div>
    <div class="layout-demo example-frame-bkg hidden" id="link-list-layout">
     <iframe class="example-frame example-frame-resizable example-frame-m" frameborder="0" loading="lazy" onload="resizeIframe(this);" src="./demos/link-description/wet4/link-description-1col.html" title="1 column link and description example">
     </iframe>
    </div>
   </div>
   <div class="component-demo example-frame-bkg hidden" id="multi-channel-demo">
    <div class="layout-demo example-frame-bkg hidden" id="with-sign-in-layout">
     <iframe class="example-frame example-frame-resizable example-frame-m" frameborder="0" loading="lazy" onload="resizeIframe(this);" src="./demos/link-description/wet4/link-description-1col.html" title="1 column link and description example">
     </iframe>
    </div>
    <div class="layout-demo example-frame-bkg hidden" id="simple-mail-phone-layout">
     <iframe class="example-frame example-frame-resizable example-frame-m" frameborder="0" loading="lazy" onload="resizeIframe(this);" src="./demos/link-description/wet4/link-description-1col.html" title="1 column link and description example">
     </iframe>
    </div>
   </div>
   <div class="component-demo hidden example-frame-bkg hidden" id="multi-audience-demo">
    <iframe class="example-frame example-frame-resizable example-frame-m" frameborder="0" loading="lazy" onload="resizeIframe(this);" src="./demos/link-description/wet4/dropdown.html" title="Link and description with dropdown menu example">
    </iframe>
   </div>
   <div class="btn-group">
    <button class="btn btn-default" id="resize-iframe-mobile">
     <span class="fas fa-mobile-alt">
     </span>
     <strong>
      SM
     </strong>
    </button>
    <button class="btn btn-default" id="resize-iframe-tablet">
     <span class="fas fa-tablet-alt">
     </span>
     <strong>
      MD
     </strong>
    </button>
    <button class="btn btn-default" id="resize-iframe-desktop">
     <span class="fas fa-desktop">
     </span>
     <strong>
      LG
     </strong>
    </button>
   </div>
  </div>
 </div>
 <div class="col-md-3 pull-left">
  <div class="mrgn-bttm-sm">
   <fieldset>
    <label class="h5" for="design-variant-menu">
     Design variant
    </label>
    <select class="form-control" id="design-variant-menu">
     <option value="doormat">
      Link and description
     </option>
     <option value="steps">
      Sequenced steps
     </option>
     <option value="dropdown">
      With dropdown
     </option>
    </select>
   </fieldset>
  </div>
  <div class="mrgn-bttm-sm doormat-options layout-submenu" id="doormat-submenu">
   <fieldset>
    <label class="h5" for="doormat-layout-menu">
     Layout options
    </label>
    <select class="form-control layout-variant-menu" id="doormat-layout-menu">
     <option value="3col">
      3 column
     </option>
     <option value="2col">
      2 column
     </option>
     <option value="1col">
      Single column
     </option>
     <option value="headings">
      With sub-headings
     </option>
    </select>
   </fieldset>
  </div>
 </div>
</div>

<div class="row">
 <div class="col-md-9 col-xs-12 mrgn-tp-md pull-right">
  <div class="component-code" id="doormat-code">
   <div class="layout-code" id="3col-code">
    <div class="code-variant wet4-variant">
     <section data-ajax-replace="./demos/link-description/wet4/link-description-3col-code.html">
     </section>
    </div>
    <div class="code-variant react-variant hidden">
     <h3>
      ReactJS
     </h3>
     <p>
      Doesn't exist yet. Want to contribute?
     </p>
     <p>
      <a class="btn btn-default" href="https://canada-ca.github.io/design-system-systeme-conception/backlog/contribution-process.html">
       Contribute to the design system
      </a>
     </p>
    </div>
    <div class="code-variant angular-variant hidden">
     <h3>
      Angular
     </h3>
     <p>
      Doesn't exist yet. Want to contribute?
     </p>
     <p>
      <a class="btn btn-default" href="https://canada-ca.github.io/design-system-systeme-conception/backlog/contribution-process.html">
       Contribute to the design system
      </a>
     </p>
    </div>
   </div>
   <div class="layout-code hidden" id="2col-code">
    <div class="code-variant wet4-variant hidden">
     <section data-ajax-replace="./demos/link-description/wet4/link-description-2col-code.html">
     </section>
    </div>
    <div class="code-variant react-variant hidden">
     <h3>
      ReactJS
     </h3>
     <p>
      Doesn't exist yet. Want to contribute?
     </p>
     <p>
      <a class="btn btn-default" href="https://canada-ca.github.io/design-system-systeme-conception/backlog/contribution-process.html">
       Contribute to the design system
      </a>
     </p>
    </div>
    <div class="code-variant angular-variant hidden">
     <h3>
      Angular
     </h3>
     <p>
      Doesn't exist yet. Want to contribute?
     </p>
     <p>
      <a class="btn btn-default" href="https://canada-ca.github.io/design-system-systeme-conception/backlog/contribution-process.html">
       Contribute to the design system
      </a>
     </p>
    </div>
   </div>
   <div class="layout-code hidden" id="1col-code">
    <div class="code-variant wet4-variant hidden">
     <section data-ajax-replace="./demos/link-description/wet4/link-description-1col-code.html">
     </section>
    </div>
    <div class="code-variant react-variant hidden">
     <h3>
      ReactJS
     </h3>
     <p>
      Doesn't exist yet. Want to contribute?
     </p>
     <p>
      <a class="btn btn-default" href="https://canada-ca.github.io/design-system-systeme-conception/backlog/contribution-process.html">
       Contribute to the design system
      </a>
     </p>
    </div>
    <div class="code-variant angular-variant hidden">
     <h3>
      Angular
     </h3>
     <p>
      Doesn't exist yet. Want to contribute?
     </p>
     <p>
      <a class="btn btn-default" href="https://canada-ca.github.io/design-system-systeme-conception/backlog/contribution-process.html">
       Contribute to the design system
      </a>
     </p>
    </div>
   </div>
   <div class="layout-code hidden" id="headings-code">
    <div class="code-variant wet4-variant hidden">
     <section data-ajax-replace="./demos/link-description/wet4/link-description-sub-headings-code.html">
     </section>
    </div>
    <div class="code-variant react-variant hidden">
     <h3>
      ReactJS
     </h3>
     <p>
      Doesn't exist yet. Want to contribute?
     </p>
     <p>
      <a class="btn btn-default" href="https://canada-ca.github.io/design-system-systeme-conception/backlog/contribution-process.html">
       Contribute to the design system
      </a>
     </p>
    </div>
    <div class="code-variant angular-variant hidden">
     <h3>
      Angular
     </h3>
     <p>
      Doesn't exist yet. Want to contribute?
     </p>
     <p>
      <a class="btn btn-default" href="https://canada-ca.github.io/design-system-systeme-conception/backlog/contribution-process.html">
       Contribute to the design system
      </a>
     </p>
    </div>
   </div>
  </div>
  <div class="component-code hidden" id="steps-code">
   <div class="code-variant wet4-variant hidden">
    <section data-ajax-replace="./demos/link-description/wet4/sequenced-steps-code.html">
    </section>
   </div>
   <div class="code-variant react-variant hidden">
    <h3>
     ReactJS
    </h3>
    <p>
     Doesn't exist yet. Want to contribute?
    </p>
    <p>
     <a class="btn btn-default" href="https://canada-ca.github.io/design-system-systeme-conception/backlog/contribution-process.html">
      Contribute to the design system
     </a>
    </p>
   </div>
   <div class="code-variant angular-variant hidden">
    <h3>
     Angular
    </h3>
    <p>
     Doesn't exist yet. Want to contribute?
    </p>
    <p>
     <a class="btn btn-default" href="https://canada-ca.github.io/design-system-systeme-conception/backlog/contribution-process.html">
      Contribute to the design system
     </a>
    </p>
   </div>
  </div>
  <div class="component-code hidden" id="dropdown-code">
   <div class="code-variant wet4-variant hidden">
    <section data-ajax-replace="./demos/link-description/wet4/dropdown-code.html">
    </section>
   </div>
   <div class="code-variant react-variant hidden">
    <h3>
     ReactJS
    </h3>
    <p>
     Doesn't exist yet. Want to contribute?
    </p>
    <p>
     <a class="btn btn-default" href="https://canada-ca.github.io/design-system-systeme-conception/backlog/contribution-process.html">
      Contribute to the design system
     </a>
    </p>
   </div>
   <div class="code-variant angular-variant hidden">
    <h3>
     Angular
    </h3>
    <p>
     Doesn't exist yet. Want to contribute?
    </p>
    <p>
     <a class="btn btn-default" href="https://canada-ca.github.io/design-system-systeme-conception/backlog/contribution-process.html">
      Contribute to the design system
     </a>
    </p>
   </div>
  </div>
 </div>
 <div class="col-md-3 pull-left">
  <div class="mrgn-bttm-sm">
   <fieldset>
    <label class="h5" for="code-variant-menu">
     Code variant
    </label>
    <select class="form-control" id="code-variant-menu">
     <option value="wet4">
      WET 4
     </option>
     <option value="react">
      ReactJS
     </option>
     <option value="angular">
      Angular
     </option>
    </select>
   </fieldset>
  </div>
 </div>
</div>

<section>
 <h2 id="versions">
  Latest changes
 </h2>
 <dl class="dl-horizontal">
  <dt>
   Version x.x:
   <br/>
   <small>
    <time class="text-muted" datetime="2019-12-17">
     Dec 17, 2019
    </time>
   </small>
  </dt>
  <dd>
   .
  </dd>
 </dl>
</section>

<section>
 <h2 id="discuss">
  Discussion
 </h2>
 <div class="row">
  <div class="col-md-4 col-sm-6 col-xs-12">
   <p>
    <a class="btn btn-default btn-block" href="https://github.com/canada-ca/design-system-systeme-conception/issues">
     <span class="fab fa-github">
     </span>
     Report an issue in github
    </a>
   </p>
   <p>
    <a class="btn btn-default btn-block" href="">
     <span class="fab fa-slack">
     </span>
     Join the conversation on slack
    </a>
   </p>
  </div>
 </div>
</section>


