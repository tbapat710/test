import {getApiData} from '../constants/GlobalConstants';

function useApi(){
    async function fetchCandleChartApi(pathParams,queryParams) {
        try {
          const resp = await getApiData(pathParams, queryParams);
          const data=await resp.data
          return data
        } catch (err) {
          console.log(err);
        }
        
      }

      return{
          fetchCandleChartApi,

      }
}
export default useApi;