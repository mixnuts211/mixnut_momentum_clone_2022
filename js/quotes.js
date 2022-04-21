const quotes = [
  {
    quote : "하기 싫어도 해라. 감정은 사라지고 결과만 남는다.",
    author : "-"
  },
  {
    quote : "인생은 원래 불완전하고 불안정하다.",
    author : "-"
  },
  {
    quote : "아무리 마음이 아파도 뒤돌아보지 마세요. 정말로 뒤돌아보고 싶다면 터널을 완전히 벗어난 뒤에야 돌아서서 보세요.",
    author : "이동진 - 시네마 칼럼 '터널을 지날 때' 중"
  },
  {
    quote : "모든 우거진 나무의 시작은 기다림을 포기하지 않은 씨앗이었다.",
    author : "호프 자런 - 도서 '랩걸' 중"
  },
  {
    quote : "두려움이 지나가고 나면 나는 마음의 눈으로 그것이 지나간 길을 살펴보리라. 두려움이 사라진 곳에는 아무것도 없을 것이다. 오직 나만이 남아 있으리라.",
    author : "프랭크 허버트 - 도서 '듄' 중"
  },
  {
    quote : "너무 오랫동안 닫혀있어서 벽인 줄 알고 있지만 사실은 문이다.",
    author : "봉준호 - 영화 '설국열차' 중"
  },
  {
    quote : "너 스스로를 믿을 때, 네가 어디까지 갈 수 있을지는 아무도 상상할 수 없거든",
    author : "NIKE - 광고 '너라는 위대함을 믿어' 중"
  }
];

const quoteContent = document.querySelector(".quote-content");
const quoteAuthor = document.querySelector(".quote-author");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quoteContent.innerText = todayQuote.quote;
quoteAuthor.innerText = todayQuote.author;