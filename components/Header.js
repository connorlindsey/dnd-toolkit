import Link from "next/link"
import styled from "styled-components"
import NProgress from "nprogress"
import Router from "next/router"
import Nav from "./Nav"

Router.onRouteChangeStart = () => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => {
  NProgress.done()
}

Router.onRouteChangeError = () => {
  NProgress.done()
}

const Logo = styled.h1`
  font-size: 1.8rem;
  position: relative;
  margin: 0;
  display: flex;
  align-items: center;
  font-weight: 500;
  letter-spacing: 0.03em;

  transition: 0.15s all cubic-bezier(0.31, -0.97, 0.65, 1.46);

  img {
    height: 60px;
    width: auto;
  }

  a {
    color: ${(props) => props.theme.primary["200"]};
    text-transform: uppercase;
    text-decoration: none;
    &:hover {
      color: ${(props) => props.theme.primary["300"]};
    }
  }
`

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.primary["800"]};
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding: 0 1rem;
  box-shadow: ${(props) => props.theme.elevation1};
`

const Header = () => (
  <StyledHeader>
    <Logo>
      <img src='/favicon.png' alt='' />
      <Link href='/'>
        <a>DnD Toolkit</a>
      </Link>
    </Logo>
    <Nav />
  </StyledHeader>
)

export default Header
