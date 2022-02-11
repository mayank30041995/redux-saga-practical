import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUsersStart } from '../redux/actions';


const Home = () => {
    const dispatch = useDispatch();
    const { users, loading, error } = useSelector((state) => state.data);
   

    useEffect(() => {
       dispatch(loadUsersStart())
    },[])
    
    
    return(<>
        {JSON.stringify(users)}
        <h1>Mayank Sharma</h1>
        </>
    )
}

export default Home;