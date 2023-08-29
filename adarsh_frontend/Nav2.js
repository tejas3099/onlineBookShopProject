import React from 'react';
import '../styles/Nav2.css';

function Nav2() {
  let addbookcont;
  var login = window.sessionStorage.getItem("isUserLoggedIn")=="true";
  if(login) addbookcont= 
  <>
  <li><a href="/addbook">Add Book</a></li>
  <li><a href="/logout">Logout</a></li>
  </>
  else addbookcont= <>
  <li><a href='/signup'>Sign up </a></li>
  <li><a href='/signin'>Sign In </a></li>
  </>
  return (
    <nav className="navbar">
      <div className="logo"><center>A room without books is like
a body without a soul.</center></div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/books">View Book</a></li>
        <li><a href="/contact">Contact</a></li>
        {addbookcont}

      </ul>
    </nav>
  );
}

export default Nav2;
