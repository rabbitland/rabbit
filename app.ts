function renderMainFrame(wrapper: HTMLElement): void {
  const h1 = document.createElement("h1");
  h1.innerText = "Hello World";
  wrapper.appendChild(h1);
}

window.addEventListener("load", () => {
  const root = document.getElementById("root");
  if (root) {
    renderMainFrame(root);
  } else {
    // TODO(qti3e) Render error.
  }
});
