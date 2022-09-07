import spinc from '../../../image/spinc.png';


const Header = () => {

    const newRandomNumber = () => {
        let x = Math.floor((100000 + Math.random() * 900000));
        document.getElementById("rand").innerHTML = x;
      }

    return ( <>
     
      <nav className="navbar navbar-expand-lg navbar-dark " style={{
        backgroundColor: '#0c315b'
      }}>
        <div className="container-fluid" id="container">
          <a className="navbar-brand" href="/"><img src={spinc}  alt="logo" width="80" height="85" />Spinc crystal</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" >
      <span className="navbar-toggler-icon"></span>
    </button>
    
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About us</a>
              </li>
              <li className="nav-item">
                <button className='track-btn'><a href="/" className='track-link'>Track Your Shipment</a></button>
              </li>
              <li className="nav-item dropdown" id="dropdown">
                <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false" >
                
                  Contact us
                </button>
                <ul className="dropdown-menu dropdown-menu-light" id="list" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="/"><b>Email: </b>Floridaspinc@mail.com </a></li>
                  <li><a className="dropdown-item" href="/"><b>Address: </b>1710 SW 100th Ave, Miramar, FL 33025, United States. <br /><b>Phone-Number: </b> +9159666087 </a></li>
                  <li><a className="dropdown-item" href="/"><b>Address: </b>12 Hornby View Ruston Sidhwa Marg, Gunbow st, Ballard Estate, Mumbai India <br /><b>Phone-Number: </b>  +17862506037</a></li>
                  <li><a className="dropdown-item" href="/"><b>Address: </b>Accra mall, Tetteh Quarshie Ave.<br /><b>Phone-Number: </b> +233201329925</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      <article className="text">
        <h1>Fastest, Safest and best delivery for your goods</h1>
        <h2 id="about">About</h2>
        <p>The best choice for the delivery of your package<br /> that require speed,security during delivery<br /> and has many other features.</p>
        <h2 id="about">Send us an Email</h2>
        <form className="form-floating">
          <input type="email" className="form-control" id="floatingInputValue floatingTextarea" placeholder="name@example.com" value="test@example.com"/>
          <label  for="floatingTextarea">Email</label>
          <button type="button" className="btn btn-primary">Send</button>
        </form>

        <div className="track">
          <h3>
            Refrence ID
          </h3>
          <p>Click the button below to generate a new refrence id:</p>
          <button className="btn"  onClick={newRandomNumber}>Generate!</button>
          <p id="rand"></p>
         </div>
        
      </article>
  
    </> );
}
 
export default Header;