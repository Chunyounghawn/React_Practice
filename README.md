웹페이지를 만들며 배운 자세한 것들은 모두 블로그를 통해 정리하였으며, </br>
'익힌것'에는 주요 포인트 세가지만 적어놓았음.  

## Coin_Tracker
![image](https://user-images.githubusercontent.com/83907810/160234372-28e08fdf-a998-467f-abd8-0fcaa876e046.png)  
[api](https://api.coinpaprika.com/v1/tickers)  
open Api 를 사용한 웹 사이트. 가벼운 기능들로만 구현했으며 기초 다지기용 코인 가격사이트.  

### 익힌것
useEffect,useState 등 리액트 Hook의 핵심기능들  
boolean을 이용한 로딩페이지  
api를 활용한 데이터처리방법  

## Movie_Chart
![ezgif com-gif-maker](https://user-images.githubusercontent.com/83907810/179976676-5f12e6de-f18f-4d76-998d-08aa5a53edda.gif) 
Route 기능과 css를 추가해 만든 영화 랭킹 사이트.

### 익힌것
간단한 css 기초  

dom v6에서의 Route 사용법
- 기존에 Switch로 Route 컴포넌트들을 감싸줬다면, Routes로 Route 컴포넌트 들을 감싸줌.
- 중첩 라우트 가능
- useHistory훅 -> useNavigate훅으로 변경 (사용법은 거의 비슷함)

async, await를 사용한 비동기 함수  
- async가 붙은 함수는 프라미스를 반환하고, 프라미스가 아닌 것은 프라미스로 감싸 반환한다.
- await 키워드를 만나면 프라미스가 처리(settled)될 때까지 기다린다.
=> 가독성 up, 콜백문제 해결

## Coin_Info(준비중)

