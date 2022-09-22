import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryJs = document.querySelector(".gallery");

const galleryItem = galleryItems
  .map(
    (item) => `
    <div class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
        />
      </a>
    </div>`
  )
  .join("");

galleryJs.innerHTML = galleryItem;
galleryJs.addEventListener("click", onImgClick);

function onImgClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src='${evt.target.dataset.source}' width="800" height="600">
`);

  instance.show();

  galleryJs.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });
}
