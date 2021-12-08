import nebus from "../utils/nebus";
import NebuCard from "../templates/NebuCard";

const Home = () => {
  const view = /*vue-html*/ ` 
    <div class="text-center sm:text-left">
      <!-- HERO SECTION -->
      <section
        class="purple-bg px-10"
      >
        <div class="max-w-6xl flex flex-col sm:flex-row justify-between mx-auto py-10">
          <figure class="">
            <img
              src="./assets/images/nebu_hero.png"
              alt="Big nebu image"
              class="
                w-64
                sm:w-full
                mx-auto
                sm:p-10
                md:px-20
                transform-gpu
                translate-x-5
                sm:translate-x-0
              "
            />
          </figure>
          <div class="flex-grow-1 m-auto text-white text-shadow">
            <h1 class="mt-8 sm:mt-0 mb-8 text-4xl sm:text-6xl lg:text-8xl font-black">
              NEBUS NFTs.
            </h1>
            <p class="mb-16 text-xl sm:text-2xl">
              Crypto delicacies from outer space.
            </p>
            <a href="https://opensea.io/nebuniverse" class="link-button"
              >Get yours at Open Sea!</a
            >
          </div>
        </div>
      </section>

      <!-- WHAT IS AN NFT SECTION -->

      <section class="hero flex flex-col justify-between mx-auto py-10 px-10">
        <h2
          class="
            mb-8
            text-4xl
            lg:text-6xl
            font-bold
            leading-normal
            text-white text-shadow
          "
        >
          What is an NFT?
        </h2>
        <div>
          <p class="text-white mb-5 lg:text-2xl leading-loose">
            NFT stands for "Non-Fungible Token", which mean that each NFT is
            unique and cannot be replace, they are digital assets secured
            using the same technology of cryptocurrencies. All NFT are purely
            digital, and they can take the form of images, music, videos, a
            picture. They can also be tied to physical assets and make you own
            something real.
          </p>
          <p class="text-white mb-5 lg:text-2xl leading-loose">
            Using NFTs open new ways for creatives and designers to protect,
            share and sell their work. Imagine if you create a brand or
            interior design, you could sell the rights of the design so anyone
            who buys it can physically replicate it in the real world. Still,
            you'll have proof of ownership / creation for your work.
          </p>
        </div>
      </section>

      <!-- FEATURES SECTION -->
      <section class="pink-bg">
        <h3 class="text-white text-2xl font-bold py-4 text-shadow">
          Latest nebus in our collection
        </h3>
        <div class="w-full grid grid-cols-auto gap-8 px-20">
          ${nebus.map((nebu) => NebuCard(nebu)).join("")} 
        </div>
      </section>

      <!-- NEBU HIME ABOUT SECTION -->
      <section
        class="flex flex-col sm:flex-row justify-between mx-auto pt-10"
      >
        <div class="md:w-1/2 md:self-center">
          <h3
            class="
              mb-8
              text-4xl
              lg:text-6xl
              font-bold
              leading-normal
              text-white text-shadow
            "
          >
            Hi! I'm Nebu Hime, creator of the Nebuniverse
          </h3>
          <p class="lg:text-2xl text-white">
            Where I create fantastic, galactically fluffy and delicious NEBUS
            that you can buy on my
            <a
              href="https://opensea.io/nebuniverse"
              class="
                text-xl
                font-bold
                underline
                hover:text-pink-800
                text-shadow
              "
              >Opensea space!</a
            >
          </p>
        </div>
        <!-- empty div for grid -->
        <div class="md:w-1/2">
          <img
            src="./assets/images/nebu_hime.png"
            alt="nebu hime"
            class="mx-auto p-16 sm:p-10 pb-0 sm:pb-0"
          />
        </div>
      </section>
    </div>
  `;
  return view;
};

export default Home;
