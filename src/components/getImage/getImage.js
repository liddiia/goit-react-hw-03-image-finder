const BASE_URL ='https://pixabay.com/api/?q=cat&page=1&key=39646115-939d05d3332b2253cce455354&image_type=photo&orientation=horizontal&per_page=12'
//const API_Key ='39646115-939d05d3332b2253cce455354'

export const getImage = (searchText) => {
    fetch('${BASE_URL}/')
    .then((response) => response.json())
    .then((image) => console.log("img:>>",image))
}