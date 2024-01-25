import React,{useState,useCallback,useEffect,useRef} from 'react';
const Pass=()=>{
  let [number,setNumber]=useState(8);
  let [numb,setNumb]=useState(false);
let [character,setCharacter]=useState(false);
let [pass,setPass]=useState("");
//const [number,setNumber]=useState(8);
let passwordGenerator=useCallback(()=>{
  let x="";
let password="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
setPass(password);
  let num='0123456789';
  let ch="£¢€¥%©@#$&";
  if(numb) password+=num;
  if(character) password+=ch;
  for(let i=0;i<number;i++){
    let position=Math.ceil(Math.random()*password.length)
    x+=password.charAt(position);
  }
  setPass(x);
},[number,numb,character]);
useEffect(()=>{
  passwordGenerator();
},[number,numb,character]);

let copyRef=useRef(null);
const reference=()=>{
  copyRef.current?.select();
  //copyRef.current?.setSelectionRange(0,3);
  window.navigator.clipboard.writeText(pass);
}
  return (
    <>
    <div className="container">
    <input type="text"className="input"readOnly value={pass} ref={copyRef} /><button onClick={()=>{
      reference();
    }}>COPY</button><br/><br/>
    <input type="range"min={6} max={100} value={number}
    onChange={(e)=>{setNumber(e.target.value)}}
    /><label>length:{number}</label>
    <input type="checkbox"
    onChange={()=>{
      setNumb((prev)=>{
     // alert(prev)
        return !prev;
      })
    }}
    />num
    <input type="checkbox"
onChange={()=>{
      setCharacter((prev)=>{
     // alert(prev)
        return !prev;
      })
    }}
    />char
    </div>
    </>
    )
}
export default Pass;