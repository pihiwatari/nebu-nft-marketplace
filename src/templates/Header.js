const links = [
  {
    destination: "Home",
    href: "/",
  },
  {
    destination: "About",
    href: "/about",
  },
];

const Header = () => {
  const view = /*vue-html*/ `
    <div
      class="
        flex
        justify-between
        items-center
        h-16
        bg-nebu-purple
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
      <nav class="">
        <ul class="flex flex-col sm:flex-row sm:justify-between text-nebu-purple-darkest font-bold">
          <li class="mx-4">
            <a href="#/" class="">Home</a>
          </li>
          <li class="mx-4">
            <a href="#/about" class="">About</a>
          </li>
        </ul>
      </nav>
    </div>
  `;
  return view;
};

export default Header;
