// LIST CONTROLLER
import ArtistModel from "./artist.model";

export class ListController {
    artists: any;
    STORAGE_ID: string = 'artist-playlist';

    constructor() {
        this.artists =  this.getFromLocalStorage();
        
    }

    // get data from local storage
    getFromLocalStorage = () => {
        return JSON.parse(localStorage.getItem(this.STORAGE_ID) || '[]');
    };
    
    // save data to local storage
    saveToLocalStorage = () => {
        localStorage.setItem(this.STORAGE_ID, JSON.stringify(this.artists));
    }

    // update list of artist
    updateList = () => {
        var ar = this.getFromLocalStorage();
            document.getElementById('list').innerHTML = '';

            console.log(this.artists);
            if(ar.length !== 0) {
                for(var i = 0; i < ar.length; i++){
                    let name = ar[i].artistName;
                    let image = ar[i].image;
                    let video = ar[i].videoUrl;
            
                    
                    document.getElementById('list').innerHTML += '<div class="card-columns"> <div class="card"> <img class="card-img-top img-fluid" src=" ' + image + ' " alt="  "> \
                    <div class="card-block"> <h4 class="card-title">' + name + '</h4> <p class="card-text">' + video + '</p></div></div></div>'
                    
                }
            }
            
    }

}

export default ListController;