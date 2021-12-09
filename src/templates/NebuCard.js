//card html template
const NebuCard = (nebu) => {
  const template = /*vue-html*/ `
    <article class="flex flex-col mx-auto bg-white shadow-xl card-outline border-black">
      <figure class="mt-8">
      <img
        src="${nebu.imageUrl}"
        alt="${nebu.alt}"
        class="mx-auto"
        width="300px"
      />
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
        <a href="${nebu.address}"class="text-white link-button bg-nebu-red hover:bg-nebu-red-darker">
            Buy now
        </a>
      </div>
    </article>
  `;

  return template;
};

export default NebuCard;
