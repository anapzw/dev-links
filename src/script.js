function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  const img = document.querySelector("#profile")
  const iconBehance = document.querySelector('#behance')
  const iconGitHub = document.querySelector('#github')
  const iconLinkedin = document.querySelector('#linkedin')
  const buttonX = document.querySelector('#button-x')

  if (html.classList.contains("light")) {
    img.setAttribute('src', './src/assets/foto-perfil-light-mode.png')
    iconBehance.setAttribute('src', './src/assets/behance-icon-black.png')
    iconGitHub.setAttribute('src', './src/assets/github-icon-black.png')
    iconLinkedin.setAttribute('src', './src/assets/linkedin-icon-black.png')
    buttonX.setAttribute('src', './src/assets/button-x-black.svg')
  } else {
    img.setAttribute('src', './src/assets/foto-perfil.png')
    iconBehance.setAttribute('src', './src/assets/behance-icon.png')
    iconGitHub.setAttribute('src', './src/assets/github-icon.png')
    iconLinkedin.setAttribute('src', './src/assets/linkedin-icon.png')
    buttonX.setAttribute('src', './src/assets/button-x.svg')
  }
}