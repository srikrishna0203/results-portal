import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './posting.css';

let Postingres = () => {
    let [data, setdata] = useState({});
    let [password, setPassword] = useState("");
    let [showForm, setShowForm] = useState(false);
    let navigate = useNavigate();

    let fun = (e) => {
        setdata({...data, [e.target.name]: e.target.value});
    };

    let add = () => {
        axios.post("http://localhost:3000/store", data)
            .then((res) => {
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const key = "255"; 
    return (
        <div className="container">
            {!showForm && (
                <>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter the password"/>
                    <button onClick={() => setShowForm(password === key)}>Submit</button>
                </>
            )}
            {showForm && (
                <>
                    <input type="text" onChange={fun} name="_id" placeholder="Id"/>
                    <input type="text" onChange={fun} name="name" placeholder="Name"/>
                    <input type="text" onChange={fun} name="maths" placeholder="Maths"/>
                    <input type="text" onChange={fun} name="physics" placeholder="Physics"/>
                    <input type="text" onChange={fun} name="chemistry" placeholder="Chemistry"/>
                    <button onClick={add}>Store</button>
                </>
            )}
        </div>
    );
};

export default Postingres;
