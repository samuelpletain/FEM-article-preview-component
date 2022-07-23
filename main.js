const button = document.getElementsByClassName("button")
const socials = document.getElementsByClassName("socials")

button[0].addEventListener('click', () => {
  socials[0].classList.toggle("socials--show")
  button[0].classList.toggle("button--dark")
})