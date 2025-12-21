---
altLangPage: https://conception.canada.ca/directives/ia/XX.html
breadcrumbs:
  - link: "https://design.canada.ca/about/"
    title: "About Canada.ca"
  - link: "https://design.canada.ca"
    title: "Design"
  - link: "https://design.canada.ca/guidance/index.html"
    title: "Guidance"
  - link: "https://design.canada.ca/guidance/ai/index.html"
    title: "AI help applications"
date: 2025-12-23
dateModified: 2025-12-23
description: Follow this privacy and security guidance to protect users and their personal information when creating AI help applications.
title: Privacy and security
---

<section>
  <h2>On this page</h2>
  <ul>
    <li><a href="#engage">Engage with Privacy early</a></li>
    <li><a href="#minimize">Minimize personal information collection</a></li>
    <li><a href="#redacting-pi">Redacting Personal Information (PI) in the user input field</a></li>
    <li><a href="#redacting-threats">Redacting threats, profanity and AI manipulation</a></li>
    <li><a href="#handling-threats">Handling perceived threats</a></li>
    <li><a href="#retention">Set a retention and deletion schedule</a></li>
    <li><a href="#audit">Audit logs and monitoring</a></li>
    <li><a href="#prevention">Prevention of jailbreaking and manipulation</a></li>
    <li><a href="#compliance">Compliance with the Enterprise Cyber Security</a></li>
  </ul>
</section>

<section>
  <h2 id="engage">Engage with Privacy early</h2>
  <p>If your AI application intends to collect personal information, or is likely to collect personal information inadvertently, identify and mitigate privacy risks early by engaging your institution's Privacy office to complete a Privacy Checklist early in development. A Privacy Checklist is required by the TBS Directive on Privacy Practices (Appendix C.2.2.6) to document if a Privacy Impact Assessment is necessary prior to deploying your generative AI technology.</p>
  <ul>
    <li><a href="https://www.tbs-sct.canada.ca/pol/doc-eng.aspx?id=18309">Directive on Privacy Practices</a></li>
  </ul>
</section>

<section>
  <h2 id="minimize">Minimize personal information collection</h2>
  <p>Only gather personal information that's necessary for the AI to function. For instance, if an AI help application is designed to assist with customer service, limit collection to relevant details.</p>
  <p>Avoid collecting unnecessary details, such as location or device information unless it's essential. An example of when location may need to be collected is if your AI needs to provide geo-targeted information such as the weather or wildfire updates.</p>
  <p>Personal information within conversations should not be retained, used for secondary purposes, or disclosed.</p>
  <p>Consult with your Privacy team to discuss options if you're not sure how to minimize or handle personal information collection for your application.</p>
</section>

