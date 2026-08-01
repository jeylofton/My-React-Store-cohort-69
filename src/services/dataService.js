//import

//logic
const catalog =[
{
    "title":"Orange",
    "category":"Fruit",
    "price":12.99,
    "image":"placeholder",
    "_id":"1" //Unigue
},
{
    "title":"Banana",
    "category":"Fruit",
    "price":12.99,
    "image":"placeholder",
    "_id":"2" //Unigue
},
{
    "title":"Coconut",
    "category":"Fruit",
    "price":12.99,
    "image":"placeholder",
    "_id":"3" //Unigue
},
]

//export
class DataService{
    getProducts(){
        return catalog;
    }
}

export default DataService;