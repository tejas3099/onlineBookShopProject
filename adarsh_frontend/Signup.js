import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function Signup(){
        var nav = useNavigate();


        var [signUpData , setSignUpData] = useState({firstName:"",lastName:"",email:"" , password:"" }) 

        var beforesignup = ()=>{


            if(signUpData.firstName == ""){
                toast.error("Empty First Name!!!") ; return;}
            if(signUpData.lastName == ""){
                toast.error("Empty Last Name!!!") ; return;}
           
            if(signUpData.email == ""){
                toast.error("Empty Email!!!") ; return;}
            if(signUpData.password == ""){
                toast.error("Empty Password!!!") ; return;}
            else{
                sendSignUpData() ;
            }
        }
        
        const goToSignin = ()=>{
            nav("/signin");
             return;
        }

            var sendSignUpData = ()=>{

                
               
                var xhr = new XMLHttpRequest() ;
                xhr.open("POST" , "http://localhost:8080/user/signup") ;
                debugger;
                xhr.onreadystatechange = function(){
                    debugger; 
                    if (xhr.readyState == 4 && xhr.status == 201){
                        debugger;
                        var data = JSON.parse(xhr.responseText) ;
                        if(data.role!="")
                        {                
                            debugger;           
                               toast.success("registered successfully you will be navigated to signin page in 4sec ..");
                               setTimeout(()=>{nav("/signin")},4000);                            
                        }
                        
                    }
                    
                    else if(xhr.readyState == 4 && xhr.status != 201){
                        debugger;
                         toast.error(signUpData.email+"already exists..!!");
                     } 
                   
                }

                xhr.setRequestHeader("Content-Type", "application/json") ;
                xhr.send(JSON.stringify(signUpData)) ;
              
    
    
    
                
    
            }
    
            var signUpOnChange = (x)=>{
                      signUpData[x.target.name] = x.target.value ;
                      setSignUpData({...signUpData}) ;
            }
    

        return (
            <div className="background-containerreg" >
            <div style={{paddingBottom: 20+"px"}}>
                <br></br>
                <center>
                <h1 style={{ color: 'white' }} >Welcome to Online Bookshop..!!</h1>
                    <h2  style={{ color: 'white' }} >New user register here..!!</h2>
                    <div  style={{width:500+"px", border: '2px solid black', padding: '10px' }}>
                       <form>
                        <table>
                            <tbody>

                            <tr style={{height:55+"px"}}>
                                <td  style={{ color: 'white' }}  >First Name :</td>
                                <td ><input type="text" className="form-control" name="firstName" placeholder="Enter First name" value={signUpData.firstName} onChange={signUpOnChange}></input></td>
                            </tr>
                            <tr style={{height:55+"px"}}>
                                <td style={{ color: 'white' }}  >Last Name :</td>
                                <td ><input type="text" className="form-control" name="lastName" placeholder="Enter Last name" value={signUpData.lastName} onChange={signUpOnChange}></input></td>
                            </tr>
                            <tr style={{height:55+"px"}}>
                                <td style={{ color: 'white' }}  >Email :</td>
                                <td ><input type="email" className="form-control" name="email" placeholder="Enter email" value={signUpData.email} onChange={signUpOnChange}></input></td>
                            </tr>
                            <tr style={{height:55+"px"}}>
                                <td style={{ color: 'white' }}  >Password :</td>
                                <td ><input type="password" className="form-control" name="password" placeholder="Enter Password" value={signUpData.password} onChange={signUpOnChange}></input></td>
                            </tr>
                            <tr  style={{height:55+"px"}}>
                                <td colSpan={2} style={{textAlign:"center"}}>
                            <button type="button" className="btn btn-primary" onClick={beforesignup}>Register</button>
                            <br />
                                </td>
                            </tr>
    
                        </tbody>
    
                        </table>
                        <center><p style={{ color: 'white' }}  >Already have Account ? </p>
                            <button  onClick={goToSignin} style={styles.button}>
                           Go to Sign in</button></center>
                       </form>
                       
                    </div>
                </center>
                <br/><br/><br/><br/><br/>
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
        backgroundColor: 'lawngreen',
        color: 'black',
        borderRadius: 5,
        border: 'none',
        weight : 'bold',
    },   
  }
export default Signup ;