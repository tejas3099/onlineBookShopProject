import React from "react";
import '../styles/my.css';
import s1 from "../images/pexels-cottonbro-studio-6475044.jpg";
import s2 from "../images/pexels-lisa-fotios-2090104.jpg";
import s3 from "../images/pexels-lml-3251706.jpg";
import s4 from "../images/pexels-polina-zimmerman-3747163.jpg";
import s5 from "../images/pexels-polina-zimmerman-3747497.jpg";
import s6 from "../images/309595-P8796B-214.jpg";



import "../styles/my.css";
import "../styles/index.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../../src/App.css';

function Home() {

    var login = window.sessionStorage.getItem("firstName")=="true";

    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 3000, min: 1000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };

    return ( 
      <div  className="background-container" >
          <br/> 
          <center>
          <h1 style={{ color: 'white' }}> WELCOME TO ONLINE BOOKSHOP </h1>
          </center>
          <br/><br/>
          <Carousel responsive={responsive}>         
      <div className="card">
        <img className="product--image" src={s1} alt="product" />
        <h2>Sorrows of Young Werther</h2>
        <p>
          By Goethe <br/>
         J.W. von Goethe's The Sorrows of Young Werther is a novel about a
          young man, Werther, who finds himself caught in a love triangle</p>
        <p className="price"> Rs. 580 /- </p> 
      </div>
      <div className="card">
        <img className="product--image" src={s2} alt="product" />
        <h2>The Poland book</h2>
        <p>By James A. Michener <br/> 
        published in 1983 detailing the times and tribulations of three interconnected 
        Polish families (the Lubonski family, the Bukowski family, and the Buk family) across eight centuries, 
        ending in the then-present day (1981).</p>
        <p className="price"> Rs. 780 /- </p> 
      </div>
      <div className="card">
        <img className="product--image" src={s3} alt="product" />
        <h2>The Tuscan Sun</h2>
        <p>By  Frances Mayes.<br/> It was adapted by director Audrey Wells for the 2003 
        film Under the Tuscan Sun.The story details the trials that recently divorced Frances 
        and her new significant other, Ed, had to go through to renovate their Tuscan property</p>
        <p className="price"> Rs. 455 /- </p> 
      </div>
      <div className="card">
        <img className="product--image" src={s4} alt="product" />
        <h2>Science Yoga</h2>
        <p>By deepak chopra <br/>
        Delve into the science behind your favorite yoga poses with this easy-to-understand, 
          comprehensive guide.Introducing Science of Yoga - an all-encompassing science book to 
          help you better understand yoga anatomy in order to perfect your practice and poses</p>
        <p className="price"> Rs. 780 /- </p> 
      </div>
      <div className="card">
        <img className="product--image" src={s5} alt="product" />
        <h2>CAOBA :The Mahogany Tree</h2>
        <p> By Sarah Danielsen<br/>
         A Very Good copy in Very Good dust jacket. 4to., 
          143 pp., illustrated with a frontispiece and 3 
          photogravure plates, all with captioned tissue guards.
           Bound in dark green cloth with gilt titles in printed dust jacket.</p>
        <p className="price"> Rs. 780 /- </p> 
      </div><div className="card">
        <img className="product--image" src={s6} alt="product" />
        <h2>The Summer Sale</h2>
        <p>By Napoleon Hill <br/>
          Sales book is a book of original entry or a subsidiary book that is used 
          to record the credit sales of the goods. The sales that are made by cash are
           recorded in the cash books and credit sale of any other asset apart from goods
            are recorded</p>
        <p className="price"> Rs. 780 /- </p> 
      </div>
</Carousel>
          <br/>
          <center>
          <h2 style={{ color: 'white' }}> Currently our site is for Admin only..!!<br/>
          Admin must login to Add Book..!! Delete Book..!! Add Images..!! </h2>
          </center>
   
</div>
      );  
    
}

export default Home;


