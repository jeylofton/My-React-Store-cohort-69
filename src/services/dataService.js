//import

//logic
const catalog =[
{
    "title":"Orange",
    "category":"Fruit",
    "price":12.99,
    "image":"oranges.png",
    "_id":"1" //Unigue
},
{
    "title":"Dark Chocolate",
    "category":"Snacks",
    "price":8.49,
    "image":"choco.png",
    "_id":"2" //Unigue
},
{
    "title":"Coffee Beans",
    "category":"Beverages",
    "price":15.75,
    "image":"coffe.png",
    "_id":"3" //Unigue
},
{
    "title":"Almond Milk",
    "category":"Dairy",
    "price":5.25,
    "image":"milk.png",
    "_id":"4" //Unigue
},
{
    "title":"Organic Hoodie",
    "category":"Apparel",
    "price":42.00,
    "image":"hoodie.png",
    "_id":"5" //Unigue
},
]

//export
class DataService{
    getProducts(){
        return catalog;
    }
}

export default DataService;
