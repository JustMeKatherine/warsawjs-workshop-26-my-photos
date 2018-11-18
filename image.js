import cat1 from './images/cat1.jpg';
import cat2 from './images/cat2.jpg';
import cat3 from './images/cat3.jpg';
import cat4 from './images/cat4.jpg';

export class Image {
    constructor (imagePath) {
        this.imagePath = imagePath;
    }

    show() {
        this.img = document.createElement('img');
        this.img.setAttribute('src', this.imagePath);
        document.getElementById('images').appendChild(this.img);
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