const imageNames = ['cat1', 'cat2', 'cat3', 'cat4'];
const imagesGallery = document.getElementById('images');
const showFavouritesButton = document.getElementById('show-favourites');
const sortButton = document.getElementById('sort-images');

class Image {
    constructor (imagePath) {
        this.imagePath = imagePath;
    }

    show() {
        this.img = document.createElement('img');
        this.img.setAttribute('src', this.imagePath);
        imagesGallery.appendChild(this.img);
        this.img.addEventListener('click', () => {
           this.markOrUnmarkAsFavourite();
        });
    };
    
    markOrUnmarkAsFavourite () {
        this.img.classList.toggle('image--favourite');
    };

    isFavourite () {
        return this.img.classList.contains('image--favourite')
    };

    hide () {
        this.img.style.display = 'none';
    }
}

const imagesList = imageNames.map(name => {
    const image = new Image('images/' + name + '.jpg')
    return image;
});

imagesList.forEach(image => image.show());

showFavouritesButton.addEventListener('click', () => {
    imagesList
    .filter(image => !image.isFavourite())
    .forEach(image => image.hide());
});
