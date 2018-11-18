import cat1 from './images/cat1.jpg';
import cat2 from './images/cat2.jpg';
import cat3 from './images/cat3.jpg';
import cat4 from './images/cat4.jpg';

import { Image } from './image.js';

const imageNames = [cat1, cat2, cat3, cat4];
// const imagesGallery = document.getElementById('images');
const showFavouritesButton = document.getElementById('show-favourites');
// const sortButton = document.getElementById('sort-images');
// .innerHTML
const fileInput = document.getElementById('file-input');

const imagesList = imageNames.map(name => {
    const image = new Image(name);
    return image;
});

imagesList.forEach(image => image.show());

showFavouritesButton.addEventListener('click', () => {
    imagesList
    .filter(image => !image.isFavourite())
    .forEach(image => image.hide());
});

fileInput.onchange = () => {
    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();

        reader.onload = function (e) {
            // add e.target.result
            const newImage = new Image(e.target.result);
            imagesList.push(newImage);
            newImage.show();
            console.log('done');
        };
    
        reader.readAsDataURL(fileInput.files[0]);
    }
};