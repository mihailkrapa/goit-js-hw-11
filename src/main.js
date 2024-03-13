import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getImages } from './js/pixabay-api';
import { renderMarkup, refreshLightbox } from './js/render-functions';
import warningSvg from './img/warning.svg';
import errorSvg from './img/error.svg';

const form = document.querySelector('.js-hero-form');
const photoList = document.querySelector('.images-list');
const loader = document.querySelector('.loader');

form.addEventListener('submit', findImage);

function findImage(e) {
  e.preventDefault();

  photoList.innerHTML = '';

  const userSearch = e.target.elements.query.value.trim();

  if (userSearch === '') {
    showWarning();
  }

  showLoader();

  getImages(userSearch)
    .then(data => {
      if (data.hits.length === 0) {
        showError();
      }
      renderMarkup(photoList, data.hits);
      refreshLightbox();
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      hideLoader();
    });

  e.target.reset();
}

function showLoader() {
  loader.classList.add('visible');
}

function hideLoader() {
  loader.classList.remove('visible');
}

function showWarning() {
  iziToast.warning({
    titleColor: '#fff',
    messageColor: '#fff',
    backgroundColor: '#ffa000',
    iconUrl: warningSvg,
    message: 'Please enter a search query',
    position: 'topRight',
  });
}

function showError() {
  iziToast.error({
    titleColor: '#fff',
    messageColor: '#fff',
    backgroundColor: '#ef4040',
    iconUrl: errorSvg,
    message:
      'Sorry, there are no images matching<br> your search query. Please try again!',
    position: 'topRight',
  });
}
