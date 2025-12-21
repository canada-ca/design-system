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
description: Follow this content guidance to create a consistent experience for Canada.ca visitors.
title: Content guidance
---

<p>Follow this content guidance to create a consistent experience for Canada.ca visitors.</p>

<section>
  <h2>On this page</h2>
  <ul>
    <li><a href="#topic">Topic-specific AI applications</a></li>
    <li><a href="#notices">Notices, transparency and accountability</a></li>
    <li><a href="#accessibility">Accessibility</a></li>
    <li><a href="#accuracy">Accuracy</a></li>
    <li><a href="#languages">Languages</a></li>
    <li><a href="#citations">Citations</a></li>
    <li><a href="#gba">Gender-Based Analysis Plus (GBA Plus)</a></li>
    <li><a href="#safeguards">Safeguards against harmful or biased outputs</a></li>
    <li><a href="#wizards">Handling online wizards</a></li>
    <li><a href="#length">Answer length</a></li>
    <li><a href="#chat-ids">Chat IDs for reference</a></li>
    <li><a href="#avoid">Things to avoid</a></li>
  </ul>
</section>

<section>
  <h2 id="topic">Topic-specific AI applications</h2>
  <p>While you can limit a chat application to a certain topic, keep the Canada.ca vision in mind as you experiment and design. The Canada.ca vision is one where users don't need to know which department handles a specific task. Instead, they should be able to find the information they need seamlessly, regardless of departmental boundaries.</p>
  <p>People expect Canada.ca to function as a unified site. If an AI application is limited to a specific topic, its invitation button or link should clearly indicate that topic. This ensures users understand they will only find information related to that specific topic.</p>
</section>

<section>
  <h2 id="notices">Notices, transparency and accountability</h2>
  <p>AI help applications must be clearly labelled as AI.</p>
  <p>Include a notice that addresses privacy, potential mistakes, how it should be used, limitations of the application, and similar issues without blocking access to the chat service.</p>
  <p>To ensure transparency and accountability, provide users with clear information about how their data will be used. For example, if the application will use the data they input and the responses generated for training purposes, make that clear to users.</p>
  <p>Add a link or details-summary directly to the chat solution, similar to the evidence-based approach for privacy statements on Canada.ca. This makes the information available to users without making them first read it all before accessing the application.</p>
  <ul>
    <li><a href="https://design.canada.ca/common-design-patterns/privacy-disclaimer.html">Privacy disclaimer pattern</a></li>
    <li><a href="https://design-system.alpha.canada.ca/en/components/details/design/">Details-summary component</a></li>
  </ul>
  <p>Privacy notices must be provided at the time of personal information collection. When personal information is intended to be (or likely to be) collected, the notice should be placed so that it is clearly associated with the area where a user would input information into the AI chat function.</p>
  <p>If creating/collecting/using/disclosing/retaining/deleting personal information, consult with your institutional privacy/ATIP officials when creating a privacy notification. The notice must conform with section 4.2.20 (1-6) of the TBS Directive on Privacy Practices:</p>
  <ul>
    <li><a href="https://www.tbs-sct.canada.ca/pol/doc-eng.aspx?id=18309">Directive on Privacy Practices</a></li>
  </ul>
  <p>Warning users, via a notice, that AI makes mistakes is not a replacement for working on and measuring accuracy levels (see: <a href="#accuracy">Accuracy</a>). The application must produce accurate responses and always include a citation link.</p>
  <p>In consultation with your department's Legal Services, consider including a legal disclaimer/detailed liability and indemnification statement.</p>
  <p>Learn more about the roles, responsibilities and best practices for protecting users' privacy and personal information.</p>
  <ul>
    <li><a href="https://www.canada.ca/en/treasury-board-secretariat/services/access-information-privacy/privacy/privacy-policies-guidance.html">Privacy policies and guidance</a></li>
  </ul>
</section>

<section>
  <h2 id="accessibility">Accessibility</h2>
  <p>You must follow the requirements in the <a href="https://www.tbs-sct.canada.ca/pol/doc-eng.aspx?id=23601">Standard on Web Accessibility</a>.</p>
  <p>These additional considerations will help to ensure that your AI help application is accessible:</p>
  <ul>
    <li>use accessible labels for form fields and buttons</li>
    <li>provide status updates to inform users when the AI is generating a response and when it has stopped</li>
    <li>allow full navigation with a keyboard</li>
    <li>offer both text-to-speech and speech-to-text functionalities</li>
    <li>make sure it is compatible with screen readers</li>
  </ul>
