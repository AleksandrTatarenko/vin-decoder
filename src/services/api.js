import axios from "axios";
axios.defaults.baseURL = 'https://vpic.nhtsa.dot.gov/api/';

const getDecodeVin = async (vin) => {
    const response = await axios.get(`/vehicles/decodevin/${vin}?format=json`);
    const results = response.data.Results
    const filteredResults = results.filter(function (result) {
        return result.Value;
    });
    return filteredResults;
};

const getVehicleVariablesList = async () => {
    const response = await axios.get(`/vehicles/getvehiclevariablelist?format=json`);
    const results = response.data.Results;
    return results;
};

const api = {
    getDecodeVin,
    getVehicleVariablesList
}

export default api