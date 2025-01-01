import React from "react";
import "./Home.css"; 
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  const products = [
    { id: 1, name: "Product 1", price: "$25", image: "https://darlingretail.com/cdn/shop/products/1_7b64958c-304b-43bd-b759-c5366bfa9914_600x.jpg?v=1661581431" },
    { id: 2, name: "Product 2", price: "$40", image: "https://i.gadgets360cdn.com/products/large/redmi-note-12-5g-pro-plus-db-gadgets360-800x600-1673019783.jpg" },
    { id: 3, name: "Product 3", price: "$30", image: "https://rukminim2.flixcart.com/image/850/1000/kuof5ow0/trimmer/7/z/f/0-5-10-mm-bt3101-15-stainless-steel-cordless-philips-original-imag7r4r7ztgnuyk.jpeg?q=90&crop=false" },
    { id: 4, name: "Product 4", price: "$50", image: "https://uniformtailor.in/image/cache/catalog/data/shirts/personalized-executive-shirt/personalized-executive-royal-blue-office-shirt-670x760.png" },
    { id: 5, name: "Product 5", price: "$25", image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/power-hand-tool-kit/q/f/2/-original-imagyt7yhakpyq7c.jpeg?q=90&crop=false" },
    { id: 6, name: "Product 6", price: "$25", image: "https://www.oldprophet.com/cdn/shop/products/OP-0201-PLANS-HE-HAS-WHITE-WOMENS-OP-0201_1200x1200.png?v=1579764404" },
    { id: 7, name: "Product 7", price: "$25", image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/chocolate/4/e/c/61-dairy-milk-silk-chocolate-bar-1-cadbury-original-imagxgdpfgjqyecm.jpeg?q=90&crop=false" },
    { id: 8, name: "Product 8", price: "$25", image: "https://shubhra.madmarketer.in/wp-content/uploads/2024/11/c-vegan-chocolate-bars-4-1.jpg" },
  ];

  const extraProducts = [
    { id: 1, name: "Product 1", price: "$25", image: "https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/article/geo/Apple-iPhone-16-hero-geo-240909_inline.jpg.large.jpg" },
    { id: 2, name: "Product 2", price: "$40", image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/chocolate/4/e/c/61-dairy-milk-silk-chocolate-bar-1-cadbury-original-imagxgdpfgjqyecm.jpeg?q=90&crop=false" },
    { id: 3, name: "Product 3", price: "$30", image: "https://vescocycles.com/cdn/shop/files/IMG_01.jpg?v=1723524478" },
    { id: 4, name: "Product 4", price: "$50", image: "https://www.jiomart.com/images/product/original/493831607/east-coast-old-skool-26t-black-seagreen-product-images-o493831607-p604517238-0-202409201554.jpg?im=Resize=(420,420)" },
    { id: 5, name: "Product 5", price: "$35", image: "https://4.imimg.com/data4/NO/FW/MY-4385644/marie-biscuits.jpg" },
    { id: 6, name: "Product 6", price: "$45", image: "https://m.media-amazon.com/images/I/61wzADyl5HL.jpg" },
    { id: 7, name: "Product 7", price: "$20", image: "https://m.media-amazon.com/images/I/81bMZZLa6RL._AC_UF1000,1000_QL80_.jpg" },
    { id: 8, name: "Product 8", price: "$60", image: "https://www.oldprophet.com/cdn/shop/products/OP-0201-PLANS-HE-HAS-WHITE-WOMENS-OP-0201_1200x1200.png?v=1579764404" },
  ];

  return (
    <div className="home">
      {/* Slideshow Section */}
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={3000}
        showStatus={false}
      >
        <div>
          <img src="https://thumbs.dreamstime.com/z/kite-festival-sale-traditional-indian-celebration-makar-sankranti-special-discount-offer-banner-colorful-flying-kites-kite-204489864.jpg" alt="Slide 1" />
        </div>
        <div>
          <img src="https://static.vecteezy.com/system/resources/previews/023/072/057/non_2x/makar-sankranti-sale-header-or-banner-design-with-discount-offer-and-kites-on-white-mandala-pattern-background-vector.jpg" alt="Slide 2" />
        </div>
        <div>
          <img src="https://images.fonearena.com/blog/wp-content/uploads/2024/01/Pongal-and-Sankranti-Festive-Store-1024x438.jpg" alt="Slide 3" />
        </div>
      </Carousel>

      {/* Shopping Cards Section */}
      <h1 className="special-offer">
        Products
        <hr style={{ backgroundColor: '#f44336' }} />
      </h1>
      <div className="product-cards">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <a href="/Order"><button className="buy-now">Buy Now</button></a>
          </div>
        ))}
      </div>
      
      <h1 className="special-offer">
        <hr style={{ backgroundColor: '#4caf50' }} />
        Special Offer
        <hr style={{ backgroundColor: '#f44336' }} />
      </h1>
      <div className="big-card">
        <img src="https://www.fonezone.ae/cdn/shop/articles/image_97.webp?v=1719234874" alt="Featured Product" />
        <div className="big-card-content">
          <h2>Special Offer!</h2>
          <p>Get 50% off on our best-selling product. Limited time offer!</p>
          <a href="/Offers"><button className="shop-now">Shop Now</button></a>
        </div>
      </div>

      {/* Extra Cards Section */}
      <h1 className="special-offer">
        <hr style={{ backgroundColor: '#4caf50' }} />
        Extra Products
        <hr style={{ backgroundColor: '#f44336' }} />
      </h1>
      <div className="product-cards">
        {extraProducts.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <a href="/Order"><button className="buy-now">Buy Now</button></a>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <footer className="footer-details">
        <div className="footer-content">
          <h1>© Podili Vamsi Krishna</h1>
          <h3>Email: vamsikrishna2666@gmail.com</h3>
          <p>
            GitHub: 
            <a
              href="https://github.com/your-github-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/your-github-link
            </a>
          </p>
          <p>
            Follow me on LinkedIn: 
            <a 
              href="https://www.linkedin.com/in/your-linkedin-profile" 
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
