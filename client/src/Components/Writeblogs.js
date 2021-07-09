import React,{ useState } from "react";
import axios from "axios";
const Writingblogs=()=>{
const [form,setForm]=useState({
  name:'',
  tname:'',
  myblog:'',
});
const onChanging=(e)=>{

    const{name,value}=e.target;
    setForm((items)=>{

        return{
            ...items,[name]:value,
        };
    });



};
const submitting= async(e)=>{
    e.preventDefault();

    const {name,tname,myblog}=form;
    await axios.post('/submit',{name,tname,myblog});
}
return(
    <>
   <div className="myform">
        <form method="POST" className="frms">
        <input type="text" name="name" value={form.name} onChange={onChanging} placeholder="Enter FirstName" className="name"/>
        <input type="text" name="tname"  value={form.tname} onChange={onChanging} placeholder="Topic Name" className="tname"/>
        <textarea type="text" name="myblog" value={form.myblog} onChange={onChanging} placeholder="enter your blog" rows="" column="" className="bloggs"/>
        <div className="btndiv">
        <button className="submitbtn" onClick={submitting}>Submit</button>
        </div>
        </form>
        </div>
    </>
);
}

export default Writingblogs;


