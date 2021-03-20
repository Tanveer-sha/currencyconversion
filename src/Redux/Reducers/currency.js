import {BITCOINDATA} from '../Actions/currency';
const initialState={
    bitcoinData:"",
}


export default (state=initialState,action)=>{
switch(action.type){
    case BITCOINDATA:
        return{
            bitcoinData:action.bitcoinDatas   
        }      
        default:
                return{state}
}
}