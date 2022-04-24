const searchForm = document.querySelector(".search-wrap");
const searchInput = document.querySelector(".search-write");

function searchHandler(e){
    e.preventDefault();
    const searchKeyWord = searchInput.value;
    searchInput.value = "";
    location.href = window.open(`https://google.co.kr/search?q=${searchKeyWord}`, "_blank");
}

searchForm.addEventListener("submit", searchHandler);