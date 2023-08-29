import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import "../styles/my.css";

function Signin()
{
     
    const nav = useNavigate();
 
     const [credentials, setCredentials] =
            useState({email:"",password:""});
    
  
        
     var OnTextChanged = (args)=>{
        var copyOfcredentials = {...credentials};
        copyOfcredentials[args.target.name] =
            args.target.value;
        setCredentials(copyOfcredentials);
     }   

     var beforesignup = ()=>{
      if(credentials.email == ""){
          toast.error("Empty Email!!!") ; return;}
      if(credentials.password == ""){
          toast.error("Empty Password!!!") ; return;}
      else{
          SignIn() ;
      }
  }
  

  const register = ()=>{
    nav("/signup");
    
     return;
}

     var SignIn = ()=>
     {
      var helper = new XMLHttpRequest();
      helper.onreadystatechange = ()=>{
        debugger;
          if(helper.readyState ==4 && helper.status == 200)
              {
                 // debugger;
                  var result = 
                  JSON.parse(helper.responseText);
               
                  if(result.role=="ADMIN")
                  {
                    // debugger;
                     
                     setCredentials({email:"", password:""})
                    
                    window.sessionStorage.setItem("isUserLoggedIn" , "true");
                   
                    setTimeout(reload, 500);
                    nav("/");
                    window.sessionStorage.setItem("role" , result.role);
                  
                  }
                  else{
                    toast.error("currently sign in is only for Admins..!!")
                  }
              }
              
              else if(helper.readyState == 4 && helper.status != 200)
              {
               // debugger;
                window.sessionStorage.setItem("isUserLoggedIn" , "false");
                setCredentials({email:"", password:""});
                toast.error("incorrect email or password..!!");
              }
      }
      
      helper.open("POST", 
                   "http://localhost:8080/user/signin");
      helper.setRequestHeader("content-type","application/json");
    
      helper.send(JSON.stringify(credentials));
     }
     function reload(){
        window.location.reload();
     }

    return (
<div className="background-containersignin" >

<br/><br/><br/>

<div style={{paddingBottom: 20+"px"}}>
                <br></br>
                <center>
                    <h1 style={{ color: 'white' }} >Welcome to Online Bookshop..!!</h1><br/><br/>
                    <div  style={{width:500+"px", border: '2px solid black', padding: '10px' }}>
                       <form>
                        <table>
                            <tbody>

                            <tr style={{height:55+"px"}}>
                                <td style={{ color: 'white' }} >Email :</td>
                                <td ><input type="email" className="form-control" name="email" placeholder="Enter email" value={credentials.email} onChange={OnTextChanged}></input></td>
                            </tr>
                            <tr style={{height:55+"px"}}>
                                <td style={{ color: 'white' }} >Password :</td>
                                <td ><input type="password" className="form-control" name="password" placeholder="Enter Password" value={credentials.password} onChange={OnTextChanged}></input></td>
                            </tr>
                            <tr style={{height:55+"px"}}>
                                <td colSpan={2} style={{textAlign:"center"}}>
                            <button type="button" className="btn btn-success" onClick={beforesignup}>signin</button>
                            <br />
                                </td>
                            </tr>
                           
                        </tbody>
    
                        </table>
                      <p style={{ color: 'white' }}   > New to Bookshop ? </p>
                          <button  onClick={register} style={styles.button}>
                            Click To Register</button>
                       </form>
                       
                    </div>
                </center>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            </div>
</div>
    )
}

const styles = {
    button: {
        position: 'relative',
        width: '60%',
        height: 40,
        backgroundColor: 'aqua',
        color: 'black',
        borderRadius: 5,
        border: 'none',
        weight : 'bold',
    },
   
  }


export default Signin;