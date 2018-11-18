const imagePaths = ['cat1', 'cat2', 'cat3', 'cat4'];
const imagesGallery = document.getElementById('images');

function createGallery(imageName) {
    const image = document.createElement('img');
    image.setAttribute('src', 'images/' + imageName + '.jpg');
    imagesGallery.appendChild(image);
};

imagesGallery.addEventListener('click', ({target}) => {
    (!target.hasAttribute('class')) ? target.setAttribute('class', 'image--favourite') : target.removeAttribute('class');
});

imagePaths.forEach(createGallery);

// imagePaths.forEach(imagePath => {
//     const image = document.createElement('img');

//     image.setAttribute('src', 'images/' + imagePath + '.jpg');
    
//     imagesGallery.appendChild(image).addEventListener('click', () => {
//         (!image.hasAttribute('class')) ? image.setAttribute('class', 'image--favourite') : image.removeAttribute('class');
//     });
// });

