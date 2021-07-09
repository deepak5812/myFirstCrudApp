import React, { useState } from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import UpdateIcon from '@material-ui/icons/Update';
import axios from 'axios';


const Form=(props)=>{
    const [upost,setUpost]=useState({
        uname:'',
        utname:'',
        umyblog:''
    });
    const [openit,setOpenit]=useState(false);

    const deleteBtn= async(id01)=>{
        try{
        const res=await axios.delete(`/deletepost/${id01}`);
        const data=await res.send("done !!!!");
       if(data){
           console.log("working !!");
       }else{
        console.log("not working !!");
       }
        }catch(err){
            console.log(err);
        }
        
    };
    const updateIt=()=>{
        setOpenit(!openit);
       
    }
    const handlingChange=(e)=>{
       const {name,value}=e.target;
       setUpost((items)=>{
        return{
            ...items,[name]:value,
        };
    });
    }

    const editing=async ()=>{
      //  const {uname,utname,umyblog}=upost;
        try {
            await axios.patch(`/updatepost/${props.id}`,upost);
            setOpenit(!openit);
         } catch (error) {
            console.log(error);
        }
}

return(
<>
<form method="GET">
    <div className="outercard01" >
    <h2 type="text" className="showname">{props.name}</h2>
    <h2 type="text" className="showtname">{props.tname}</h2>
    <p type="text" className="showblog">{props.myblog}</p>
    <div className="btns"><Button className="delbtn" method="POST" onClick={()=>{deleteBtn(props.id)}} ><DeleteIcon className="dic"/></Button>
    <Button className="updatebtn" method="POST" onClick={updateIt}><UpdateIcon className="uic"/></Button></div>
    </div>
    </form>
    {openit? 
    <>
     <form className="frms" method="PATCH">
        <input type="text" name="uname" onChange={handlingChange} placeholder="Enter FirstName" className="name" value={upost.uname}/>
        <input type="text" name="utname" onChange={handlingChange} placeholder="Topic Name" className="tname" value={upost.utname}/>
        <textarea type="text" name="umyblog" onChange={handlingChange} placeholder="enter your blog" rows="" column="" className="bloggs" value={upost.umyblog}/>
        <div className="btndiv">
        <button className="submitbtn" method="PATCH" onClick={editing}>Edit</button>
        </div>
        </form>
        </>
    :null}
</>
);


}
export default Form;