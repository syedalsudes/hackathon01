export default function login() {
    return (
        <div className="login-container"><br />
            <div className="login-box">
                <center><img src="icone2.png" alt="icone" /></center>
                <center><h1>YOUR ACCOUNT FOR EVERYTHING NIKE</h1></center>
                <input type="text" placeholder="Email address" />
                <input type="password" placeholder="Password" /><br />
                <input type="checkbox" /> Keep me signed in
                <u><a href="#">Forgotten your password?</a></u>
                <center><p>By logging in, you agree to Nike's <a href="#">Privacy Policy</a> and <a href="#">Terms of Use.</a></p></center>
                <button>SIGN IN</button>
                <h6>Not a Member? <a href="/member">Join Us.</a></h6>
            </div><br /><br />
        </div>
    )
}