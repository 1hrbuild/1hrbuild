import React from "react"
import Document, { Head, Main, NextScript } from "next/document"

import { GATrackingID } from "../analytics"

export default class extends Document {
  render() {
    return (
      <html>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GATrackingID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GATrackingID}');
          `
            }}
          />
          <meta
            name="google-site-verification"
            content="G2bP_qvOinbHxcUiM2u6LQnkA8_ZFyYuFnoYQF4BPlw"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
