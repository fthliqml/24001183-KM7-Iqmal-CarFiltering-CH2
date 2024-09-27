const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

const app = new App();

app.loadButton.addEventListener("click", () => {
  app.btnClicked();
});

app.init();
