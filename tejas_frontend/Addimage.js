import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function AddImage()
{
    var [books , setBooks ] = useState([]) ;
    var nav = useNavigate();


    const [imageFile, setImageFile] = useState(null);

    const handleFileChange = (e) => {
      setImageFile(e.target.files[0]);
    };
    
    
    var role=window.sessionStorage.getItem("role")=="ADMIN";
    var login = window.sessionStorage.getItem("isUserLoggedIn")=="true";
    
    var nullImageBooks=()=>
    {
      if(!login && !role ) nav("/");
      var xhr = new XMLHttpRequest() ;
      xhr.open("GET" , "http://localhost:8080/admin/nullimages") ;
      xhr.onreadystatechange = function(){
          if (xhr.readyState === 4 && xhr.status === 200){
              var data = JSON.parse(xhr.responseText) ;
              if(data !== 0){
                  setBooks([...data]) ;
                  
              }  
          }
      }
      xhr.setRequestHeader("Content-Type", "application/json") ;
      xhr.send() ;
    }
    useEffect(()=>{
      nullImageBooks();
    } , []);

 
    const handleUpload = (No) => {
       
            debugger;
          const xhr = new XMLHttpRequest();
          const formData = new FormData();
    
          formData.append('imageFile', imageFile);
    
          xhr.open('POST', 'http://localhost:8080/admin/uploadimage/'+No, true);
    
          xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
              if (xhr.status === 200) {
               
              //  window.location.reload();
              nullImageBooks();
              toast.success("image added successfully...!!");
              
               
              } else {
               
                toast.error("something went wrong...!!");

              }
            }
          };
    
          xhr.send(formData);
           
        
    }

    return (
       <div className="background-containeraddimage"  >
         <div className="col-md-8 offset-md-2" style={{textAlign:"justify" , marginTop : 5+"px"}}>
    
    <div>
      <h2><center>List of Books to add Images</center></h2>
      <table className="table table-striped">
        <thead>
          <tr>
          
            <th>title</th>
            <th>author</th>
            <th>price</th>
            <th>choose file</th>
            <th>upload here</th>
            
          </tr>
        </thead>
        <tbody>
          {books.map(u => (
            <tr key={u.id}>
              <td>{u.title}</td>
              <td>{u.author}</td>
              <td>{u.price}</td>
              <td><input type="file" onChange={handleFileChange} /></td>
              <td><button onClick={()=>{
                            handleUpload(u.id);
                         }}>Upload</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
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
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
       </div>
      );
    
}
export default AddImage;