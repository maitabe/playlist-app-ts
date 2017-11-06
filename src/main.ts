
import ArtistModel from "./artist.model";
import ListController from  "./list.controller";


// console.log(title);

// () => {
//     /* code here */
// }


// console.log(testObj);
// let STORAGE_ID = 'artist-playlist';

// get data from local storage
// let getFromLocalStorage = () => {
// 	return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
// };

// let artists = getFromLocalStorage();


var listCtrl = new ListController();

listCtrl.updateList();











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




