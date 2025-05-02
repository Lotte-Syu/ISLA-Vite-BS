export default async function loadTemplate(selector, filePath) {
  const container = document.querySelector(selector);
  const res = await fetch(filePath);
  const html = await res.text();
  container.innerHTML = html;
}
