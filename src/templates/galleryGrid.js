import getNebus from "../utils/getNebus";
import NebuCard from "./NebuCard";

const GalleryGrid = async () => {
  const nebus = await getNebus();
  const template = /*html*/ `
      <div class="w-full grid grid-cols-auto gap-8 mx-auto px-4">
        ${nebus.map((nebu) => NebuCard(nebu)).join("")} 
      </div>
  `;

  return template;
};

export default GalleryGrid;
