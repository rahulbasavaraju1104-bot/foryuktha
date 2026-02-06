document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = this.href;

    document.body.style.opacity = "0";

    setTimeout(() => {
      window.location.href = target;
    }, 600);
  });
});