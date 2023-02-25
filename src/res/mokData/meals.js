const { default: Images } = require("../../assets/images");

const MealesData = {
    Burgers: [
        {
            name: "Cheese burger",
            price: 20,
            image: Images.cheeseburger()
        },
        {
            name: "Double burger",
            price: 30,
            image: Images.doubleburger()
        },
        {
            name: "Fish burger",
            price: 15,
            image: Images.fishburger()
        },
        {
            name: "Chicken burger",
            price: 20,
            image: Images.chickenburger()
        },
        
    ],
    Pizza: [
        {
            name: "Pepperony",
            price: 50,
            image: Images.pepperoni()
        },
        {
            name: "Vegetables",
            price: 50,
            image: Images.vegetables()
        },
        {
            name: "pineapple",
            price: 45,
            image: Images.pineApple()
        },
    ],
    Other:[
        {
            name:"Potato",
            price:7,
            image: Images.potato()
        },
        {
            name:"Sinammon",
            price:5,
            image: Images.sinammon(),
        }

    ]
   

}

export default MealesData;