<section>
  <h2 id="redacting-pi">Redacting personal information (PI)</h2>
  <p>Remove and redact as much personal information (PI) in the user input field as possible, rather than sending it to the AI service or storing it in any manner.</p>
  <p>Personal information is defined in the <a href="https://laws-lois.justice.gc.ca/eng/ACTS/P-21/index.html"><cite>Privacy Act</cite></a> as information about an identifiable individual that's recorded in any form. This can include information such as:</p>
  <ul>
    <li>a person's name</li>
    <li>contact information</li>
    <li>any identifying numbers</li>
  </ul>
  <p>It can also include information that's de-identified (e.g., where names or identifying numbers have been removed) if there is a serious possibility that an individual could be identified alone or in combination with other available information. Refer to the Treasury Board Secretariat's privacy implementation notice:</p>
  <ul>
    <li><a href="https://www.canada.ca/en/treasury-board-secretariat/services/access-information-privacy/access-information-privacy-notices/2023-01-de-identification.html">Privacy Implementation Notice 2023-01: De-identification</a></li>
  </ul>
  <p>You should let the user know that their redacted data will not be stored anywhere.</p>
  <p>Most questions with Personal Information (PI) redacted will no longer make sense. Instead of sending the redacted message to the AI service, show the user the result of the PI redaction and ask them to reframe the question without personal details. For example, display a message like this:</p>
  <p>"Your question contained personal details. Those personal details have been replaced with these symbols: XXX. To protect your privacy, your question was not sent to the AI service. Please ask your question again without including any personal information."</p>
  <p>Remember that even with redaction it is still possible that some personal information ends up being collected/stored (ie. isn't successfully redacted). To account for this possibility, ensure you consult the requirements in the:</p>
  <ul>
    <li><a href="https://laws-lois.justice.gc.ca/eng/ACTS/P-21/index.html"><cite>Privacy Act</cite></a></li>
    <li><a href="https://www.tbs-sct.canada.ca/pol/doc-eng.aspx?id=12510">Policy on Privacy Protection</a></li>
    <li><a href="https://www.tbs-sct.canada.ca/pol/doc-eng.aspx?id=16578">Policy on Government Security</a></li>
    <li><a href="https://www.tbs-sct.canada.ca/pol/doc-eng.aspx?id=32603">Policy on Service and Digital</a></li>
    <li><a href="https://www.tbs-sct.canada.ca/pol/doc-eng.aspx?id=32601">Directive on Service and Digital</a></li>
  </ul>
  <p>For guidance on how to make sure your generative AI technology is responsible, trustworthy and privacy-protective, refer to:</p>
  <ul>
    <li><a href="https://www.canada.ca/en/government/system/digital-government/digital-government-innovations/responsible-use-ai/guide-use-generative-ai.html">Treasury Board Secretariat's Guide on the use of generative AI</a></li>
    <li><a href="https://www.priv.gc.ca/en/privacy-topics/technology/artificial-intelligence/gd_principles_ai/">Office of the Privacy Commissioner's Principles for responsible, trustworthy and privacy-protective generative AI technologies</a></li>
  </ul>
  <p>You may also contact your department's Access to Information and Privacy Office for more guidance on your responsibilities for protecting personal information.</p>
  <ul>
    <li><a href="https://www.tbs-sct.canada.ca/ap/atip-aiprp/coord-eng.asp">List of access to information and privacy coordinators by institution</a></li>
  </ul>
</section>

<section>
  <h2 id="redacting-threats">Redacting threats, profanity and AI manipulation</h2>
  <p>Apply redaction patterns in the code for profanity, threats and manipulation.</p>
  <p>All three types of redaction should show an identical user message and redact with "#" characters. An error message should be displayed to advise users. For example, display a message like this:</p>
  <p>"Your question was not sent to the AI service. Your question used words that aren't accepted. Please try asking it differently."</p>
  <p>This redaction approach prevents people from attempting to contact the Government with threats and from attempting to manipulate or 'jailbreak' the AI service. Note that threats must be handled in real-time, which is not the role of an AI help application.</p>
  <p>Notice that the user message nudges people towards asking a question rather than a comment.</p>
  <p>Make sure to redact entire words, not parts of words, or you'll end up with words like "assessment" and "died" not being accepted.</p>
  <p>There are three sets of files of words and phrases, in English and French, that can be used. Contact us if you'd like access to these files:</p>
  <ul>
    <li><a href="mailto:cds.dto-btn.snc@servicecanada.gc.ca">cds.dto-btn.snc@servicecanada.gc.ca</a></li>
  </ul>
</section>

<section>
  <h2 id="handling-threats">Handling perceived threats</h2>
  <p>Before you implement an AI help application, make sure your organization has a process in place to deal with threatening messages. A similar process may already be documented for threats received through email, social media and/or call centres.</p>
  <ul>
    <li>Follow the same procedures that your organization has in place for threats received through email, social media and/or call centres.</li>
  </ul>
</section>

<section>
  <h2 id="retention">Set a retention and deletion schedule</h2>
  <p>Establish default retention periods for all collected data. Once the period ends, all data should be deleted. This practice helps prevent unnecessary data buildup, saves money on storage costs, and reduces impacts of potential privacy threats. Connect with your department's Information Management branch for assistance with establishing and applying a retention and disposition schedule.</p>
</section>

<section>
  <h2 id="audit">Audit logs and monitoring</h2>
  <p>Monitor for, and notify developers or providers of, inappropriate uses or biased outcomes that have not been identified as a potential limitation of the system. Audit logs maintain detailed records of all access and activity, allowing for easier reference in the future.</p>
  <p>Audit logs should implement role-based access controls so that only those with a "need to know" can access them, protecting against any unauthorized access.</p>
  <p>Maintain ongoing awareness of, and mitigations against, threats that are of particular concern when using generative AI, which include but are not limited to prompt injection attacks, model inversion attacks, and jailbreaking.</p>
</section>

<section>
  <h2 id="prevention">Prevention of jailbreaking and manipulation</h2>
  <p>Jailbreaking an AI help application means manipulating it into doing things it's not supposed to do, like providing private, harmful or out-of-scope answers. Here are some key measures to implement to mitigate these risks:</p>
  
  <ul>
    <li>Limit the number of characters in the input field to 300
      <ul>
        <li>examine your usage data over time to evaluate reducing or increasing this value</li>
        <li>use an error message when the limit is exceeded to alert the user to the amount of characters they are over the limit and advise them to shorten their question: "Your message is [number] characters too long. Please simplify your question."</li>
      </ul>
    </li>
    <li>Limit the conversation to a maximum of 3 questions, as longer conversations increase the likelihood of inaccurate responses
      <ul>
        <li>alert users in advance that their conversation will be limited to 3 questions</li>
        <li>show a reload button and message once the conversation limit is reached - note that only messages sent to the AI service should count towards this limit</li>
        <li>reload message text: "You've reached the limit of 3 questions per conversation. Reload to start a new conversation."</li>
      </ul>
    </li>
    <li>Constrain model behaviour<sup id="fn1-0-rf"><a class="fn-lnk" href="#fn1"><span class="wb-inv">Footnote </span>1</a></sup>
      <ul>
        <li>Provide specific instructions about the model's role, capabilities, and limitations within the system prompt. Enforce strict context adherence, limit responses to specific tasks or topics, and instruct the model to ignore attempts to modify core instructions.</li>
      </ul>
    </li>
  </ul>
</section>

<section>
  <h2 id="compliance">Compliance with the Enterprise Cyber Security</h2>
  <p>Ensure compliance with Enterprise Cyber Security.</p>
  <p><a href="https://www.canada.ca/en/government/system/digital-government/online-security-privacy/enterprise-cyber-security-strategy.html">Government of Canada's Enterprise Cyber Security Strategy</a>: Canadians rely on the Government of Canada to deliver programs and services, many of which are becoming increasingly more digital in this modern era. Like many public institutions around the world, the government has been a target of cyber-attacks, which can have a significant effect on government operations and the security of Canadians. We're constantly adapting safety measures and establishing tools to help safeguard our systems and protect Canadians' personal information. As a result, cyber security events can have a significant effect on government operations, either through disruption of critical and essential services or through exposure of classified or personal information. This significant effect can put people at risk of identity theft or other types of fraud, all of which can potentially erode trust in government institutions and negatively impact the overall Canadian economy and society.</p>
</section>

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