import React, { useState } from "react"
import styled from "styled-components"
import { FiStar } from "react-icons/fi"
import { animated, useSpring } from "react-spring"
import Theme from "../styles/theme.js"

const SearchResult = ({ item, selectItem }) => {
  const [isSelected, setSelected] = useState(item.isFavorited)
  const starAnim = useSpring({
    fill: isSelected ? Theme.primary["400"] : Theme.primary["100"],
    config: { duration: 150 },
  })

  return (
    <StyledResult
      onClick={() => {
        selectItem(item, !isSelected)
        setSelected(!isSelected)
      }}>
      <h2>{item.name}</h2>
      <Star style={starAnim} />
    </StyledResult>
  )
}

const StyledResult = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 8px 0;
  cursor: pointer;

  h2 {
    color: ${(props) => props.theme.grey["800"]};
    font-size: 1rem;
    font-weight: 500;
    margin: 0;
    user-select: none;
  }
`

const Star = styled(animated(FiStar))`
  padding: 8px;
  height: 32px;
  width: 32px;
  transition: 0.2s all ease;
  color: ${(props) => props.theme.grey["700"]};

  &:hover {
    transform: scale(1.05);
  }
`

export default SearchResult
