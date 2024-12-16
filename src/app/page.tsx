const cards = [
   { image: "card1.png", heading: "Nike Air Max Pulse", discription: "Women's Shoes", price: "₹ 13 995"},
   { image: "card2.png", heading: "Nike Air Max Pulse", discription: "Mens's Shoes", price: "₹ 13 995"},
   { image: "card3.png", heading: "Nike Air Max 97 SE", discription: "Men's Shoes", price: "₹ 16 995"},
   { image: "card4.png", heading: "Nike Air Max SYSTM", discription: "Women's Shoes", price: "₹ 15 995"},
];

const card1 = [
   { image: "card5.png", heading: "Nike Dri-FIT ADV TechKnit Ultra", discription: "Men's Short-Sleeve Running Top", price: "₹ 3 895"},
   { image: "card6.png", heading: "Nike Dri-FIT Challenger", discription: "Men's 18cm (approx.) 2-in-1 Versatile Shorts", price: "₹ 2 495"},
   { image: "card7.png", heading: "Nike Dri-FIT ADV Run Division", discription: "Women's Long-Sleeve Running Top", price: "₹ 5 295"},
   { image: "card8.png", heading: "Nike Fast", discription: "Women's Mid-Rise 7/8 Running Leggings with Pockets", price: "₹ 3 795"},
];


export default function Home() {
   return (
      <div className="home-container">
         <section>
            <div className="home-contanier1">
               <div className="cont1-box1">
                  <center><h1>Hello Nike App</h1></center>
                  <center><p>Download the app to access everything Nike. <u>Get Your Great</u></p></center>
                  <center><img src="back1.png" alt="background" /></center>
               </div>
               <div className="cont1-box2">
                  <h6>First Look</h6>
                  <h1>NIKE AIR MAX PULSE</h1>
                  <p>Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse designed to push you past your limits and help you go to the max.</p>
                  <button>Notify me</button>
                  <button>Shop Air Max</button>
               </div>
            </div>
         </section>
         <section>
            <div className="home-contaner2">
               <div className="cont2-box1">
                  <h1>Best of Air Max Shop</h1>
                  <h4>Shop &#10094; &#10095;</h4>
               </div>
               <div className="cont2-cards">
                  {cards.map((card) => (
                     <div className="cont2-box2">
                        <img src={card.image} alt={card.heading} />
                        <h1>{card.heading}</h1>
                        <div className="c2box2">
                           <p>{card.discription}</p>
                           <h6>{card.price}</h6>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>
         <section>
            <div className="home-container3">
               <div className="cont3-box1">
                  <h1>Featured</h1>
                  <img src="back2.png" alt="background" />
               </div>
               <div className="cont3-box2">
                  <h1>STEP INTO WHAT FEELS GOOD</h1>
                  <p>Cause everyone should know the feeling of running in that perfect pair.</p>
                  <button>Find Your Shoe</button>
               </div>
            </div>
         </section>
         <section>
            <div className="home-container4">
               <div className="cont4-box1">
                  <h1>Gear Up</h1>
               </div>
               <div className="cont4-card">
                  {card1.map((card) => (
                     <div className="cont4-box2">
                        <img src={card.image} alt={card.heading} />
                        <h1>{card.heading}</h1>
                        <div className="c4box2">
                           <p>{card.discription}</p>
                           <h6>{card.price}</h6>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>
         <section>
            <div className="home-container5">
               <div className="cont5-box1">
                  <h1>Don't Miss</h1>
                  <img src="back3.png" alt="background" />
               </div>
               <div className="cont5-box2">
                  <h1>FLIGHT ESSENTIALS</h1>
                  <p>Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
                  <button>Shop</button>
               </div>
            </div>
         </section>
         <section>
            <div className="home-container6">
               <div className="cont6-box1">
                  <h1>The Essentials</h1>
                  <div className="c6box1">
                     <img src="card9.png" alt="Brand" id="c6img1"/>
                     <button>Men's</button>
                     <img src="card10.png" alt="Brand" />
                     <button>Women's</button>
                     <img src="card11.png" alt="Brand" />
                     <button>Kid's</button>
                  </div>
               </div>
            </div>
         </section>
         <section>
            <div className="home-container7">
               <div className="cont7-boxes">
                  <div className="cont7-box1">
                     <h1>Icone</h1>
                     <ul>
                        <li>Air Force 1</li>
                        <li>Huarache</li>
                        <li>Air Max 90</li>
                        <li>Air Max 95</li>
                     </ul>
                  </div>
                  <div className="cont7-box1">
                     <h1>Shoes</h1>
                     <ul>
                        <li>All Shoes</li>
                        <li>Custom Shoes</li>
                        <li>Jordan Shoes</li>
                        <li>Running Shoes</li>
                     </ul>
                  </div>
                  <div className="cont7-box1">
                     <h1>Clothing</h1>
                     <ul>
                        <li>All Clothing</li>
                        <li>Modest Wear</li>
                        <li>Hoodies & Pullovers</li>
                        <li>Shirts & Tops</li>
                     </ul>
                  </div>
                  <div className="cont7-box1">
                     <h1>Kids'</h1>
                     <ul>
                        <li>Infant & Toddler Shoes</li>
                        <li>Kids' Shoes</li>
                        <li>Kids' Jordan Shoes</li>
                        <li>Kids' Basketball Shoes</li>
                     </ul>
                  </div>
               </div>
            </div>
         </section>
      </div>
   )
}
