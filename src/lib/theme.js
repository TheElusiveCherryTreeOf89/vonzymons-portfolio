// src/lib/theme.js
export function isVhsOn() {
  return typeof document !== "undefined" && document.documentElement.classList.contains("vhs-on");
}
export function setVhsOn(value) {
  if (typeof document === "undefined") return;
  if (value) document.documentElement.classList.add("vhs-on");
  else document.documentElement.classList.remove("vhs-on");
}
export function toggleVhs() {
  setVhsOn(!isVhsOn());
}
