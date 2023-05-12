const slides = document.querySelectorAll('.slide'),
      prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next')
      dots = document.querySelectorAll('.dot')
let index = 0;

function activeSlide(e) {
    for (let slide of slides) {
        slide.classList.remove('active')
    }
    slides[e].classList.add('active')
    
}

function nextSlide() {
    if(index === slides.length - 1) {
        index = 0
        activeAll(index)
    } else {
        index++;
        activeAll(index)
    }
}

function prevSlide() {
    if(index === 0) {
        index = slides.length - 1
        activeAll(index)

    } else {
        index--
        activeAll(index)
    }
}

function activeDot(e) {
    for (dot of dots) {
        dot.classList.remove('active')
    }
    dots[e].classList.add('active')
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', function() {
        index = indexDot
        activeAll(index)
    })
})

function activeAll(i) {
    activeSlide(i)
    activeDot(i)
}

const setInt = setInterval(nextSlide, 3500)

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        nextSlide()
    }
    if (event.key === 'ArrowLeft') {
        prevSlide()
    }
})

next.addEventListener('click', nextSlide)
prev.addEventListener('click', prevSlide)
