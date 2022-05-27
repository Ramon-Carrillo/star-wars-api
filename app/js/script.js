'use strict'

let apiUrl = `https://akabab.github.io/starwars-api/api/all.json`

let totalCharacters = async () => {
  let response = await fetch(apiUrl)
  let data = await response.json()
  let character = await data
  character.map((char) => {
    console.log(char.id)
  })
}

totalCharacters()
