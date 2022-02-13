import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUsersStart } from '../redux/actions';


const Home = () => {
    const dispatch = useDispatch();
    const { users, loading, error } = useSelector((state) => state.data);
   

    useEffect(() => {
       dispatch(loadUsersStart())
    },[])
    
    
    return(<div>
        {(loading) ? <h1>loading</h1> : users?.map((item, index) =>(
          <tr key={index + 1}>
          <th  style={{color: '#FB2', padding: '2rem'}}>{index + 1}</th>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
          <td>{item.address}</td>
          </tr>
        )) }
       <h1>Mayank Sharma</h1>
       
        </div>
    )
}

export default Home;