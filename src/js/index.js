async function addImageProcess(src) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.src = src;
    img.onload = () => resolve(img);
    img.onerror = reject;
  });
}

// MAIN:
async function generatePdf(imageUrls) {
  const doc = new jsPDF();
  const firstNameInput = document.getElementById("firstName");
  const lastNameInput = document.getElementById("lastName");
  const contFNameInput = document.getElementById("contFname");
  const contLNameInput = document.getElementById("contLname");
  const contEmailInput = document.getElementById("contEmail");
  const monthInput = document.getElementById("month");

  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const fullName = `${firstName} ${lastName}`;

  const contFname = contFNameInput.value;
  const contLname = contLNameInput.value;
  const contfullName = `${contFname} ${contLname}`;
  const contEmail = contEmailInput.value;
  const month = monthInput.value;

  // PAGE 1
  doc.setFillColor(129, 130, 133);
  doc.rect(
    0,
    0,
    doc.internal.pageSize.width,
    doc.internal.pageSize.height,
    "F"
  );
  doc.setFontSize(22);
  doc.setFont("Arial");
  doc.setTextColor(255);
  doc.text(`${firstName}'s`, 105, 200, null, null, "center");
  doc.text(`Lookbook`, 105, 210, null, null, "center");
  doc.setDrawColor(255, 255, 255);
  doc.rect(55, 180, 100, 50);
  const wtlogo = await addImageProcess(imageUrls[0]);
  doc.addImage(
    wtlogo,
    "png",
    doc.internal.pageSize.width / 2 - 20,
    doc.internal.pageSize.height / 2 - 35,
    wtlogo.width / 3,
    wtlogo.height / 3
  );

  //Page 2
  doc.addPage("l");
  const grlogo = await addImageProcess(imageUrls[2]);
  doc.addImage(
    grlogo,
    "png",
    doc.internal.pageSize.width / 2 - 30,
    doc.internal.pageSize.height / 2 - 140,
    grlogo.width / 15,
    grlogo.height / 15
  );
  doc.setFontSize(12);
  doc.setFont("Arial");
  doc.setTextColor(115, 116, 119);
  doc.text("TISSUS & FILS", 105, 110, null, null, "center");
  doc.setFontSize(10);
  doc.setFont("Arial");
  doc.setTextColor(115, 116, 119);
  var tisusFils =
    "We work with the best mills in France and Italy selecting fabrics and yarns of uncompromising quality in chashmere, silk, lace, tweed, wool, cotton and leather.";
  var splitTitle = doc.splitTextToSize(tisusFils, 95);
  doc.text(splitTitle, 105, 120, null, null, "center");

  doc.setFontSize(12);
  doc.setFont("Arial");
  doc.setTextColor(115, 116, 119);
  doc.text("COLEURS", 105, 140, null, null, "center");
  doc.setFontSize(10);
  doc.setFont("Arial");
  doc.setTextColor(115, 116, 119);
  var coleurs =
    "Our colors are inspired by palettes that work well in any women's wardrobe and with the subtleties of many skin tones.";
  var splitTitle = doc.splitTextToSize(coleurs, 95);
  doc.text(splitTitle, 105, 150, null, null, "center");

  doc.setFontSize(12);
  doc.setFont("Arial");
  doc.setTextColor(115, 116, 119);
  doc.text("CONCEPT", 105, 170, null, null, "center");
  doc.setFontSize(10);
  doc.setFont("Arial");
  doc.setTextColor(115, 116, 119);
  var concept =
    "Our designs are influenced by the lifestyle Parisien, the French savoir-faire and the art of creating a modern wardrobe with pieces that are, in spirit, timeless.";
  var splitTitle = doc.splitTextToSize(concept, 95);
  doc.text(splitTitle, 105, 180, null, null, "center");

  const bird = await addImageProcess(imageUrls[3]);
  doc.addImage(
    bird,
    "png",
    doc.internal.pageSize.width / 2 - 5,
    doc.internal.pageSize.height / 2 + 130,
    bird.width / 35,
    bird.height / 35
  );

  //Page 3
  doc.addPage("l");
  const cover = await addImageProcess(imageUrls[1]);
  doc.addImage(
    cover,
    "png",
    doc.internal.pageSize.width / 2 - 50,
    20,
    cover.width / 15,
    cover.height / 15
  );

  doc.setFontSize(22);
  doc.setFont("Arial");
  doc.setTextColor(115, 116, 119);
  doc.text(`${fullName}`, 105, 200, null, null, "center");

  doc.setFontSize(14);
  doc.setFont("Arial");
  doc.setTextColor(115, 116, 119);
  doc.text(`${month}, 17th Atelier`, 105, 210, null, null, "center");

  doc.addImage(
    bird,
    "png",
    doc.internal.pageSize.width / 2 - 5,
    doc.internal.pageSize.height / 2 + 130,
    bird.width / 35,
    bird.height / 35
  );

  //Page 4
  doc.addPage("l");
  // const image4 = await addImageProcess(imageUrls[1]);
  // doc.addImage(image4, "png", 5, 5, 0, 0);
  doc.addImage(
    bird,
    "png",
    doc.internal.pageSize.width / 2 - 5,
    doc.internal.pageSize.height / 2 + 130,
    bird.width / 35,
    bird.height / 35
  );

  //Page 5
  doc.addPage("l");
  // const image4 = await addImageProcess(imageUrls[1]);
  // doc.addImage(image4, "png", 5, 5, 0, 0);
  doc.addImage(
    bird,
    "png",
    doc.internal.pageSize.width / 2 - 5,
    doc.internal.pageSize.height / 2 + 130,
    bird.width / 35,
    bird.height / 35
  );

  //Page 6
  doc.addPage("l");
  // const image4 = await addImageProcess(imageUrls[1]);
  // doc.addImage(image4, "png", 5, 5, 0, 0);
  doc.addImage(
    bird,
    "png",
    doc.internal.pageSize.width / 2 - 5,
    doc.internal.pageSize.height / 2 + 130,
    bird.width / 35,
    bird.height / 35
  );

  //Page 7
  doc.addPage("p");
  doc.addImage(
    grlogo,
    "png",
    doc.internal.pageSize.width / 2 - 30,
    doc.internal.pageSize.height / 2 - 35,
    grlogo.width / 15,
    grlogo.height / 15
  );

  doc.setFontSize(16);
  doc.setFont("Arial");
  doc.setTextColor(115, 116, 119);
  doc.text("Your contact is", 105, 220, null, null, "center");
  doc.setFontSize(14);
  doc.setFont("Arial");
  doc.setTextColor(170, 152, 128);
  doc.text(`${contfullName}`, 105, 235, null, null, "center");
  doc.text(`${contEmail}`, 105, 245, null, null, "center");
  doc.text("www.salonseptiemeparis.com", 105, 255, null, null, "center");
  doc.setDrawColor(255, 255, 255);

  //const bird = await addImageProcess(imageUrls[3]);
  doc.addImage(
    bird,
    "png",
    doc.internal.pageSize.width / 2 - 5,
    doc.internal.pageSize.height / 2 + 130,
    bird.width / 35,
    bird.height / 35
  );

  return doc;
}

const imageUrls = [
  "../../assets/wt-logo.png",
  "../../assets/cover.png",
  "../../assets/gr-logo.png",
  "../../assets/bird.png",
];

async function savePdf() {
  const multiPng = await generatePdf(imageUrls);

  // generate dataURLString
  const dataURLString = multiPng.output("dataurlstring", "Lookbook.pdf");
  //console.log(dataURLString);

  // save PDF (blocked in iFrame in chrome)
  multiPng.output("save", "Lookbook.pdf");
}

function buttonClick() {
  savePdf().then(console.log("Saved"));
}

var btn = document.createElement("BUTTON");
btn.innerHTML = "Generate PDF";
btn.onclick = () => buttonClick();
document.getElementById("container").appendChild(btn);
