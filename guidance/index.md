---
altLangPage: https://conception.canada.ca/directives/
breadcrumb:
  - link: "https://design.canada.ca/about/"
    title: "About Canada.ca"
  - link: "https://design.canada.ca/"
    title: "Design"
date: 2025-08-29
dateModified: 2025-08-29
description: Use this guidance to create and manage Government of Canada web content
information:
  - title: Closed programs or services
    link: /guidance/closed-programs.html
    description: Update content when a program or service closes
  - title: Advertising or marketing campaigns
    link: /guidance/campaigns.html
    description: Determine the best approach for advertising or marketing content
  - title: Alerts for urgent and evolving situations
    link: /crisis/alerts.html
    description: Communicate service disruptions or urgent and evolving situations
  - title: Canada.ca Content Style Guide
    link: /style-guide/
    description: Writing principles and techniques to make content clear, easy to find and simple to understand
  - title: Designing content on Canada.ca
    link: /specifications/design-content.html
    description: Use evidence to design people-first and task-centred experiences
  - title: Continuous improvement of web content
    link: /continuous-improvement.html
    description: Identify areas to improve, research and prototype, design content, measure results
  - title: Information architecture (IA) and findability
    link: /specifications/information-findability.html
    description: Organize content, add structured data, and write effective metadata
  - title: Crisis communications content design checklist
    link: /crisis/crisis-communications-checklist.html
    description: Mobile-first, avoid duplication, add dates, write information as directions, use bulleted lists, keep sentences short
  - title: Templates and patterns
    link: /pattern-library.html
    description: User-tested templates, page layouts, design patterns, guidelines, and code samples
title: Canada.ca design guidance
---

Use this guidance to create and manage web content.

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
