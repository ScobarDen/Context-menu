export const createElement = (tag, className = "", content = "") => {
  const el = document.createElement(tag);
  el.className = className;
  el.textContent = content;
  return el;
};
