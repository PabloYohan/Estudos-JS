document.addEventListener("click", (event) => {
  const target = event.target;
  const tag = target.tagName.toLowerCase();
  if (tag === "a") {
    event.preventDefault();
    loadPage(target);
  }
});

async function loadPage(target) {
  const href = target.getAttribute("href");
  try {
    const response = await fetch(href);
    if (response.status !== 200) {
      throw new Error("Bad response");
    }
    const text = await response.text();
    const result = document.querySelector(".result");
    result.innerHTML = text;
  } catch (err) {
    console.log(err);
  }
}
