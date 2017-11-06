"use strict";
exports.__esModule = true;
var artist_model_1 = require("./artist.model");
//var artist_model_1 = require("./artist.model");
// let title: string = 'Music PlayList App';
// console.log(title);
// () => {
//     /* code here */
// }
// let testObj = {"artistName":"y","image":"x","videoUrl":"z","id":0};
// document.getElementById('list1').innerHTML = '<div class="card-columns"> <div class="card"> <img class="card-img-top img-fluid" src=" ' + testObj.image + ' " alt="  "> \
//  <div class="card-block"> <h4 class="card-title">' + testObj.image + '</h4> <p class="card-text">' + testObj.videoUrl + '</p></div></div></div>'
// console.log(testObj);
// get data from local storage
var getFromLocalStorage = function () {
    return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
};
var artists = getFromLocalStorage();
var STORAGE_ID = 'artist-playlist';
// update list of artist
var updateList = function () {
    var ar = getFromLocalStorage();
    document.getElementById('list').innerHTML = '';
    console.log(artists);
    if (ar.length !== 0) {
        for (var i = 0; i < ar.length; i++) {
            var name_1 = ar[i].artistName;
            var image = ar[i].image;
            var video = ar[i].videoUrl;
            document.getElementById('list').innerHTML += '<div class="card-columns"> <div class="card"> <img class="card-img-top img-fluid" src=" ' + image + ' " alt="  "> \
                <div class="card-block"> <h4 class="card-title">' + name_1 + '</h4> <p class="card-text">' + video + '</p></div></div></div>';
        }
    }
};
updateList();
// save data to local storage
var saveToLocalStorage = function () {
    localStorage.setItem(STORAGE_ID, JSON.stringify(artists));
};
// click to add an artist
document.querySelector("#addArtist").addEventListener("click", function (event) {
    var artistName = document.getElementById('artistName').value;
    var image = document.getElementById('imageUrl').value;
    var videoUrl = document.getElementById('youTubeUrl').value;
    var newArtist = new artist_model_1["default"](artistName, image, videoUrl);
    console.log(newArtist);
    // let newArtist = {
    //     artistName: (<HTMLInputElement>document.getElementById('artistName')).value,
    //     image: (<HTMLInputElement>document.getElementById('imageUrl')).value,
    //     videoUrl:(<HTMLInputElement>document.getElementById('youTubeUrl')).value
    // }
    if (artists.length === 0) {
        newArtist.id = 0;
    }
    else {
        newArtist.id = artists[artists.length - 1].id + 1;
    }
    artists.push(newArtist);
    saveToLocalStorage();
    document.querySelector("span").innerHTML = "new artist had been added!";
    updateList();
    // clear input fields
    document.getElementById('artistName').value = " ",
        document.getElementById('imageUrl').value = "",
        document.getElementById('youTubeUrl').value = "";
}, false);
