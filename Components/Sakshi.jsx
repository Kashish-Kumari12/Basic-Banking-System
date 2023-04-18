import React from 'react'
import {Form , FormGroup,Label ,Input,Button} from 'reactstrap';

function Sakshi(){
    return(
        <div className="flex  flex-col w-full h-60 bg-slate-200 border-2 shadow-md rounded-sm mt-2">
            <div className="bg-gray-50  h-24  w-11/12 mx-5 mt-4  border-2 shadow-md rounded-sm">
                <Form className="flex  items-center gap-3  items-center justify-center mt-7 ml-3 mr-3">
                    <Input id="jobSearch" name="jobSearch" placeholder="Search Job Here" type="text" />
                    <Input id="comapnySearch" name="sender" placeholder="Search by Company" type="text"/>
                    <Input id="locationSearch" name="sender" placeholder="Search by location" type="text"/>
                    <Button>Search</Button>
                </Form>
            </div>

            <div className="secDiv flex items-center mt-4 gap-10 justify-center">
                <div className="singleSerach flex items-center gap-2">
                    <Label htmlFor="relevance" className="text-[#808080] font-semibold">Sort by:</Label>
                    <select  id="relevance" className='bg-white rounded-[3px] px-4 py-1'>
                        <option value="">Relevance</option>
                        <option value="">Inculsive</option>
                        <option value="">Start With</option>
                        <option value="">Contains</option>
                    </select>
                </div>

                <div className="singleSerach flex  items-center gap-2">
                    <Label htmlFor="type" className="text-[#808080] font-semibold">Type:</Label>
                    <select  id="type" className='bg-white rounded-[3px] px-4 py-1'>
                        <option value="">FullTime</option>
                        <option value="">PartTime</option>
                        <option value="">Remote</option>
                        <option value="">Contarct</option>
                    </select>
                </div>


                <div className="singleSerach flex  items-center gap-2">
                    <Label htmlFor="level" className="text-[#808080] font-semibold">Level:</Label>
                    <select  id="level" className='bg-white rounded-[3px] px-4 py-1'>
                        <option value="">Senior</option>
                        <option value="">Beginner</option>
                        <option value="">Intermediate</option>
                        <option value="">Advocate</option>
                    </select>
                </div>

                <span className="text-[#alalal] cursor-pointer">Clear All</span>




            </div>
            





        </div>


    )
}

export default Sakshi;