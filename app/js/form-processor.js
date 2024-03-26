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

function assambleEmail() {
  let subject;
  let body;

  subject = document.getElementById("subject");
  body = document.getElementById("body");

  function setupField(field, name) {
    if (!field) {
      field = document.createElement("input");
      field.setAttribute("type", "hidden");
      field.setAttribute("name", name);
      document.getElementById("quote-request").appendChild(field);
    }

    return field;
  }

  subject = setupField(subject, "subject");
  subject.setAttribute("value", "Quotation request");
  body = setupField(body, "body");
  body.setAttribute(
    "value",
    formToText(document.getElementById("quote-request"))
  );
}

window.showQuotationForm = showQuotationForm;
window.assambleEmail = assambleEmail;
