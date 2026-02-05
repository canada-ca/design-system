---
altLangPage: https://conception.canada.ca/directives/ia/lignes-directrices-contenu.html
date: 2026-02-09
dateModified: 2026-02-09
description: Follow this content guidance to create a consistent experience for Canada.ca visitors.
title: Content guidance for AI help applications
---

Follow this content guidance to create a consistent experience for Canada.ca visitors.

## On this page

- [Topic-specific AI applications](#topic)
- [Notices, transparency and accountability](#notices)
- [Accessibility](#accessibility)
- [Accuracy](#accuracy)
- [Languages](#languages)
- [Citations](#citations)
- [Gender-Based Analysis Plus (GBA Plus)](#gba)
- [Safeguards against harmful or biased outputs](#safeguards)
- [Handling online wizards](#wizards)
- [Answer length](#length)
- [Chat IDs for reference](#chat-ids)
- [Things to avoid](#avoid)

## Topic-specific AI applications {#topic}

While you can limit a chat application to a certain topic, keep the Canada.ca vision in mind as you experiment and design. The Canada.ca vision is one where users don't need to know which department handles a specific task. Instead, they should be able to find the information they need seamlessly, regardless of departmental boundaries.

People expect Canada.ca to function as a unified site. If an AI application is limited to a specific topic, its invitation button or link should clearly indicate that topic. This ensures users understand they will only find information related to that specific topic.

## Notices, transparency and accountability {#notices}

AI help applications must be clearly labelled as AI.

Include a notice that addresses privacy, potential mistakes, how it should be used, limitations of the application, and similar issues without blocking access to the chat service.

To ensure transparency and accountability, provide users with clear information about how their data will be used. For example, if the application will use the data they input and the responses generated for training purposes, make that clear to users.

Add a link or details-summary directly to the chat solution, similar to the evidence-based approach for privacy statements on Canada.ca. This makes the information available to users without making them first read it all before accessing the application.

- [Privacy disclaimer pattern](https://design.canada.ca/common-design-patterns/privacy-disclaimer.html)
- [Details-summary component](https://design-system.alpha.canada.ca/en/components/details/design/)

Privacy notices must be provided at the time of personal information collection. When personal information is intended to be (or likely to be) collected, the notice should be placed so that it is clearly associated with the area where a user would input information into the AI chat function.

If creating/collecting/using/disclosing/retaining/deleting personal information, consult with your institutional privacy/ATIP officials when creating a privacy notification. The notice must conform with section 4.2.20 (1-6) of the TBS Directive on Privacy Practices:

- [Directive on Privacy Practices](https://www.tbs-sct.canada.ca/pol/doc-eng.aspx?id=18309)

Warning users, via a notice, that AI makes mistakes is not a replacement for working on and measuring accuracy levels (see: [Accuracy](#accuracy)). The application must produce accurate responses and always include a citation link.

In consultation with your department's Legal Services, consider including a legal disclaimer/detailed liability and indemnification statement.

Learn more about the roles, responsibilities and best practices for protecting users' privacy and personal information.

- [Privacy policies and guidance](https://www.canada.ca/en/treasury-board-secretariat/services/access-information-privacy/privacy/privacy-policies-guidance.html)

## Accessibility {#accessibility}

You must follow the requirements in the [Standard on Web Accessibility](https://www.tbs-sct.canada.ca/pol/doc-eng.aspx?id=23601).

These additional considerations will help to ensure that your AI help application is accessible:

- use accessible labels for form fields and buttons
- provide status updates to inform users when the AI is generating a response and when it has stopped
- allow full navigation with a keyboard
- offer both text-to-speech and speech-to-text functionalities
- make sure it is compatible with screen readers

## Accuracy {#accuracy}

Ensure you measure the accuracy of your AI application. You should share the results of any accuracy measurement activities with your department's communication team. Heads of communications are accountable for the accuracy of all communications products and activities. The Directive on the Management of Communications and the Policy on Communications and Federal Identity both outline the requirements to ensure all information provided by a department is accurate. This requirement extends to AI applications.

- [Directive on the Management of Communications and Federal Identity](https://www.tbs-sct.canada.ca/pol/doc-eng.aspx?id=30682)
- [Policy on Communications and Federal Identity](https://www.tbs-sct.canada.ca/pol/doc-eng.aspx?id=30683)

In addition to regularly testing your application for accuracy, you should include a note that reminds the user that AI can make mistakes and that they should verify the information they're provided. For example, you could include a note like this, "AI can make mistakes, always check your answer." In addition the heading above your citation link(s) could say, "Check your answer."

## Languages {#languages}

Ensure you follow the requirements in the Directive on Official Languages for Communications and Services.

- [Directive on Official Languages for Communications and Services](https://www.tbs-sct.canada.ca/pol/doc-eng.aspx?id=26164)

Generative AI models can have differing performance in English and French, and some models are better than others. Departments should undertake testing to ensure that the quality of the tools and outputs meets official language requirements.

To facilitate effective communication in multiple languages, follow this guidance:

### Language-specific versions

- Users accessing an AI application via a French page should receive the French version of the application
- Users accessing an AI application via an English page should receive the English version of the application

### Language of citations

- On the English AI application page, all citations must link to official English URLs
- On the French AI application page, all citations must link to official French URLs
- If a user asks a question in English on a French page, the citation should still refer to a French URL
- If a user asks a question in French on an English page, the citation should still refer to an English URL
- Similarly, if a user asks a question in a different language (ie. Spanish) the citation should still refer to a URL in the language that the application was accessed in

### Terminology and style

In your system prompt, instruct the AI to use official Canadian French terminology and adhere to the style found on Canada.ca for French responses.

- [Canada.ca French style guide: <span lang="fr">Guide de rédaction du contenu du site Canada.ca</span>](https://conception.canada.ca/guide-redaction/)

### Translation and support

Visitors to Canada.ca often use their browser to translate the page into their language. Large Language Models (LLMs) are designed to answer in the language of the question. Your team should determine whether to accommodate questions and answers in languages beyond English and French, along with necessary control measures, such as logging translations of the questions and answers into official languages for evaluation and monitoring purposes.

## Citations {#citations}

Citations help users verify the answer and provide a link for the next step. All in-scope answers must include at least one authoritative citation link to the source material. Wherever possible, citations must point to a Government of Canada web page so that people can review the information source for themselves.

### Ensure the AI is citing the correct page

To illustrate how citation links should be used, consider the following scenarios:

- For the question "Where to find passport offices," the citation link provided should be a URL to the page "Find a passport service location in Canada."
- For the question "I need the passport form," the AI should not provide a direct link to a passport form because there are several forms. It isn't clear which form is needed. Instead, it should ask a clarifying question to understand the situation better. For example, it could ask, "Is this an adult passport?" or "Is this a first-time application?"

Once the situation is clarified, the AI can provide the appropriate link. For instance, it could direct the user to answer the questions on the "Who can renew a passport" page to be led to the correct form for their situation.

### Make citations highly visible

To ensure citations are highly visible, consider the following guidelines:

- Visually set citations apart from the answer so users can easily find them
- Place instructional text before citations that asks users to check their answer and take the next step
- Ensure citations are close enough to the answer to make it clear it is related to the answer

## Gender-Based Analysis Plus (GBA Plus) {#gba}

To ensure that your AI help application does not create any unintended consequences or negative outcomes for certain community groups, it is recommended that a Gender-Based Analysis Plus be conducted. Please contact your department/agency's GBA Plus Centre of Expertise, and refer to the GBA Plus website from Women and Gender Equality Canada to find more information on how to undergo a GBA Plus analysis.

- [Gender-based Analysis Plus (GBA Plus)](https://www.canada.ca/en/women-gender-equality/gender-based-analysis-plus.html)
- [Introduction to GBA Plus](https://women-gender-equality.canada.ca/gbaplus-course-cours-acsplus/eng/mod00/mod00_01_01.html)
- [GBA Plus Resource Centre (GCxhange link, only available on the Government of Canada network)](https://gcxgce.sharepoint.com/:u:/r/teams/10001323/SitePages/Home.aspx?csf=1&web=1&e=JEhGG8)

## Safeguards against harmful or biased outputs {#safeguards}

Ensure you test the application for unintended biases and other harmful outputs.

- Ensure that responses are generated only from trusted sources, such as Canada.ca, to minimize the risk of delivering biased or harmful information
- Implement a content redaction system to handle inputs containing inappropriate language, see the [Privacy and security section](privacy-security.html)
- The Digital Standards Playbook has more information on how to mitigate potential biases, see [Design ethical services](https://www.canada.ca/en/government/system/digital-government/government-canada-digital-standards/design-ethical-services.html)

## Handling online wizards {#wizards}

An online wizard is a step-by-step guide that helps users complete a task by breaking it into smaller, manageable steps. There are many heavily used Canada.ca wizards like "Find out if you need a visa." These wizards can be many layers deep with extensive logic and are kept up to date.

Your system prompt should direct the AI service to send users to any existing wizard pages rather than the AI trying to ask all the relevant questions. Since current AI models are reinforced to answer questions, rather than to ask questions, providing these answers should be left to the wizard.

Eventually it may be possible to feed the wizard logic to the AI service so that it can handle the questions and answers.

## Answer length {#length}

Answers should be concise, simple and clear. This makes it easier for users to understand the answer and it also reinforces the need to use the citation link to take the next steps.

In the system prompt, encourage the AI to not include more information than is needed. Shorter answers also help prevent the AI from hallucinating.

Some individuals may need more detailed explanations to fully grasp a topic. If a user requests more information, longer answers can be provided to ensure they receive the context they require. Even when providing more detail, ensure a citation link is provided for additional information and so the user can verify the information given.

## Chat IDs for reference {#chat-ids}

All conversations should have a visible identifier that's documented in the system. This allows for easy reference if necessary.

## Things to avoid {#avoid}

When designing your AI help application, avoid language related to live chat, including:

- **using the word "Chat"**, research suggests that "chat" is associated with human agents
- **using the word "Now,"** as it implies that a live agent is standing by
