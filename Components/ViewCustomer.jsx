
import React, { useState, useEffect } from 'react';
import { collection ,getDocs } from 'firebase/firestore';
import {database} from '../firebase-config'


function ViewCustomer() {
  const [Customerlist, setCustomerlist] = useState([]);
  const customerCollection=collection(database ,"Users");

  useEffect(() => {
    const getCustomer=async()=>{
        const data= await getDocs(customerCollection);

        setCustomerlist(data.docs.map((doc)=>({...doc.data(),id:doc.id})));

    };

    getCustomer();
   
  }, []);

  return (
    

      <div className="mt-5 ml-36 mb-5 w-4/5 border-2  shadow-sm">
        <table id="example" className="display table">
          <thead>
            <tr>
              <th>FirstName</th>
              <th>Lastname</th>
              <th>Amount</th>
              
            </tr>
          </thead>
          <tbody>
            {Customerlist .map(data => (
              <tr>
                <td>{data.FirstName}</td>
                <td>{data.LastName}</td>
                <td>{data.Amount}</td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    
  );
}

export default  ViewCustomer;


