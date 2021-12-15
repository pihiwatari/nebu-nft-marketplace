import getNebus from "../utils/getNebus";
import NebuCard from "../templates/NebuCard";

const Home = async () => {
  const nebus = await getNebus();
  const view = /*html*/ ` 
    <div class="text-center sm:text-left">
      <!-- HERO SECTION -->
      <section
        class="bg-nebu-purple px-10"
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
          <div class="flex-grow-1 m-auto text-white">
            <h1 class="mt-8 sm:mt-0 mb-8 text-6xl lg:text-8xl font-black">
              NEBUS NFTs.
            </h1>
            <p class="mb-16 text-2xl">
              Crypto delicacies from outer space.
            </p>
            <a href="https://opensea.io/nebuniverse" class="link-button text-xl  bg-nebu-purple-darkest hover:bg-nebu-red"
              >Get yours at Open Sea!</a
            >
          </div>
        </div>
      </section>

      <!-- WHAT IS AN NFT SECTION -->

      <section class="bg-nebu-gray text-nebu-purple-darkest">
        <div class="max-w-6xl hero flex flex-col justify-between mx-auto py-10 px-10">
          <h2
            class="
              mb-8
              text-4xl
              lg:text-6xl
              font-bold
              leading-normal
            "
          >
            What is an NFT?
          </h2>
          <div>
            <p class="mb-5 text-2xl leading-loose">
              NFT stands for "Non-Fungible Token", which mean that each NFT is
              unique and cannot be replace, they are digital assets secured
              using the same technology of cryptocurrencies. All NFT are purely
              digital, and they can take the form of images, music, videos, a
              picture. They can also be tied to physical assets and make you own
              something real.
            </p>
            <p class="mb-5 text-2xl leading-loose">
              Using NFTs open new ways for creatives and designers to protect,
              share and sell their work. Imagine if you create a brand or
              interior design, you could sell the rights of the design so anyone
              who buys it can physically replicate it in the real world. Still,
              you'll have proof of ownership / creation for your work.
            </p>
          </div>
        </div>
      </section>

      <!-- FEATURES SECTION -->
      <section class="bg-nebu-pink">
        <div class="max-w-6xl hero flex flex-col justify-between mx-auto py-10 px-10">
          <h3 class="pb-10 text-4xl font-bold text-nebu-pink-darker">
            Latest nebus in our collection
          </h3>
          <div class="w-full grid grid-cols-auto gap-8 px-4">
            ${nebus.map((nebu) => NebuCard(nebu)).join("")} 
          </div>
        </div>
      </section>

      <!-- NEBU HIME ABOUT SECTION -->
      <section
        class="bg-nebu-purple"
      >
        <div class="max-w-6xl flex flex-col sm:flex-row justify-between mx-auto pt-10 px-10 sm:px-20">
          <div class="md:w-1/2 md:self-center text-white sm:mb-10">
            <h3
              class="
                mb-8
                text-4xl
                lg:text-6xl
                font-bold
              "
            >
              Hi! I'm Nebu Hime, creator of the Nebuniverse
            </h3>
            <p class="text-2xl">
              Where I create fantastic, galactically fluffy and delicious NEBUS
              that you can obtain on my
            </p>
            <a
              href="https://opensea.io/nebuniverse"
              class="
                text-4xl
                font-bold
                underline
                hover:text-nebu-red
              ">
                Opensea space!
            </a>
          </div>
          <!-- empty div for layout -->
          <div class="md:w-1/2 flex justify-center items-end">
            <img
              src="./assets/images/nebu_hime.png"
              alt="nebu hime"
              class="w-3/4 sm:w-auto mx-auto pt-16 px-8 sm:p-10 pb-0 sm:pb-0"
            />
          </div>
        </div>
      </section>
    </div>
  `;
  return view;
};

export default Home;
