import monsterList from "../data/monsterList.json"

const getAllMonsters = () => {
  return monsterList
}

const getMonster = (monsterUrl) => {
  let url = "https://cors-anywhere.herokuapp.com/"
  url += monsterUrl
  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      return json
    })
}

export { getAllMonsters, getMonster }
