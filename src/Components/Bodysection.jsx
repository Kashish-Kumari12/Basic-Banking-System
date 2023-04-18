import React from 'react'
import Photo from './software.png'
import Services from './services';
function Bodysection(){
    return(
        <>
            <div className='bg-gray-900 w-full  h-auto' style={{background:"lightblue"}}>
                <div className='flex justify-between pt-5'>
                    <div className='text-white items-center m-24' >
                        <h1 className="text-5xl font-bold" style={{color:'black'}}>The Spark Foundation Bank</h1>
                        <h2 className="text-xl pt-4 font-dark" style={{color:'black'}}>Purpose of Organization</h2>
                        <p className="text-lg pt-4 font-dark " style={{color:'black'}}>Our purpose is to provide personalized banking services <br></br>that exceed our customersand maintain long-term relationships<br></br> built on trust, integrity, and reliability and sustain transparency</p>
                         <button class="bg-blue-500 hover:bg-lightblue-700  text-white font-bold mt-4 py-2 px-4 rounded" style={{background:'black'}}>Get Started </button>



                    </div>

                    <div className='flex mt-14'>
                        <img src={Photo} alt="logo" style={{height: '350px', width:'350px', borderRadius:'50%', boxShadow:"10px 10px 5px 5px"}} />
                    </div>

                    <div>

                    </div>
                    
                </div>



            </div>

        
        <Services/>
        
        </>
    )

    

}

export default Bodysection;