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