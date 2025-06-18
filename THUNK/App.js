import {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {fetchUsers} from './redux/slice';


const App = () => {

    const dispatch=useDispatch();

    const {data,loading,error}=useSelector((state)=>state.users);

    useEffect(()=>{
        dispatch(fetchUsers());
    },[dispatch]);

    if(loading) return <p>loading....</p>

    if(error) return <p>error fetching data {error}</p>


  return (
    {
        data?.map((value,index)=>(
            <li key={index}>{user.name}</li>
        ))
    }

  )
}

export default App;