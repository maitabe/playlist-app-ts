//ARTIST MODEL

class ArtistModel {
  name: string;
  image: string;
  youtubeUrl: string;
  id:number;

  constructor(name: string, image: string, youtubeUrl: string) {
    this.name = name;
    this.image = image;
    this.youtubeUrl = youtubeUrl;
  }
  
}

export default ArtistModel;


