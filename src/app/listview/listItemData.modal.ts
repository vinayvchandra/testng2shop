export class listItemData{

    public itemName: string;
    public quantity: number;
    public desc: string;
    public imgPath: string;

    constructor (name: string, qnty: number, des: string, img: string){
      this.itemName= name;
      this.quantity= qnty;
      this.desc= des;
      this.imgPath=  img;
    }
}
