let output = document.getElementById("output");
window.addEventListener("mousemove", (e) => {
  let xPos = e.clientX;
  let yPos = e.clientY;
  console.log(xPos, yPos);
  output.innerHTML = `<div><span>X :</span>${xPos}px</div><div><span>Y :</span>${yPos}px</div>`;
});