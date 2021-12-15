//card html template
const NebuCard = (nebu) => {
  const template = /*html*/ `
    <article class="
      flex flex-col mx-auto bg-white shadow-xl card-outline border-black
      transform-gpu transition-all
      hover:scale-105
      ">
      <figure class="mt-8">
        <a href="#/${nebu.id}">
          <img
            src="${nebu.image_preview_url}"
            alt="${nebu.name}"
            class="mx-auto nebu-item"
            width="300px"
          />    
        </a>
      </figure>
      <div class="flex flex-col p-4 text-center">
        <h4
          class="
            flex-1
            mb-4
            p-2
            text-2xl
            font-bold
            text-black
          "
        >
          ${nebu.name}
        </h4>
        <a href="${nebu.permalink}"class="text-white link-button bg-nebu-red hover:bg-nebu-red-darker">
            Buy now
        </a>
      </div>
    </article>
  `;

  return template;
};

export default NebuCard;
