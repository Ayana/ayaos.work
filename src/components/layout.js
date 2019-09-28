import React from "react"
import Nav from "../components/nav"
import "./scss/style.scss"


class Layout extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <div>
          <Nav />
        </div>
      )
    } else {
      header = (
        <div>
          <Nav />
        </div>
      )
    }
    return (
      <div>
        <div>
          <header>
            <div className="container">
              {header}
            </div>
          </header>
          <main>{children}</main>
          <footer className="container" style={{
            textAlign:'center',
            margin: `4em auto 1em`,
            }}>
            © {new Date().getFullYear()}
          </footer>
        </div>
      </div>
    )
  }
}

export default Layout
