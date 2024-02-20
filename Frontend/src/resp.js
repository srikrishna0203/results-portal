import { useState,useRef } from "react"
import axios from 'axios'
import './resp.css'
let Resp = ()=>{
    let [res,setres]=useState()
    let ref = useRef()
    let getres  = ()=>{
        axios.get(`http://localhost:3000/result/${ref.current.value}`).then((resp)=>setres(resp.data)).catch((err)=>{
            console.log(err);
        })
    }
    return(
        <div className="cont">
            <>
            <input type="text" ref={ref} id="input" placeholder="Enter Your Id :"/>
            <button onClick={getres}>Get</button>
            </>
            {
                res == null && <div>Check H.no</div>
            }
            {
                res!=null && <table border={2}>
                    <tr>
                        <th>H.no</th>
                        <td>{res._id}</td>
                    </tr>
                    <tr>
                        <th>Name</th>
                        <td>{res.name}</td>
                    </tr>
                    <tr>
                        <th>Maths</th>
                        <td>{res.maths}</td>
                    </tr>
                    <tr>
                        <th>Physics</th>
                        <td>{res.physics}</td>
                    </tr>
                    <tr>
                        <th>Chemistry</th>
                        <td>{res.chemistry}</td>
                    </tr>
                </table>
            }
        </div>
    )
}
export default Resp;