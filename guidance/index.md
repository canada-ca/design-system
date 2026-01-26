---
altLangPage: https://conception.canada.ca/directives/
breadcrumbs:
  - link: "https://design.canada.ca/about/"
    title: "About Canada.ca"
  - link: "https://design.canada.ca"
    title: "Design"
date: 2025-08-29
dateModified: 2026-01-26
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
  - title: Crisis communications content design checklist
    link: /crisis/content.html
    description: Mobile-first, avoid duplication, add dates, write information as directions, use bulleted lists, keep sentences short
  - title: Guidance for the design of AI help applications
    link: /guidance/ai/index.html
    description: Central guidance and AI research, design and content guidance, privacy and security, iterative design, reference checklist

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
