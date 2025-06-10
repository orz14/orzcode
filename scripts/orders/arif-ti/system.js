document.addEventListener("DOMContentLoaded", function () {
  const dd = "2025/06/09";

  execute("a", dd);
  // execute("b");

  function execute(type, value = null) {
    if (type == "a") {
      const t = new Date();
      const d = new Date(value);

      if (t >= d) {
        manipulate(type);
      }
    } else if (type == "b") {
      manipulate(type);
    }
  }

  function manipulate(type) {
    const body = document.body;

    body.innerHTML = "";
    body.style.setProperty("width", "100%", "important");
    body.style.setProperty("height", "100svh", "important");
    body.style.setProperty("background-color", "black", "important");
    body.style.setProperty("color", "white", "important");
    body.style.setProperty("display", "flex", "important");
    body.style.setProperty("flex-direction", "column", "important");
    body.style.setProperty("justify-content", "center", "important");
    body.style.setProperty("align-items", "center", "important");
    body.style.setProperty("margin", "0", "important");

    if (type == "a") {
      body.innerHTML = `
      <h1>BAYAR DULU BANG !!</h1>
      <h2>HUB : <a href="https://wa.me/6281228390894" target="_blank">+6281228390894</a></h2>
    `;
    } else if (type == "b") {
      body.innerHTML = `
      <h1>JANGAN DISALAHGUNAKAN BANG !!</h1>
      <h2>HUB : <a href="https://wa.me/6281228390894" target="_blank">+6281228390894</a></h2>
    `;
    }
  }
});
