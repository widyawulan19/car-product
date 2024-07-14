import React, { useEffect, useState } from 'react'
import '../style/CostStyle.css'
import dataProvince from '../utils/provinces.json'
import dataCity from '../utils/cities.json'

function Cost() {
    const [province, setProvince] = useState('')
    const [city, setCity] = useState('');
    const [provinces, setProvinces] = useState([])
    const [cities, setCities] = useState([])
    
    useEffect(()=>{
        //mengambil data provinsi dari file JSON
        setProvinces(dataProvince);
    },[])

    useEffect(()=>{
        //ambil data dari file JSON berdasarkan provinsi yang dipilih
        if (province){
            const fileteredCities = dataCity.filter(city => city.province_id === province);
            setCities(fileteredCities);
        }
    }, [province])

    const handleProvinceChange = (e) => {
        const selectedProvince = e.target.value;
        setProvince(selectedProvince);
    };

    const handleCityChange = (e) =>{
        const selectedCity = e.target.value;
        setCity(selectedCity);
    };

    const handelSearch = ()=>{
        //log data yg dipilih
        console.log('selected Province: ', province);
        console.log('selected City:', city);

        //logika pop up untuk hasil yang dipilih
        alert(`Selected Province: ${province}\nSelected City: ${city}`);
    }

    return (
        <div className="cost">
            <h1>CHECK YOUR LOCATION</h1>
            <div className="form">
                <div className="input-container">
                    <select className='province' onChange={handleProvinceChange}>
                        <option value="">Select Province</option>
                        {provinces.map((province) => (
                            <option key={province.province_id} value={province.province_id}>{province.province}</option>
                        ))}
                    </select>
                </div>
                <div className="input-container">
                    <select className='city' onChange={handleCityChange}>
                        <option value="">Select City</option>
                        {cities.map((city) => (
                            <option key={city.city_id} value={city.city_id}>{city.city_name}</option>
                        ))}
                    </select>
                </div>
                <button onClick={handelSearch}>SEARCH</button>
            </div>
        </div>
      )
    
}


export default Cost

/*
return (
    <div className="cost">
        <h1>CHECK YOUR SHIPPING COSTS</h1>
        <div className="form">
            <div className="input-container">
                <input  className='province' type="text" placeholder='Add province here'/>
                <IoLocation className='icon'/>
            </div>
            <div className="input-container">
                <input className='city' type="text" placeholder='Add city here' />
                <IoLocation className='icon'/>
            </div>
            <button>SEARCH</button>
        </div>
    </div>
  )


  const [province, setProvince] = useState('');
    const [city, setCity] = useState('');
    const [provinces, setProvinces] = useState([]);
    const [cities, setCities] = useState([]);
    const [shippingCost, setShippingCost] = useState('');

    useEffect(() => {
        // Ambil data provinsi saat komponen dimuat
        fetchProvinces();
    }, []);

    const fetchProvinces = async () => {
        try {
            const response = await axios.get('https://api.rajaongkir.com/starter/province', {
                headers: {
                    'key': 'your-api-key-here' // Ganti dengan API key Anda dari RajaOngkir
                }
            });
            setProvinces(response.data.rajaongkir.results);
        } catch (error) {
            console.error('Error fetching provinces:', error);
        }
    };

    const fetchCitiesByProvince = async (provinceId) => {
        try {
            const response = await axios.get(`https://api.rajaongkir.com/starter/city?province=${provinceId}`, {
                headers: {
                    'key': 'your-api-key-here' // Ganti dengan API key Anda dari RajaOngkir
                }
            });
            setCities(response.data.rajaongkir.results);
        } catch (error) {
            console.error(`Error fetching cities for province ${provinceId}:`, error);
        }
    };

    const handleProvinceChange = (e) => {
        const selectedProvince = e.target.value;
        setProvince(selectedProvince);
        // Panggil fungsi untuk ambil kota berdasarkan provinsi yang dipilih
        fetchCitiesByProvince(selectedProvince);
    };

    const handleCityChange = (e) => {
        const selectedCity = e.target.value;
        setCity(selectedCity);
    };

    const handleSearch = async () => {
        try {
            const response = await axios.post('https://api.rajaongkir.com/starter/cost', {
                origin: 501, // contoh: kode kota asal
                destination: city, // kode kota tujuan yang dipilih
                weight: 1000, // contoh: berat kiriman dalam gram
                courier: 'jne' // contoh: kode kurir (jne, pos, tiki, dll.)
            }, {
                headers: {
                    'key': 'your-api-key-here', // Ganti dengan API key Anda dari RajaOngkir
                    'Content-Type': 'application/json'
                }
            });

            // Ambil biaya pengiriman dari respons API
            const cost = response.data.rajaongkir.results[0].costs[0].cost[0].value;
            setShippingCost(cost);

            // Tampilkan informasi pengiriman
            alert(`Selected Province: ${province}\nSelected City: ${city}\nShipping Cost: Rp ${cost}`);
        } catch (error) {
            console.error('Error fetching shipping cost:', error);
        }
    };

    return (
        <div className="cost">
            <h1>CHECK YOUR SHIPPING COSTS</h1>
            <div className="form">
                <div className="input-container">
                    <input
                        className='province'
                        type="text"
                        placeholder="Enter province"
                        value={province}
                        onChange={handleProvinceChange}
                    />
                    <IoLocation className='icon'/>
                </div>
                <div className="input-container">
                    <input
                        className='city'
                        type="text"
                        placeholder="Enter city"
                        value={city}
                        onChange={handleCityChange}
                    />
                    <IoLocation className='icon'/>
                </div>
                <button onClick={handleSearch}>SEARCH</button>
            </div>
        </div>
    );

*/