document.addEventListener("DOMContentLoaded", function () {
  const generatePDFButton = document.getElementById("generatePDF");

  generatePDFButton.addEventListener("click", function () {
    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");

    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;

    const fullName = `${firstName} ${lastName}`;

    // Create a new PDF document
    const doc = new jsPDF();

    // Add content to the document
    doc.text(`Hello, ${fullName}`, 10, 10);

    // Save the document as a file
    doc.save("output.pdf");
  });
});
