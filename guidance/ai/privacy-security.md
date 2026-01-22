---
altLangPage: https://conception.canada.ca/directives/ia/protection-renseignements-personnels-securite.html
date: 2026-01-15
dateModified: 2026-01-15
description: Follow this privacy and security guidance to protect users and their personal information when creating AI help applications.
title: "Privacy and security: Guidance for the design of AI help applications"
---

## On this page

- [Engage with Privacy early](#engage)
- [Minimize personal information collection](#minimize)
- [Redacting Personal Information (PI) in the user input field](#redacting-pi)
- [Redacting threats, profanity and AI manipulation](#redacting-threats)
- [Handling perceived threats](#handling-threats)
- [Set a retention and deletion schedule](#retention)
- [Audit logs and monitoring](#audit)
- [Prevention of jailbreaking and manipulation](#prevention)
- [Compliance with the Enterprise Cyber Security](#compliance)

## Engage with Privacy early {#engage}

If your AI application intends to collect personal information, or is likely to collect personal information inadvertently, identify and mitigate privacy risks early by engaging your institution's Privacy Office to complete a Privacy Checklist early in development. A Privacy Checklist is required by the TBS Directive on Privacy Practices (Appendix C.2.2.6) to document if a Privacy Impact Assessment is necessary prior to deploying your generative AI technology.

- [Directive on Privacy Practices](https://www.tbs-sct.canada.ca/pol/doc-eng.aspx?id=18309)

## Minimize personal information collection {#minimize}

Only gather personal information that's necessary for the AI to function. For instance, if an AI help application is designed to assist with customer service, limit collection to relevant details.

Avoid collecting unnecessary details, such as location or device information unless it's essential. An example of when location may need to be collected is if your AI needs to provide geo-targeted information such as the weather or wildfire updates.

Personal information within conversations should not be retained, used for secondary purposes, or disclosed.

Consult with your Privacy team to discuss options if you're not sure how to minimize or handle personal information collection for your application.

## Redacting personal information (PI) {#redacting-pi}

Remove and redact as much personal information (PI) in the user input field as possible, rather than sending it to the AI service or storing it in any manner.

Personal information is defined in the [*Privacy Act*](https://laws-lois.justice.gc.ca/eng/ACTS/P-21/index.html) as information about an identifiable individual that's recorded in any form. This can include information such as:

- a person's name
- contact information
- any identifying numbers

It can also include information that's de-identified (e.g., where names or identifying numbers have been removed) if there is a serious possibility that an individual could be identified alone or in combination with other available information. Refer to the Treasury Board Secretariat's privacy implementation notice:

- [Privacy Implementation Notice 2023-01: De-identification](https://www.canada.ca/en/treasury-board-secretariat/services/access-information-privacy/access-information-privacy-notices/2023-01-de-identification.html)

You should let the user know that their redacted data will not be stored anywhere.

Most questions with personal information (PI) redacted will no longer make sense. Instead of sending the redacted message to the AI service, show the user the result of the PI redaction and ask them to reframe the question without personal details. For example, display a message like this:

"Your question contained personal details. Those personal details have been replaced with these symbols: XXX. To protect your privacy, your question was not sent to the AI service. Please ask your question again without including any personal information."

Remember that even with redaction it is still possible that some personal information ends up being collected/stored (ie. isn't successfully redacted). To account for this possibility, ensure you consult the requirements in the:

- [Privacy Act](https://laws-lois.justice.gc.ca/eng/ACTS/P-21/index.html)
- [Policy on Privacy Protection](https://www.tbs-sct.canada.ca/pol/doc-eng.aspx?id=12510)
- [Policy on Government Security](https://www.tbs-sct.canada.ca/pol/doc-eng.aspx?id=16578)
- [Policy on Service and Digital](https://www.tbs-sct.canada.ca/pol/doc-eng.aspx?id=32603)
- [Directive on Service and Digital](https://www.tbs-sct.canada.ca/pol/doc-eng.aspx?id=32601)

For guidance on how to make sure your generative AI technology is responsible, trustworthy and privacy-protective, refer to:

- [Treasury Board Secretariat's Guide on the use of generative artificial intelligence](https://www.canada.ca/en/government/system/digital-government/digital-government-innovations/responsible-use-ai/guide-use-generative-ai.html)
- [Office of the Privacy Commissioner's Principles for responsible, trustworthy and privacy-protective generative AI technologies](https://www.priv.gc.ca/en/privacy-topics/technology/artificial-intelligence/gd_principles_ai/)

You may also contact your department's Access to Information and Privacy Office for more guidance on your responsibilities for protecting personal information.

- [List of access to information and privacy coordinators by institution](https://www.tbs-sct.canada.ca/ap/atip-aiprp/coord-eng.asp)

## Redacting threats, profanity and AI manipulation {#redacting-threats}

Apply redaction patterns in the code for profanity, threats and manipulation.

All three types of redaction should show an identical user message and redact with "#" characters. An error message should be displayed to advise users. For example, display a message like this:

"Your question was not sent to the AI service. Your question used words that aren't accepted. Please try asking it differently."

This redaction approach prevents people from attempting to contact the Government with threats and from attempting to manipulate or 'jailbreak' the AI service. Note that threats must be handled in real-time, which is not the role of an AI help application.

Notice that the user message nudges people towards asking a question rather than a comment.

Make sure to redact entire words, not parts of words, or you'll end up with words like "assessment" and "died" not being accepted.

There are three sets of files of words and phrases, in English and French, that can be used. Contact us if you'd like access to these files:

- [cds.dto-btn.snc@servicecanada.gc.ca](mailto:cds.dto-btn.snc@servicecanada.gc.ca)

## Handling perceived threats {#handling-threats}

Before you implement an AI help application, make sure your organization has a process in place to deal with threatening messages. A similar process may already be documented for threats received through email, social media and/or call centres.

### What to do

Follow the same procedures that your organization has in place for threats received through email, social media and/or call centres.

## Set a retention and deletion schedule {#retention}

Establish default retention periods for all collected data. Once the period ends, all data should be deleted. This practice helps prevent unnecessary data buildup, saves money on storage costs, and reduces impacts of potential privacy threats. Connect with your department's Information Management branch for assistance with establishing and applying a retention and disposition schedule.

## Audit logs and monitoring {#audit}

Monitor for, and notify developers or providers of, inappropriate uses or biased outcomes that have not been identified as a potential limitation of the system. Audit logs maintain detailed records of all access and activity, allowing for easier reference in the future.

Audit logs should implement role-based access controls so that only those with a "need to know" can access them, protecting against any unauthorized access.

Maintain ongoing awareness of, and mitigations against, threats that are of particular concern when using generative AI, which include but are not limited to prompt injection attacks, model inversion attacks, and jailbreaking.

## Prevention of jailbreaking and manipulation {#prevention}

Jailbreaking an AI help application means manipulating it into doing things it's not supposed to do, like providing private, harmful or out-of-scope answers. Here are some key measures to implement to mitigate these risks:

- Limit the number of characters in the input field to 300
  - examine your usage data over time to evaluate reducing or increasing this value
  - use an error message when the limit is exceeded to alert the user to the amount of characters they are over the limit and advise them to shorten their question: "Your message is [number] characters too long. Please simplify your question."
- Limit the conversation to a maximum of 3 questions, as longer conversations increase the likelihood of inaccurate responses
  - alert users in advance that their conversation will be limited to 3 questions
  - show a reload button and message once the conversation limit is reached - note that only messages sent to the AI service should count towards this limit
  - reload message text: "You've reached the limit of 3 questions per conversation. Reload to start a new conversation."
- Constrain model behaviour<sup id="fn1-0-rf"><a class="fn-lnk" href="#fn1"><span class="wb-inv">Footnote </span>1</a></sup>
  - Provide specific instructions about the model's role, capabilities, and limitations within the system prompt. Enforce strict context adherence, limit responses to specific tasks or topics, and instruct the model to ignore attempts to modify core instructions.

## Compliance with the Enterprise Cyber Security {#compliance}

Ensure compliance with Enterprise Cyber Security.

[Government of Canada's Enterprise Cyber Security Strategy](https://www.canada.ca/en/government/system/digital-government/online-security-privacy/enterprise-cyber-security-strategy.html): Canadians rely on the Government of Canada to deliver programs and services, many of which are becoming increasingly more digital in this modern era. Like many public institutions around the world, the government has been a target of cyber-attacks, which can have a significant effect on government operations and the security of Canadians. We're constantly adapting safety measures and establishing tools to help safeguard our systems and protect Canadians' personal information. As a result, cyber security events can have a significant effect on government operations, either through disruption of critical and essential services or through exposure of classified or personal information. This significant effect can put people at risk of identity theft or other types of fraud, all of which can potentially erode trust in government institutions and negatively impact the overall Canadian economy and society.

<aside class="wb-fnote" role="note">
  <h2 id="fn">Footnotes</h2>
  <dl>
    <dt>Footnote 1</dt>
    <dd id="fn1">
      <p><a href="https://genai.owasp.org/resource/owasp-top-10-for-llm-applications-2025/">OWASP Top 10 for LLM Applications 2025</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0/legalcode">https://creativecommons.org/licenses/by-sa/4.0/legalcode</a></p>
      <p class="fn-rtn small">
        <a href="#fn1-0-rf"><span class="wb-inv">Return to footnote </span>1<span class="wb-inv"> referrer</span></a>
      </p>
    </dd>
  </dl>
</aside>
