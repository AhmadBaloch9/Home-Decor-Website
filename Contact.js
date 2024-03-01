// ====== Import React =====///
import React,{useState} from 'react';
// ====== Import Link from React Router Dom ======//
import { Link } from 'react-router-dom';
// ====== Import Font Awesome Icons======//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 


import { faCartShopping,faUser,faHollyBerry,faMenorah,faTents,faNoteSticky,faTruckFast,faXmark, faTty, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBars ,faRotate,faMagnifyingGlass,faStar,faEye} from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faTwitter,faInstagram,faTiktok,faYahoo, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { faArrowRight ,faHeart,faRepeat} from '@fortawesome/free-solid-svg-icons';

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
  const [show, setShow] = React.useState(false);
  const [Display, setDisplay] = React.useState(false);
  const [disappear, setDisappear] = React.useState(true)
  const [drog, setDrog] = React.useState(false)
  const [mark, setMark] = React.useState(true)
  const[wish,setWish]=React.useState(false)
  const[newCart,setNewCart]=useState(false)
  const[newcompare,setNewCompare]=useState(false)
  const [newglobe,setNewglobe]=useState(false)

  const [color,setColor] = React.useState(false)

  const setFixed=()=>{
    if(window.scrollY>=90){
      setColor(true)
    }
    else{
      setColor(false)
    }
  }
  
  const display=()=>{
    setShow(true)
  }
  const close=()=>{
    setShow(false);
  }
  function Appear() {
    setDisplay(true)
  }

  function appear() {
    setDisplay(false)
  }
  function Drag() {
    setDrog(true)
  }
  function seen() {
    setDrog(false)
  }
   function Heart(){
    setWish(true)
   }
   function disp(){
    setWish(false)
   }
   function Carts(){
   setNewCart(true)
   }
   function shop(){
    setNewCart(false)
   }     
   function Compare(){
       setNewCompare(true)
   } 
   function markComp(){
    setNewCompare(false)
   }
   function Globe(){
    setNewglobe(true)
   }
   function Grmen(){
      setNewglobe(false)
   }
   window.addEventListener("scroll",setFixed)
  return (
    <div>
    {/* ===== Container ===== */}
    <div className="container">
     {/* ====== Nav Links ===== */}
     <div className={color?'nav-links-bg' :'nav-links'}>
     {/* ====== Right Links ====== */}
        <div className="left">
            <li><Link><FontAwesomeIcon icon={faBars} className='faBars' onClick={display}/></Link></li>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link  onClick={Drag}><FontAwesomeIcon icon={faMagnifyingGlass} className='faMagni'/>Search</Link></li>
        </div>
        {/* ====== Center Name ====== */}
        <div className="center">
            <h2><span>Dec</span>ore</h2>
        </div>
        {/* ====== Left Links ====== */}
        <div className="right">
        <li><Link onClick={appear}><FontAwesomeIcon icon={faUser} className='sign'/>Sign Up</Link></li>
        <li><Link><FontAwesomeIcon icon={faRotate}  className='sign'/>Compare</Link></li>
        <li><Link><FontAwesomeIcon icon={faStar}  className='sign'/>Wishlist</Link></li>
        <li><Link ><FontAwesomeIcon icon={faCartShopping}  className='sign'/>Cart</Link></li>
        </div>      
     </div>
     <div className="header shop">
          {/* ====== Text Side ====== */}
          <p><Link to="/home" className='home-link'>Home<FontAwesomeIcon icon={faArrowRight} className='arrowRight' /></Link></p>
          <h1>Contact Us</h1>
        </div>
        </div>
         {/* ======= Section 1 ======== */}
       <div className="shop-section-1">
        {/* ===== Box 1 ==== */}
        <div className="box contact">
         <div className="fonts">
         <FontAwesomeIcon icon={faTty} className='famin'/>
         </div>
         <div className="text">
         <p>Fax: +1 9099 0383, +1 9099 0000</p>
             <h3>Send  Now</h3>
             
         </div>
        </div>
       {/* ===== Box 2 ==== */}
       <div className="box contact">
         <div className="fonts">
         <FontAwesomeIcon icon={faLocationDot} className='famin'/>
         </div>
         <div className="text">
         <p>120 King Street, Melborne 30 Australia</p>
             <h3>See Our Stores</h3>
             
         </div>
        </div>
        {/* ===== Box 3 ==== */}
        <div className="box contact">
         <div className="fonts">
         <FontAwesomeIcon icon={faEnvelope} className='famin'/>
         </div>
         <div className="text">
         <p>Slowly she drifted to the southeast rising</p>
             <h3>Information@gmail.net</h3>
             
         </div>
        </div>
        {/* ===== Box 4 ==== */}
        <div className="box contact">
         <div className="fonts">
         <FontAwesomeIcon icon={faTruckFast} className='famin'/>
         </div>
         <div className="text">
         <p>Slowly she drifted to the southeast rising.</p>
             <h3>Shipping Information</h3>  
         </div>
        </div>
        </div>
      {/* ========= Contact and Location ========= */}
      <div className="section-contact">
        <div className="contact-page">
           <h3>Leave Us A Messege</h3>
           <p>It is a long established fact that a reader will be distracted by the readables content of a page<br></br> when bookings layout. The point ofen using its Lorem Ipsum that has a more-or-less.</p>
           <div className="name">
            <div className="first">
              <h4>First Name *</h4>
              <input type="text" name="" id="" placeholder='Enter Name'/>
            </div>
            <div className="first">
              <h4>Last Name *</h4>
              <input type="text" name="" id="" placeholder='Enter Name'/>
            </div>
           </div>
           <h4>Subject *</h4>
           <input type="text" name="" id="" placeholder='Enter Subject'/>
           <h4>Your Messege *</h4>
           <textarea name="" id="" cols="60" rows="8" placeholder='Enter Messege'></textarea>
           <button>Send Messege</button>
        </div>
        <div className="location-page">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13616.531470915834!2d74.32354240000001!3d31.438008899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1707102370692!5m2!1sen!2s" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

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
     {/* ======= Search Bar ======= */}

     <div className="upper" style={{ top: drog ? `0%` : `-1000px` }}>
        <FontAwesomeIcon icon={faXmark} className='Xmark' onClick={seen} />

        <div className="text">
          <h3>What You Are Looking For?</h3>
          <div className="inputs">
            <select name="" id="">
              <option value="">All Categories</option>
              <option value="">Diamonds</option>
              <option value="">Earrings</option>
              <option value="">Rings</option>
              <option value="">silver Sets</option>
              <option value="">Wedding Rings</option>
            </select>
            <div className="search">
              <input type="search" name="" id="" placeholder='Search For' />

            </div>
          </div>
          <div className="trending">
            <h5>trending Searches:</h5>
            <p>Rings</p>
            <p>Silver</p>
            <p>Gold</p>

          </div>
        </div>
    </div>
    </div>
  )
}

export default Home
