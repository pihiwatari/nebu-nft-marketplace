import getHash from "../utils/getHash";
import getNebus from "../utils/getNebus";

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

  const view = /*html */ `

    <!-- Page container -->
    <section class="max-w-6xl py-8 px-10 bg-nebu-gray">

      <!-- main container -->
      <div class="flex flex-col p-4 rounded-2xl bg-nebu-purple text-white">

        <!-- top container for images and nebu's name -->
        <div class="flex flex-col w-full items-center">
          <img src="${nebu.image_preview_url}" alt="${nebu.name}" 
            class="w-3/4 m-4 rounded-2xl">
          <div class="text-center sm:text-left">
            <h1 class="text-4xl font-bold">${nebu.name}</h1>
            <p class="mt-2 text-2xl font-thin">Astro: ${nebula}</p>
          </div>
        </div>

        <!-- Middle container for stats -->
        <div class="my-4 text-center">
          <h4 class="text-lg mb-3">Stats</h4>
          
          <!-- Stat container -->
          ${stats
            .map((stat) => {
              return /*html*/ `
                  <div class="my-4">
                    <span class="font-bold">${stat.trait_type}: </span>
                    <span class="font-thin">${stat.value} / 10</span>
                    <div class="flex w-full mt-1" >
                      <div class="w-8 h-1.5 bg-white"></div>
                    </div>
                  </div>
                `;
            })
            .join("")}
        </div>

        <!-- Bottom container for traits -->
        ${traits.map((trait) => {
          return /*html*/ `
            
          `;
        })}

      </div>
    </section>
  `;
  return view;
};

export default NebuItem;
