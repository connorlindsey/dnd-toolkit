import Link from "next/link"
import styled from "styled-components"
import { useAuth } from "../context/auth-context"

const Nav = () => {
  const { user, logout } = useAuth()
  return (
    <StyledNav>
      {user ? (
        <>
          <Link href='/monsters'>
            <a>Monsters</a>
          </Link>
          <Link href='/spells'>
            <a>Spells</a>
          </Link>
          <button onClick={logout}>Logout</button>
        </>
      ) : null}
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  display: flex;
  align-items: center;

  a,
  button {
    font-size: 1.2rem;
    color: ${(props) => props.theme.primary["200"]};
    transition: 0.15s ease all;
    letter-spacing: 0.06em;

    &:hover {
      color: ${(props) => props.theme.primary["300"]};
    }
  }

  button {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
  }

  a:not(:last-child) {
    margin-right: 1rem;
  }
`

export default Nav
