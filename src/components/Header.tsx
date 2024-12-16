import Link from "next/link"

export default function Header() {
    return (
        <div className="header-container">
            <div className="header-box1">
                <img src="icone1.png" alt="icone" />
                <ul>
                    <li>Find a store</li>
                    <li>Help</li>
                    <Link href={"/member"}><li>Join us</li></Link>
                    <Link href={"/login"}><li>Sign in</li></Link>
                </ul>
            </div>
            <div className="header-box2">
                <img src="icone2.png" alt="icone" id="icone1" />
                <ul>
                    <Link href={"/blog"}><li>New & Featured</li></Link>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kids</li>
                    <li>Sale</li>
                    <li>SNKRS</li>
                </ul>
                <div className="box2-part1">
                    <img src="icone3.png" alt="icone" />
                    <input type="text" placeholder="search" />
                </div>
                <div className="box2-part2">
                    <img src="heart.png" alt="icone" />
                    <img src="bag.png" alt="icone" />
                </div>
            </div>
        </div>
    )
}
