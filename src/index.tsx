import * as React from 'react'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import juice from 'juice'

const HtmlTemplate = ({ body, styles, title }: any) => `
<!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      ${styles}
    </head>
    <body style="margin:0">
      <div id="app">${body}</div>
    </body>
</html>
`

const emailify = <T extends {}>(Component: React.ComponentType<T>) => (props: T, title: string) => {
  const sheet = new ServerStyleSheet()

  const body = renderToString(sheet.collectStyles(<Component {...props} />))
  const styles = sheet.getStyleTags()

  return juice(HtmlTemplate({ body, styles, title }))
}

export default emailify
