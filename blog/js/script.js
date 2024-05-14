// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixednav = header.offsetTop;
  const backtop = document.querySelector("#backtop");

  if (window.pageYOffset > fixednav) {
    header.classList.add("navbar-fixed");
    backtop.classList.remove("hidden");
  } else {
    header.classList.remove("navbar-fixed");
    backtop.classList.add("hidden");
  }
};

// hamburger
const hamburger = document.querySelector("#hamburger");
const navmenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navmenu.classList.toggle("hidden");
});

// click luar hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navmenu) {
    hamburger.classList.remove("hamburger-active");
    navmenu.classList.add("hidden");
  }
});

// Pagination
// let currentPage = 1;
// const itemsPerPage = 3;
// const allItems = document.querySelectorAll(".blogCard");
// const totalPages = Math.ceil(allItems.length / itemsPerPage);

// function showPage(pageNumber) {
//   const startIndex = (pageNumber - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   allItems.forEach((item, index) => {
//     if (index >= startIndex && index < endIndex) {
//       item.classList.remove("hidden");
//       item.classList.add("block");
//     } else {
//       item.classList.add("hidden");
//       item.classList.remove("block");
//     }
//   });
//   document.getElementById("page-info").textContent = `${pageNumber} / ${totalPages}`;
// }

// function changePage(direction) {
//   const newPage = currentPage + direction;
//   if (newPage > 0 && newPage <= totalPages) {
//     currentPage = newPage;
//     showPage(currentPage);
//   }
// }

// document.addEventListener("DOMContentLoaded", () => {
//   showPage(1);
//   document.querySelector(".page-link.prev").addEventListener("click", () => changePage(-1));
//   document.querySelector(".page-link.next").addEventListener("click", () => changePage(1));
// });

// my blog system
// document.addEventListener("DOMContentLoaded", function () {
//   const blogCards = document.querySelectorAll(".blogCard");
//   const showMoreButton = document.getElementById("showMore");
//   const closeCardsButton = document.getElementById("closeCards");
//   let visibleCards = 3;

//   // Fungsi untuk menampilkan blog cards
//   function updateDisplay() {
//     blogCards.forEach((card, index) => {
//       if (index < visibleCards) {
//         card.classList.remove("hidden");
//         card.classList.add("block");
//       } else {
//         card.classList.add("hidden");
//         card.classList.remove("block");
//       }
//     });
//   }

//   // Event listener untuk tombol show
//   showMoreButton.addEventListener("click", () => {
//     visibleCards = Math.min(blogCards.length, visibleCards + 3); // Tambahkan 3 kartu lagi
//     updateDisplay();
//   });

//   // Event listener untuk tombol close
//   closeCardsButton.addEventListener("click", () => {
//     visibleCards = 3; // Reset ke hanya 3 kartu yang ditampilkan
//     updateDisplay();
//   });

//   updateDisplay(); // Panggil pada saat load untuk setup awal
// });

// dark toggle
const dtoggle = document.querySelector("#dtoggle");
const ltoggle = document.querySelector("#ltoggle");
const backli = document.querySelector("#backiconlight");
const backda = document.querySelector("#backicondark");
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");

    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");

    localStorage.theme = "light";
  }

  if (localStorage.theme === "dark") {
    dtoggle.classList.remove("hidden");
    ltoggle.classList.add("hidden");
    backda.classList.remove("hidden");
    backli.classList.add("hidden");
  } else {
    dtoggle.classList.add("hidden");
    ltoggle.classList.remove("hidden");
    backda.classList.add("hidden");
    backli.classList.remove("hidden");
  }
});
