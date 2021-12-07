const Header = () => {
  const view = /*vue-html*/ `
    <div
      class="
        flex
        justify-between
        items-center
        h-16
        md:border-b-2 md:border-purple-900
        bg-purple-100
      "
    >
      <!-- logo image -->
      <a href="index.html" class="inline-block h-full"
        ><img
          src="./assets/images/nebu_logo.png"
          alt="Nebu logo"
          class="h-full p-2 sm:p-4"
      /></a>

      <!-- mobile navigation bar -->
      <nav
        id="navigation"
        class="
          absolute
          lg:static
          z-10
          inset-0
          flex flex-col
          lg:flex-row
          items-center
          lg:items-end
          justify-center
          lg:h-full
          bg-purple-100 bg-opacity-95
          lg:bg-opacity-0
        "
      >
        <!-- hamburger menu closed -->
        <div id="close-menu" class="lg:hidden h-10 w-10">
          <div
            class="
              h-1
              w-full
              bg-purple-900
              transform-gpu
              rotate-45
              origin-center
              translate-y-1
            "
          ></div>
          <div
            class="
              h-1
              w-full
              bg-purple-900
              transform-gpu
              -rotate-45
              origin-center
            "
          ></div>
        </div>
        <ul
          class="
            flex flex-col
            lg:flex-row
            items-center
            justify-center
            w-screen
            lg:w-auto
            p-8
            lg:p-0
            text-xl
            font-bold
            text-purple-900
          "
        >
          <li class="w-full mt-4 mx-auto">
            <a
              href="#nebu-menu"
              class="
                block
                mx-auto
                lg:p-2 lg:pb-0 lg:border-2
                border-b-2
                lg:border-b-0
                border-purple-900
                lg:rounded-t-xl
                text-center
                focus:bg-purple-600 focus:text-white
                hover:bg-purple-900 hover:text-white
                transform-gpu
                transition-all
                duration-300
              "
              >MENU</a
            >
          </li>
          <li class="w-full mt-4 mx-auto">
            <a
              href="#nebu-menu"
              class="
                block
                mx-auto
                lg:p-2 lg:pb-0 lg:border-2
                border-b-2
                lg:border-b-0
                border-purple-900
                lg:rounded-t-xl
                text-center
                focus:bg-purple-600 focus:text-white
                hover:bg-purple-900 hover:text-white
                transform-gpu
                transition-all
                duration-300
              "
              >ABOUT</a
            >
          </li>
          <li class="w-full mt-4 mx-auto">
            <a
              href="#nebu-menu"
              class="
                block
                mx-auto
                lg:p-2 lg:pb-0 lg:border-2
                border-b-2
                lg:border-b-0
                border-purple-900
                lg:rounded-t-xl
                text-center
                focus:bg-purple-600 focus:text-white
                hover:bg-purple-900 hover:text-white
                transform-gpu
                transition-all
                duration-300
              "
              >NEBUNIVERSE</a
            >
          </li>
          <li class="w-full mt-4 mx-auto">
            <a
              href="#nebu-menu"
              class="
                block
                mx-auto
                lg:p-2 lg:pb-0 lg:border-2
                border-b-2
                lg:border-b-0
                border-purple-900
                lg:rounded-t-xl
                text-center
                focus:bg-purple-600 focus:text-white
                hover:bg-purple-900 hover:text-white
                transform-gpu
                transition-all
                duration-300
              "
              >CONTACT</a
            >
          </li>
        </ul>
      </nav>

      <!-- hamburger menu icon -->
      <div id="menu-icon" class="lg:invisible h-10 w-10 p-2">
        <div class="h-0.5 w-full my-1 bg-purple-900"></div>
        <div class="h-0.5 w-full my-1 bg-purple-900"></div>
        <div class="h-0.5 w-full my-1 bg-purple-900"></div>
      </div>
    </div>
  `;
  return view;
};

export default Header;
