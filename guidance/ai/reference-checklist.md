---
altLangPage: https://conception.canada.ca/directives/ia/XX.html
breadcrumbs:
  - link: "https://www.canada.ca/en/government/about-canada-ca.html"
    title: "About Canada.ca"
  - link: "https://design.canada.ca"
    title: "Design"
  - link: "https://design.canada.ca/guidance/index.html"
    title: "Guidance"
  - link: "https://design.canada.ca/guidance/ai/index.html"
    title: "AI applications"
date: 2025-12-23
dateModified: 2025-12-23
description: Use this checklist as a quick reference for all the things you must consider when creating an AI help application.
title: Reference checklist
---

<p>Use this checklist as a quick reference for all the things you must consider when creating an AI help application.</p>

<fieldset class="gc-chckbxrdio">
  <legend>AI help application requirements</legend>
  <ul class="list-unstyled lst-spcd-2">
    <li class="checkbox">
      <input type="checkbox" id="check1" class="checklist-item">
      <label for="check1">Follow central guidance</label>
    </li>
    <li class="checkbox">
      <input type="checkbox" id="check2" class="checklist-item">
      <label for="check2">Do not use a human name</label>
    </li>
    <li class="checkbox">
      <input type="checkbox" id="check3" class="checklist-item">
      <label for="check3">Do not use "chat" or "chatbot" in the name</label>
    </li>
    <li class="checkbox">
      <input type="checkbox" id="check4" class="checklist-item">
      <label for="check4">Make sure the application opens in a new window</label>
    </li>
    <li class="checkbox">
      <input type="checkbox" id="check5" class="checklist-item">
      <label for="check5">Use a link or mobile-first bottom overlay to initiate chat</label>
    </li>
    <li class="checkbox">
      <input type="checkbox" id="check6" class="checklist-item">
      <label for="check6">Remember the Canada.ca vision, where visitors do not know which department handles which task</label>
    </li>
    <li class="checkbox">
      <input type="checkbox" id="check7" class="checklist-item">
      <label for="check7">Clearly state the topic in the invitation button if your AI application is limited to a specific topic</label>
    </li>
    <li class="checkbox">
      <input type="checkbox" id="check8" class="checklist-item">
      <label for="check8">Clearly label AI help applications as AI</label>
    </li>
    <li class="checkbox">
      <input type="checkbox" id="check9" class="checklist-item">
      <label for="check9">Include a notice with additional information and links about the application and privacy</label>
    </li>
    <li class="checkbox">
      <input type="checkbox" id="check10" class="checklist-item">
      <label for="check10">Provide citation links for answers and make them highly visible</label>
    </li>
    <li class="checkbox">
      <input type="checkbox" id="check11" class="checklist-item">
      <label for="check11">Ensure you meet accessibility and official languages requirements</label>
    </li>
    <li class="checkbox">
      <input type="checkbox" id="check12" class="checklist-item">
      <label for="check12">Test your application for accuracy and share results with your communications team</label>
    </li>
    <li class="checkbox">
      <input type="checkbox" id="check13" class="checklist-item">
      <label for="check13">Conduct a Gender-based Analysis Plus</label>
    </li>
    <li class="checkbox">
      <input type="checkbox" id="check14" class="checklist-item">
      <label for="check14">Safeguard against harmful or biased outputs</label>
    </li>
    <li class="checkbox">
      <input type="checkbox" id="check15" class="checklist-item">
      <label for="check15">Keep answers concise, simple and clear</label>
    </li>
    <li class="checkbox">
      <input type="checkbox" id="check16" class="checklist-item">
      <label for="check16">Include chat IDs for reference</label>
    </li>
    <li class="checkbox">
      <input type="checkbox" id="check17" class="checklist-item">
      <label for="check17">Avoid using the word "chat" or "now"</label>
    </li>
    <li class="checkbox">
      <input type="checkbox" id="check18" class="checklist-item">
      <label for="check18">Engage with your Privacy team early</label>
    </li>
    <li class="checkbox">
      <input type="checkbox" id="check19" class="checklist-item">
      <label for="check19">Minimize personal information collection</label>
    </li>
    <li class="checkbox">
      <input type="checkbox" id="check20" class="checklist-item">
      <label for="check20">Redact personal information</label>
    </li>
    <li class="checkbox">
      <input type="checkbox" id="check21" class="checklist-item">
      <label for="check21">Redact threats, profanity and AI manipulation</label>
    </li>
    <li class="checkbox">
      <input type="checkbox" id="check22" class="checklist-item">
      <label for="check22">Ensure your organization has a process in place to deal with threatening messages</label>
    </li>
    <li class="checkbox">
      <input type="checkbox" id="check23" class="checklist-item">
      <label for="check23">Set a retention and deletion schedule</label>
    </li>
    <li class="checkbox">
      <input type="checkbox" id="check24" class="checklist-item">
      <label for="check24">Implement audit logs and monitor for, and notify developers or providers of, inappropriate uses or biased outcomes</label>
    </li>
    <li class="checkbox">
      <input type="checkbox" id="check25" class="checklist-item">
      <label for="check25">Prevent jailbreaking and manipulation</label>
    </li>
    <li class="checkbox">
      <input type="checkbox" id="check26" class="checklist-item">
      <label for="check26">Ensure compliance with Enterprise Cyber Security</label>
    </li>
    <li class="checkbox">
      <input type="checkbox" id="check27" class="checklist-item">
      <label for="check27">Monitor and iterate</label>
    </li>
  </ul>
</fieldset>

<div id="completion-message" class="alert alert-success hidden mrgn-tp-lg" role="status" aria-live="polite">
  <p>You've reviewed all requirements.</p>
</div>

<script>
(function() {
  // Get all checklist items
  const checkboxes = document.querySelectorAll('.checklist-item');
  const completionMessage = document.getElementById('completion-message');
  
  // Function to check if all items are checked
  function checkCompletion() {
    const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
    
    if (allChecked) {
      completionMessage.classList.remove('hidden');
    } else {
      completionMessage.classList.add('hidden');
    }
  }
  
  // Add event listeners to all checkboxes
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', checkCompletion);
  });
})();
</script>