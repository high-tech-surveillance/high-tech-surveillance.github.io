function showQuotationForm() {
  document.getElementById("form-wrapper").classList.toggle("hidden");
  document.getElementById("request-quote-invite").classList.toggle("hidden");
}

function formToText(form) {
  let text = "";
  const labels = form.getElementsByTagName("label");
  for (let labelItem of labels) {
    let labelName = labelItem.innerText;
    let userInput = labelItem.nextSibling.value;

    text += `${labelName}: ${userInput}\n`;
  }

  return text;
}

function processEmail() {
  sendEmail();
  hiddeForm();
}

function hiddeForm() {
  let showRequestQuoteFormCheckbox = document.getElementById(
    "show-request-quote-form"
  );
  showRequestQuoteFormCheckbox.checked = false;
}

function sendEmail(subject = document.getElementById("subject")) {
  let subjectElement;
  let body;

  subjectElement = document.getElementById("subject");
  body = document.getElementById("body");

  function setupField(field, name) {
    if (!field) {
      field = document.createElement("input");
      field.setAttribute("type", "hidden");
      field.setAttribute("name", name);
      document.getElementsByTagName("form")[0].appendChild(field);
    }

    return field;
  }

  subjectElement = setupField(subjectElement, "subject");
  subjectElement.setAttribute("value", subject || "New message from website");
  body = setupField(body, "body");
  body.setAttribute(
    "value",
    formToText(document.getElementsByTagName("form")[0])
  );
}

window.showQuotationForm = showQuotationForm;
window.processEmail = processEmail;
