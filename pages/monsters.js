import React, { useState, useEffect } from "react"
import styled from "styled-components"

import { getAllMonsters } from "../services/MonsterService"
import SearchBox from "../components/SearchBox"
import SearchResult from "../components/SearchResult"
import FavoriteMonsters from "../components/FavoriteMonsters"
import { useAuth } from "../context/auth-context"

const Monsters = () => {
  const { user } = useAuth()
  const [status, setStatus] = useState("LOADING")
  const [monsters, setMonsters] = useState([])
  useEffect(() => {
    let isSubscribed = true
    const fetchData = async () => {
      setStatus("LOADING")
      try {
        let data = await getAllMonsters()
        let favMonsters = JSON.parse(localStorage.getItem(`${user}_FAV_MONSTERS`)) || []
        if (isSubscribed && data) {
          setMonsters(data)
          setStatus("DEFAULT")
        }
      } catch (e) {
        setStatus("Error")
      }
    }
    fetchData()

    return () => (isSubscribed = false)
  }, [])

  const selectItem = (item, isSelected) => {
    let favMonsters = JSON.parse(localStorage.getItem(`${user}_FAV_MONSTERS`)) || []
    if (isSelected && !favMonsters.includes(item.index)) {
      favMonsters.push(item.index)
      localStorage.setItem(`${user}_FAV_MONSTERS`, JSON.stringify(favMonsters))
    } else if (!isSelected && favMonsters.includes(item.index)) {
      favMonsters = favMonsters.filter((m) => m !== item.index)
      localStorage.setItem(`${user}_FAV_MONSTERS`, JSON.stringify(favMonsters))
    }
  }

  if (status === "LOADING") {
    return <div>Loading...</div>
  }

  if (status === "ERROR") {
    return <div>Error</div>
  }

  return (
    <main>
      <Header>
        <h1>Monsters</h1>
        <SearchBox
          placeholder='Search Monsters'
          items={monsters}
          ResultComponent={SearchResult}
          selectItem={selectItem}
        />
      </Header>
      <FavoriteMonsters />
    </main>
  )
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  h1 {
    margin: 0;
  }
`

export default Monsters
