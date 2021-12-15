import nebuLogo from "../styles/images/nebu_logo.png";

const Header = function () {
  const view = /*html*/ `
    <nav
      class="flex justify-between items-center flex-wrap sm:flex-nowrap h-auto p-4 font-bold bg-nebu-purple text-nebu-purple-darkest"
    >
      <a href="#/" class="block h-full">
        <img src="${nebuLogo}" alt="Nebu logo" class="w-32" />
      </a>
      <button class="
        p-1 header__menu-btn
        " 
        id="open-menu">
        <div class="
          bg-nebu-purple-darkest h-1 mx-0 my-1"></div>
      </button>
      <ul class="
        hidden flex-col align-center flex-grow-1 w-full text-center
        sm:flex sm:flex-row sm:flex-grow-0 sm:w-auto
        transform-gpu
        transition-all
        " 
        id="link-list">
        <li class="text-center">
          <a href="#/" 
            id="#/"
            class="
            inline-block w-min mx-auto mt-2 rounded-md px-4 py-2
            sm:mt-0
            transition-all
            hover:text-white hover:bg-nebu-purple-darkest hover:scale-110
            ">Home</a>
        </li>
        <li>
          <a href="#/about"
            id="#/about" 
            class="
            inline-block w-min mx-auto mt-2 rounded-md px-4 py-2
            sm:mt-0
            transition-all
            hover:text-white hover:bg-nebu-purple-darkest hover:scale-110
            ">About</a>
        </li>
        <li>
          <a href="#/gallery" 
            id="#/gallery"
            class="
            inline-block w-min mx-auto mt-2 rounded-md px-4 py-2
            sm:mt-0
            transition-all
            hover:text-white hover:bg-nebu-purple-darkest hover:scale-110
            ">Gallery</a>
        </li>
      </ul>
    </nav>
  `;

  return view;
};

export default Header;
