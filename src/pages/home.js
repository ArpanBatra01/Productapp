
import { Input } from "antd";
import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";


const { Search } = Input;

function ProductSearch() {
  
  

  const [search, setSearch] = useState("");

  const [product, setProduct] = useState([
    {
      id:1,
      name: "TechFit Smartwatch Series X",
      image:"https://media.istockphoto.com/id/515311485/vector/smart-watch.jpg?s=612x612&w=0&k=20&c=pGojRXDoolMxGxTPdWLeynWxe0e1GqblskkI8NHwXvI=",
    price: 199.99,
    description: "The TechFit Smartwatch Series X is the ultimate companion for your active lifestyle...",
    features: [
      "Fitness Tracking, Built-in GPS, Health Monitoring",
      
    ],

    
 
     
    },
    {
      id:2,
      name: "Mobiles",
      image:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/c/4/d/-original-imaghx9qygjjg8hz.jpeg?q=70",
        price:900,
        description:"The Iphones is the ultimate companion for your active lifestyle...",
        features:["Advanced Cameras, Apple Designed Chips, Privacy your data"
        ],
      
    },
    {
      id:3,
      name:"Fashion",
      image:
        "https://m.media-amazon.com/images/I/41wv42oAkVL._AC_UL320_.jpg",
        price:30,
        description:"The Sunglasses and other fashion item is the ultimate companion for your active lifestyle...",
        features:"UV Protection, Lens Material, Frame Material",
      
    },
    {
      id:4,
      name: "Cameras",
     
      image:
        "https://rukminim2.flixcart.com/image/312/312/juwzf680/dslr-camera/g/a/q/200d-ii-200d-ii-canon-original-imaffvrhzyqzayys.jpeg?q=70",
      price:50.90,  
      description:"The Cameras  is the ultimate companion for your active lifestyle...",
      features:"Effective Pixels: 20.9 MP, Sensor Type: CMOS, WiFi Available, 4K",
     
    },
    {id:5,
      name:"Home & Furnitures",
      image:
        "https://m.media-amazon.com/images/I/81vRCHFfZGL._AC_UL320_.jpg",
      price:1000,
      description:"10 year manufacturing warranty on the product",
      features:"Length: 75 inch, Width: 42 inch, Thickness: 6 inch (6 ft 3 in x 3 ft 6 in x 6 in), Support Type: PU Foam, Comfort Layer: Memory Foam",  
     
    },
    {
      id:6,
      name: "Appliances",
     
      image: "https://m.media-amazon.com/images/I/21wu3RPxAHL._AC_UY218_.jpg",
      price:200.60,
      description:" You can use the temperature control knob to set different temperatures for your food item based on the requirement",
      features:"Tempered Glass Door: A double-layered tempered glass door is used for this OTG that is durable and resistant to heat. Also, the cool-touch handle ensures that your hand does not get blistered or burnt",
     
    },
    {
      id:7,
      name: "Travel",
    
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/rucksack/n/y/t/-original-imagh3w9vcyusz5x.jpeg?q=70",
      price:912,
      description:"The travel bags is the ultimate companion for your active lifestyle...",
      features:" Multiple pockets with zippered closures hold your belongings securely. Keep your storage organized., Adjustable straps for extra security and flexibility, Adjustable Waist Belt,",
    
    },
    {
      id:8,
      name: "Beauty,Toys & More",
     
      image: "https://m.media-amazon.com/images/I/51tmWG7u5cL._AC_UL320_.jpg",
      price:200,
      description:" Introducing the Imagine Craft Mega Builder Set  a mesmerizing galaxy of creativity packed into 125+ exquisite DIY plastic building blocks, all neatly stored in a convenient storage box",
      features:"Skillset: Attention Span Building, Analysis & Critical Thinking, Creativity & Imagination, Curiosity Building",
     
    },
    {
      id:9,
      name: "Two wheelers",
     
      image:
        "https://m.media-amazon.com/images/I/71SQOhxzHlL._AC_UL640_QL65_.jpg",
      price:1200.90,
      description:"Big on Lights, Big on Rides, Big on Tech, Big on Styles, Big on Colours",
      features:"Displacement: 110.9 c, Brake Front: Drum, Tire Type: Tubeless, Under Seat Storage: 18 L",
    },
  
  ]);
  const [filterProducts, setFilterProducts] = useState(product);
  const navigate = useNavigate()

  const onSearch = (value) => {
    setSearch(value);
    add();
  };
  const[count,setCount]=useState(0);

  useEffect(() => {
    if (search.length && count <= 20) {
      // write filter logic and update filter product state

      let filteredData = product.filter(function (el) {
        return el.name == search;
      });

      setFilterProducts(filteredData);
    } else {
      // reset to all product state
      setFilterProducts(product);
      if (count > 20) {
        alert("search limit can exceed");
      }
    }
  }, [search, count]);

  function add() {
    setCount(count + 1);
  }

  return (
    <>
      <Search
        placeholder="input search text"
        allowClear
        enterButton="search"
        size="large"
        onSearch={onSearch}
      />
      <p>Search Count:{count}</p>
      <Row md={4}>

      {filterProducts.map((product, index, arr) => {
        return (
          <Col onClick={() => navigate(`/product-detail/${product.id}`) } key={index} className="product-detail">
            <p>
              <img src={product.image}></img>
            </p>
            <div>
              <p>
                <span className="title"> name : </span> {product.name}
              </p>
              <p>
                <span className="title"> price : </span> ${product.price}
              </p>
              <p>
                <span className="title"> description : </span> {product.description}
              </p>
              <p>
                <span className="title"> features : </span> {product.features}
              </p>
              
             
             
          
              
            </div>
          </Col>
         
           
        );
      })}
      </Row>
         
    </>
  );
}

export default ProductSearch;
