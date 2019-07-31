import React from 'react';
import Town from './Town.js';
import Dashboard from './Dashboard.js'

const Townslist = ({ townslist=[] }) => {
    return(
        <div className="d-flex justify-content-around flex-wrap">
                {console.log(townslist)}
                {townslist.map((town, key) =>                     
                    <Town key={town.data.city_name}
                    {...town} />
                    )
                }
                            <Dashboard />
            </div>
    )
}

// 0:
// count: 1
// data: Array(1)
// 0:
// app_temp: 28.7
// aqi: 50
// city_name: "Sudak"
// clouds: 9
// country_code: "UA"
// datetime: "2019-07-31:08"
// dewpt: 17.8
// dhi: 118.28
// dni: 906.26
// elev_angle: 54.93
// ghi: 905.11
// h_angle: -25.7
// last_ob_time: "2019-07-31T07:30:00"
// lat: 44.84924
// lon: 34.97471
// ob_time: "2019-07-31 08:06"
// pod: "d"
// precip: 0
// pres: 1005.77
// rh: 55
// slp: 1006.28
// snow: 0
// solar_rad: 904.921
// state_code: "11"
// station: "URKA"
// sunrise: "02:15"
// sunset: "16:59"
// temp: 27.9
// timezone: "Europe/Simferopol"
// ts: 1564560375
// uv: 8.0863
// vis: 24.1349
// weather: {icon: "c01d", code: "800", description: "Clear sky"}
// wind_cdir: "SW"
// wind_cdir_full: "southwest"
// wind_dir: 219
// wind_spd: 2.70319
// __proto__: Object
// length: 1
// __proto__: Array(0)
// __proto__: Object


// 1:
// count: 1
// data: Array(1)
// 0:
// app_temp: 29.9
// aqi: 53
// city_name: "Feodosiya"
// clouds: 54
// country_code: "UA"
// datetime: "2019-07-31:08"
// dewpt: 18.2
// dhi: 119.22
// dni: 904.36
// elev_angle: 55.35
// ghi: 906
// h_angle: -25.7
// last_ob_time: "2019-07-31T07:30:00"
// lat: 45.03677
// lon: 35.37789
// ob_time: "2019-07-31 08:06"
// pod: "d"
// precip: 0
// pres: 996.77
// rh: 52
// slp: 1005.88
// snow: 0
// solar_rad: 822.377
// state_code: "11"
// station: "URKA"
// sunrise: "02:15"
// sunset: "16:59"
// temp: 28.9
// timezone: "Europe/Simferopol"
// ts: 1564560375
// uv: 5.4456
// vis: 24.1349
// weather: {icon: "c02d", code: "802", description: "Scattered clouds"}
// wind_cdir: "S"
// wind_cdir_full: "south"
// wind_dir: 185
// wind_spd: 3.35938
// __proto__: Object
// length: 1
// __proto__: Array(0)
// __proto__: Object


// 2:
// count: 1
// data: Array(1)
// 0:
// app_temp: 30.5
// aqi: 93
// city_name: "Yalta"
// clouds: 29
// country_code: "UA"
// datetime: "2019-07-31:08"
// dewpt: 19.5
// dhi: 118.51
// dni: 901.07
// elev_angle: 54.98
// ghi: 891.97
// h_angle: -25.7
// last_ob_time: "2019-07-31T07:41:00"
// lat: 46.96279
// lon: 37.27365
// ob_time: "2019-07-31 08:06"
// pod: "d"
// precip: 0
// pres: 1001.05
// rh: 54
// slp: 1002.67
// snow: 0
// solar_rad: 882.026
// state_code: "05"
// station: "E7705"
// sunrise: "02:09"
// sunset: "16:53"
// temp: 29.2
// timezone: "Europe/Kiev"
// ts: 1564560375
// uv: 6.73218
// vis: 24.1349
// weather: {icon: "c02d", code: "801", description: "Few clouds"}
// wind_cdir: "WSW"
// wind_cdir_full: "west-southwest"
// wind_dir: 253
// wind_spd: 6.54565
// __proto__: Object
// length: 1
// __proto__: Array(0)
// __proto__: Object



// 3:
// count: 1
// data: Array(1)
// 0:
// app_temp: 31.9
// aqi: 86
// city_name: "Kerch"
// clouds: 31
// country_code: "UA"
// datetime: "2019-07-31:08"
// dewpt: 17.7
// dhi: 119.1
// dni: 904.47
// elev_angle: 55.63
// ghi: 905.44
// h_angle: -25.7
// last_ob_time: "2019-07-31T07:45:00"
// lat: 45.3531
// lon: 36.47429
// ob_time: "2019-07-31 08:06"
// pod: "d"
// precip: 0
// pres: 999.32
// rh: 44
// slp: 1005.24
// snow: 0
// solar_rad: 892.777
// state_code: "11"
// station: "F4018"
// sunrise: "02:08"
// sunset: "16:53"
// temp: 31.3
// timezone: "Europe/Simferopol"
// ts: 1564560375
// uv: 6.79936
// vis: 24.1349
// weather: {icon: "c02d", code: "801", description: "Few clouds"}
// wind_cdir: "W"
// wind_cdir_full: "west"
// wind_dir: 279
// wind_spd: 4.27799
// __proto__: Object
// length: 1
// __proto__: Array(0)
// __proto__: Object

export default Townslist