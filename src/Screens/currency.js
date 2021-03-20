import React,{useEffect,useState,useCallback} from 'react';
import Charts from './chart';
import * as CurrencyAction from '../Redux/Actions/currency';
import {useDispatch,useSelector} from 'react-redux';
import * as BitcoinDate from '../Data/data.json';
const Currency=()=>{
const [currency,setCurrency]=useState("USD");
const [currencyText,setCurrencyText]=useState("United States Dollar");
const  enddate = new Date().toISOString().slice(0, 10);
const startdate=new Date(Date.now()-60*24*60*60*1000).toISOString().slice(0, 10);
const setSelectedOption=(val)=>{
    setCurrency(val);
    if(val==="USD"){
        setCurrencyText("United States Dollar");
    }
    else if(val==="GBP"){
        setCurrencyText("British Pound Sterling");
    }
    else if(val==="EUR"){
        setCurrencyText("Euro");
    }
    }
    const dispatch=useDispatch();

    const isloadingdata=useCallback(async()=>{
    try{
        
    await  dispatch(CurrencyAction.BitcoinDataAction(currency,startdate,enddate));
    } 
    catch(err){
      console.log(err)  
    }
    },[dispatch,currency,startdate,enddate]);
    useEffect(()=>{        
        isloadingdata();
          },[isloadingdata]);




const BitcoinDate=useSelector(state=>state.CurrencyReducer.bitcoinData);

const oneBitCoinArray=BitcoinDate&&Object.values(BitcoinDate&&BitcoinDate.bpi);
const oneBitCoinData = oneBitCoinArray&&oneBitCoinArray[oneBitCoinArray.length - 1];
const chatData=BitcoinDate&&BitcoinDate.bpi;

    return(

        <div className="container" style={{marginTop:20}}>
        <div className="row border" >
            <div className="col-md-6 center">
                <p>1 Bitcoin Equals</p>
            <select className="selectbox"name="cureency" id="cureency" onChange={e => setSelectedOption(e.target.value)} >
        
            <option value="USD">United States Dollar</option>
            <option value="GBP">British Pound Sterling</option>
            <option value="EUR">Euro</option>
            </select>
            <h2 style={{marginTop:20}}>{oneBitCoinData +' '+currencyText}</h2>
            </div>
            <div className="col-md-6 center">

               <Charts  data={chatData}/> 
            </div>
        </div>
        </div>
    )
}

export default Currency;