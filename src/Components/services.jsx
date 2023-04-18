import React from 'react'

import { Card , CardBody,CardTitle,CardSubtitle,CardText,Button } from 'reactstrap';



function Services(){
    const cardInfo=[{Title:"Customers",Subtitle:" View the list of all enrolled Customers with balance",buttonText:"View Customers"},
                    {Title:"Transaction",Subtitle:"Transaction between two customers to transfer money and have record",buttonText:"Transfer"} ,
                    {Title:"View Transcation",Subtitle:"View all the possible transaction between customers",buttonText:"View Transcation"}     

                    ]
    return(
        <>
            <div className='bg-white-900 w-full h-auto ' >
                <div><p className="text-white text-5xl font-bold text-center"> Our Services</p></div>
                <div className='flex items-center justify-center gap-x-20 p-10 ' >
                    {cardInfo.map((info)=>(
                        
                            <Card className=' hover:border-4  '
                            style={{
                                width: '20rem',
                                height: '20rem',
                               
                                
                            }}>
        
                            <CardBody className='bg-gray-900 font-light text-black text-center pt-5'  style={{ background:'lightblue', color:'black'}}>
                                <CardTitle tag="h5" style={{fontWeight:'bold'}}>
                                    {info.Title}
                                </CardTitle>
                                <CardSubtitle
                                className="mb-2 text-black pt-2"
                                tag="h6"
                                >
                                {info.Subtitle}
                                </CardSubtitle>
                                
                                <button className="bg-blue-500 hover:bg-blue-700  text-white font-bold mt-4 py-2 px-4 rounded" style={{background:'black'}}>
                                {info.buttonText}
                                </button>
                            </CardBody>
                        </Card>


                    ))}
                    


                </div>
                
                
            </div>
        
        
        </>
    )
}

export default Services;