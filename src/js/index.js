document.getElementById("generate").addEventListener("click", function () {
  // JSON object representing the content for each page
  const jsonData = {
    page1: {
      orientation: "portrait",
      background: "grey",
      logo: "../../assets/s7-logo.png",
    },
    page2: {
      orientation: "landscape",
      background: "white",
      text: "Page 2 content",
    },
    page3: {
      orientation: "landscape",
      background: "white",
      text: "Page 3 content",
    },
    page4: {
      orientation: "landscape",
      background: "white",
      text: "Page 4 content",
    },
    page5: {
      orientation: "portrait",
      background: "white",
      images: ["../../assets/s7-logo.png", "../../assets/s7-logo.png"],
    },
  };

  const firstNameInput = document.getElementById("firstName");
  const lastNameInput = document.getElementById("lastName");
  const contFNameInput = document.getElementById("contFname");
  const contLNameInput = document.getElementById("contLname");
  const contEmailInput = document.getElementById("contEmail");

  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const fullName = `${firstName} ${lastName}`;

  const contFname = contFNameInput.value;
  const contLname = contLNameInput.value;
  const contfullName = `${contFname} ${contLname}`;
  const contEmail = contEmailInput.value;

  // Create a new instance of jspdf
  const doc = new jsPDF();

  // Loop through each page in the JSON object
  Object.keys(jsonData).forEach((page) => {
    const { orientation, background, logo, text, images } = jsonData[page];

    // Add a new page if not the last page
    //if (page !== "page5") {
    // Set the page size and orientation
    doc.addPage("letter", orientation);
    //}

    // Set the background color
    if (background === "grey") {
      doc.setFillColor(129, 130, 133);
      doc.rect(0, 0, 400, 400, "F");
    } else {
      doc.setFillColor(255);
      doc.rect(0, 0, 400, 400, "F");
    }

    // Add the logo on the first page
    if (page === "page1") {
      doc.setFontSize(22);
      doc.setFont("Arial");
      doc.setTextColor(255);
      doc.text(`${fullName}'s`, 105, 200, null, null, "center");
      doc.text(`Lookbook`, 105, 210, null, null, "center");
      doc.setDrawColor(255, 255, 255);
      doc.rect(55, 180, 100, 50);
    } else if (page === "page5") {
      doc.setFontSize(16);
      doc.setFont("Arial");
      doc.setTextColor(115, 116, 119);
      doc.text("Your contact is", 105, 200, null, null, "center");

      doc.setFontSize(14);
      doc.setFont("Arial");
      doc.setTextColor(170, 152, 128);
      doc.text(`${contfullName}`, 105, 215, null, null, "center");
      doc.text(`${contEmail}`, 105, 225, null, null, "center");
      doc.text("www.salonseptiemeparis.com", 105, 235, null, null, "center");
      doc.setDrawColor(255, 255, 255);
    } else {
      doc.setFontSize(22);
      doc.setFont("Arial");
      doc.setTextColor(0);
      doc.text("end is body text", 105, 200, null, null, "center");
      doc.text("end body text", 105, 210, null, null, "center");
      doc.setDrawColor(255, 255, 255);
      doc.rect(55, 180, 100, 50);
    }
  });

  // Save or display the generated PDF
  doc.save(`${fullName}_Lookbook.pdf`);
});
