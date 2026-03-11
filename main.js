import 'style.css'

document.addEventListener('DOMContentLoaded', () => {
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

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href')
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault()
        document.querySelector(href).scrollIntoView({ behavior: 'smooth' })
      }
    })
  })

  const grids = document.querySelectorAll('.highlights-grid, .reviews-grid, .pricing-grid, .notes-grid')
  grids.forEach(grid => {
    const items = grid.querySelectorAll('> div')
    items.forEach((item, index) => { item.style.animationDelay = `${index * 0.1}s` })
  })

  const navbar = document.querySelector('.navbar')
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.style.boxShadow = window.scrollY > 10
        ? '0 4px 16px rgba(0, 0, 0, 0.1)'
        : '0 2px 8px rgba(0, 0, 0, 0.05)'
    })
  }
})