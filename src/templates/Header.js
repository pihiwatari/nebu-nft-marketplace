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
      <ul class="hidden sm:flex flex-col sm:flex-row align-center flex-grow-1 sm:flex-grow-0 w-full sm:w-auto" id="link-list">
        <li class="w-min mx-auto mt-2 sm:mt-0 sm:px-2">
          <a href="#/">Home</a>
        </li>
        <li class="w-min mx-auto mt-2 sm:mt-0 sm:px-2">
          <a href="#/about">About</a>
        </li>
        <li class="w-min mx-auto mt-2 sm:mt-0 sm:px-2">
          <a href="#/gallery">Gallery</a>
        </li>
      </ul>
    </nav>
  `;

  return view;
};

export default Header;
