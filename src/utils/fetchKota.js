const axios = require('axios')
const fs = require('fs')

const apiKey = '9508f550533413d95517e6397e6f2265'


const fetchKota = async()=> {
  try{
    const response = await axios.get('https://api.rajaongkir.com/starter/city',{
        headers:{
            'key':'9508f550533413d95517e6397e6f2265'
        }
    });
    const citiesData = response.data.rajaongkir.results;
    const citiesJSON = JSON.stringify(citiesData, null, 2);
    fs.appendFileSync('cities.json', citiesJSON);

    console.log('Data kota berhasil disimpan sebagai cities.json');
  } catch(error){
    console.error('Error fetching data', error)
  }
}

fetchKota();