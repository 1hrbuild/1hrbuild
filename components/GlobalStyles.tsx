import * as React from "react"

const GlobalStyle: React.FunctionComponent = () => (
  <style jsx>
    {`
      body {
        color: #fff8f0;
        background: #0b132b;
        font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
          "Helvetica Neue", sans-serif;
        font-size: 22px;
        text-size-adjust: 100%;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        font-variant-numeric: lining-nums;
        font-feature-settings: "lnum";
        letter-spacing: -0.004em;
        line-height: 1.58em;
        font-weight: 400;
      }

      h1 {
        line-height: 1.5em;
      }

      main {
        color: #fff8f0;
        background: rgba(11, 19, 43, 0.6);
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        min-height: 100%;
        z-index: 99;
        padding: 0 0.5em;
        box-sizing: border-box;
      }

      header,
      footer,
      article {
        max-width: 1280px;
        margin: auto;
      }

      footer {
        padding: 0.5em;
        text-align: center;
        box-sizing: border-box;
      }

      .iframe-wrapper {
        display: flex;
        padding: 0;
        margin-top: 1em;
        margin-bottom: 1em;
      }

      iframe {
        width: 90vw;
        height: calc(90vw / 1.77);
        margin: auto;
        opacity: 0.8;
      }

      a {
        color: #87bcde;
      }
      a:visited {
        color: #dea987;
      }

      .logo {
        float: left;
        padding-top: 5px;
        margin-top: -4em;
      }

      .logo img {
        width: 60px;
      }

      .logo button {
        background-color: transparent;
        box-shadow: none;
      }
      .title {
        text-align: center;
        /* position: relative;
            left: -32px;  */
        margin-right: 32px;
        margin-top: 1.5em;
        font-size: 3em;
      }

      .right {
        transition: all 0.3s cubic-bezier(0.6, -0.28, 0.735, 0.045);
      }

      .right:hover {
        transform: scale(1.01) translate(10px);
      }

      .bigly {
        transition: all 0.3s cubic-bezier(0.6, -0.28, 0.735, 0.045);
      }

      .bigly:hover {
        transform: scale(1.025) translate(2px, -2px);
      }

      .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        overflow: visible;
        background-image: url("./tea.jpg");
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-repeat: no-repeat;
        background-size: cover;
      }

      .overlay:after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        /*  background: rgba(11, 19, 43, 0.9);*/
        background: rgba(11, 19, 43, 0.6);
        box-sizing: border-box;
      }

      section {
        border-radius: 2px;
        padding: 0.5em;
        padding-bottom: 1em;
        /*padding: 1em;
        padding-top: 0.5em;*/
      }

      .block {
        display: block;
        margin: 0.5em 0;
        width: 300px;
      }

      .accent {
        background: rgba(6, 20, 53, 0.6);
      }

      button,
      input,
      textarea {
        border: none;
        border-radius: 2px;
        box-sizing: border-box;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
          "Helvetica Neue", sans-serif;
        text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        font-variant-numeric: lining-nums;
        font-feature-settings: "lnum";
      }
      input,
      textarea {
        background: #fff8f0;
        color: #0b132b;
        padding: 0.25em;
        font-size: 0.75em;
      }
      button {
        padding: 0.25em;
        font-size: 1em;
      }

      ul {
        margin: 0.5em 0;
      }
      button.primary {
        background: #87bcde;
        color: #0b132b;
      }
      button.secondary {
        background: #acb1c4;
      }
      button.primary:hover {
        background: #d5d8e1;
        color: #0b132b;
      }
      button.secondary:hover {
        background: #d5d8e1;
      }
      button:focus,
      a:focus,
      input:focus,
      textarea:focus {
        outline-color: #87bcde;
      }
      .base {
        background: rgba(48, 60, 108, 0.9);
      }
      .high {
        background: rgba(130, 138, 166, 0.5);
        margin: 1em auto;
      }
      .higher {
        background: rgba(172, 177, 196, 0.6);
      }
      .highest {
        background: rgba(213, 216, 225, 0.6);
      }
      .shadow {
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
      }

      .thumbnail-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        justify-content: space-around;
      }

      .thumbnail {
        flex-basis: 80vw;
        text-align: center;
      }

      .thumbnail-active {
        opacity: 0.2;
      }

      .thumbnail button {
        width: 80vw;
        border: 0;
        padding: 0;
        background-color: transparent;
      }

      .thumbnail button .bigly {
        transition: all 0.1s cubic-bezier(0.25, 0.8, 0.25, 1);
      }

      .thumbnail-text {
        width: 80vw;
        text-align: left;
        margin: -1em auto 1em auto;
      }

      .image-thumbnail {
        width: 80vw;
      }

      .image-thumbnail-active {
        border: 3px solid gold;
      }

      .footer-icon {
        width: 30px;
        margin-left: 1em;
        margin-bottom: -0.25em;
      }

      @media only screen and (max-device-width: 480px) {
        main {
          padding: 0;
        }

        h1 {
          line-height: 1.1em;
        }

        .logo {
          display: block;
          width: 100%;
          text-align: center;
          margin-top: -3em;
        }

        .title {
          text-align: center;
          margin-right: 0;
          margin-bottom: 0;
          font-size: 3em;
          padding: 0.25em;
          padding-top: 0.5em;
        }

        .high {
          margin: 0;
        }
        .thumbnail-container {
          padding: 0;
        }

        .thumbnail::after {
          content: "";
          width: 90vw;
          display: block;
          position: absolute;
          left: 0;
          border-bottom: 4px solid rgba(213, 216, 225, 0.6);
        }
        .thumbnail {
          margin: 1em 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .thumbnail-text {
          padding: 1em;
        }
      }

      @media only screen and (min-device-width: 480px) {
        /*section {
          padding: 0.5em;
          padding-bottom: 1em;
        }*/

        .thumbnail {
          flex-basis: 25vw;
        }

        .thumbnail button {
          width: 25vw;
        }

        .thumbnail-text {
          width: 25vw;
          margin: -1em auto 1em auto;
        }

        .thumbnail-text p {
          font-size: 0.9em;
          line-height: 1.5em;
        }

        .image-thumbnail {
          width: 25vw;
        }
      }
    `}
  </style>
)

export default GlobalStyle
