// Small enhancements (no framework needed)
document.addEventListener('DOMContentLoaded', () => {
  // Smooth-scroll for internal anchors
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if(id.length > 1){
        e.preventDefault();
        const el = document.querySelector(id);
        if(el){ el.scrollIntoView({behavior:'smooth', block:'start'}); }
      }
    });
  });
});
