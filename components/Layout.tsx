import * as React from "react"
import Link from "next/link"
import Head from "next/head"

import GlobalStyle from "./GlobalStyles"

type Props = {
  title: string
}

const Layout: React.FunctionComponent<Props> = ({ children, title }) => (
  <React.Fragment>
    <Head>
      <title>1hrbuild | {title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="google-site-verification"
        content="G2bP_qvOinbHxcUiM2u6LQnkA8_ZFyYuFnoYQF4BPlw"
      />
      <link rel="icon" href="./favicon.png" />
    </Head>
    <GlobalStyle />
    <div className="overlay"></div>
    <main>
      <header>
        <div className="logo">
          <Link href="/">
            <button>
              <img src="/1hrb3.png" />
            </button>
          </Link>
        </div>
        <h1 className="title">{title}</h1>
      </header>
      {children}
      <footer className="high">
        © 2020 1hrbuild{" "}
        <a href="https://twitter.com/1hrbuild" target="__blank">
          <img
            className="footer-icon"
            src="Twitter_Social_Icon_Circle_White.png"
          />
        </a>
      </footer>
    </main>
  </React.Fragment>
)

export default Layout
