var demoContainer = document.querySelector(".demo-container");
var modalControl = document.querySelector(".modal-control");
var outputParagraph = document.querySelector(".quote");
var btn = document.querySelector(".checkBtn");
var backdrop;
var modal;
var quote = "A modal component on a webpage - how hard could it be ?";
var editedQuote = "";
function updateParagraph() {
  outputParagraph.textContent = quote;
}
updateParagraph();
function closeModal() {
  if (backdrop) {
    backdrop.remove();
  }
  if (modal) {
    modal.remove();
  }
}

btn.addEventListener("click", () => {
  backdrop = document.createElement("div");
  backdrop.classList.add("backdrop");
  backdrop.addEventListener("click", closeModal);
  document.body.insertBefore(backdrop, demoContainer);
  backdrop.addEventListener("click", closeModal);
  modal = document.createElement("div");
  modal.classList.add("modal");
  var modalHeading = document.createElement("h1");
  modalHeading.textContent = "Edit your statement";
  modal.appendChild(modalHeading);
  var textEditContainer = document.createElement("div");
  textEditContainer.classList.add("modal-input");
  modal.appendChild(textEditContainer);
  var textEditArea = document.createElement("textarea");
  textEditArea.rows = "3";
  textEditArea.addEventListener("click", function () {
    editedQuote = textEditArea.value;
  });
  textEditArea.value = quote;
  textEditContainer.appendChild(textEditArea);
  var modalActionContainer = document.createElement("div");
  modalActionContainer.classList.add("action-container");
  modal.appendChild(modalActionContainer);
  var cancelBtn = document.createElement("button");
  //   confirmBtn.setAttribute("type", "button");
  cancelBtn.classList.add("cancelBtn");
  cancelBtn.textContent = "Cancel";
  cancelBtn.addEventListener("click", closeModal);
  modalActionContainer.appendChild(cancelBtn);
  var confirmBtn = document.createElement("button");
  //   confirmBtn.setAttribute("type", "button");
  confirmBtn.classList.add("confirmBtn");
  confirmBtn.textContent = "Confirm";
  confirmBtn.addEventListener("click", function () {
    editedQuote = textEditArea.value;
    if (editedQuote.trim().length > 0) {
      quote = editedQuote;
      console.log(editedQuote);
      updateParagraph();
      closeModal();
    }
  });
  modalActionContainer.appendChild(confirmBtn);
  document.body.insertBefore(modal, demoContainer);
  editedQuote = quote;
});
