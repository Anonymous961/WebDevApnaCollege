//normal object
const product={
    itemname:'Flower',
    price:100,
    discount:10,
    itemcode:'F40'
}

//factory function
function createProduct(name,price,discount,itemCode){
    return{
        itemname:name,
        price:price,
        discount:discount,
        itemcode:itemCode
    }
}

const food= createProduct('chocolate',50,10,'c30');

//constructor function
function product_1(name,price,discount,itemCode){
    this.itemName=name;
    this.price=price;
    this.discount=discount;
    this.itemcode=itemCode;
}

const phone=new Product('oneplus',30000,1000,'O30')