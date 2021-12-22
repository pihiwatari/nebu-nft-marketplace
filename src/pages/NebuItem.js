import getHash from "../utils/getHash";
import getNebus from "../utils/getNebus";
import capitalize from "../utils/capitalize";
import StatsContainer from "../templates/StatsContainer";
import "../styles/styles.css";

const NebuItem = async () => {
  /*
    We want to retrieve a single nebu from our collection of nebus.
    The API call for a single assets has a different structure for the HTTP request,
    this is not compatible with our getNebus function. So instead we call again all
    the collection and filter them according to the assets id.
  */
  const id = getHash();
  const nebus = await getNebus();

  // Filter the collection to get 1 using the asset's id.
  const nebu = nebus.filter((nebu) => nebu.id == id)[0];
  // The traits properties are an array, so we need to filter by property key.
  const nebula = nebu.traits.filter((trait) => trait.trait_type == "Astro")[0]
    .value;

  // Get the 3 main traits (stats)
  const stats = nebu.traits.filter((stat) => {
    // Compare the array of looked for stats and return the matching ones
    const statsArray = ["Flavour", "Fluffiness", "Viscosity"];
    return statsArray.includes(stat.trait_type);
  });

  // Get the rest of traits
  const traits = nebu.traits.filter((trait) => {
    // Compare the array of looked for traits and return the matching ones
    const statsArray = ["Flavour", "Fluffiness", "Viscosity"];
    return !statsArray.includes(trait.trait_type);
  });

  const view =
    /*html*/
    `

    <!-- Page container -->
    <section class="flex flex-col align-center py-8 px-10 bg-nebu-gray">

      <!-- Return to gallery button -->
      <a class="
        w-full mx-auto mb-4 text-center text-white bg-nebu-red 
        hover:bg-nebu-red-darker
        sm:w-48 
        link-button" 
        href="#/gallery">Return to Gallery</a>

      <!-- Background container -->
      <div class="w-full mx-auto rounded-2xl bg-choco-planet bg-cover bg-center overflow-hidden">

        <!-- Main content container -->

        <div class="
          flex flex-wrap 
          p-4 w-full h-full 
          text-white 
          bg-gradient-to-tl from-nebu-purple-darkest to-transparent 
          bg-opacity-100
          ">
          <!-- top container for images and nebu's name -->
          <div class="
            flex flex-col flex-grow w-full items-center
            sm:flex-row
            ">
            <img src="${nebu.image_preview_url}" alt="${nebu.name}" 
              class="
                w-3/4 m-4 rounded-2xl
                sm:w-48
              ">
            <div class="text-center sm:text-left">
              <h1 class="text-4xl font-bold">${nebu.name}</h1>
              <p class="mt-2 text-2xl font-thin">Astro: ${nebula}</p>
            </div>
          </div>

          <!-- Middle container for stats -->
          <div class="flex-1 mx-auto p-4 text-center sm:text-left">
            <h4 class="text-lg mb-3">Stats</h4>
            
            <!-- StatsContainer component -->
            ${stats.map(stat => StatsContainer(stat)).join("")}
          </div>

          <!-- Bottom container for traits -->
          <div class="flex-grow p-4">
            <p class="mb-4"><strong>Traits: </strong></p>

            <!-- Trait grid container -->
            <div class="w-full grid grid-cols-auto-small grid-flow-row gap-4">
              ${traits
                .map((trait) => {
                  return /*html*/ `
                    <div class="p-2 text-center rounded-lg bg-white bg-opacity-20">
                      <strong>${capitalize(trait.trait_type)}</strong>
                      <p>${capitalize(trait.value)}</p>
                    </div>
                  `;
                })
                .join("")}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
  return view;
};

export default NebuItem;
