const Footer = () => {
  const view = /*vue-html*/ `
    <div
      class="
        flex-shrink-0 flex flex-col
        items-center
        w-full
        mx-auto
        px-8
        pt-8
        text-center text-white
        bg-nebu-purple-darkest
      "
    >
      <h3 class="text-center text-lg">
        Suscribe to our newsletter and get the latest news about our project.
      </h3>
      <form action="" class="flex flex-col items-center mt-8">
        <input
          type="email"
          placeholder="example@nebunfts.com"
          autocomplete="email"
          class="w-full h-12 mb-5 p-2 rounded-lg text-center text-gray-700"
        />
        <button type="submit" class="w-3/4 mt-5 link-button bg-nebu-red hover:bg-nebu-red-darker">
          Subscribe me
        </button>
      </form>
      <p class="mt-8 mb-1 text-xs">
        Made it with 💜 by
        <a href="https://github.com/pihiwatari" class="text-pink-800 text-bold"
          >pihiwatari</a
        >, let's get in touch.
      </p>
    </div>
  `;
  return view;
};

export default Footer;
