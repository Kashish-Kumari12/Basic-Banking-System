import React from 'react'
import sparklogo from './sparklogo.png'
import {Link, Outlet} from 'react-router-dom'

function Navbar() {
    return(
        <>
          <div className='bg-gray-950 h-20 w-full shadow-sm shadow-gray-800 rounded-sm px-5 py-4' style={{background:'white'}}>
            <div className='flex justify-between items-center border-white '>
                        
                <div className='flex ml-16'>
                        <img src={sparklogo} alt="logo" style={{height: '48px'}} />
                </div>

                <div style={{alignItems:'center', textAlign:'center', justifyContent:'center', width:'70%'}}>
                        <ul className="flex text-white  gap-4 list-none" >
                        <li><Link to="/" style={{textDecoration:'none', color:'black' ,fontWeight:'bolder'}}>Home</Link></li>
                            <li><Link to="/view" style={{textDecoration:'none', color:'black' ,fontWeight:'bolder'}}>Customers</Link></li>
                            <li><Link to="/sendMoney" style={{textDecoration:'none', color:'black' ,fontWeight:'bolder'}}>Transaction</Link></li>
                            <li><Link to="/viewTrans" style={{textDecoration:'none', color:'black' ,fontWeight:'bolder'}}>View Transctaion</Link></li>
            
            
                        </ul>
                        <Outlet />
                </div>
        
                
            </div>            


          </div>
        
        
        </>
    )


}

export default Navbar;