import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "../styles/my.css";
import { useNavigate } from "react-router-dom";


function Addbook() {


    const nav = useNavigate();
    
    var role=window.sessionStorage.getItem("role")=="ADMIN";
    var login = window.sessionStorage.getItem("isUserLoggedIn")=="true";
    useEffect(()=>{
        if(!login && !role) nav("/");
    } , []);


    const [bookData, setbookData] = useState({
        "author": "", "category": "", "description": "", "language": "",
        "price": "", "publishDate": "", "qty": "",
        "title": ""
    });


    var bookDataChange = (x) => {
        bookData[x.target.name] = x.target.value;
        setbookData({ ...bookData });
    }

  
      var beforeadd = ()=>{


        if(bookData.author === ""){
            toast.error("Empty author Name!!!") ; return;}
        if(bookData.category === ""){
            toast.error("Empty category Name!!!") ; return;}
        if(bookData.description === ""){
            toast.error("Empty description!!!") ; return;}
        if(bookData.language === ""){
            toast.error("Empty language!!!") ; return;}
        if(bookData.price === ""){
            toast.error("Empty price!!!") ; return;}
        if(bookData.publsihdate === ""){
            toast.error("Empty publish date!!!") ; return;}
        if(bookData.qty === ""){
            toast.error("Empty quantity!!!") ; return;}
        if(bookData.title === ""){
            toast.error("Empty title!!!") ; return;}
      
        else{
            add() ;
        }
    }

    function add(){
        //debugger;
        console.log("inside add")

        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:8080/admin/addbook");
        xhr.onreadystatechange = function () {
        console.log("xhr")
        debugger;
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log("inside status");

                 var response = JSON.parse(xhr.responseText) ;
                if(response.title !=""){
                console.log("inside title success")

                    
                    console.log(response.title);
                    nav("/addimage");
                }  
            }
                
                
        }
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(bookData));

    }//end of add

    

    return (
        <div className="background-containeradd" >
        
           <br></br>
           <br></br>
           <br></br>
            <center>

                <table >
                    <tbody>
                    <tr>
                        <td style={{ color: 'black' }}  >author :</td>
                        <td><input name="author" type="text" placeholder="author" value={bookData.author} onChange={bookDataChange} /></td>
                        
                    </tr>
                    <br/>
                    <tr>
                        <td style={{ color: 'black' }}  >category :</td>
                        <td><input name="category" type="text" placeholder="category" value={bookData.category} onChange={bookDataChange} /></td>
                       
                    </tr>
                    <br/>
                    <tr>
                        <td style={{ color: 'black' }}  >description:</td>
                        <td><input name="description" type="textarea" placeholder="description" value={bookData.description} onChange={bookDataChange} /></td>
               
                    </tr>
                    <br/>
                    <tr>
                        <td style={{ color: 'black' }}  > language :</td>
                        <td><input name="language" type="text" placeholder="language" value={bookData.language} onChange={bookDataChange} /></td>
                        
                    </tr>
                    <br/>
                    <tr>
                        <td style={{ color: 'white' }}  >price :</td>
                        <td><input name="price" type="number" placeholder="price" value={bookData.price} onChange={bookDataChange} /></td>
                    </tr>
                    <br/>
                    <tr>
                    <td style={{ color: 'white' }}  >publsihdate:</td>
                    <td><input name="publishDate" type="date" placeholder="yyyy-mm-dd" value={bookData.publishDate} onChange={bookDataChange}></input></td> 
                    
                    </tr>
                    <br/>
                    <tr>
                        <td style={{ color: 'white' }}  >qty :</td>
                        <td><input name="qty" type="number" placeholder="qty" value={bookData.qty} onChange={bookDataChange} /></td>

                    </tr>
                    <br/>
                    <tr>
                        <td style={{ color: 'white' }}  >title :</td>
                        <td><input name="title" type="text" placeholder="title" value={bookData.title} onChange={bookDataChange} /></td>

                    </tr>

                    <br/><br/>
                    <tr>
                        <td style={{ textAlign: "center" }} colSpan={2}>
                            <button className="btn btn-success" onClick={beforeadd}> Add Book</button>
                        </td>
                    </tr>
                    <br/>
                    </tbody>
                    
                </table>
                <br/><br/>
            </center>
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
    )

}

export default Addbook;