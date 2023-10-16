import { useEffect, useState } from "react";
import { getAllSections } from "../shared/Services/Tramo";
import dayjs from 'dayjs';


const useGetSections = (dateRange) => {
    const [sections, setSections] = useState([]);
    const [returnFetch, setReturnFetch] = useState(false);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        getAllSections({ fechainicial: dayjs(dateRange[0]?.$d).format('YYYY-MM-DD'), fechafinal: dayjs(dateRange[1]?.$d).format('YYYY-MM-DD')})
        .then((response) => {
            setLoading(false);
            if(response){
                setSections(response);
            }
        });
    }, [returnFetch]);

    return { sections, loading, setReturnFetch, returnFetch }
}

export default useGetSections;


