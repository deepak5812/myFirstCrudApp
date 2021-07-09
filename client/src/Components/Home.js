import React, {useEffect, useState } from "react";
import Form from "./Form";
import axios from "axios";

const Home=()=>{
const [myData,setMyData]=useState([]);
const gettingDataFromDb=async()=>{
    try {
        const res=await axios.get('/home');
      setMyData(res.data);
    } catch (error) {
        console.log(error);
    }
        
};
useEffect(()=>{
    gettingDataFromDb();
  
},[]);



return(
    <>
    <p className="heading001"><span className="m">M</span><span className="y">y</span><span className="b">B</span><span className="l">l</span><span className="o">o</span><span className="g">g</span><span className="a">A</span><span className="p">p</span><span className="pa">p</span></p>
    <div className="outercard00">
    {
    myData.map((value,index)=>{
    return (
        <>
        <Form 
        key={index}
        id={value._id}
        name={value.name}
        tname={value.tname}
        myblog={value.myblog}
        />
    </>
        );
    }
    )
    }
    </div>
    </>
);
}

export default Home;


