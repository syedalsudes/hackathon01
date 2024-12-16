import Link from "next/link";

const Cards = [
    {Image: "blog1.png", h5: "Just In", h1: "Nike Air Force 1 Mid '07", h3: "Men's Shoes", h6: "1 Colour", h2: "MRP : ₹ 10 795.00"},
    {Image: "blog2.png", h5: "Just In", h1: "Nike Court Vision Low Next Nature", h3: "Men's Shoes", h6: "1 Colour", h2: "MRP : ₹ 4 995.00"},
    {Image: "blog3.png", h5: "Just In", h1: "Nike Air Force 1 PLT.AF.ORM", h3: "Women's Shoes", h6: "1 Colour", h2: "MRP : ₹ 8 695.00"},
    {Image: "blog4.png", h5: "Just In", h1: "Nike Air Force 1 React", h3: "Men's Shoes", h6: "1 Colour", h2: "MRP : ₹ 13 295.00"},
    {Image: "blog5.png", h5: "Promo Exclusion", h1: "Air Jordan 1 Elevate Low", h3: "Women's Shoes", h6: "1 Colour", h2: "MRP : ₹ 11 895.00"},
    {Image: "blog6.png", h5: "Just In", h1: "Nike Standard Issue", h3: "Women's Shoes", h6: "1 Colour", h2: "MRP : ₹ 2 895.00"},
    {Image: "blog7.png", h5: "Promo Exclusion", h1: "Nike Dunk Low Retro SE", h3: "Men's Shoe", h6: "1 Colour", h2: "MRP : ₹ 9 695.00"},
    {Image: "blog8.png", h5: "Sustainable Materials", h1: "Nike Dri-FIT UV Hyverse", h3: "Men's Short-Sleeve Graphic Fitness Top", h6: "1 Colour", h2: "MRP : ₹ 2 495.00"},
    {Image: "blog9.png", h5: "Just In", h1: "Nike Court Vision Low", h3: "Men's Shoes", h6: "1 Colour", h2: "MRP : ₹ 5 695.00"},
    {Image: "blog10.png", h5: "Just In", h1: "Nike Dri-FIT Ready", h3: "Men's Short-Sleeve Fitness Top", h6: "1 Colour", h2: "MRP : ₹ 2 495.00"},
    {Image: "blog11.png", h5: "Just In", h1: "Nike One Leak Protection: Period", h3: "Women's Mid-Rise 18cm (approx.) Biker Shorts", h6: "1 Colour", h2: "MRP : ₹ 3 395.00"},
    {Image: "blog12.png", h5: "Just In", h1: "Nike Air Force 1 LV8 3", h3: "Older Kids' Shoe", h6: "1 Colour", h2: "MRP : ₹ 7 495.00"},
    {Image: "blog13.png", h5: "Just In", h1: "Nike Blazer Low Platform", h3: "Women's Shoes", h6: "1 Colour", h2: "MRP : ₹ 8 195.00"},
    {Image: "blog14.png", h5: "Just In", h1: "Nike Air Force 1 '07", h3: "Women's Shoe", h6: "1 Colour", h2: "MRP : ₹ 8 195.00"},
    {Image: "blog15.png", h5: "Just In", h1: "Nike Pro Dri-FIT", h3: "Men's Tight-Fit Sleeveless Top", h6: "1 Colour", h2: "MRP : ₹ 1 495.00"},
    {Image: "blog16.png", h5: "Just In", h1: "Nike Dunk Low Retro", h3: "Men's Shoes", h6: "1 Colour", h2: "MRP : ₹ 8 695.00"},
    {Image: "blog17.png", h5: "Just In", h1: "Nike Air Max SC", h3: "Women's Shoes", h6: "2 Colour", h2: "MRP : ₹ 5 995.00"},
    {Image: "blog18.png", h5: "Just In", h1: "Nike Dri-FIT UV Miler", h3: "Men's Short-Sleeve Running Top", h6: "1 Colour", h2: "MRP : ₹ 1 695.00"},
    {Image: "blog19.png", h5: "Just In", h1: "Nike Air Max SYSTM", h3: "Older Kids' Shoes", h6: "1 Colour", h2: "MRP : ₹ 6 495.00"},
    {Image: "blog20.png", h5: "Just In", h1: "Nike Alate All U", h3: "Women's Light-Support Lightly Lined U-Neck Printed Sports Bra", h6: "1 Colour", h2: "MRP : ₹ 2 195.00"},
    {Image: "blog21.png", h5: "Just In", h1: "Nike Court Legacy Lift", h3: "Women's Shoes", h6: "2 Colour", h2: "MRP : ₹ 7 495.00"},
    {Image: "blog22.png", h5: "Just In", h1: "Nike Swoosh", h3: "Women's Medium-support Padded Sports Bra Tank", h6: "2 Colour", h2: "MRP : ₹ 3 095.00"},
    {Image: "blog23.png", h5: "Just In", h1: "Nike SB Zoom Janoski OG+", h3: "Shoes", h6: "1 Colour", h2: "MRP : ₹ 8 595.00"},
    {Image: "blog24.png", h5: "Just In", h1: "Nike Dri-FIT Run Division Rise 365", h3: "Men's Running Tank", h6: "2 Colour", h2: "MRP : ₹ 3 495.00"},
    {Image: "blog25.png", h5: "Just In", h1: "Nike Dri-FIT Challenger", h3: "Men's 18cm (approx.) 2-in-1 Versatile Shorts", h6: "1 Colour", h2: "MRP : ₹ 2 495.00"},
    {Image: "blog26.png", h5: "Just In", h1: "Jordan Series ES", h3: "Men's Shoes", h6: "2 Colour", h2: "MRP : ₹ 7 495.00"},
    {Image: "blog27.png", h5: "Just In", h1: "Nike Outdoor Play", h3: "Older Kids' Oversized Woven Jacket", h6: "1 Colour", h2: "MRP : ₹ 3 895.00"},
    {Image: "blog28.png", h5: "Just In", h1: "Nike Sportswear Trend", h3: "Older Kids' (Girls') High-waisted Woven Shorts", h6: "2 Colour", h2: "MRP : ₹ 2 495.00"},
    {Image: "blog29.png", h5: "Just In", h1: "Nike Blazer Low '77 Jumbo", h3: "Women's Shoes", h6: "1 Colour", h2: "MRP : ₹ 8 595.00"},
    {Image: "blog30.png", h5: "Just In", h1: "Nike SB Force 58", h3: "Skate Shoe", h6: "1 Colour", h2: "MRP : ₹ 5 995.00"},
];

