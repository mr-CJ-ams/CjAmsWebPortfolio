document.querySelectorAll('[data-carousel]').forEach((carousel) => {
  const track = carousel.querySelector('.feature-track')
  const slides = [...carousel.querySelectorAll('.feature-slide')]
  const counter = document.querySelector(`[data-count="${carousel.dataset.carousel}"]`)
  let currentIndex = 0

  const updateCarousel = () => {
    slides[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    slides.forEach((slide, index) => slide.classList.toggle('is-active', index === currentIndex))
    counter.textContent = `${String(currentIndex + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`
  }

  const move = (direction) => {
    currentIndex = (currentIndex + direction + slides.length) % slides.length
    updateCarousel()
  }

  carousel.querySelector('[data-direction="prev"]').addEventListener('click', () => move(-1))
  carousel.querySelector('[data-direction="next"]').addEventListener('click', () => move(1))
  track.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') move(-1)
    if (event.key === 'ArrowRight') move(1)
  })
})
