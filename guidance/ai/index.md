---
altLangPage: https://conception.canada.ca/directives/ia/index.html
breadcrumbs:
  - link: "https://www.canada.ca/en/government/about-canada-ca.html"
    title: "About Canada.ca"
  - link: "https://design.canada.ca"
    title: "Design"
  - link: "https://design.canada.ca/guidance/index.html"
    title: "Guidance"
date: 2026-02-12
dateModified: 2026-02-12
description: Central guidance and AI research, design and content guidance, privacy and security, iterative design, reference checklist
information:
  - title: Central guidance and AI research
    link: /guidance/ai/central-guidance-research.html
    description: Vision of AI help applications, Guide on the use of generative AI, key contacts
  - title: Design guidance
    link: /guidance/ai/design-guidance.html
    description: Naming your AI application, design specifications
  - title: Content guidance
    link: /guidance/ai/content-guidance.html
    description: Notices, transparency and accountability, citation links, accessibility, language, answer length
  - title: Privacy and security
    link: /guidance/ai/privacy-security.html
    description: Keeping inputs safe, respectful and secure, redaction techniques, threats, retention and deletion, jailbreaking, compliance with Enterprise Cyber Security
  - title: Iterative design
    link: /guidance/ai/iterative-design.html
    description: Design phases, user testing, launch phases, feedback loop, feedback mechanisms
  - title: Reference checklist
    link: /guidance/ai/reference-checklist.html
    description: A quick reference for all the things you must consider when creating an AI help application
title: Guidance for the design of AI help applications on Canada.ca
---

AI offers promising opportunities to enhance public service delivery on Canada.ca. Users expect consistency and transparency in their interactions, and this guidance seeks to create a unified voice for Government of Canada AI help applications. It aims to help government teams develop effective generative AI solutions aligned with user expectations of consistency, transparency and trustworthiness.

Thousands visit Canada.ca daily, but feedback indicates that some struggle to find the information they need or have specific questions about interpreting content. The goal of AI help applications on Canada.ca is to assist users with questions about those services.

In most cases, teams should be able to meet their users’ needs by using AI Answers. This service helps people get answers from information already published on Canada.ca and other Government of Canada websites and is expected to launch in FY 2026-27. However, in some cases, specific topics may still require a separate AI help application. As you build public-facing AI help applications, use this guidance. It will evolve as we test and refine applications with various departments. Be sure to also follow the central guidance, including the Digital Standards Playbook and the Guide on the Use of Generative AI.

<section class="gc-srvinfo">
	<h2 class="wb-inv">Services and information</h2>
	<div class="row wb-eqht-grd">
		{%- for info in page.information -%}
		<div class="col-lg-4 col-md-6">
			<h3><a href="{{ site.url }}{{ info.link }}">{{ info.title }}</a></h3>
      <p>{{ info.description }}</p>
		</div>
		{%- endfor -%}
	</div>
</section>
