const buttons = document.querySelectorAll('.backToTop')

for (const btn of buttons) {
    btn.addEventListener('click', e => {
        window.scrollTo(0, 0)
    })
}