</section>

<section>
  <h2 id="accuracy">Accuracy</h2>
  <p>Ensure you measure the accuracy of your AI application. You should share the results of any accuracy measurement activities with your department's communication team. Heads of communications are accountable for the accuracy of all communications products and activities. The Directive on the Management of Communications and the Policy on Communications and Federal Identity both outline the requirements to ensure all information provided by a department is accurate. This requirement extends to AI applications.</p>
  <ul>
    <li><a href="https://www.tbs-sct.canada.ca/pol/doc-eng.aspx?id=30682">Directive on the Management of Communications and Federal Identity</a></li>
    <li><a href="https://www.tbs-sct.canada.ca/pol/doc-eng.aspx?id=30683">Policy on Communications and Federal Identity</a></li>
  </ul>
  <p>In addition to regularly testing your application for accuracy, you should include a note that reminds the user that AI can make mistakes and that they should verify the information they're provided. For example, you could include a note like this, "AI can make mistakes, always check your answer." In addition the heading above your citation link(s) could say, "Check your answer."</p>
</section>

<section>
  <h2 id="languages">Languages</h2>
  <p>Ensure you follow the requirements in the Directive on Official Languages for Communications and Services.</p>
  <ul>
    <li><a href="https://www.tbs-sct.canada.ca/pol/doc-eng.aspx?id=26164">Directive on Official Languages for Communications and Services</a></li>
  </ul>
  <p>Generative AI models can have differing performance in English and French, and some models are better than others. Departments should undertake testing to ensure that the quality of the tools and outputs meets official language requirements.</p>
  <p>To facilitate effective communication in multiple languages, follow this guidance:</p>
  
  <h3>Language-specific versions</h3>
  <ul>
    <li>Users accessing an AI application via a French page should receive the French version of the application</li>
    <li>Users accessing an AI application via an English page should receive the English version of the application</li>
  </ul>
  
  <h3>Language of citations</h3>
  <ul>
    <li>On the English AI application page, all citations must link to official English URLs</li>
    <li>On the French AI application page, all citations must link to official French URLs</li>
    <li>If a user asks a question in English on a French page, the citation should still refer to a French URL</li>
    <li>If a user asks a question in French on an English page, the citation should still refer to an English URL</li>
    <li>Similarly, if a user asks a question in a different language (ie. Spanish) the citation should still refer to a URL in the language that the application was accessed in</li>
  </ul>
  
  <h3>Terminology and style</h3>
  <p>In your system prompt, instruct the AI to use official Canadian French terminology and adhere to the style found on Canada.ca for French responses</p>
  <ul>
    <li><a href="https://conception.canada.ca/guide-redaction/">Canada.ca French style guide: Guide de rédaction du contenu du site Canada.ca</a></li>
  </ul>
  
  <h3>Translation and support</h3>
  <p>Visitors to Canada.ca often use their browser to translate the page into their language. Large Language Models (LLMs) are designed to answer in the language of the question. Your team should determine whether to accommodate questions and answers in languages beyond English and French, along with necessary control measures, such as logging translations of the questions and answers into official languages for evaluation and monitoring purposes.</p>
</section>

<section>
  <h2 id="citations">Citations</h2>
  <p>Citations help users verify the answer and provide a link for the next step. All in-scope answers must include at least one authoritative citation link to the source material. Wherever possible, citations must point to a Government of Canada web page so that people can review the information source for themselves.</p>
  
  <h3>Ensure the AI is citing the correct page</h3>
  <p>To illustrate how citation links should be used, consider the following scenarios:</p>
  <ul>
    <li>For the question "Where to find passport offices," the citation link provided should be a URL to the page "Find a passport service location in Canada."</li>
    <li>For the question "I need the passport form," the AI should not provide a direct link to a passport form because there are several forms. It isn't clear which form is needed. Instead, it should ask a clarifying question to understand the situation better. For example, it could ask, "Is this an adult passport?" or "Is this a first-time application?"</li>
  </ul>
  <p>Once the situation is clarified, the AI can provide the appropriate link. For instance, it could direct the user to answer the questions on the "Who can renew a passport" page to be led to the correct form for their situation.</p>
  
  <h3>Make citations highly visible</h3>
  <p>To ensure citations are highly visible, consider the following guidelines:</p>
  <ul>
    <li>Visually set citations apart from the answer so users can easily find them by <mark>centring the text and adding a grey well</mark></li>
    <li>Place instructional text before citations that asks users to check their answer and take the next step</li>
    <li>Ensure citations are close enough to the answer to make it clear it is related to the answer</li>
  </ul>
