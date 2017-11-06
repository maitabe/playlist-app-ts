
import ArtistModel from "./artist.model";
import ListController from  "./list.controller";
import { FormController } from "./form.controller";


// console.log(title);

// () => {
//     /* code here */
// }

var listCtrl = new ListController();

listCtrl.updateList();

var formCtrl = new FormController(listCtrl);


















