import React,{useEffect,useContext} from 'react';
import axios from 'axios';
import { GlobalContext } from '../Context/GlobalState';


const BASE_URL="https://41dd3398-899c-435b-841a-43a643d979b1.mock.pstmn.io"


const TodoData = () => {

    const [state, dispatch] = useContext(GlobalContext);

    useEffect(() => {
        axios.get(`${BASE_URL}/gettodos`)
            .then(response => {
                const postsData = response.data;
                dispatch({type: 'SET_TODOS', payload: postsData});
            })
            .catch(error => {
                dispatch({type: 'SET_ERROR', payload: error});
            });
    }, []);

    let posts = <p>Loading...</p>;

    if (state.error) {
        posts = <p>Something went wrong: <span>{state.error}</span></p>;
    }

    // if (!state.error && state.posts) {
    //     posts = state.posts.map(post => {
    //         return <Post
    //             key={post.id}
    //             title={post.title}
    //             author={post.author}/>;
    //     });
    // }

    // return (
    //     {posts}
    // );
};


export default TodoData;