import { useState, useEffect } from "react";
import { InputForm } from "components/InputForm/InputForm";
import { VariablesList } from "components/VariablesList/VariablesList";
import { VinsList } from "components/VinsList/VinsList";
import Notiflix from 'notiflix';
import api from "services/api";

const Home = () => {
    const [vin, setVin] = useState(null)
    const [decodedVinsList, setDecodedVinsList] = useState(() => JSON.parse(window.localStorage.getItem('vins-list')) ??[]);
    const [decodedVinVariables, setDecodedVinVariables] = useState([]);

    const onSubmit = (vin) => {
        setVin(vin);
        if (decodedVinsList.length === 5) {
            decodedVinsList.splice(0, 1);
            setDecodedVinsList(prev => ([...prev, vin]));
        } else {
            setDecodedVinsList(prev => ([...prev, vin]));
        }
    };

    useEffect(() => {
        async function fetchVin(vin) {
            try {
                const results = await api.getDecodeVin(vin);
                setDecodedVinVariables(results);
                Notiflix.Notify.success("VIN-code was successfully decoded!");
            } catch (error) {
                console.log(error);
                Notiflix.Notify.failure("Connection lost!");
            } finally {
            };
        };
        if (vin !== null) {
            fetchVin(vin);
            localStorage.setItem('vins-list', JSON.stringify(decodedVinsList));
        }
    }, [vin, decodedVinsList]);

    return (
        <>
            <InputForm onSubmit={onSubmit} vin={vin} />
            {decodedVinsList ? <VinsList vins={decodedVinsList} onClick={onSubmit} /> : null}
            {decodedVinVariables?<VariablesList variables={decodedVinVariables} />:null}
        </>);
};

export default Home;
