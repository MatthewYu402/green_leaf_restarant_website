// The site scrolls inside #root (see index.css), not the window. Every
// scroll listener, scroll-lock, and IntersectionObserver must use this element.
export function getScrollRoot() {
  return document.getElementById('root');
}
