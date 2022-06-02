'use strict'

let apiUrl = `https://akabab.github.io/starwars-api/api/all.json`
let main = document.getElementById('main')

let totalCharacters = async () => {
  let response = await fetch(apiUrl)
  let data = await response.json()
  let character = await data
  character.map((char) => {
    const card = document.createElement('div')
    const picture = document.createElement('img')
    const name = document.createElement('h3')

    picture.src = char.image
    picture.alt = char.name
    name.innerText = char.name
    card.classList.add('card')
    card.append(picture, name)
    main.appendChild(card)
  })
}

totalCharacters()
