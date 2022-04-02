import { createGlobalStyle, ThemeProvider } from "styled-components"
import Router from "./Router"
import { ReactQueryDevtools } from "react-query/devtools"
import { HelmetProvider } from "react-helmet-async"
import { createStore } from "redux"
import rootReducer from "./modules"
import { RootStateOrAny, Provider } from "react-redux"
import { darkTheme, lightTheme } from "./theme"

import { useSelector } from 'react-redux'



const GlobalStyle = createGlobalStyle`
//https://fonts.google.com
@import url('https://fonts.googleapis.com/css2?family=League+Gothic&display=swap');

  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
//-----위에는 resetCss 임포트하지않고 소스가져온것, 아래는 내가 추가한것----------
*{
  box-sizing: border-box;
}
body{
  font-weight: 300;
  font-family: 'League Gothic', sans-serif;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  line-height: 1.2;
}
a{ //a가 html에 <a herf 랑 같은거임
  text-decoration: none;
  color:inherit;
}
`
function App() {

  const ThemeName = useSelector((state: RootStateOrAny) => state.ThemeSelector.theme)
  //아직 좀 엉성함! 이름만 가져와서 비교해서 바꾸는것도 그렇고, 이름비교할때도 여러테마로 할수있게 비교해야함!
  //redux안에 테마정보 넣으면 될듯하다!
  return (
    <>
      <HelmetProvider>
        <ThemeProvider theme={ThemeName == "darkTheme" ? darkTheme : lightTheme}>
          <GlobalStyle />
          <Router />
          <ReactQueryDevtools initialIsOpen={true} />
        </ThemeProvider>

      </HelmetProvider>

    </>
  )
}

export default App
