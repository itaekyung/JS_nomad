const quotes = [
  { quote: "고기는 맛있다.", author: "윤지현" },
  { quote: "연애의 결말은 이별 아니면 결혼이다.", author: "양인서" },
  { quote: "결혼과 죽음은 미룰수록 좋다.", author: "김정우" },
  { quote: "피지컬 100 다들 봄?", author: "인기훈" },
  {
    quote:
      "절대 어제를 후회하지 마라. 인생은 오늘의 내 안에 있고 내일은 스스로 만드는것이다.",
    author: "L론허바드",
  },
  {
    quote:
      "좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다.",
    author: "단테",
  },
  { quote: "문제점을 찾지 말고 해결책을 찾으라", author: "헨리포드" },
  {
    quote:
      "도중에 포기하지 말라. 망설이지 말라. 최후의 성공을 거둘 때까지 밀고 나가자.",
    author: "헨리포드",
  },
  {
    quote: "실패는 잊어라 그러나 그것이 준 교훈은 절대 잊으면 안된다.",
    author: "하버트 개서",
  },
  {
    quote:
      "너무 소심하고 까다롭게 자신의 행동을 고민하지 말라 . 모든 인생은 실험이다 . 더많이 실험할수록 더나아진다",
    author: "랄프 왈도 에머슨",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

//소수점 없애려면 round = 반올림, ceil = 올림, floor = 내림,
//Math.floor(Math.random()*10)
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
