const axios = require ('axios')
const fs = require('fs')

const apiKey = '9508f550533413d95517e6397e6f2265';

const fetchData = async ()=> {
    try{
        const response = await axios.get('https://api.rajaongkir.com/starter/province',{
            headers:{
                'key': '9508f550533413d95517e6397e6f2265'
            }
        });

        const provincesData = response.data.rajaongkir.results;
        const provincesJSON = JSON.stringify(provincesData, null, 2);
        fs.appendFileSync('provinces.json', provincesJSON);

        console.log('Data provinces berhasil disimpan sebagai provinces.json');
    } catch (error){
        console.error('Error fetching data', error)
    }
};

fetchData();