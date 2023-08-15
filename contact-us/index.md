---
altLangPage: "https://conception.canada.ca/contactez-nous/"
breadcrumbs: false
date: 2023-04-18
dateModified: 2023-08-14
description: "Contact the Digital Transformation Office about the Canada.ca design system."
nomenu: true
noReportProblem: true
nositesearch: true
script: ./gc-referrer.js
share: false
title: "Contact the Digital Transformation Office"
---
Contact us to ask design questions or make suggestions about the design of Canada.ca.

<div class="row">
  <div class="col-md-8">
    <details class="mrgn-tp-lg">
      <summary>Information about privacy</summary>
      <p class="mrgn-tp-lg">We collect the personal information you submit through this contact form under the authority of the <cite>Financial Administration Act</cite>, so we can respond to you. Providing the information requested on this form is voluntary. The personal information collected will be available to those program staff responsible for administering the website, and will be used and protected in accordance with the <cite>Privacy Act</cite> and as described in Personal Information Bank PSU 914 Public Communications. Under the <cite>Privacy Act</cite>, you have the right to the correction of, access to, and protection of your personal information. If you have any questions about this privacy statement, contact the TBS Access to Information and Privacy Coordinator. If you are not satisfied with TBS’s response to your privacy concern, you may wish to contact the Office of the Privacy Commissioner.</p>
      <h2>Contact information</h2>
      <p>Treasury Board’s ATIP Coordinator</p>
      <ul>
        <li>Telephone: 1-866-312-1511</li>
        <li>Email: <a href="mailto:ATIP.AIPRP@tbs-sct.gc.ca">ATIP.AIPRP@tbs-sct.gc.ca</a></li>
      </ul>
      <p>Other contacts</p>
      <ul>
        <li><a href="Office of the Privacy Commissioner of Canada">Office of the Privacy Commissioner of Canada</a></li>
      </ul>
      <h2>References</h2>
      <ul>
        <li><a href="https://laws-lois.justice.gc.ca/ENG/ACTS/P-21/index.html"><cite>Privacy Act</cite></a></li>
        <li><a href="https://www.canada.ca/en/treasury-board-secretariat/services/access-information-privacy/access-information/information-about-programs-information-holdings/standard-personal-information-banks.html#psu914">Personal Information Bank PSU 914 Communications</a></li>
      </ul>
    </details>
  </div>
</div>

<div class="wb-frmvld row">
  <form action="/contact-us/thank-you.html"  method="post" class="gc-referrer mrgn-tp-lg col-md-8 gc-font-2019" netlify>
    <input type="hidden" value="" name="referer" id="referrer">
    <input type="hidden" value="" name="formId" id="formId">
    <div class="wb-fieldflow" data-wb-fieldflow='{"noForm": true, "renderas":"radio", "gcChckbxrdio":true}'>
      <p>Do you want us to contact you about your feedback?</p>
      <ul>
        <li data-wb-fieldflow='{"action": "query", "name": "feedback_type", "value": "feedback_type1"}'>No</li>
        <li data-wb-fieldflow='[
          {"action": "toggle", "toggle": "#email_request_other", "live":true },
          {"action": "query", "name": "feedback_type", "value": "feedback_type3" }
          ]'>Yes, I’m comfortable providing my email address for contact purposes only.</li>
      </ul>
    </div>
    <div id="email_request_other" class="hidden">
      <div class="form-group">
        <label for="email1"><span class="field-name">Email address</span></label>
        <p>Your email address will only be used to contact you.  It will not be shared.</p>
        <div class="row">
          <div class="col-md-8">
            <input class="form-control input-lg full-width" id="email1" name="email1" type="email" autocomplete="email" />
          </div>
        </div>
      </div>
    </div>
    <div class="form-group">
      <label for="subject1"><span class="field-name">Subject (255 character limit)</span></label>
      <input class="form-control full-width" id="subject1" name="subject1" type="text" data-rule-minlength="2">
    </div>
    <div class="form-group">
      <label for="message" class="required"><span class="field-name">Message</span> <strong class="required" aria-hidden="true">(required)</strong></label>
      <div>
        <textarea class="form-control full-width required" rows="6" id="message" name="message"></textarea>
      </div>
    </div>
    <ul class="list-unstyled list-inline mrgn-tp-lg">
      <li><button type="submit" class="btn btn-lg btn-primary">Submit</button></li>
      <li><button type="reset" class="btn btn-lg btn-link">Cancel</button></li>
    </ul>
  </form>
</div>
