
function DataLoader({params}) {
  let data = 
  {
    "TheGreenAtWestVillage":{
      "aptId": 1,
      "address": "298 Celadon",
      "plusCode": "G6VG+2V Davis, California",
      "rent": 1800,
      "avgRating": 3.1,
      "hasIULaundry": false,
      "hasGym": true,
      "allowsPets": false,
      "busDist": 0.1, 
      "busLine": "V",
      "qualities" : ["Close to campus", "Thin walls", "Inconsistent wi-fi"]
    },
    "stongeGate": {
      "aptId": 2
    }
  };
  
  return data[params.aptName]
}

export default DataLoader