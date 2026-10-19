document.addEventListener("click", function(e) {
  const btn = e.target.closest(".copy-btn");

  if (!btn) {
    resetCopiedButtons();
    return;
  }

  const targetId = btn.dataset.copyTarget;
  const target = document.getElementById(targetId);
  if (!target) return;

  if (!btn.dataset.originalLabel) {
    btn.dataset.originalLabel = btn.textContent.trim();
  }

  const status = btn.parentElement.querySelector(".copy-status");

  navigator.clipboard.writeText(target.textContent).then(() => {
    resetCopiedButtons(btn);
    btn.classList.remove("btn-primary");
    btn.classList.add("btn-success", "copied");
    btn.innerHTML = '<i class="fas fa-check" aria-hidden="true"></i> Copied!';
    target.classList.add("copied");
    if (status) status.textContent = "Prompt copied to clipboard.";
  }).catch(() => {
    if (status) status.textContent = "Unable to copy prompt. Please copy it manually.";
  });
});

function resetCopiedButtons(except) {
  document.querySelectorAll(".copy-btn.copied").forEach((btn) => {
    if (btn === except) return;

    btn.classList.remove("btn-success", "copied");
    btn.classList.add("btn-primary");
    btn.textContent = btn.dataset.originalLabel || "Copy prompt";

    const target = document.getElementById(btn.dataset.copyTarget);
    if (target) target.classList.remove("copied");

    const status = btn.parentElement.querySelector(".copy-status");
    if (status) status.textContent = "";
  });
}
