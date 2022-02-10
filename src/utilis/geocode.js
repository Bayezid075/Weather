
const request = require('request')

const geocode = (address,callback)=>{
  const url = 'http://api.weatherstack.com/current?access_key=fe35b24de813afc55b2425551120db8a&query='+address+''
     request({url:url, json:true }, (error,response)=>{
       
          if(error){
            callback('something wrong',undefined);
          }else if(response.body.length === 0){
            callback('Please try another search',undefined)
          }
          
          else{
            callback(undefined,{
              
              temperature : response.body.current.temperature,
              weather_descriptions: response.body.current.weather_descriptions[0]

            });
          }

} )

}

module.exports= geocode