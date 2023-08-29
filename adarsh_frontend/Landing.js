import React, { Component } from 'react';
import {Route,Routes} from 'react-router-dom';
import '../styles/App.css';
import Home from './Home';
import Footer from './Footer';
import Addbook from './Addbook';
import Contact from './Contact';
import Head from './Head';
import PageNotFound from './PageNotFound';
import Book from './Book';
import Nav2 from './Nav2';
import AddImage from './Addimage';
import Signup from './Signup';
import Signin from './Signin';
import Logout from './Logout';
import Aboutus from './Aboutus';





class Landing extends Component {
    debugger;
    render() { 
        return (<div>
                  <Head />   

                 <Nav2 />          
                  
                      <Routes>
                        <Route path="/" 
                               element={<Home />}/>      
                        <Route path='/home'
                        element={<Home />} />

                        <Route path="/addbook"
                            element={<Addbook />} />

                        <Route path="/contact"
                            element={<Contact />} />
                        
                        <Route path='/about'
                        element={<Aboutus />} />

                        <Route path='/logout'
                        element={<Logout />}  />  
                         
                        <Route path="/books"
                           element={<Book />} />

                        <Route path="/addimage"
                        element={< AddImage />} />

                        <Route path='/signup'
                            element={< Signup /> } />

                        <Route path='/signin'
                        element={< Signin />} />

                        <Route path="*"
                            element={<PageNotFound />} />
                        
                      </Routes>
                    <hr></hr>
                 
                    <Footer />
                  
                </div>);
    }
}
 
export default Landing;