import React from 'react'
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import GlobalStyle from "../../styles/global";
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>,
        ],
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" key={1} />

          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          {/* <title>Ioasys | Transformação digital feita por pessoas, para pessoas</title> */}

          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" />

          <link rel="icon" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAyVBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiSf9jAAAAQnRSTlMAev0YBgP+DBwBV2uSCUjBRYYzX7TYORMQTPOAqNSycMk/l+Xr4lrp3kKbu6PMzzZkJBV2jcX49tkvT64gK9v5Uu//nwLUAAACIUlEQVQYGe3B13KbUBQF0A2iCgTqvfdiq7h3J/v/Pyr3gCwLpCR+y2TGa+Hb/2IQ8uAywHm50nXgIpZbWjzWtnGG80aybEDU+kzpODj1TOFBsdc88VbDiSZFF0qbsclS04Zzxsou0sYUbQANRuY/XIigwkgJaTcUDcDtUIQ29uwuxcRASq5N3vcALCgqdRwYfYosTjjVOpQhxQJHihaVNtLMqVaF8kDlFgllKjMom1bJwJ7bJdkDDJ2KhgSPogaULPLWRKxKpWkgQ5FFQkDxCoyoNBDLUmTgUDwhYUDxCpNii1hAsYNN4SEhS/GCOkUWsSJFHhhTuUCCT+XOxCNFHjGbogeUqTRrOGKPqdwCU4oX7I2oPANbiiWO3FBowJLKvYm9NpWmjXqTwsNBVqfy7sCcUVnhw5ZiCxQorEIOEaNlUQyBJ4prfKjfUamYsOeMjFqbTKaozRmZ1eD2qegODtoUHlC95wk9D0wpVvhUpGjugMY7U/QSkBlT5HGkS7GuA4sZE342gFxIEeLY7o4itIHMhc4D69kBjDKF/oiEa0b6DoBXf8LIaPgIoBYy0kKSW2Zk/ATxEkynjR1EMGIkNJGS6zO2GuBIsctY5wonrtbc62hVG0puo11y78HBGfaKn0YPlYnFg/4VzjJbOs+ybgz8zuaSZ3QG+AMzu2ZKpWTiL4p+hQfzYdXFVziBV/D9Qi9w8FVO4BV8v9ALHHz7N34Bhp21rbQHddoAAAAASUVORK5CYII=" key={2} />

          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossOrigin="anonymous"
          ></link>

          <link
            href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <GlobalStyle />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
