import {useState,useEffect} from "react";





function FavouriteProduct(){
    const[result,setResult]=useState([]);
    const[favouriteProducts,setFavouriteProducts]=useState("");
    const[products,setProducts]=useState([[
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
      
      ]]);

      const clear = () => {
        setFavouriteProducts([]);
        setResult([]);
        localStorage.removeItem("favouriteItems");
      };




useEffect(()=>{
    let favouriteCart = JSON.parse(localStorage.getItem("favouriteItems")); 
    if (favouriteCart?.length) {
    
      let favouriteProducts = [];

      favouriteCart?.map((favouriteItemId) => {
        let product = products?.find((elem) => elem.id == favouriteItemId);
        if (product) {
          favouriteProducts.push(product);
        }

      });
    
      setResult(favouriteProducts);
    }
    

},[]);

    return (
        <>
        <div>
            <ul>
                <li>
                    <a href="/home">Home</a>
                </li>
                <li>
                    <a href="/product-detail">Product-Detail</a>
                </li>
                <li>
                    <a href="/cart">Cart</a>
                </li>
            </ul>
            <h3>Favourite Products</h3>
            <ul>
            {result.map((product, id, index) => (
            <li key={id}>
                  <p>
                <img width={200} src={product.image} />
              </p>
              <p>
                <span className="title">Product Name:</span> {product.name}
              </p>
              
            </li>
          ))}
            </ul>
            <button onClick={clear}>Clear</button>
        </div>


        </>
        
    );

}

export default FavouriteProduct;