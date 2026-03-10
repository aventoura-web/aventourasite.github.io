import 'style.css'

function handleBooking() {
  const message = `Thank you for your interest in the Japan Alpine Route tour!

This is where our booking system would be integrated. In a real application, this would:
- Display an interactive booking form
- Handle date selection and package options
- Process payment information securely
- Send confirmation emails

For now, please contact us directly at Instagram @aventoura_tour`

  alert(message)
}

window.handleBooking = handleBooking

document.addEventListener('DOMContentLoaded', () => {
  // Scroll animations for cards
  const cards = document.querySelectorAll('.highlight-card, .review-card, .pricing-card, .note-card, .day-main')

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1'
        entry.target.style.animation = 'fadeInUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1 })

  cards.forEach(card => {
    card.style.opacity = '0'
    observer.observe(card)
  })

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item')
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question')
    question.addEventListener('click', () => {
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('active')
        }
      })
      item.classList.toggle('active')
    })
  })

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href')
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault()
        document.querySelector(href).scrollIntoView({
          behavior: 'smooth'
        })
      }
    })
  })

  // Add stagger animation to grid items
  const grids = document.querySelectorAll('.highlights-grid, .reviews-grid, .pricing-grid, .notes-grid')
  grids.forEach(grid => {
    const items = grid.querySelectorAll('> div')
    items.forEach((item, index) => {
      item.style.animationDelay = `${index * 0.1}s`
    })
  })

  // Header shadow on scroll
  const navbar = document.querySelector('.navbar')
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)'
    } else {
      navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)'
    }
  })
})
