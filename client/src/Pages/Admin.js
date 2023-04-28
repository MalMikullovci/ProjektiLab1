import React,{useState,useEffect,Fragment}from 'react';
import { Link } from 'react-router-dom';
import "./AdminStyle.css"
import {toast} from "react-toastify";
import axios from "axios";



function App(){
    const [data,setData]=useState([]);

   
    const loadData = async () => {
        try {
          const response = await axios.get('http://localhost:6001/api/get');
          if (response && response.data) {
            setData(response.data);
          } else {
            console.log('API endpoint did not return any data');
          }
        } catch (error) {
          console.log(error);
        }
      };
      
      
    useEffect(()=>{
        loadData();
    },[]);

    console.log(data);

    
    return(
      <div>
        <h1>Admin Page</h1>
        <table className='styled-table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Surname</th>
              <th>E-mail</th>
              <th>Password</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item,index) => {
              return (
                <Fragment key={item.id}>
                  <tr>
                    <th scope="row">{index+1}</th>
                    <td>{item.Name}</td>
                    <td>{item.Surname}</td>
                    <td>{item.Email}</td>
                    <td>{item.Password}</td>
                    <td>{item.Role}</td>
                    <td>
                    <Link to={`/update/${item.id}`}>
                          <button className="btn btn-edit">Edit</button>
                        </Link>
                        <Link>
                          <button className="btn btn-delete">Delete</button>
                        </Link>
                        <Link to={`/view/${item.id}`}>
                          <button className="btn btn-view">View</button>
                        </Link>

                    </td>
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    );
    


};


export default App;