export function delParam() {
  if (!window.location.search) {
    return window.location.href;
  }
  const search = new URLSearchParams(window.location.search);
  search.delete("token");
  return `${window.location.origin}${window.location.pathname}${search.toString() ? "?" + search.toString() : ""}`;
}
