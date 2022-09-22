import React, {useEffect, useState} from "react";
import Popover from './Popover';


function Users (){
    const[users,setUsers] = useState([]);
    const[loading,setLoading] = useState(true);
    const[info,setInfo] = useState([]);



    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/")
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .finally(() => setLoading(false))
    },[])

    const getId = (id) => {
        let url = `https://jsonplaceholder.typicode.com/users/${id}`;
        fetch(url).then((response) => response.json())
            .then((result) => setInfo(result))

    }

    return(
            <div>
                <h2>USERS</h2>
                {
                    loading && <div>Yükleniyor...</div>
                }
                <ul>
                    {
                        users.map((user)=> (
                            <li onClick={()=> getId(user.id)} >{user.username}
                                {
                                    <Popover index = {info.username}/>

                                }

                            </li>
                        ))
                    }
                </ul>

            </div>



    )
}







export default Users