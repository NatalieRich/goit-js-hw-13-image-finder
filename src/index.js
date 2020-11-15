import cardTpl from './cards.hbs'
import ApiService from './apiService'
import LoadMoreBtn from './components/load-more-btn';

const refs = {
  searchForm: document.querySelector('.search-form'),
  galleryContainer: document.querySelector('.gallery'),
};

const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});

const apiService = new ApiService();
console.log(apiService)

refs.searchForm.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();

  apiService.query = e.currentTarget.elements.query.value;

  if (apiService.query === '') {
    return alert('Enter the value!');
  }

  loadMoreBtn.show();
  apiService.resetPage();
  clearGallaryContainer();
  fetchImages();
}

function fetchImages() {
  loadMoreBtn.disable();
    return apiService.fetchImages().then(images => {
    appendGallaryMarkup(images)
        loadMoreBtn.enable();
        if (images.length === 0) {
            loadMoreBtn.hide();
            return alert('No matches found!')
        }
  });
}
function appendGallaryMarkup(images) {
  refs.galleryContainer.insertAdjacentHTML('beforeend', cardTpl(images));
}


function clearGallaryContainer() {
  refs.galleryContainer.innerHTML = '';
}

function onLoadMore() {
  fetchImages()
    .then(
      setTimeout(() => {
        window.scrollBy({
          top: document.documentElement.clientHeight - 100,
          behavior: 'smooth',
        });
      }, 1500),
    )
    .catch(err => console.log(err));
}