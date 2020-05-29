import styled from "styled-components"

export const RowToCol = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  margin: 1rem 0;

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`

export const Section = styled.section`
  margin: 1rem auto 3rem;

  p {
    max-width: 400px;
  }
`
