import React from 'react';
import { useNavigate } from "react-router-dom";


const Logout = () => {
  const nav = useNavigate();
  function logout(){
    window.sessionStorage.clear();
    
    setTimeout(reload, 500);
    nav("/");
  }
  function reload(){
    window.location.reload();
 }
  return (
   
    <div className="background-containerlogout"  ><br/>
    <center><h1 >Are you sure <br/>you want to exit..!!</h1>
    
    <button  onClick={logout} style={styles.button} >Log out</button>    
    </center>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <br/><br/><br/>
    </div>
   
  );
};

const styles = {
  button: {
      position: 'relative',
      width: '10%',
      height: 40,
      backgroundColor: '#555555',
      color: '#fff',
      borderRadius: 5,
      border: 'none',
      weight : 'bold',
      
  },   
}

export default Logout;
