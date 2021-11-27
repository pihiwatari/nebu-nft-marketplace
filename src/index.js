import "./styles/styles.css";
import nebus from "./nebus.js";

// closed menu icon
const $hamMenu = document.querySelector("#menu-icon");

//mobile nav menu
const $closemobileMenuIcon = document.querySelector("#close-menu");
const $navigation = document.querySelector("#navigation");

//close open menu listeners

$hamMenu.addEventListener("click", () => {
  $navigation.classList.toggle("hidden");
});
$closemobileMenuIcon.addEventListener("click", () => {
  $navigation.classList.toggle("hidden");
});

//feature section selector
const $featureSection = document.getElementById("nebu-menu");

//card html template
const createTemplate = (nebu) => {
  const article = document.createElement("article");
  article.classList.add(
    "flex",
    "flex-col",
    "mx-auto",
    "bg-purple-100",
    "shadow-xl",
    "card-outline"
  );

  const template = `
    <figure class="mt-8 card-image-outline">
      <img
        src="${nebu.imageUrl}"
        alt="${nebu.alt}"
        class="mx-auto"
      />
    </figure>
    <div class="flex flex-col sm:flex-row p-4">
      <h4
        class="
          flex-1
          mb-4
          sm:mb-0 sm:mr-4
          p-2
          text-2xl
          font-bold
          text-black
        "
      >
        ${nebu.name}
      </h4>
      <a
        href="${nebu.address}"
        class="text-white link-button"
        >Buy now</a
      >
    </div>
  `;

  article.innerHTML = template;

  return article;
};

//append to feature section

nebus.forEach((item) => {
  const newNebu = createTemplate(item);
  $featureSection.appendChild(newNebu);
});
