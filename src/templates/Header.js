const Header = () => {
  const view = /*vue-html*/ `
    <div
      class="
        flex
        justify-between
        items-center
        h-16
        purple-bg
      "
    >
      <!-- logo image -->
      <a href="#" class="inline-block h-full">
        <img
          src="./assets/images/nebu_logo.png"
          alt="Nebu logo"
          class="h-full p-2 sm:p-4"
        />
      </a>
      <nav>
        <ul class="">
          <li>
            <a href="#/about" class="">About</a>
          </li>
        </ul>
      </nav>
    </div>
  `;
  return view;
};

export default Header;
