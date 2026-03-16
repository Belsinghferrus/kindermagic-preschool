  // ── IMPORTANT: Replace with your deployed Apps Script URL ──
  const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxZo-x9Lfm-_dlGEGdyzwcHgwGtpVkhG1Ht_d9iRgsAVXlZaWNDI1KEOYjN_fpBmueIMQ/exec";

  // ── Helpers ──────────────────────────────────────────────
  const $  = id => document.getElementById(id);
  const show = id => $(id).classList.remove("hidden");
  const hide = id => $(id).classList.add("hidden");

  // ── Clear errors on input ─────────────────────────────────
  ["parentName","phone","childName","childAge"].forEach(id => {
    $(id).addEventListener("input", () => {
      hide("err" + id.charAt(0).toUpperCase() + id.slice(1));
    });
  });

  // ── Program card visual toggle ────────────────────────────
  document.querySelectorAll(".program-radio").forEach(radio => {
    radio.addEventListener("change", () => hide("errProgram"));
  });

  // ── Dialog close buttons ──────────────────────────────────
  $("successCloseBtn").addEventListener("click", () => {
    hide("successDialog");
    $("enquiryForm").reset();
    document.querySelectorAll(".program-radio").forEach(r => r.checked = false);
  });
  $("errorCloseBtn").addEventListener("click", () => hide("errorDialog"));

  // ── Form Submit ───────────────────────────────────────────
  $("enquiryForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const parentName = $("parentName").value.trim();
    const phone      = $("phone").value.trim().replace(/\s+/g, "");
    const email      = $("email").value.trim();
    const childName  = $("childName").value.trim();
    const childAge   = $("childAge").value.trim();
    const message    = $("message").value.trim();
    const program    = document.querySelector('input[name="program"]:checked')?.value || "";

    // ── Validation ──
    let valid = true;

    if (!parentName) { show("errParentName"); valid = false; }
    if (!phone || !/^[6-9]\d{9}$/.test(phone)) { show("errPhone"); valid = false; }
    if (!childName)  { show("errChildName");  valid = false; }
    if (!childAge)   { show("errChildAge");   valid = false; }
    if (!program)    { show("errProgram");    valid = false; }

    if (!valid) return;

    // ── Show loading state ──
    show("loadingOverlay");
    $("submitBtn").disabled = true;
    $("submitText").textContent = "Submitting...";
    show("submitSpinner");

    try {
      await fetch(APPS_SCRIPT_URL, {
        method:  "POST",
        mode:    "no-cors",           // Required for Apps Script cross-origin
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ parentName, phone, email, childName, childAge, program, message })
      });

      // no-cors means we can't read the response — but data was sent successfully
      hide("loadingOverlay");

      // Populate success dialog
      $("confirmParent").textContent  = parentName;
      $("confirmChild").textContent   = childName;
      $("confirmProgram").textContent = program;
      $("confirmPhone").textContent   = phone;
      show("successDialog");

    } catch (err) {
      hide("loadingOverlay");
      show("errorDialog");
    } finally {
      $("submitBtn").disabled = false;
      $("submitText").textContent = "Submit Enquiry 🚀";
      hide("submitSpinner");
    }
  });