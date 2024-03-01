// ====== Import React =====///
import React, { useState } from 'react';
// ====== Import Link from React Router Dom ======//
import { Link } from 'react-router-dom';
// ====== Import Font Awesome Icons======//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser, faTruckMedical, faCartFlatbed, faFileShield, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faBars, faRotate, faMagnifyingGlass, faStar, faBagShopping, faEye, faHeart, faRepeat } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faTiktok, faYahoo, faYoutube } from '@fortawesome/free-brands-svg-icons';

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

const Home = () => {

  const [Display, setDisplay] = React.useState(false);
  const [drog, setDrog] = React.useState(false)
  const [mark, setMark] = React.useState(true)
  const [sign, setSign] = React.useState(false)
  const [compare, setCompare] = React.useState(false)
  const [show, setShow] = React.useState(false);
  const [wishlist, setWishlist] = React.useState(false)
  const [cart, setCart] = React.useState(false)
  const [color,setColor] = React.useState(false)

  const setFixed=()=>{
    if(window.scrollY>=90){
      setColor(true)
    }
    else{
      setColor(false)
    }
  }
  const display = () => {
    setShow(true)
  }
  const close = () => {
    setShow(false);
  }
  const appear = () => {
    setSign(true)
  }
  const Xmark = () => {
    setSign(false)
  }
  function Drag() {
    setDrog(true)
  }
  function seen() {
    setDrog(false)
  }
  const compreAppear = () => {
    setCompare(true);
  }
  const closeCompare = () => {
    setCompare(false)
  }
  const wish = () => {
    setWishlist(true)
  }
  const closeWish = () => {
    setWishlist(false)
  }
  const showCart = () => {
    setCart(true)
  }
  const closeCart = () => {
    setCart(false)
  }
     window.addEventListener("scroll",setFixed)
  return (
    <div>
      {/* ===== Container ===== */}
      <div className="container">
        {/* ====== Nav Links ===== */}
  
        <div className={color?'nav-links-bg' :'nav-links'} >
          {/* ====== Right Links ====== */}
          <div className="left">
            <li><Link><FontAwesomeIcon icon={faBars} className='faBars' onClick={display} /></Link></li>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link onClick={Drag}><FontAwesomeIcon icon={faMagnifyingGlass} className='faMagni' />Search</Link></li>
          </div>
          {/* ====== Center Name ====== */}
          <div className="center">
            <h2><span>Dec</span>ore</h2>
          </div>
          {/* ====== Left Links ====== */}
          <div className="right">
            <li><Link onClick={appear} ><FontAwesomeIcon icon={faUser} className='sign' />Sign Up</Link></li>
            <li><Link onClick={compreAppear}><FontAwesomeIcon icon={faRotate} className='sign' />Compare</Link></li>
            <li><Link onClick={wish}><FontAwesomeIcon icon={faStar} className='sign' />Wishlist</Link></li>
            <li><Link onClick={showCart}><FontAwesomeIcon icon={faCartShopping} className='sign' />Cart</Link></li>
          </div>
        </div>
        {/* ======= Header ======= */}
        <div className="header">
          {/* ====== Text Side ====== */}
          <div className="text">
            <h1>Elegent Pandmade Tableware</h1>
            <p>Embrace the beauty of Impression with our Handmade Tableware</p>
            <button>See All Products</button>
          </div>
          <div className="image">
            <img src={image1} alt="This is an image " />
          </div>
        </div>
      </div>
      {/* ===== Best Sellers ===== */}
      <div className="best">
        <h1>Our Bestsellers</h1>
        <p>Looking for something specific? Shop by category to find your perfect piece of jewellery!</p>
      </div>
      {/* ====== Section 1 ====== */}
      <section className="section-1">
        <div className="first">
          {/* ===== Box ===== */}
          <div className="box">
            {/* ====== Decore Name ===== */}
            <h1>Nature Beauty</h1>
            <div className="icons">
              <FontAwesomeIcon icon={faBagShopping} className='star' />
              <FontAwesomeIcon icon={faStar} className='star' />
              <FontAwesomeIcon icon={faRotate} className='star' />
              <FontAwesomeIcon icon={faEye} className='star' />
            </div>
            <img src={image6} alt="This is an image" />
            <button>Buy Now</button>
          </div>
          <div className="box">
            <h1>Handmade</h1>
            <div className="icons">
              <FontAwesomeIcon icon={faBagShopping} className='star' />
              <FontAwesomeIcon icon={faStar} className='star' />
              <FontAwesomeIcon icon={faRotate} className='star' />
              <FontAwesomeIcon icon={faEye} className='star' />
            </div>
            <img src={image2} alt="This is an image" />
            <button>Buy Now</button>
          </div>
          <div className="box">
            <h1>Sustainable</h1>
            <div className="icons">
              <FontAwesomeIcon icon={faBagShopping} className='star' />
              <FontAwesomeIcon icon={faStar} className='star' />
              <FontAwesomeIcon icon={faRotate} className='star' />
              <FontAwesomeIcon icon={faEye} className='star' />
            </div>
            <button>Buy Now</button>
          </div>
        </div>
        <div className="second">
          <div className="box">
            <h1>Inspired Discount</h1>
            <div className="icons">
              <FontAwesomeIcon icon={faBagShopping} className='star' />
              <FontAwesomeIcon icon={faStar} className='star' />
              <FontAwesomeIcon icon={faRotate} className='star' />
              <FontAwesomeIcon icon={faEye} className='star' />
            </div>
            <img src={image4} alt="This is an image" />
            <button>Buy Now</button>
          </div>
          <div className="box">
            <h1>Pandmade</h1>
            <div className="icons">
              <FontAwesomeIcon icon={faBagShopping} className='star' />
              <FontAwesomeIcon icon={faStar} className='star' />
              <FontAwesomeIcon icon={faRotate} className='star' />
              <FontAwesomeIcon icon={faEye} className='star' />
            </div>
            <img src={image5} alt="This is an image" />
            <button>Buy Now</button>
          </div>
          <div className="box">
            <h1>Embrace</h1>
            <div className="icons">
              <FontAwesomeIcon icon={faBagShopping} className='star' />
              <FontAwesomeIcon icon={faStar} className='star' />
              <FontAwesomeIcon icon={faRotate} className='star' />
              <FontAwesomeIcon icon={faEye} className='star' />
            </div>
            <img src={image6} alt="This is an image" />
            <button>Buy Now</button>
          </div>
        </div>
      </section>
      {/* ====== Section 2 ====== */}
      <section className="section-2">
        <div className="side1">
          <div className="price">
            <span>$650</span>
            <p>$500.00</p>
          </div>
          <h3>Understand Sophistication</h3>
          <h5>Sed sit lectus purus ligula lectus sit at ut auctor.<br></br>
            Elementor Home Decor 02 Demo</h5>
          <button>Add To Cart</button>
          <div className="delievry">
            <div className="free">
              <FontAwesomeIcon icon={faTruckMedical} className='fatrucks' />
              <h6>Free Delivery</h6>
            </div>
            <div className="free">
              <FontAwesomeIcon icon={faCartFlatbed} className='fatrucks' />
              <h6>Non Contact Shipping</h6>
            </div>
            <div className="free">
              <FontAwesomeIcon icon={faCartFlatbed} className='fatrucks' />
              <h6>Money Back Gurrenty</h6>
            </div>
            <div className="free">
              <FontAwesomeIcon icon={faFileShield} className='fatrucks' />
              <h6>Secure Payments</h6>
            </div>
          </div>
        </div>
        {/* ====== Section Image Section */}
        <div className="side2">
          {/* ===== Text =====*/}
          <span>New</span>
          <div className="upper-text">
            <h4>Attractable and Reliable</h4>
            <p>One of the Best Choose</p>
            <button>See Details</button>
          </div>
          <img src={image7} alt="This is an image" />
        </div>

      </section>
      {/* ===== Section 3 ===== */}
      {/* ====== Section 1 ====== */}
      <section className="section-1 section-3">
        <div className="first">
          {/* ===== Box ===== */}
          <div className="box">
            {/* ====== Decore Name ===== */}
            <h1>Plate Glasses</h1>
            <div className="icons">
              <FontAwesomeIcon icon={faBagShopping} className='star' />
              <FontAwesomeIcon icon={faStar} className='star' />
              <FontAwesomeIcon icon={faRotate} className='star' />
              <FontAwesomeIcon icon={faEye} className='star' />
            </div>
            <img src={image8} alt="This is an image" />
            <button>Buy Now</button>
          </div>
          <div className="box">
            <h1>Handmade</h1>
            <div className="icons">
              <FontAwesomeIcon icon={faBagShopping} className='star' />
              <FontAwesomeIcon icon={faStar} className='star' />
              <FontAwesomeIcon icon={faRotate} className='star' />
              <FontAwesomeIcon icon={faEye} className='star' />
            </div>
            <img src={image2} alt="This is an image" />
            <button>Buy Now</button>
          </div>
          <div className="box">
            <h1>Reliable</h1>
            <div className="icons">
              <FontAwesomeIcon icon={faBagShopping} className='star' />
              <FontAwesomeIcon icon={faStar} className='star' />
              <FontAwesomeIcon icon={faRotate} className='star' />
              <FontAwesomeIcon icon={faEye} className='star' />
            </div>
            <img src={image9} alt="This is an image" />
            <button>Buy Now</button>
          </div>
        </div>
        <div className="second">
          <div className="box">
            <h1>Dishes</h1>
            <div className="icons">
              <FontAwesomeIcon icon={faBagShopping} className='star' />
              <FontAwesomeIcon icon={faStar} className='star' />
              <FontAwesomeIcon icon={faRotate} className='star' />
              <FontAwesomeIcon icon={faEye} className='star' />
            </div>
            <img src={image10} alt="This is an image" />
            <button>Buy Now</button>
          </div>
          <div className="box">
            <h1>Pandmade</h1>
            <div className="icons">
              <FontAwesomeIcon icon={faBagShopping} className='star' />
              <FontAwesomeIcon icon={faStar} className='star' />
              <FontAwesomeIcon icon={faRotate} className='star' />
              <FontAwesomeIcon icon={faEye} className='star' />
            </div>
            <img src={image11} alt="This is an image" />
            <button>Buy Now</button>
          </div>
          <div className="box">
            <h1>Embrace</h1>
            <div className="icons">
              <FontAwesomeIcon icon={faBagShopping} className='star' />
              <FontAwesomeIcon icon={faStar} className='star' />
              <FontAwesomeIcon icon={faRotate} className='star' />
              <FontAwesomeIcon icon={faEye} className='star' />
            </div>
            <img src={image12} alt="This is an image" />
            <button>Buy Now</button>
          </div>
        </div>
      </section>
      {/* ===== Footer ===== */}
      <footer>
        <div className="decors">
          <h4>Decors</h4>
          <p>Sed sit lectus purus ligula lectus sit at ut auctor. <br></br>Sed ultrices viverra donec enim. Ultrices volutpat egestas <br></br>feugiat ultricies eget. Tellus vestibulumю</p>
          <h5>Follow Us</h5>
          <div className="icon">
            <FontAwesomeIcon icon={faYahoo} className='star' />
            <FontAwesomeIcon icon={faTwitter} className='star' />
            <FontAwesomeIcon icon={faTiktok} className='star' />
            <FontAwesomeIcon icon={faYoutube} className='star' />
            <FontAwesomeIcon icon={faFacebook} className='star' />
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
            <li><a><FontAwesomeIcon icon={faBars} className='faBars' onClick={display} /></a></li>
            <li className='fonta'><a><FontAwesomeIcon icon={faUser} className='sign' />Sign Up</a></li>
          </div>
          {/* ====== Center Name ====== */}
          <div className="center">
            <h2><span>Dec</span>ore</h2>
          </div>
          {/* ====== Left Links ====== */}
          <div className="right">
            <li className='small'><Link><FontAwesomeIcon icon={faStar} className='sign' />Wishlist</Link></li>
            <li className='ex-small'><Link><FontAwesomeIcon icon={faCartShopping} className='sign' />Cart</Link></li>
          </div>
        </div>
      </div>
      {/* ======= Side Bar Details ====== */}
      <div className="SideBar-Details" style={{ left: show ? `0` : `-400px` }}>
        <FontAwesomeIcon icon={faXmark} className='Xmark' onClick={close} />
        <h2>Decors</h2>
        <div className="input">
          <input type="search" name="" id="" placeholder='Search' />
          <FontAwesomeIcon icon={faMagnifyingGlass} className='sign' />
        </div>
        <div className="side-links">
          <li><Link to={`/shop`}>Our Shop</Link></li>
          <li><Link to={`/news`}>News</Link></li>
          <li><Link to={`/contact`}>Contact Us</Link></li>
          <li><Link onClick={Drag}><FontAwesomeIcon icon={faMagnifyingGlass} className='faMagni sign' />Search</Link></li>
          <li><Link><FontAwesomeIcon icon={faUser} className='sign' />Sign Up</Link></li>
          <li><Link><FontAwesomeIcon icon={faRotate} className='sign' />Compare</Link></li>
          <li><Link><FontAwesomeIcon icon={faStar} className='sign' />Wishlist</Link></li>
          <li><Link><FontAwesomeIcon icon={faCartShopping} className='sign' />Cart</Link></li>
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
      {/* ======== Sign Up Section ======= */}
      <div className="sign-up" style={{ right: sign ? `0` : `-400px` }}>
        <FontAwesomeIcon icon={faXmark} className='faXmark' onClick={Xmark} />
        <div className="log-in">
          <FontAwesomeIcon icon={faUser} className='faUser' />
          <h2>My Account</h2>
        </div>
        <div className="log-insec">
          <p>Username or email *</p>
          <input type="text" name="" id="" />
          <p>Enter Password *</p>
          <input type="password" name="" id="" />
          <div className="remember">
            <div className="remem">
              <input type="checkbox" name="" id="" className='check' />
              <p>Remem...</p>
            </div>
            <div className="lost">
              <button>Lost Password?</button>
            </div>
          </div>
          <button>Login</button>
          <p className='with'>SignUp with Facebook</p>
          <div className="facebook">
            <FontAwesomeIcon icon={faFacebook} className='fafacebook' />
            <h4>Facebook</h4>
          </div>
        </div>
      </div>
      {/* ========== Compare ========= */}
      <div className="compare" style={{ right: compare ? `0` : `-350px` }}>
        <FontAwesomeIcon icon={faXmark} className='faXmark' onClick={closeCompare} />
        <div className="compare-first">
          <FontAwesomeIcon icon={faRepeat} className='farepeat' />
          <h4>My Compare</h4>
        </div>
        <div className="compare-second">
          <p>No Products in Compare</p>
        </div>
      </div>
      {/* ========== Compare ========= */}
      <div className="wishlist" style={{ right: wishlist ? `0` : `-350px` }}>
        <FontAwesomeIcon icon={faXmark} className='faXmark' onClick={closeWish} />
        <div className="wishlist-first">
          <FontAwesomeIcon icon={faStar} className='fastar' />
          <h4>My Wishlist</h4>
        </div>
        <div className="wishlist-second">
          <p>No Products in Wishlists</p>
        </div>
      </div>
      {/* ========== Cart ========= */}
      <div className="cart" style={{ right: cart ? `0` : `-350px` }}>
        <FontAwesomeIcon icon={faXmark} className='faXmark' onClick={closeCart} />
        <div className="cart-first">
          <FontAwesomeIcon icon={faCartShopping} className='fastar' />
          <h4>My Cart</h4>
        </div>
        <div className="cart-second">
          <p>No Products in Your Cart</p>
        </div>
        <button>Return to Shop</button>
      </div>
    </div>
  )
}

export default Home
