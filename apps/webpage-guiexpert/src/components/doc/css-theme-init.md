Initialisation of **html[data-theme]** in an inline script tag:
```html title="index.html"
<script>
const themeSaved = localStorage.getItem("theme");
if (themeSaved) {
  document.documentElement.dataset.theme = themeSaved;
} else {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)", ).matches;
  document.documentElement.dataset.theme = prefersDark ? "dark" : "light";
}
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
    if (!localStorage.getItem("theme")) {
      document.documentElement.dataset.theme = event.matches ? "dark" : "light";
    }
  });
</script>
```

Switching theme:
```js
document.documentElement.dataset.theme = themeNext;
localStorage.setItem("theme", themeNext);
```
