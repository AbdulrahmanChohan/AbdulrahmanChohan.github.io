export function scrollToSection(sectionId, offset = 82) {
  const element = document.getElementById(sectionId);
  if (!element) return false;

  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const top = element.getBoundingClientRect().top + window.pageYOffset - offset;

  window.scrollTo({
    top,
    behavior: prefersReduced ? 'auto' : 'smooth'
  });

  return true;
}
