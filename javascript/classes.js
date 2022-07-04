//Declaring a class
// class Product{
//     constructor(itemName,price,discount,productCode){
//         this.itemName=itemName;
//         this.price=price;
//         this.discount=discount;
//         this.productCode=productCode;
//     }
// }
class Product{
    constructor(itemName){
        console.log('Passed by '+itemName)
        this.itemName=itemName;
    }
    get getItemName(){
        return this.itemName+" is a product"
    }
}
class Furniture extends Product{
    constructor(itemName){
        super(itemName);
    }
    get getItemName(){
        return this.itemName+" is a Furniture"
    }
}

let pencil=new Product('Pencil',20,2,'P10');
let chair =new Furniture('Chair',499,15,'C10');
// const Product1=class Product{
//     constructor(itemName,price,discount,productCode){
//         this.itemName=itemName;
//         this.price=price;
//         this.discount=discount;
//         this.productCode=productCode;
//     }
//     get getDiscountValue(){
//         return this.discount;
//     }
//     set setDiscountValue(value){
//         this.discount=value;
//     }
//     get discountValue(){
//         return this.discount*this.price/100;
//     }
// };

// let chair =new Product1('Chair',499,15,'C10');