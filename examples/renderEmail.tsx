import * as React from 'react'
import styled from 'styled-components'
import emailify from '../src'

interface Props {
  message: string
}

// You can use styled-components, which will be inline in the email template.
const EmailContainer = styled.div`
  font-weight: bold;
  color: #888;
`

// This is a email component, which can be reused across your project
const Template = ({ message }: Props) => (
  <EmailContainer>{message}</EmailContainer>
)

// Here we emailify the template with `emailify` HOC.
const emailTemplate = emailify(Template)

// Here we compile React Compnent to string
// by invoking emailify HOC with template vars and title.
const message = 'Hello World'
const title = 'Hi from React Emailify'
const emailString = emailTemplate({ message }, title)

console.log(emailString)

// The output should be like this:
//
// <!DOCTYPE html>
//   <html>
//     <head>
//       <title>Hi from React Emailify</title>
//
//     </head>
//     <body style="margin:0">
//       <div id="app"><div class="sc-bdVaJa cUChTh" style="font-weight: bold; color: #888;">Hello World</div></div>
//     </body>
// </html>
