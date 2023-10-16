import {  useState } from 'react';
/* components */
import HeaderPague from "../../components/Header/HeaderPague";
import ChartSection from "../../components/ChartSection/ChartSection";
/* mui */
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import dayjs from 'dayjs';
/** hooks */
import useGetSections from '../../hooks/useGetSections';
import useGetSectionForUsers from '../../hooks/useGetSectionsForUsers';

const ChartSectionContainer = () => {
    const [dateRange, setDateRange] = useState([
        dayjs('2010-01-01'),
        dayjs('2010-01-30'),
    ]);

   
    const { sectionsForUsers, loadingForUsers, setReturnFetchForUsers, returnFetchForUsers} = useGetSectionForUsers(dateRange);

    const handleChangeDateRange = (newValue) => {
        if(newValue[1]){
            setDateRange(newValue);
          //  setReturnFetch(!returnFetch);
            setReturnFetchForUsers(!returnFetchForUsers);
        }
    }

    return (
        <>
            {/* header pague */}
             <HeaderPague 
                title={'Graficas de Tramos'} 
            />

             {/* date range */}
             <div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateRangePicker']}>
                    <DateRangePicker
                        value={dateRange}
                        onChange={(newValue) => handleChangeDateRange(newValue)} 
                        localeText={{ start: 'Fecha Inicio', end: 'Fecha Final' }} 
                    />
                </DemoContainer>
                </LocalizationProvider>
            </div>

         

            <ChartSection 
                dateRange={dateRange}
            />

        </>
    );
}

export default ChartSectionContainer;