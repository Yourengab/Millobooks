function updateTime() {
  const timeText = document.querySelector("#current-time");
  const currentTime = new Date();
  timeText.innerText = currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

updateTime();
setInterval(updateTime, 10);

$(".slider").slick({
  dots: true,
  speed: 300,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

const searchBtn = document.querySelector("#search-btn");
const inputKeyword = document.querySelector("#search-box");
searchBtn.addEventListener("click", async function () {
  const searchedBooks = await getBooks(inputKeyword.value);
  console.log(searchedBooks);
  displayBooks(searchedBooks);
});

// Get Books
function getBooks(keyword) {
  return fetch("https://www.googleapis.com/books/v1/volumes?q=" + keyword + "&key=AIzaSyD952R5dTCubXZWsul-S7TiGwzsY9IF0uw")
    .then((response) => response.json())
    .then((response) => response.items);
}

function displayBooks(book) {
  const searchContainer = document.querySelector(".searchBox");
  let booksCard = "";
  book.forEach((bookList) => (booksCard += mappedBooksInContainer(bookList)));
  searchContainer.innerHTML = booksCard;
}

function mappedBooksInContainer(bookList) {
  return `<div class="mb-10 bg-white p-4 rounded-xl shadow-xl" id="books-box">
  <img src="${bookList.volumeInfo.imageLinks.thumbnail}" alt="books" class="shadow-xl w-64 h-80 rounded-xl" />
  <div class="mt-6">
    <h2 class="uppercase text-lg font-bold text-main tracking-tight w-64">${bookList.volumeInfo.authors}</h2>
    <p class="capitalize mb-8 mt-2 text-xl font-semibold text-dark tracking-tight w-64">${
      bookList.volumeInfo.title.length > 30 ? (bookList.volumeInfo.title = bookList.volumeInfo.title.substring(0, 30) + "...") : bookList.volumeInfo.title
    }</p>
    <span class="py-2 px-4 bg-gray-300 rounded-full max-w-lg text-dark tracking-tight">Genre & Agak Panjang</span>
    <div class="flex gap-6 justify-between mt-10">
      <button class="w-full bg-main rounded-full text-white h-12 font-medium">Synopsis</button>
      <button class="border px-4 border-dark  rounded-fullh-12 rounded-full text-dark font-medium"><i class="fa-solid fa-bookmark"></i></button>
    </div>
  </div>
</div>`;
}
