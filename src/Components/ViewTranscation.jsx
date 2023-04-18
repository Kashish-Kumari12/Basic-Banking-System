// import { getDatabase, ref, get } from "firebase/database";
import { useEffect, useState } from "react";
import {realtimeDatabase } from '../firebase-config';

import { getDatabase, get,ref, child, update } from "firebase/database";
import { getFirestore, collection, query, where, doc, updateDoc } from "firebase/firestore";

function ViewTranscation() {
  const [data, setData] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const dataRef = ref(realtimeDatabase,  'Transaction');

    get(dataRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setData(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
     
      

<div className="mt-5 ml-36 mb-5 w-4/5 border-2  shadow-sm">
      <table id="example" className="display table">
        <thead>
          <tr>
            <th>Sender</th>
            <th>Receiver</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            Object.entries(data).map(([key, value]) => (
              <tr key={key}>
                <td>{value.sender}</td>
                <td>{value.receiver}</td>
                <td>{value.amount}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>


    </div> 
  )}; 
export default ViewTranscation;
