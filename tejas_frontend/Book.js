import { useEffect, useState } from "react";
import "../styles/my.css";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
function Book()
{

    var [books , setBooks ] = useState([]) ;

var fetchBooks = ()=>{

    var xhr = new XMLHttpRequest() ;
    xhr.open("GET" , "http://localhost:8080/books") ;
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200){
            var data = JSON.parse(xhr.responseText) ;
        setBooks([...data]) ;
    }
}
xhr.setRequestHeader("Content-Type", "application/json") ;
xhr.send() ;
} 
    useEffect(()=>{
      fetchBooks() ; 
       
    } , []);


    var DeleteRecord =(No)=>{
    
      console.log("Inside Delete..")
      var helper = new XMLHttpRequest();

      helper.onreadystatechange = ()=>{
        debugger;
          if(helper.readyState == 4 &&
             helper.status == 200)
             {
              debugger;
              var result = JSON.parse(helper.responseText);
         
              if(result.message != "")
              {
                  debugger;
               
                fetchBooks() ; 
                toast.success("deleted record sucessfully..!!!");
              }
              else
              {
                console.log("not ok");
              }
             }
      }
      helper.open("DELETE", 
                  "http://localhost:8080/admin/deletebook/"+No);
      helper.send();


      
  }

    return (
     <div className="background-container">
         <div className='container' style={{marginBottom:50,marginTop:20}}>
      <div style={{position: 'relative',
                      padding: 20,
                      display: 'inline-block',
                      cursor: 'pointer', 
                      boxSizing:'border-box'}} className='row'>
          {books.map((books) => {
              return (
                  <div 
                  key={books.id}
                  className='col-3'
                  style={{
                      position: 'relative',
                      padding: 20,
                      display: 'inline-block',
                      cursor: 'pointer', 
                      boxSizing:'border-box'
                  }}>
            
                  <img
                      
                      style={{
                      height: 250,
                      width: '100%',
                      display: 'block',
                      borderRadius: 10,
                      borderColor:"red"
                  }}
                  src={"http://localhost:8080/books/"+books.id}
                  ></img>
                  
                  <div style={{ marginTop: 20,marginBottom:20 }}>
                      <h6 className='card-title'>{books.title}</h6>
                      
                      <p>
                          By <u>{books.author}</u> (author) <br />
                          Rs. {books.price} /- 
                          
                      </p> 
                  </div>
               
                      <div  className='responsive' style={{textAlign:'center',marginBottom:0}}>
                    { (sessionStorage.getItem("isUserLoggedIn") == "true" && sessionStorage.getItem("role") == "ADMIN") ? <button  onClick={()=>{ DeleteRecord(books.id);
                      }} style={styles.button}> 
                        Delete</button> : " " } 


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
                theme="dark"
            />
                  </div>
     
              </div>
              )
          })}
      </div>
  </div>
     </div>
    )
    
    
}
const styles = {
  button: {
      position: 'relative',
      width: '60%',
      height: 40,
      backgroundColor: 'red',
      color: 'black',
      borderRadius: 5,
      border: 'none',
      weight : 'bold',
  },
 
}
export default Book;

