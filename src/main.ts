
import ArtistModel from "./artist.model";
import ListController from  "./list.controller";


// console.log(title);

// () => {
//     /* code here */
// }


// console.log(testObj);
let STORAGE_ID = 'artist-playlist';

// get data from local storage
let getFromLocalStorage = () => {
	return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
};

let artists = getFromLocalStorage();



// update list of artist
let updateList = () => {
    var ar = getFromLocalStorage();
        document.getElementById('list').innerHTML = '';
    
        console.log(artists);
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

updateList();



// save data to local storage
let saveToLocalStorage = () => {
    localStorage.setItem(STORAGE_ID, JSON.stringify(artists));
}






// click to add an artist
document.querySelector("#addArtist").addEventListener("click", (event: MouseEvent) => {

    let artistName = (<HTMLInputElement>document.getElementById('artistName')).value;
    let image = (<HTMLInputElement>document.getElementById('imageUrl')).value;
    let videoUrl = (<HTMLInputElement>document.getElementById('youTubeUrl')).value;

    
    let newArtist  = new ArtistModel(artistName, image, videoUrl);
    console.log(newArtist);
    
    // let newArtist = {
    //     artistName: (<HTMLInputElement>document.getElementById('artistName')).value,
    //     image: (<HTMLInputElement>document.getElementById('imageUrl')).value,
    //     videoUrl:(<HTMLInputElement>document.getElementById('youTubeUrl')).value

    // }
    
    if(artists.length === 0) {
        newArtist.id  = 0;
    }else {
        newArtist.id = artists[artists.length-1].id + 1;
    }
    
    artists.push(newArtist);

    saveToLocalStorage();

    
    document.querySelector("span").innerHTML = "new artist had been added!";

    updateList();

    // clear input fields
    (<HTMLInputElement>document.getElementById('artistName')).value = " ",
    (<HTMLInputElement>document.getElementById('imageUrl')).value = "",
    (<HTMLInputElement>document.getElementById('youTubeUrl')).value = ""

}, false);




