import { useEffect, useState } from "react";
import { getAllSectionsForUsers } from "../shared/Services/Tramo";
import dayjs from 'dayjs';

const useGetSectionForUsers = (dateRange) => {
    const [sectionsForUsers, setSectionsForUsers] = useState([]);
    const [returnFetchForUsers, setReturnFetchForUsers] = useState(false);
    const [loadingForUsers, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        console.log("consultando..")
        getAllSectionsForUsers({ fechainicial: dayjs(dateRange[0]?.$d).format('YYYY-MM-DD'), fechafinal: dayjs(dateRange[1]?.$d).format('YYYY-MM-DD')})
        .then((response) => {
            setLoading(false);
            if(response){
                setSectionsForUsers(response);
            }
        });
    }, [returnFetchForUsers]);

    return { sectionsForUsers, loadingForUsers, setReturnFetchForUsers, returnFetchForUsers }
}

export default useGetSectionForUsers