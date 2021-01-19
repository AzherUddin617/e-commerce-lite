import banana from '../../assets/products/banana.png';
import bottle from '../../assets/products/bottle.png';
import clock from '../../assets/products/clock.png';
import cover from '../../assets/products/cover.png';
import iceCream from '../../assets/products/ice-cream.png';
import iphone from '../../assets/products/iphone.png';
import mac from '../../assets/products/mac.png';
import shoe from '../../assets/products/shoe.png';
import wine from '../../assets/products/wine.png';

const productsData = {
  title: "Products Data",
  products: [
    {
      id: "001",
      name: "Macbook Pro",
      src: mac,
      price: 240.99
    },
    {
      id: "002",
      name: "Alarm Clock",
      src: clock,
      price: 12.06
    },
    {
      id: "003",
      name: "iPhone 12 Max",
      src: iphone,
      price: 49.99
    },
    {
      id: "004",
      name: "iPhone Cover",
      src: cover,
      price: 4.98
    },
    {
      id: "005",
      name: "Red Wine",
      src: wine,
      price: 15.99
    },
    {
      id: "006",
      name: "Ice Cream",
      src: iceCream,
      price: 2.98
    },
    {
      id: "007",
      name: "Pink Shoe",
      src: shoe,
      price: 8.5
    },
    {
      id: "008",
      name: "Watter Bottle",
      src: bottle,
      price: 1.5
    },
    {
      id: "009",
      name: "12 Banana",
      src: banana,
      price: 5.55
    }
  ]
}

export default productsData;