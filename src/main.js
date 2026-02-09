import './style.css'
import './styles/contact.css'
import './styles/images.css'
import { createContactForm } from './components/contactForm.js'
import { initImageOptimizer } from './scripts/imageOptimizer.js'

console.log('🚀 Graphéine Portfolio - Projet initialisé')

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
  console.log('✅ DOM chargé')

  // Initialiser le formulaire de contact
  createContactForm()

  // Initialiser l'optimisation des images
  initImageOptimizer()

  // Animation d'apparition des items de galerie
  const galleryItems = document.querySelectorAll('.gallery-item')
  if (galleryItems.length && 'IntersectionObserver' in window) {
    const galleryObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.2 })

    galleryItems.forEach((item) => galleryObserver.observe(item))
  } else {
    galleryItems.forEach((item) => item.classList.add('is-visible'))
  }

  // Changement de style du header selon la position du contenu
  const headerEl = document.getElementById('site-header')
  const mainEl = document.getElementById('main-content') || document.querySelector('main')
  if (headerEl && mainEl && 'IntersectionObserver' in window) {
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          headerEl.classList.add('is-light')
        } else {
          headerEl.classList.remove('is-light')
        }
      },
      { rootMargin: '-80px 0px 0px 0px' }
    )

    headerObserver.observe(mainEl)
  }

  // Gestion de l'upload de fichier
  const fileInput = document.getElementById('attachment')
  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      const fileName = e.target.files[0]?.name
      if (fileName) {
        console.log('📎 Fichier sélectionné:', fileName)
      }
    })
  }
})
