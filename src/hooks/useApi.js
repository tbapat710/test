import { useState } from 'react';
import {getApiData} from '../constants/GlobalConstants';
import { queryParams } from '../constants/CandleConstants';
const duration='12h'
const pathParams = `candles/trade:${duration}:tBTCUSD/hist`;
function useApi(){
    const [dataValue,setDataValue]=useState([])
    async function fetchCandleChartApi() {
        try {
          const resp = await getApiData(pathParams, queryParams);
          const data=await resp.data
          setDataValue(data)
        } catch (err) {
          console.log(err);
        }
        
      }

      return{
          fetchCandleChartApi,
          dataValue
      }
}
export default useApi;