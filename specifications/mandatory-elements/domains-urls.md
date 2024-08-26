---
altLangPage: https://conception.canada.ca/specifications/elements-obligatoires/domaines-url.html
date: null
dateModified: '2024-08-23'
description: null
title: Government of Canada domains and URLs
section-title: "Canada.ca design"
breadcrumbs: [
            {
            "link": "https://design.canada.ca/",
            "title": "Canada.ca design"
          },
           {
            "link": "https://design.canada.ca/specifications.html",
            "title": "Specifications"
          },
           {
            "link": "https://design.canada.ca/specifcations/mandatory-elements.html",
            "title": "Mandatory elements"
          }
        ]
---
<section>
<h2>On this page</h2>
    <ul>
        <li><a href="#du1">Canada.ca domain</a>
            <ul>
                <li><a href="#du1a">What to avoid</a></li>
                <li><a href="#du1b">Sub-domains</a></li>
            </ul>
        </li>
        <li><a href="#du2">Providing equal treatment to both official languages</a></li>
        <!-- <li><a href="#du3">Domain requirements</a></li> -->
        <li><a href="#du3">URL model</a>
            <ul>
                <li><a href="#du3a">How to write URLs</a></li>
                <li><a href="#du3b">Vanity URLs</a></li>
            </ul>
        </li>
    </ul>
</section>
<section id="du1">
<h2>Canada.ca domain</h2>
<p>Every website has a primary domain that represents a website’s main purpose. The Canada.ca domain is the primary domain for the Government of Canada's public-facing web presence.</p>
<p>All public-facing Government of Canada websites must use the Canada.ca domain, with one exception. Websites specifically intended for current or former Government of Canada employees may use the .gc.ca domain. To ensure consistency and enhance trust, all other public-facing sites, including those requiring a login, must use the Canada.ca domain.</p>
<p>Two approaches can be used:</p>
<ul>
    <li>with no subdomain, such as <a href="https://canada.ca/en/services/jobs.html">https://canada.ca/en/services/jobs.html</a></li>
    <li>with a subdomain, such as <a href="https://agriculture.canada.ca/en/science">https://agriculture.canada.ca/en/science</a></li>
</ul>
<p>All domains and sub-domains must be approved for use by Service Canada and resolve without the "www." prefix.</p>
<h3 id="du1a">What to avoid</h3>
<p>Do not use the Canada.ca domain for collaborative sites where the Government of Canada is not the main partner. This includes websites jointly delivered with non-GC partners, such as other levels of government or non-government organizations, etc. for which the GC is not the lead organization.</p> 
<h3 id="du1b">Sub-domains</h3>
<p>A sub-domain is a subdivision of the primary domain. It allows for the organization of distinct sections within the main website. For example, <b>design.canada.ca</b> is a sub-domain of canada.ca.</p>
<p>Only use subdomains for content or services hosted outside the Managed Web Service.</p>
<p>When choosing a subdomain:</p>
<ul>
    <li>a maximum of 2 keywords is recommended</li>
    <li>related sub-sites and digital services must be grouped under the same sub-domain, where possible</li>
    <li>follow the guidance in the <a href="#du3a">How to write URLs section</a>
        <ul>
        <li><b>Examples</b>:
          <ul>
            <li>accessible.canada.ca</li>
            <li>inspection.canada.ca</li>
          </ul>
        </li>
        </ul>
    </li>
