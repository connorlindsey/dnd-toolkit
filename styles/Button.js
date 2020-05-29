import styled from "styled-components"

export const Button = styled.button`
  height: 36px;
  padding: 0 14px;
  font-size: 14px;
  margin: ${(props) => props.margin || `0 .05rem`};
  text-transform: uppercase;
  letter-spacing: 0.25;
  text-decoration: none;
  outline: none;
  text-decoration: none;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.primary["500"]};
  border: 2px solid ${(props) => props.theme.primary["500"]};
  text-align: center;
  color: #fff;
  font-weight: 600;
  cursor: pointer;

  transition: all 0.1s ease-in;

  &:hover {
    transform: none;
    opacity: 0.8;
    background-color: ${(props) => props.theme.primary["400"]};
    border-color: ${(props) => props.theme.primary["400"]};
    color: #fff;
  }

  &:active {
    transform: translateY(2px);
    background-color: ${(props) => props.theme.primary["600"]};
    border-color: ${(props) => props.theme.primary["600"]};
    color: #fff;
  }

  &:disabled {
    background-color: ${(props) => props.theme.grey["400"]};
    border-color: ${(props) => props.theme.grey["400"]};
    color: #fff;
  }
`

export const OutlineButton = styled(Button)`
  background-color: transparent;
  color: ${(props) => props.theme.primary["400"]};
  border: 2px solid ${(props) => props.theme.primary["400"]};

  &:hover {
    transform: none;
    background-color: ${(props) => props.theme.primary["400"]};
    border-color: ${(props) => props.theme.primary["400"]};
    color: #fff;
  }

  &:active {
    background-color: ${(props) => props.theme.primary["500"]};
    border-color: ${(props) => props.theme.primary["500"]};
    color: #fff;
  }

  &:disabled {
    background-color: ${(props) => props.theme.grey["200"]};
    border-color: ${(props) => props.theme.grey["500"]};
    color: ${(props) => props.theme.grey["500"]};
  }
`

export const SecondaryButton = styled.button`
  height: 32px;
  padding: 0 14px;
  font-size: 14px;
  margin: ${(props) => props.margin || `0 .05rem`};
  text-transform: uppercase;
  letter-spacing: 0.25;
  text-decoration: none;
  outline: none;
  text-decoration: none;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: transparent;
  color: ${(props) => props.theme.primary["500"]};
  border: 2px solid ${(props) => props.theme.primary["500"]};
  text-align: center;

  transition: all 0.15s linear;

  &:hover {
    transform: none;
    background-color: ${(props) => props.theme.primary["600"]};
    border-color: ${(props) => props.theme.primary["600"]};
    color: #fff;
  }

  &:active {
    background-color: ${(props) => props.theme.primary["600"]};
    border-color: ${(props) => props.theme.primary["600"]};
    color: #fff;
  }
`

export const TertiaryButton = styled.button`
  height: 32px;
  padding: 0 14px;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.25;
  margin: ${(props) => props.margin || `0 .05rem`};
  text-decoration: none;
  outline: none;
  text-decoration: none;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: transparent;
  color: ${(props) => props.theme.grey["500"]};
  border: 2px solid ${(props) => props.theme.grey["500"]};
  text-align: center;

  transition: all 0.15s linear;

  &:hover {
    transform: none;
    background-color: ${(props) => props.theme.grey["400"]};
    border-color: ${(props) => props.theme.grey["400"]};
    color: #fff;
  }

  &:active {
    background-color: ${(props) => props.theme.grey["600"]};
    border-color: ${(props) => props.theme.grey["600"]};
    color: #fff;
  }
`
