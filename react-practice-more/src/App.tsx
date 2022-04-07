import { createGlobalStyle, ThemeProvider } from "styled-components"
import Router from "./Router"
import { ReactQueryDevtools } from "react-query/devtools"
import { HelmetProvider } from "react-helmet-async"
import { useSelector } from 'react-redux'
import { RootState } from "./modules"



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

  //아직 좀 엉성함! 이름만 가져와서 비교해서 바꾸는것도 그렇고, 이름비교할때도 여러테마로 할수있게 비교해야함! =>해결
  //redux안에 테마정보 넣으면 될듯하다!>해결
  //현재 이해한 바로는, Coins에서 ThemeSelectorContainer를 불러와 ThemeSelectorContainer에서 Themeselector를 불러와 버튼을 가져와 생성한다
  //원래 dispatch는 action을 인자로 던지지만 ThemeSelectorContainer를 통해 함수를 던지게 함.(ThemeSelectorContainer의 용도)
  //+useDispatch가 dispatch를 함수 컴포넌트에서 사용할수있게 해줌
  //함수형 컴포넌트에서는 useSelector() 훅을 사용해서 store에 접근하여 변수를 가져올 수 있고 useDispatch() 훅을 통하여 직접 action creator들을 dispatch 시킬 수 있다.
  //+다른사용법 : const countPlusTwo = useSelector(state => state.counter.value + 2) (불확실)
  //https://byul91oh.tistory.com/438

  //src/index에서 스토어를 지정해줬고(하위컴포넌트들 사용가능) 이때문에 useSelector로 스토어의 데이터 조회가능, 아래 ThemeInfo로 씀

  //보통 Themeselector는 대부분 state를 가지고 있지않으며 가지고있을경우 UI에 관련된 것이여야함
  //그래서 UI에 관련된 색깔정보를 가져온것.
  //자세한내용:https://velopert.com/3346   /   내 깃블로그에도 포스팅함.





  //Themeselector에는 

  const ThemeInfo = useSelector((state: RootState) => state.ThemeSelector.Rstate);

  //console.log(useSelector(state => state));

  return (
    <>
      <HelmetProvider>
        <ThemeProvider theme={ThemeInfo}>
          <GlobalStyle />
          <Router />
          <ReactQueryDevtools initialIsOpen={true} />
        </ThemeProvider>

      </HelmetProvider>

    </>
  )
}

export default App