</ul>
<p><b>Note</b>: Sub-domain requests are reviewed by Service Canada. Your web account manager can submit new Canada.ca sub-domains and change requests to the Principal Publisher using the <a href="http://requestform.portal.gc.ca/tickets.html">Request form for Canada.ca (internal to government)</a>.</p>
</section>
<section id="du2">
<h2>Providing equal treatment to both official languages</h2>
<p>Government of Canada websites and web applications must provide equal treatment to both official languages.</p>
<p>You can meet official language requirements for domains and sub-domains by implementing at least one of the following options.</p>
<h3>Equivalent unilingual names</h3>
<p>You can implement equivalent unilingual names for each official language. For example, <b>youth.canada.ca</b> for English and <b>jeunesse.canada.ca</b> for French.</p>
<p>Unilingual domain names must resolve to the home page of the website in that language. For example, <a href="http://health.canada.ca">health.canada.ca</a> resolves to the English home page, and <a href="http://sante.canada.ca">sante.canada.ca</a> resolves to the French home page.</p>
<h3>Bilingual monomial names</h3>
<p>You can use bilingual monomial names (understood in both languages) or compound terms that accurately represent the website’s primary purpose in both official languages. For example, <a href="http://www.agriculture.canada.ca">agriculture.canada.ca</a> or <a href="http://www.tc.canada.ca">tc.canada.ca</a>.</p>
<p>Bilingual names resolve to the splash page of the website <b>except where the language preference is known</b>, where they instead resolve to the home page in the corresponding language. For example <a href="https://international.canada.ca/">international.canada.ca</a> will resolve to a splash page unless the language preference is known.</p>
</section>
<section id="du3">
<h2>URL model</h2>
<p>Each web page has a primary URL, displayed in the browser’s address bar. All other URLs referring to the web page resolve to the primary URL. This applies to URL aliases, vanity URLs, redirected URLs or any other non-primary URL.</p>
<h3 id="du3a">How to write URLs</h3>
<p>This applies to all URLs, including vanity URLs and sub-domains:</p>
<ul>
    <li>use plain language keywords</li>
    <li>separate keywords within the same path segments by hyphens</li>
    <li>avoid superfluous words such as “to”, “the”, “a”, “an”, “by”, “for” (for example, use “/apply-student-loan” instead of “/how-to-apply-for-a-canadian-student-loan”)</li>
    <li>use lowercase</li>
    <li>use unilingual keywords, in the language of the page</li>
    <li>use only US-ASCII (7-bit version of ASCII) characters (for example, use “meteo” instead of “météo”)</li>
    <li>avoid duplicate keywords and apostrophes</li>
    <li>avoid acronyms and abbreviations, unless they are better understood than the full version or perform better on search engines</li>
</ul>
<h3 id="du3b">Vanity URLs</h3>
<p>A vanity URL is a short, easy-to-understand, URL that redirects to a page with a longer URL.</p>
<p>When writing URLs for communication products (publications, brochures, etc.) or advertising campaigns (television, radio, print, etc.) you can use either the primary URL or a vanity URL. For example, the <b>canada.ca/pension-benefits</b> vanity URL redirects users to <a href="https://www.canada.ca/en/treasury-board-secretariat/topics/pension-benefits.html">https://www.canada.ca/en/treasury-board-secretariat/topics/pension-benefits.html</a></p>
<p>Vanity URLs must:</p>
    <ul>
        <li>be easy to type and to communicate</li>
        <li>only include 1 path segment (only a single slash) </li>
        <li>hide the file extension for HTML-based pages (for example, “canada.ca/passport”, “canada.ca/weather”)</li>
        <li>comply with the guidance in the <a href="#du3a">How to write URLs section</a></li>
    </ul>
<p>If the URL will be spoken out loud (for example, in radio and television advertisements), you can also have another vanity URL without hyphens. This will make it easier to read out loud.</p>
<p>Example – Television advertisement:</p>
    <ul>
        <li>vanity URL for print: canada.ca/employment-insurance-maternity</li>
        <li>vanity URL for television or radio: canada.ca/employmentinsurancematernity (spoken “canada dot c a slash employment insurance maternity”)</li>
    </ul>
<p><b>Note</b>: Your account manager can submit new vanity URLs and change requests to the Principal Publisher using the <a href="http://requestform.portal.gc.ca/tickets.html">Request form for Canada.ca (internal to government)</a>.</p>
<p>To find more information on vanity URLs visit:</p>
    <ul>
        <li><a href="https://www.gcpedia.gc.ca/wiki/Canada.ca_Vanity_URLs">Canada.ca Vanity URLs — GCpedia (internal to government)</a></li>
    </ul>
</section>
