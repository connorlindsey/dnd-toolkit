import React from "react"

const FavoriteMonsters = () => {
  const monsters = JSON.parse(localStorage.getItem(`ibaeni_FAV_MONSTERS`)) || []
  return (
    <div>
      <h3>Favorite Monsters</h3>
      <ol>
        {monsters.map((m) => (
          <li>{m}</li>
        ))}
      </ol>
    </div>
  )
}

export default FavoriteMonsters
