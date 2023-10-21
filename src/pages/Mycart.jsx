import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const Mycart = () => {
    const loadeduser = useLoaderData()
    const[user, setuser]=useState(loadeduser)
    const handledelete=id=>{
        fetch(`http://localhost:5000/cart/${id}`,{
            method: "DELETE"
        })
        .then((res)=>res.json())
        .then((data)=>{
            if(data.deletedcount>0){
                toast.success('data deleted successfully')
                const remaining=user.filter(auser=>auser._id !==id)
                setuser(remaining)
            }
        })
    }
    return (
        <><div className="overflow-x-auto">
            <table className="table table-xs">
                <thead>
                    <tr>
                        <th></th>
                        <th>name</th>
                        <th>brandName</th>
                        <th>type</th>
                        <th>price</th>
                        <th>rating</th>
                        <th>details</th>


                    </tr>
                </thead>
                <tbody>
                    {loadeduser.map(user => <tr key={user._id}>
                        <th></th>
                        <th>{user.name}</th>
                        <td>{user.brandName}</td>
                        <td>{user.type}</td>
                        <td>{user.price}</td>
                        <td>{user.rating}</td>
                        <td>{user.details}</td>
                        <td><button onClick={()=>handledelete(user._id)} className='btn'>Delete</button></td>
                        
                    </tr>
                    )}






                </tbody>

            </table>
            <Toaster />
        </div></>
    );
};

export default Mycart;