import GalleryGrid from "../templates/galleryGrid";

const Gallery = async () => {
  const gallery = await GalleryGrid();
  const view =
    /*html*/
    `
    <div class='max-w-6xl p-8 mx-auto'>${gallery}</div>
    `;

  return view;
};

export default Gallery;
