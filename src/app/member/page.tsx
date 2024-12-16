export default function Member() {
    return (
        <div className="member-container"><br />
            <div className="member-box">
                <center><img src="icone2.png" alt="icone" /></center>
                <center><h1>BECOME A NIKE MEMBER</h1></center>
                <center><p>Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</p></center>
                <input type="text" placeholder="Email address" /><br />
                <input type="password" placeholder="Password" /><br />
                <input type="text" placeholder="First Name" /><br />
                <input type="text" placeholder="Last Name" /><br />
                <input type="date" placeholder="Date OF Birth"/><br />
                <center><p>Get a Nike Member Reward every year on your Birthday.</p></center>
                <select>
                    <option value="karachi">Karachi</option>
                    <option value="lahore">Lahore</option>
                    <option value="islamabad">Islamabad</option>
                    <option value="peshawar">Peshawar</option>
                </select><br />
                <button>Male</button>
                <button>Female</button><br />
                <center><input type="checkbox" />Sign up for emails to get updates <br /> from Nike on products, offers and <br /> your Member benefits</center>
                <center><p>By logging in, you agree to Nike's <a href="#">Privacy Policy</a><br /> and <a href="#">Terms of Use.</a></p></center>
                <div className="join-us-button">
                  <button >JOIN US</button>
                </div>
                <h6>Already a Member? <a href="/login">Sign in.</a></h6>
            </div><br />
        </div>
    )
}