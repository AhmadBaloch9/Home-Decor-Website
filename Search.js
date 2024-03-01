// ====== Import React =====///
import React from 'react';
// ====== Import Link from React Router Dom ======//
import { Link } from 'react-router-dom';
// ====== Import Font Awesome Icons======//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCartShopping ,faUser,faTruckMedical,faCartFlatbed,faFileShield, faXmark} from '@fortawesome/free-solid-svg-icons';
import { faBars ,faRotate,faMagnifyingGlass,faStar,faBagShopping,faEye} from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faTwitter,faInstagram,faTiktok,faYahoo, faYoutube} from '@fortawesome/free-brands-svg-icons';

// ======= Import Images =======//
import image1 from '../Components/Assests/image1.webp';
import image2 from '../Components/Assests/image2.webp';
import image3 from '../Components/Assests/image3.webp';
import image4 from '../Components/Assests/image4.webp';
import image5 from '../Components/Assests/image5.webp';
import image6 from '../Components/Assests/image6.webp';
import image7 from '../Components/Assests/image7.webp';
import image8 from '../Components/Assests/image8.webp';
import image9 from '../Components/Assests/image9.webp';
import image10 from '../Components/Assests/image10.webp';
import image11 from '../Components/Assests/image11.webp';
import image12 from '../Components/Assests/image12.webp';

const Home=()=>
{
  const[show,setShow]=React.useState(false);
  const display=()=>{
    setShow(true)
  }
  const close=()=>{
    setShow(false);
  }
  return (
    <div>
    {/* ===== Container ===== */}
    <div className="container">
     {/* ====== Nav Links ===== */}
     <div className="nav-links">
     {/* ====== Right Links ====== */}
        <div className="left">
            <li><Link><FontAwesomeIcon icon={faBars} className='faBars' onClick={display}/></Link></li>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/search"><FontAwesomeIcon icon={faMagnifyingGlass} className='faMagni'/>Search</Link></li>
        </div>
        {/* ====== Center Name ====== */}
        <div className="center">
            <h2><span>Dec</span>ore</h2>
        </div>
        {/* ====== Left Links ====== */}
        <div className="right">
        <li><Link><FontAwesomeIcon icon={faUser} className='sign'/>Sign Up</Link></li>
        <li><Link><FontAwesomeIcon icon={faRotate}  className='sign'/>Compare</Link></li>
        <li><Link><FontAwesomeIcon icon={faStar}  className='sign'/>Wishlist</Link></li>
        <li><Link><FontAwesomeIcon icon={faCartShopping}  className='sign'/>Cart</Link></li>
        </div>
     </div>
    {/* ===== Footer ===== */}
    <footer>
      <div className="decors">
         <h4>Decors</h4>
         <p>Sed sit lectus purus ligula lectus sit at ut auctor. <br></br>Sed ultrices viverra donec enim. Ultrices volutpat egestas <br></br>feugiat ultricies eget. Tellus vestibulumю</p>
         <h5>Follow Us</h5>
         <div className="icon">
     <FontAwesomeIcon icon={faYahoo} className='star'/>
     <FontAwesomeIcon icon={faTwitter} className='star'/>
     <FontAwesomeIcon icon={faTiktok} className='star'/>
     <FontAwesomeIcon icon={faYoutube} className='star'/>
     <FontAwesomeIcon icon={faFacebook} className='star'/>
         </div>
      </div>
      <div className="customer">
        <h2>Customer</h2>
        <li><Link >Track Your Order</Link></li>
        <li><Link >Product Guides</Link></li>
        <li><Link >Wishlists</Link></li>
        <li><Link >Privacy Policy</Link></li>
        <li><Link >Store Locator</Link></li>
      </div>
      <div className="customer">
      <h2>Categories</h2>
        <li><Link href="#">Women</Link></li>
        <li><Link href="#">Men</Link></li>
        <li><Link href="#">Speakers</Link></li>
        <li><Link href="#">Handbag</Link></li>
        <li><Link href="#">Accessories</Link></li>
      </div>
      <div className="about">
      <h2>About</h2>
        <div className="information">
          <p>Information@shop.com</p>
          <p>+1 234-23-76778</p>
        </div>
        <div className="information">
        <p>136 River Drive, Suite 34</p>
          <p>Cottonhall,CA 7699 NY,United State</p>
        </div>
        <div className="information">
        <p>Depo Chock</p>
          <p>Cottonhall,CA 7699 NY,United State</p>
        </div>
      </div>
    </footer>
    {/* ====== Copy Right ====== */}
    <div className="copy-right">
      <p>All Copyright Reserved | Ceated By Shahzad Ahmad Baloch</p>
    </div>
    {/* ======= Side Bar ====== */}
     <div className="side-bar">
     <div className="nav-links medium">
     {/* ====== Right Links ====== */}
        <div className="left">
            <li><a><FontAwesomeIcon icon={faBars} className='faBars'onClick={display}/></a></li>
            <li className='fonta'><a><FontAwesomeIcon icon={faUser} className='sign'/>Sign Up</a></li>
        </div>
        {/* ====== Center Name ====== */}
        <div className="center">
            <h2><span>Dec</span>ore</h2>
        </div>
        {/* ====== Left Links ====== */}
        <div className="right">
        <li className='small'><Link><FontAwesomeIcon icon={faStar}  className='sign'/>Wishlist</Link></li>
        <li className='ex-small'><Link><FontAwesomeIcon icon={faCartShopping}  className='sign'/>Cart</Link></li>
        </div>
     </div>
     </div>
     {/* ======= Side Bar Details ====== */}
     <div className="SideBar-Details" style={{left:show?`0`:`-400px`}}>
     <FontAwesomeIcon icon={faXmark}  className='Xmark' onClick={close}/>
         <h2>Decors</h2>
      <div className="input">
        <input type="search" name="" id="" placeholder='Search'/>
        <FontAwesomeIcon icon={faMagnifyingGlass}  className='sign'/>
      </div>
      <div className="side-links">
            <li><Link>Our Shop</Link></li>
            <li><Link>News</Link></li>
            <li><Link>Contact Us</Link></li>
            <li><Link><FontAwesomeIcon icon={faMagnifyingGlass} className='faMagni sign'/>Search</Link></li>
            <li><Link><FontAwesomeIcon icon={faUser} className='sign'/>Sign Up</Link></li>
        <li><Link><FontAwesomeIcon icon={faRotate}  className='sign'/>Compare</Link></li>
        <li><Link><FontAwesomeIcon icon={faStar}  className='sign'/>Wishlist</Link></li>
        <li><Link><FontAwesomeIcon icon={faCartShopping}  className='sign'/>Cart</Link></li>
     </div>
    </div>
    </div>
    </div>
  )
}

export default Home
