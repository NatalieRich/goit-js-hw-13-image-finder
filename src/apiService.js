
// https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ
// const API_KEY = '627768-661cfbe979deec03db122c1ac';


// export default class ApiService {
//   constructor() {
//     this.searchQuery = '';
//     this.page = 1;
//   }

//   fetchImages() {
//     // const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&g=${this.searchQuery}&page=${this.page}&key=627768-661cfbe979deec03db122c1ac`;
//     const BASE_URL = 'https://pixabay.com/api';
//     return fetch(`${BASE_URL}/?image_type=photo&orientation=horizontal&g=${this.searchQuery}&page=${this.page}&per_page=12&key=627768-661cfbe979deec03db122c1ac`)
//       .then(response => response.json())
//       .then(({ hits }) => {
//         this.incrementPage();
//         return hits;
//       });
//   }

//   incrementPage() {
//     this.page += 1;
//   }

//   resetPage() {
//     this.page = 1;
//   }

//   get query() {
//     return this.searchQuery;
//   }

//   set query(newQuery) {
//     this.searchQuery = newQuery;
//   }
// }

export default class ApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchImages() {
    const API_KEY = '627768-661cfbe979deec03db122c1ac';
    const BASE_URL = 'https://pixabay.com/api/';
    return fetch(
      `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`,
    )
      .then(response => response.json())
      .then(({ hits }) => {
        this.incrementPage();
        return hits;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
