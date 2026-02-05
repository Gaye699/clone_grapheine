// Lazy loading et optimisation d'images
export function initImageOptimizer() {
  console.log('🖼️ Image optimizer initialized...')
  
  // Code en cours de développement
  const images = document.querySelectorAll('img[data-src]')
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target
          img.src = img.dataset.src
          img.classList.add('loaded')
          imageObserver.unobserve(img)
        }
      })
    })
    
    images.forEach(img => imageObserver.observe(img))
  } else {
    // Fallback pour anciens navigateurs
    images.forEach(img => {
      img.src = img.dataset.src
      img.classList.add('loaded')
    })
  }
}