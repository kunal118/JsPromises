function updateDateTime() {
  // create a new `Date` object
  const now = new Date();

  // get the current date and time as a string
  const currentDateTime = now.toLocaleString();

  // update the `textContent` property of the `span` element with the `id` of `datetime`
  document.querySelector("#datetime").textContent = currentDateTime;
}
function renderImage1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document
        .querySelector("#img1")
        .setAttribute("src", "https://i.gifer.com/YQDs.gif");
      resolve();
    }, 2000);
  });
}
function renderImage2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document
        .querySelector("#img2")
        .setAttribute("src", "https://i.gifer.com/YQDs.gif");
      resolve();
    }, 2000);
  });
}
function renderImage3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document
        .querySelector("#img3")
        .setAttribute("src", "https://i.gifer.com/YQDs.gif");
      resolve();
    }, 2000);
  });
}
async function callSequentially() {
  await renderImage1();
  await renderImage2();
  await renderImage3();
}

async function callParallel() {
  renderImage1();
  renderImage2();
  renderImage3();
}

document.querySelector("#sequence").addEventListener("click", () => {
  callSequentially();
});
document.querySelector("#parallel").addEventListener("click", () => {
  callParallel();
});
// call the `updateDateTime` function every second
setInterval(updateDateTime, 1000);
