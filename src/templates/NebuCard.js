//card html template
const NebuCard = (nebu) => {
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
        width="300px"
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

export default NebuCard;
