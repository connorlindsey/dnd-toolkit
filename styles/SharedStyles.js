import styled from "styled-components"

export const SectionTitle = styled.h2`
  /* text-align: center; */
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.1rem;
  margin: 0 auto 0.5rem;
`

export const Divider = styled.hr`
  width: 64px;
  display: block;
  height: 0px;
  margin: 0 0 1rem;
  border-top: 4px solid ${props => props.theme.primary["200"]};
`
