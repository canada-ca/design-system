--- 
altLangPage: "https://conception.canada.ca/bibliotheque-modeles.html"
date: 2021-05-03
dateModified: 2023-08-19
description: "A collection of the patterns and page layouts to be used for Government of Canada digital content."
title: "Template and pattern library for Canada.ca"
---
<p>These patterns and page layouts have been user-tested. They were designed to help you develop digital content focused on the task people are trying to accomplish.</p>
<a href="find-right-template-design-pattern-web-content.html" class="btn btn-default mrgn-bttm-md">Answer a few questions to find the right pattern</a>
<h2>All templates and patterns</h2>
<div class="row mrgn-tp-md">
  <div class="col-md-3 small">
    <details open>
      <summary class="bg-primary text-center">Filter options</summary>
      <form class="wb-tables-filter mrgn-lft-md mrgn-rght-md" data-bind-to="design">
        <div class="row mrgn-tp-lg mrgn-bttm-lg">
          <div class="form-group">
            <label for="dt_cat">Pattern, template or style</label>
            <select class="form-control maxwidth" id="dt_cat" name="dt_cat" data-column="4">
              <option value="">All</option>
              <option value="Design pattern">Design patterns</option>
              <option value="Template">Template</option>
              <option value="Style">Style</option>
            </select>
          </div>
          <div class="form-group">
            <label for="dt_type">Types</label>
            <select class="form-control maxwidth" id="dt_type" name="dt_type" data-column="5">
              <option value="">All</option>
              <option value="Destination">Destination</option>
              <option value="Government-wide template">Government-wide</option>
              <option value="Institutional">Institutional</option>
              <option value="Interaction">Interaction</option>
              <option value="Navigation">Navigation</option>
              <option value="Promotion">Promotional</option>
              <option value="Site">Site-wide</option>
              <option value="Theme template">Theme and topic</option>
              <option value="Visual">Visual</option>
            </select>
          </div>
          <div class="form-group">
            <label for="dt_mand">Mandatory or suggested</label>
            <select class="form-control maxwidth" id="dt_mand" name="dt_mand" data-column="6">
              <option value="">All</option>
              <option value="Mandatory">Mandatory</option>
              <option value="No">Suggested</option>
            </select>
          </div>
          <div class="col-md-12 mrgn-tp-lg">
            <button type="submit" class="btn btn-primary full-width" aria-controls="dataset-filter"><span class="fas fa-filter mrgn-rght-sm"></span> Filter</button>
          </div>
          <div class="col-md-12 mrgn-tp-md"><a href="pattern-library.html" class="btn btn-default full-width">Reset to defaults</a> </div>
        </div>
      </form>
    </details>
  </div>
  <div class="col-md-9">
    <div class="panel panel-default">
      <div class="mrgn-tp-md mrgn-bttm-md">
        <table class="wb-tables table table-striped small" aria-live="polite" id="design" data-page-length="100" data-wb-tables="{
            &quot;bDeferRender&quot;: true,
            &quot;ajaxSource&quot;: &quot;./ajax/patterns-01-en.json&quot;,
            &quot;order&quot;: [0, &quot;asc&quot;],
            &quot;paging&quot;: false,
            &quot;info&quot;: false,
            &quot;columns&quot;: [
            { &quot;data&quot;: &quot;NAME&quot;, &quot;className&quot;: &quot;&quot; },
            { &quot;data&quot;: &quot;SOURCE&quot;,  &quot;visible&quot;: false },
            { &quot;data&quot;: &quot;DESCRIPTION&quot;,  &quot;visible&quot;: false },
            { &quot;data&quot;: &quot;WHENTOUSE&quot;, &quot;className&quot;: &quot;&quot;, &quot;orderable&quot;: false },
            { &quot;data&quot;: &quot;CATEGORY&quot;, &quot;className&quot;: &quot;&quot; },
            { &quot;data&quot;: &quot;TYPE&quot;, &quot;className&quot;: &quot;&quot; },
            { &quot;data&quot;: &quot;MANDATORY&quot;,  &quot;visible&quot;: false },
            { &quot;data&quot;: &quot;TANDP&quot;,  &quot;visible&quot;: false, &quot;Search&quot;: &quot;1&quot; }
            ], 
            &quot;searchCols&quot;: [
            null,
            null,
            null,
            null,
            null,
            null, 
            null,
            { &quot;sSearch&quot;: &quot;1&quot; }]
            }">
          <thead>
            <tr>
              <th class="col-md-03">Name</th>
              <th>Source</th>
              <th>Description</th>
              <th class="col-md-05">When to use this pattern</th>
              <th class="col-md-02">Category</th>
              <th class="col-md-02">Type</th>
              <th>Mandatory</th>
              <th>Tempalates and patterns</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  </div>
</div>
