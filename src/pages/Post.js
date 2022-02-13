import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPostsData } from '../redux/actions';


const Post = () => {
    const dispatch = useDispatch();
    const { post, loading, error } = useSelector((state) => state.data);
   

    useEffect(() => {
       dispatch(loadPostsData())
    },[])
    
    
    return(<div>
        <h1>Post Page</h1>
        {(loading) ? <h1>loading</h1> : post?.map((item, index) =>(
            <tr key={index + 1}>
            <th  style={{color: '#FB2', padding: '2rem'}}>{index + 1}</th>
            {/*  <td>{item.id}</td>*/}
            <td style={{color: '#3B2', padding: '2rem'}}>{item.title}</td>
            <td style={{color: '#D21', padding: '2rem', margin: '10rem'}}>{item.body}</td>
            </tr>
          )) }      
        </div>
    )
}

export default Post;

