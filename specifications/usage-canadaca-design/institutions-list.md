---
altLangPage: "https://conception.canada.ca/specifications/utilisation-concept-canadaca/liste-des-institutions.html"
breadcrumbs:
  -  title: "About Canada.ca"
     link: "https://www.canada.ca/en/government/about-canada-ca.html"
  -  title: "Design"
     link: "https://design.canada.ca/"
  -  title: "Specifications"
     link: "https://design.canada.ca/specifications.html"
  -  title: "Usage of the Canada.ca design"
     link: "https://design.canada.ca/specifications/usage-canadaca-design.html"
date: 2020-01-16
dateModified: 2026-06-22
description: "List of Government of Canada institutions subject to the Canada.ca design system."
title: Institutions list for Canada.ca
---
Institutions subject to "Appendix D: Mandatory Procedures for Social Media and Web Communications" of the [Directive on the Management of Communications](https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=30682) must apply the requirements of the [Canada.ca Content and Information Architecture Specification](https://www.canada.ca/en/treasury-board-secretariat/services/government-communications/canada-content-information-architecture-specification.html).

These organizations must apply Canada.ca design requirements for all their public-facing websites or digital services, regardless of the technology, domain name (both canada.ca and gc.ca) or publishing platform through which these are delivered.

<table class="wb-tables table table-striped table-hover small" data-wb-tables="{ &quot;paging&quot; : false }">
  <caption>List of Government of Canada institutions subject to the Canada.ca design system</caption>
  <thead>
    <tr class="active">
      <th scope="col">Display name</th>
      <th scope="col"><span lang="fr">Titre à afficher</span></th>
      <th scope="col">Category</th>
      <th scope="col">Acronym</th>
      <th scope="col"><span lang="fr">Acronyme</span></th>
      <th scope="col">Landing page template</th>
      <th scope="col">Parent institution</th>
    </tr>
  </thead>
  <tbody>
    {% assign institutions = site.data.institutions | sort: "display_name_en" %}
    {% for institution in institutions %}
    {% assign template_url = '' %}
    {% assign parent_match = nil %}

      {% if institution.parent_institution and institution.parent_institution != '' %}
        {% assign parent_match = institutions | where: "acronym_en", institution.parent_institution | first %}
        {% if parent_match == nil %}
          {% assign parent_match = institutions | where: "acronym_fr", institution.parent_institution | first %}
        {% endif %}
      {% endif %}

      {% case institution.landing_page_template %}
        {% when 'Institutional landing page' %}
          {% assign template_url = '/mandatory-templates/institutional-profile-pages.html' %}
        {% when 'Partnering/Collaborative Arrangement Profile' %}
          {% assign template_url = '/recommended-templates/partnering-collaborative-arrangement-profile-pages.html' %}
        {% endcase %}
      {% if institution.status != "hidden" %}
      <tr>
        <td>{{ institution.display_name_en }}</td>
        <td>{{ institution.display_name_fr }}</td>
        <td>{{ institution.category }}</td>
        <td>
        {% unless institution.acronym_en == blank %}
          <abbr title="{{ institution.display_name_en }}">{{ institution.acronym_en }}</abbr>
        {% else %}
          &nbsp;
        {% endunless %}
        </td>
        <td>
        {% unless institution.acronym_fr == blank %}
          <abbr title="{{ institution.display_name_fr }}">{{ institution.acronym_fr }}</abbr>
        {% else %}
          &nbsp;
        {% endunless %}
        </td>
        <td>
        {% if template_url != '' %}
          <a href="{{ template_url }}">
            {{ institution.landing_page_template }}
          </a>
        {% else %}
          {{ institution.landing_page_template }}
        {% endif %}
        </td>
        <td>
        {% if institution.parent_institution and institution.parent_institution != '' and parent_match != nil %}
          <acronym title="{{ parent_match.display_name_en }}">{{ institution.parent_institution }}</acronym>
        {% else %}
          {{ institution.parent_institution }}
        {% endif %}
        </td>
      </tr>
      {% endif %}
    {% endfor %}
  </tbody>
</table>
