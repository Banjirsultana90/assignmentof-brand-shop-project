import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Mycart = () => {
    const loadeduser = useLoaderData()
    return (
        <><h3>user :{loadeduser.length}</h3><div className="overflow-x-auto">
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
                        <td><button className='btn'>Delete</button></td>
                        
                    </tr>
                    )}






                </tbody>

            </table>
        </div></>
    );
};

export default Mycart;