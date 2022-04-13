const toggleButton = document.getElementsByClassName('hamburger')[0]
const navbarLinks = document.getElementsByClassName('menu-ul')[0]


toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})