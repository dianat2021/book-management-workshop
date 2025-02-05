class Ui {
  static toggleBookTypeFields(
    printedBookContainer,
    audioBookContainer,
    audioFields,
    printedFields,
    bookType
  ) {
    // HIDE BOTH CONTAINERS INITIALLY
    printedBookContainer.style.display = "none";
    audioBookContainer.style.display = "none";
    // RESET THE VALUES OF BOTH CATEGORIES
    printedFields.forEach((field) => (field.value = ""));
    audioFields.forEach((field) => (field.value = ""));
    // DISPLAY THE RELEVANT CONTAINER BASED ON USER'S SELECTION
    if (bookType === "printed-book") {
      printedBookContainer.style.display = "block";
    } else {
      audioBookContainer.style.display = "block";
    }
  }
  static displayAddModal(
    openAddModalButton,
    formModal,
    printedBookContainer,
    audioBookContainer
  ) {
    openAddModalButton.addEventListener("click", () => {
      formModal.classList.add("display-form");
      // HIDE BOTH CONTAINERS INITIALLY
      printedBookContainer.style.display = "none";
      audioBookContainer.style.display = "none";
    });
  }
  static closeAddModal(closeAddModalButton, formModal) {
    closeAddModalButton.addEventListener("click", () => {
      formModal.classList.remove("display-form");
    });
  }
}

export default Ui;
