const geoCode = require('./utils/geoCode');
const forecast = require('./utils/forecast');

// console.log(process.argv[2]);
if(!process.argv[2]){
    console.log("Enter Location");
}else{
    geoCode(process.argv[2], (error, data)=>{
        if(error){
            return console.log("Error",error);
        }
        forecast(data.latitude, data.longitude, (error, Weatherdata) => {
            if(error){
                return console.log('Error', error);
            }
            console.log(data.location);
            console.log(Weatherdata)
        });
    });

}



