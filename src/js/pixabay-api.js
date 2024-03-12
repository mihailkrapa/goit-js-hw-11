const config = {
  API_KEY: '26114723-eab203642ec2629c12fb3e14b',
  BASE_URL: 'https://pixabay.com/api',
};

export function getImages(q) {
  const params = new URLSearchParams({
    key: config.API_KEY,
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${config.BASE_URL}/?${params}`).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error(res.status);
    }
  });
}
