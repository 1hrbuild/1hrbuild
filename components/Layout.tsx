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
      <link rel="icon" href="./favicon.png" />
    </Head>
    <GlobalStyle />
    <div className="overlay"></div>
    <main>
      <header>
        <div className="logo">
          <Link href="/">
            <button aria-label="Go to homepage">
              <img src="/1hrb3.png" alt="1hourbuild logo"/>
            </button>
          </Link>
        </div>
        <h1 className="title">{title}</h1>
      </header>
      {children}
      <footer className="high">
        © 2020 1hrbuild{" "}
        <a href="https://twitter.com/1hrbuild" target="__blank" aria-label="Twitter">
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