</section>

<section>
  <h2 id="gba">Gender-Based Analysis Plus (GBA Plus)</h2>
  <p>To ensure that your AI help application does not create any unintended consequences or negative outcomes for certain community groups, it is recommended that a Gender-Based Analysis Plus be conducted. Please contact your department/agency's GBA Plus Centre of Expertise, and refer to the GBA Plus website from Women and Gender Equality Canada to find more information on how to undergo a GBA Plus analysis.</p>
  <ul>
    <li><a href="https://www.canada.ca/en/women-gender-equality/gender-based-analysis-plus.html">Gender-based Analysis Plus (GBA Plus)</a></li>
    <li><a href="https://women-gender-equality.canada.ca/gbaplus-course-cours-acsplus/eng/mod00/mod00_01_01.html">Introduction to GBA Plus</a></li>
    <li><a href="https://gcxgce.sharepoint.com/:w:/t/10001402/EUO29ttIkP5BhpYVj4nGdkUBjvnMAxEVj8T-MuCjWfzEqw?e=HbLjyy">GBA Plus Resource Centre (GCxhange link, only available on the Government of Canada network)</a></li>
  </ul>
</section>

<section>
  <h2 id="safeguards">Safeguards against harmful or biased outputs</h2>
  <p>Ensure you test the application for unintended biases and other harmful outputs.</p>
  <ul>
    <li>Ensure that responses are generated only from trusted sources, such as Canada.ca, to minimize the risk of delivering biased or harmful information</li>
    <li>Implement a content redaction system to handle inputs containing inappropriate language, see the <a href="{{ site.url }}/guidance/ai/privacy-security.html">Privacy and security section</a></li>
    <li>The Digital Standards Playbook has more information on how to mitigate potential biases, see <a href="https://www.canada.ca/en/government/system/digital-government/government-canada-digital-standards/design-ethical-services.html">Design ethical services</a></li>
  </ul>
</section>

<section>
  <h2 id="wizards">Handling online wizards</h2>
  <p>An online wizard is a step-by-step guide that helps users complete a task by breaking it into smaller, manageable steps. There are many heavily used Canada.ca wizards like "Find out if you need a visa." These wizards can be many layers deep with extensive logic and are kept up to date.</p>
  <p>Your system prompt should direct the AI service to send users to any existing wizard pages rather than the AI trying to ask all the relevant questions. Since current AI models are reinforced to answer questions, rather than to ask questions, providing these answers should be left to the wizard.</p>
  <p>Eventually it may be possible to feed the wizard logic to the AI service so that it can handle the questions and answers.</p>
</section>

<section>
  <h2 id="length">Answer length</h2>
  <p>Answers should be concise, simple and clear. This makes it easier for users to understand the answer and it also reinforces the need to use the citation link to take the next steps.</p>
  <p>In the system prompt, encourage the AI to not include more information than is needed. Shorter answers also help prevent the AI from hallucinating.</p>
  <p>Some individuals may need more detailed explanations to fully grasp a topic. If a user requests more information, longer answers can be provided to ensure they receive the context they require. Even when providing more detail, ensure a citation link is provided for additional information and so the user can verify the information given.</p>
</section>

<section>
  <h2 id="chat-ids">Chat IDs for reference</h2>
  <p>All conversations should have a visible identifier that's documented in the system. This allows for easy reference if necessary.</p>
</section>

<section>
  <h2 id="avoid">Things to avoid</h2>
  <p>When designing your AI help application, avoid language related to live chat, including:</p>
  <ul>
    <li><b>using the word "Chat"</b>, research suggests that "chat" is associated with human agents</li>
    <li><b>using the word "Now,"</b> as it implies that a live agent is standing by</li>
  </ul>
</section>