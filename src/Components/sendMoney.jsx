import React,{useState,useEffect} from 'react'

import {Form , FormGroup,Label ,Input,Button} from 'reactstrap';
import {realtimeDatabase } from '../firebase-config';
import {database} from '../firebase-config'
import { Toast, toast } from 'react-toastify';

import { getDatabase, ref, push ,child, update} from 'firebase/database';

import { getFirestore,getDoc,getDocs,collection, query, where, doc, updateDoc } from "firebase/firestore";




const initialization={
    sender:"",
    receiver:"",
    amount:""


};

function SendMoney(){

    // const history=useHistory();
    const [state,setState]=useState(initialization);
    const [data,setData]=useState({});
    const [dateTime, setDateTime] = useState(new Date());

    const{sender,receiver,amount}=state;

    const handleInput=(e)=>{
        const {name,value}= e.target;
        setState({...state,[name]:value});
       



    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!sender || !receiver || !amount) {
          toast.error(receiver);
        } else {
          try {
            const customersRef = collection(database, 'Users');
            const q = query(customersRef, where('FirstName', '==', receiver));
            const querySnapshot = await getDocs(q);
            console.log(querySnapshot.size); // Check how many documents match the query
            console.log(querySnapshot.docs[0].data());
        
            if (querySnapshot.size === 1) {
              const docRef = doc(database, 'Users', querySnapshot.docs[0].id);
              const customer = await getDoc(docRef);
        
              // Calculate the new amount
              const newAmount = customer.data().Amount + parseInt(amount);
        
              // Update the amount for the customer in Firestore
              await updateDoc(docRef, { Amount: newAmount });
        
              // Push the new data to the real-time database
              const newTransactionRef = push(ref(realtimeDatabase, 'Transaction'), state)
              .then(() => {
                toast.success('Record Updated');
              })
              .catch((err) => {
                toast.error(err);
              });
            } else {
              toast.error('Receiver not found');
            }
          } catch (error) {
            console.error(error);
            toast.error('An error occurred');
          }
        }
      };
      
    
    // const handleSubmit = (e) => {
    //     e.preventDefault();
      
    //     if (!sender || !receiver || !amount) {
    //       toast.error('please fill all the fields');
    //     } else {
    //       // Push the new data to the database
    //       const newTransactionRef = push(ref(realtimeDB, 'Transaction'), state)
    //       .then(() => {
    //         toast.success('Record Updated');
    //       })
    //       .catch((err) => {
    //         toast.error(err);
    //       });
    //     }


    //     //update in db 
    //     const updateRecord = async (name, amount1) => {
    //         try {
    //           // Check if the name exists in the real-time database
             
    //           const dataRef = ref(realtimeDB ,  'Transaction');
    //           const snapshot = await get(child(dataRef, name));
          
    //           if (snapshot.exists()) {
    //             // Update the amount in Firestore
               
    //             const q = query(collection(db, "Customers"), where("name", "==", name));
    //             const querySnapshot = await getDocs(q);
          
    //             if (querySnapshot.size === 1) {
    //               const docRef = doc(db, "Customers", querySnapshot.docs[0].id);
    //               await updateDoc(docRef, {
    //                 amount: amount
    //               });
          
    //               // Update the amount in the real-time database
    //               await update(child(dataRef, name), {
    //                 amount:amount1
    //               });
    //             } else {
    //               console.log(`Found ${querySnapshot.size} documents with name "${name}"`);
    //             }
    //           } else {
    //             console.log(`No record found with name "${name}" in real-time database`);
    //           }
    //         } catch (error) {
    //           console.error(error);
    //         }
    //       };




    //   };
    return(
        <>
        <div  className="flex items-center justify-center bg-white-900 h-96">
            
            <div className="bg-1000 h-auto w-80 items-center justify-center shadow-2xl shadow-gray-950 p-4 mb-3" style={{background:'lightblue', width:'40%', height:'40%'}}>
                <div ><p className="text-black text-center text-2xl font-semibold">Transfer Money</p></div>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="exampleSender" hidden >Sender</Label>
                        <Input id="exampleSender" name="sender" placeholder="Sender" type="text" value={sender} onChange={handleInput}/>
                    </FormGroup>

                    {' '}
                    <FormGroup>
                        <Label for="exampleReceiver" hidden>Receiver</Label>
                        <Input id="exampleReceiver" name="receiver" placeholder="receiver" type="text" value={receiver} onChange={handleInput}/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleAmount" hidden>Enter the Amount</Label>
                        <Input id="exampleAmount" name="amount" placeholder="Amount" type="text"  value={amount} onChange={handleInput}/>
                    </FormGroup>
                    {' '}
                    <input type='submit' className="bg-500 hover:bg-blue-700  text-white font-bold mt-4 py-2 px-4 rounded"  value='transfer' style={{background:"black"}}/>

                </Form>
            </div>    
        </div>
        
        
        
        
        
        
        
        
        
        </>
    )
}

export default SendMoney;