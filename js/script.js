// =================Dark theme=================
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously Selected Topic (checking from the local storage)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light'

const getCurrentIcon = () =>
  document.body.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We need to validate if the user has previously chosen a topic
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme
  )
  themeButton.classList[selectedTheme === 'uil-moon' ? 'add' : 'remove'](
    iconTheme
  )
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark/light icon --icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  //   We save the theme and the current icon that the user has chosen
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

// ==============MENU SHOW Y HIDDEN===============
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

// ================Menu Show========================
// Validate if the constant exist

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

// ===============Menu Hidden=======================
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

// =============Remove Menu Profile====================
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  // when we click on nav__links, we remove the show menu
  navMenu.classList.remove('show-menu')
}

navLink.forEach((n) => {
  n.addEventListener('click', linkAction)
})

// =============Typewriter Effect==================
new Typewriter('#typewriter', {
  strings: ['Adam', 'Web-developer'],
  autoStart: true,
  loop: true,
  cursor: '|',
})