const buttons = [
    {name:"Best Selling Products"},
    {name:"Best Shoes"},
    {name:"New Basketball Shoes"},
    {name:"New Football Shoes"},
    {name:"New Men's Shoes"},
    {name:"New Running Shoes"},
    {name:"Best Men's Shoes"},
    {name:"New Jordan Shoes"},
    {name:"Best Women's Shoes"},
    {name:"Best Training & Gym"},
];

export default function Blog() {
    return (
        <div className="blog-container">
            <div className="blog-box1">
                <h3>New (500)</h3>
                <div className="blog-box1-part">
                    <h1>Hide Filters &#9881;</h1>
                    <h2>Sort By &#9660;</h2>
                </div>
            </div>
            <div className="blog-conatiner1">
                <div className="sidebar">
                    <div className="blog-ul">
                        <ul>
                            <li>Shoes</li>
                            <li>Sports Bras</li>
                            <li>Tops & T-Shirts</li>
                            <li>Hoodies & Sweatshirts</li>
                            <li>Jackets</li>
                            <li>Trousers & Tights</li>
                            <li>Shorts</li>
                            <li>Tracksuits</li>
                            <li>Jumpsuits & Rompers</li>
                            <li>Skirts & Dresses</li>
                            <li>Socks</li>
                            <li>Accessories & Equipment</li>
                        </ul>
                    </div>

                    <div className="blog-ul">
                        <h4>Gender</h4>
                        <label><input type="checkbox" /> Men</label>
                        <label><input type="checkbox" /> Women</label>
                        <label><input type="checkbox" /> Unisex</label>
                    </div>

                    <div className="blog-ul">
                        <h4>Kids</h4>
                        <label><input type="checkbox" /> Boys</label>
                        <label><input type="checkbox" /> Girls</label>
                    </div>

                    <div className="blog-ul">
                        <h4>Shop By Price</h4>
                        <label><input type="checkbox" /> Under ₹ 2,500.00</label>
                        <label><input type="checkbox" /> ₹ 2,501.00 +</label>
                    </div>
                </div>
                <Link href="/cardsDetails"><div className="blog-boxes">
                   {Cards.map((card) => (
                        <div className="blog-box2">
                            <img src={card.Image} alt={card.h1} />
                            <h5>{card.h5}</h5>
                            <h1>{card.h1}</h1>
                            <h3>{card.h3}</h3>
                            <h6>{card.h6}</h6>
                            <h2>{card.h2}</h2>
                        </div>
                    ))}
                </div></Link>
            </div>
            <div className="blog-box3">
                <h1>Related Categories</h1>
                {buttons.map((button)=> (
                <button>{button.name}</button>
                ))}
            </div>
        </div>
    )
}