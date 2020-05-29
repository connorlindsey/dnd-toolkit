import styled from "styled-components"

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  max-width: 400px;
  margin: ${(props) => props.margin || "1rem auto"};
`

export const Label = styled.label`
  width: ${(props) => props.width || "100%"};
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
`

export const Input = styled.input`
  border: 1px solid ${(props) => props.theme.grey["300"]};
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: ${(props) => props.theme.inner};
  background: ${(props) => props.theme.primary["100"]};
  height: 1.8rem;
  outline: none;
  padding-left: 10px;
  margin: ${(props) => props.margin || "0"};

  &::placeholder {
    font-size: 0.8rem;
  }
`

export const Textarea = styled.textarea`
  width: 100%;
  border: 1px solid ${(props) => props.theme.grey["300"]};
  border-radius: ${(props) => props.theme.borderRadius};
  background: transparent;
  box-shadow: ${(props) => props.theme.elevationInner};
  resize: vertical;
  height: 4rem;
  padding: 2px 10px;
  outline: none;
`

export const Select = styled.select`
  color: ${(props) => props.theme.grey["800"]};
  padding: 0.4em 1.4em 0.4em 0.6em;
  border: 1px solid ${(props) => props.theme.grey["300"]};
  box-shadow: ${(props) => props.theme.elevationInner};
  border-radius: ${(props) => props.theme.borderRadius};
  margin: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"),
    linear-gradient(to bottom, #ffffff 0%, ${(props) => props.theme.grey["300"]} 100%);
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;

  &::-ms-expand {
    display: none;
  }

  &:focus {
    border-color: #aaa;
    box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    color: #222;
    outline: none;
  }
`
