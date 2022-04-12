let getTip = document.getElementById("getBtn");
let titleTip = document.getElementById("dataTitle");
let linkTip = document.getElementById("dataLink");

const tips = [
  {
    title: "6 Useful Bookmarklets to Boost Web Development",
    link: "https://css-tricks.com/web-development-bookmarklets/",
  },
  {
    title: "A Complete Guide to Flexbox",
    link: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
  },
  {
    title: "Media Queries for Standard Devices",
    link: "https://css-tricks.com/snippets/css/media-queries-for-standard-devices",
  },
  {
    title: "A Complete Guide to the Table Element",
    link: "https://css-tricks.com/complete-guide-table-element/",
  },
  {
    title: "Centering in CSS: A Complete Guide",
    link: "https://css-tricks.com/centering-css-complete-guide/",
  },
  {
    title: "A Complete Guide to Links and Buttons",
    link: "https://css-tricks.com/a-complete-guide-to-links-and-buttons/",
  },
];

// -----------
var lastIndex;

function randomNumber() {
  randomIndex = Math.floor(Math.random() * tips.length);

  while (randomIndex == lastIndex) {
    randomIndex = Math.floor(Math.random() * tips.length);
  }

  lastIndex = randomIndex;
}

function generateTip() {
  randomNumber();
  titleTip.innerHTML = tips[randomIndex].title;
  linkTip.setAttribute("src", tips[randomIndex].link);
}

// ----------
