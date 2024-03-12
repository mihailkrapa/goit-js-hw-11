import SimpleLightbox from 'simplelightbox';
export const lightbox = new SimpleLightbox('.images-list a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function renderImage({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) {
  return `
        <li class="images__item">
          <a
            class="images__link"
            href="${largeImageURL}"
          >
            <img
              class="images__image"
              src="${webformatURL}"
              alt="${tags}"
              
            />
          </a>
         <span class="images-info">
            <p class="text-center">Likes <span class="images-text">${likes}</span></p>
            <p class="text-center">Views <span class="images-text">${views}</span></p> 
            <p class="text-center">Comments <span class="images-text">${comments}</span></p>
            <p class="text-center">Downloads <span class="images-text">${downloads}</span></p>
         </span>
        </li>
      `;
}

function renderImages(arr) {
  return arr.map(renderImage).join('');
}

export function renderMarkup(photoEl, arr) {
  photoEl.insertAdjacentHTML('beforeend', renderImages(arr));
}

export function refreshLightbox() {
  lightbox.refresh();
}
