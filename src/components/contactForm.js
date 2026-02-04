export function createContactForm() {
  const form = document.querySelector('#contact-form')
  
  if (!form) return

  form.addEventListener('submit', handleSubmit)
}

function handleSubmit(e) {
  e.preventDefault()
  
  const formData = new FormData(e.target)
  const data = Object.fromEntries(formData)
  
  // Validation
  if (!validateForm(data)) {
    return
  }
  
  // Simulation d'envoi
  console.log('📧 Données du formulaire:', data)
  showSuccessMessage()
  e.target.reset()
}

function validateForm(data) {
  const { name, email, message } = data
  
  if (!name || !email || !message) {
    showError('Veuillez remplir tous les champs obligatoires')
    return false
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    showError('Veuillez entrer une adresse email valide')
    return false
  }
  
  return true
}

function showError(message) {
  // Simple alert pour l'instant
  alert('❌ ' + message)
}

function showSuccessMessage() {
  alert('✅ Message envoyé avec succès ! (simulation)')
}