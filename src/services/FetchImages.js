
function fetchImages(image, page) {
  const BASE_URL = 'https://pixabay.com/api/?';
  const KEY = '38894004-6d48aacf53b986fdbdf72bda8';
  return fetch(
    BASE_URL +
      `image_type=photo&orientation=horizontal&q=${image}&page=${page}&per_page=12&key=` +
      KEY
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
}
export default fetchImages;