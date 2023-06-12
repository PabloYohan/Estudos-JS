const request = (obj) => {
  const xhr = new XMLHttpRequest();
  xhr.open(obj.method, obj.url, true);
  xhr.send();

  xhr.addEventListener("load", () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      obj.success(xhr.responseText);
    } else {
      obj.error(xhr.statusText);
    }
  });
};

document.addEventListener("click", (event) => {
  const target = event.target;
  const tag = target.tagName.toLowerCase();
  if (tag === "a") {
    event.preventDefault();
    loadPage(target);
  }
});

function loadPage(target) {
  const href = target.getAttribute("href");
  request({
    method: "GET",
    url: href,
    success(responseText) {
      const result = document.querySelector(".result");
      result.innerHTML = responseText;
    },
    error() {
      document.body.innerHTML = `<h1>404</h1>`;
    },
  });
}
