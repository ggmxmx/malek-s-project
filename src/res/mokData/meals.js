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
        }
    ],
    Pizza: [
        {
            name: "Larg Pizza",
            price: 65,
            image: Images.pepperoni()
        },
        {
            name: "Personal Pizza",
            price: 15,
            image: Images.vegetables()
        },
        {
            name: "tareq Pizza",
            price: 115,
            image: Images.pineApple()
        },
    ],
    Steak: [
        {
            name: "Cheese burger",
            price: 120,
            image: Images.cheeseburger()
        },
        {
            name: "Double burger",
            price: 130,
            image: Images.doubleburger()
        },
        {
            name: "Fish burger",
            price: 115,
            image: Images.fishburger()
        },
        {
            name: "Chicken burger",
            price: 120,
            image: Images.chickenburger()
        }
    ]

}

export default MealesData;