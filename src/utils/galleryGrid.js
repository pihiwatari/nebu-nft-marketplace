import getNebus from "./getNebus";
import NebuCard from "../templates/NebuCard";

const Gallery = async () => {
  const nebus = await getNebus();
  const template = /*html*/ `
      <div class="w-full grid grid-cols-auto gap-8 px-4">
        ${nebus.map((nebu) => NebuCard(nebu)).join("")} 
      </div>
  `;

  return template;
};

export default Gallery;
