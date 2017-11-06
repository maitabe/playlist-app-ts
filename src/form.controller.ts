import ArtistModel from "./artist.model";
import { ListController } from "./list.controller";


export class FormController {
    artists: ArtistModel[];
    list: any;
    

    constructor( listController: ListController) {
        this.list = listController;
        var that = this;
    }
}

// click to add an artist
document.querySelector("#addArtist").addEventListener("click", (event: MouseEvent) => {
    
        let artistName = (<HTMLInputElement>document.getElementById('artistName')).value;
        let image = (<HTMLInputElement>document.getElementById('imageUrl')).value;
        let videoUrl = (<HTMLInputElement>document.getElementById('youTubeUrl')).value;
    
        
        let newArtist  = new ArtistModel(artistName, image, videoUrl);
        console.log(newArtist);
        
        
        if(this.list.artists.length === 0) {
            newArtist.id  = 0;
        }else {
            newArtist.id = this.list.artists[this.list.artists.length-1].id + 1;
        }
        
        this.list.artists.push(newArtist);
    
        this.saveToLocalStorage();
    
        
        document.querySelector("span").innerHTML = "new artist had been added!";
    
        this.list.updateList();
    
        // clear input fields
        (<HTMLInputElement>document.getElementById('artistName')).value = " ",
        (<HTMLInputElement>document.getElementById('imageUrl')).value = "",
        (<HTMLInputElement>document.getElementById('youTubeUrl')).value = ""
    
    }, false);

    export default ListController ;