
import axios from 'axios';
export const BITCOINDATA="BITCOINDATA";

export const BitcoinDataAction=(currency,startdate,enddate)=>{
    return async dispatch=>{
try{
const  response=await axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=${currency}&start=${startdate}&end=${enddate}`);
dispatch({type:BITCOINDATA,bitcoinDatas:response.data});
    }
    catch(err){
    console.log(err)
    }
}
}