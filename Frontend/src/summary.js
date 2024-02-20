import { useState,useEffect} from "react";
import axios from "axios";
import './summary.css'
let Summary = ()=>{
    let [data,setdata]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/").then((res)=>{
            setdata(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    return(
        <div className="table">
            <p>Semester-II Results</p>
            <table border={1}>
                <tr>
                    <th>H.no</th>
                    <th>Name</th>
                    <th>Maths</th>
                    <th>Physics</th>
                    <th>Chemistry</th>
                </tr>
                {
                    data.map((item)=>{
                        return(
                            <tr>
                                <td>{item._id}</td>
                                <td>{item.name}</td>
                                <td>{item.maths}</td>
                                <td>{item.physics}</td>
                                <td>{item.chemistry}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}
export default Summary;