---
altLangPage: https://conception.canada.ca
date: 2021-05-03
dateModified: 2024-09-08
description: "The Canada.ca design holds the reusable styles, templates and patterns that make Government of Canada digital services more usable, consistent and trustworthy."
information:
  - title: Canada.ca Specifications
    link: /specifications.html
    description: Who has to use the Canada.ca design, mandatory elements, design principles, information architecture and findability, templates and patterns
  - title: Continuous improvement of web content
    link: /continuous-improvement.html
    description: Choosing what to improve, organizing and preparing your team, research and prototyping, designing content, monitoring and measuring success
  - title: Canada.ca blog
    link: "https://www.blog.canada.ca"
    description: Evidence and insights on improving information and services on Canada.ca
  - title: Research summaries
    link: /research-summaries/
    description: Research done to make it easier for people to find and understand Government of Canada information and services
  - title: About Canada.ca
    link: /about/
    description: Most requested, analytics for Canada.ca, Government of Canada contacts
  - title: Canada.ca design guidance
    link: /guidance/index.html
    description: Use this guidance to create and manage web content
layout: "without-h1"
title: "Canada.ca design"
---
<h1 property="name" id="wb-cont" property="name headline" dir="ltr">Designing for Canada.ca </h1>
<p>Mandatory elements for Canada.ca, writing principles, how to organize your content to make it easy to find, optimizing web content, evidence for and research on design choices.</p>

<section class="gc-srvinfo">
  <h2 class="wb-inv">Services and information</h2>
  <div class="row wb-eqht-grd">
    {%- for info in page.information -%}
    <div class="col-lg-4 col-md-6">
      {% if info.link contains 'http' %}
        <h3><a href="{{ info.link }}">{{ info.title }}</a></h3>
      {% else %}
        <h3><a href="{{ site.url }}{{ info.link }}">{{ info.title }}</a></h3>
      {% endif %}
      <p>{{ info.description }}</p>
    </div>
    {%- endfor -%}
  </div>
</section>
  <h2>Find guidance</h2>
  <div class="row mrgn-tp-md">
    <div class="col-md-3 small">
      <details open>
        <summary class="bg-primary text-center">Sources</summary>
        <form class="wb-tables-filter mrgn-lft-md mrgn-rght-md" data-bind-to="design" data-gc-analytics-formname="ESDC|EDSC:Find guidance filter" data-gc-analytics-collect='[{"value":"input[type=checkbox]","emptyField": "n/a"}]'>
          <div class="row">
            <div class="form-group">
              <fieldset>
                <legend class="wb-inv"><span class="field-name">Sources</span></legend>
                <ul class="list-unstyled">
                  <li class="checkbox">
                    <label for="dt_source1">
                      <input type="checkbox" id="dt_source1" name="dt_source" data-column="1" value="Blog post">
                      Blog post</label>
                  </li>
                  <li class="checkbox">
                    <label for="dt_source2">
                      <input type="checkbox" id="dt_source2" name="dt_source" data-column="1" value="Content Style Guide">
                      Content Style Guide</label>
                  </li>
                  <li class="checkbox">
                    <label for="dt_source3">
                      <input type="checkbox" id="dt_source3" name="dt_source" data-column="1" value="Canada.ca Specifications">
                      Canada.ca Specifications</label>
                  </li>
                  <li class="checkbox">
                    <label for="dt_source4">
                      <input type="checkbox" id="dt_source4" name="dt_source" data-column="1" value="Designing content">
                      Designing content</label>
                  </li>
                  <li class="checkbox">
                    <label for="dt_source5">
                      <input type="checkbox" id="dt_source5" name="dt_source" data-column="1" value="Research summary">
                      Research summary</label>
                  </li>
                  <li class="checkbox">
                    <label for="dt_source6">
                      <input type="checkbox" id="dt_source6" name="dt_source" data-column="1" value="Template and pattern library">
                      Template and pattern library</label>
                  </li>
                </ul>
              </fieldset>
            </div>
            <div class="col-md-12">
              <button type="submit" class="btn btn-primary full-width" aria-controls="dataset-filter"><span class="fas fa-filter mrgn-rght-sm"></span> Filter</button>
            </div>
            <div class="col-md-12 mrgn-tp-md">
              <button type="reset" class="btn btn-default full-width">Reset to defaults</button>
            </div>
          </div>
        </form>
      </details>
    </div>
    <div class="col-md-9">
      <div class="panel panel-default">
        <div class="mrgn-tp-md mrgn-bttm-md">
          <table class="wb-tables table table-striped small mrgn-tp-lg brdr-tp" aria-live="polite" id="design" data-page-length="25" data-wb-tables="{
            &quot;bDeferRender&quot;: true,
            &quot;ajaxSource&quot;: &quot;./ajax/patterns-01-en.json&quot;,
            &quot;order&quot;: [0, &quot;asc&quot;],
            &quot;paging&quot;: true,
            &quot;info&quot;: true,
            &quot;columns&quot;: [
            { &quot;data&quot;: &quot;NAME&quot;, &quot;className&quot;: &quot;&quot; },
            { &quot;data&quot;: &quot;SOURCE&quot;, &quot;className&quot;: &quot;&quot; },
            { &quot;data&quot;: &quot;DESCRIPTION&quot;, &quot;className&quot;: &quot;&quot;, &quot;orderable&quot;: false },
            { &quot;data&quot;: &quot;WHENTOUSE&quot;,  &quot;visible&quot;: false },
            { &quot;data&quot;: &quot;CATEGORY&quot;,  &quot;visible&quot;: false },
            { &quot;data&quot;: &quot;TYPE&quot;,  &quot;visible&quot;: false },
            { &quot;data&quot;: &quot;MANDATORY&quot;,  &quot;visible&quot;: false },
            { &quot;data&quot;: &quot;TANDP&quot;,  &quot;visible&quot;: false }
            ]
            }">
            <thead>
              <tr>
                <th class="col-md-05">Name</th>
                <th class="col-md-02">Source</th>
                <th class="col-md-05">Description</th>
                <th>When to use this pattern</th>
                <th>Category</th>
                <th>Type</th>
                <th>Mandatory</th>
                <th>Tempalates and patterns</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  </div>
</section>
