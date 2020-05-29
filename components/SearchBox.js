import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import { Input } from "../styles/Form"
import { animated, useTransition } from "react-spring"

const SearchBox = ({ placeholder, items, ResultComponent, selectItem }) => {
  // Data
  const [query, setQuery] = useState("")
  const [filteredItems, setFilteredItems] = useState([])
  // item { index, name, url }

  const handleInput = (e) => {
    setQuery(e.target.value)

    // Filter Items
    let arr = items.filter((i) => i.name.toLowerCase().includes(e.target.value.toLowerCase()))
    console.log("arr 1", arr)

    // Set isFavorited
    const favMonsters = JSON.parse(localStorage.getItem(`ibaeni_FAV_MONSTERS`))
    arr = arr.map((m) => {
      return {
        ...m,
        isFavorited: favMonsters.includes(m.index),
      }
    })

    console.log("arr 2", arr)
    setFilteredItems(arr)
  }

  // Animations
  const [showResults, setShowResults] = useState(false)
  const resultCardTransition = useTransition(showResults, null, {
    from: { height: 200, opacity: 0 },
    enter: { height: 200, opacity: 1 },
    leave: { height: 0, opacity: 0 },
    unique: true,
    config: { tension: 200, friction: 14, clamp: true },
  })

  // Handle click outside to close
  const resultsCardRef = useRef(null)
  useEffect(() => {
    document.addEventListener("mousedown", handleClick, false)
    return () => document.removeEventListener("mousedown", handleClick, false)
  })
  const handleClick = (event) => {
    if (resultsCardRef && !resultsCardRef.current.contains(event.target)) {
      setShowResults(false)
    }
  }

  return (
    <StyledSearchBox ref={resultsCardRef}>
      <Input
        type='text'
        value={query}
        onChange={handleInput}
        placeholder={placeholder}
        onFocus={() => setShowResults(true)}
        margin='0'
      />

      {resultCardTransition.map(
        ({ item, key, props }) =>
          item && (
            <ResultsCard className='results-card' key={key} style={props}>
              {query.length < 1 ? (
                <p>Awaiting your command</p>
              ) : filteredItems.length > 0 ? (
                filteredItems.map((item, i) => (
                  <ResultComponent key={i} item={item} selectItem={selectItem} />
                ))
              ) : (
                <p>No results</p>
              )}
            </ResultsCard>
          )
      )}
    </StyledSearchBox>
  )
}

const StyledSearchBox = styled.div`
  /* display: inline-block; */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
`

const ResultsCard = styled(animated.div)`
  padding: 0 8px;
  border-radius: ${(props) => props.theme.borderRadius};
  width: 250px;
  max-height: 200px;
  overflow-y: auto;
  scrollbar-width: none;
  background: ${(props) => props.theme.primary["100"]};
  box-shadow: ${(props) => props.theme.elevation1};
  position: absolute;
  top: 2rem;
`

export default SearchBox
