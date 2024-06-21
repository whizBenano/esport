let nav = document.querySelector('.navbar')

document.addEventListener('scroll', () => {
    if(-document.body.getBoundingClientRect().top >= 10)
        nav.style.backgroundColor = 'black'
    else
        nav.style.backgroundColor = ''
})