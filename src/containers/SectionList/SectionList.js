import { useState } from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { Grid } from '@mui/material';
import HeaderPague from '../../components/Header/HeaderPague';
import DataTable from '../../components/DataTable/DataTable';
import Box from '@mui/material/Box';
import { sectionColumns, sectionColumnsForUsers } from '../../configs/columnsDataTableConfig';
import useGetDataSections from '../../hooks/useGetSections';
import useGetSectionForUsers from '../../hooks/useGetSectionsForUsers';



const SectionList = () => {
    const [dateRange, setDateRange] = useState([
        dayjs('2010-01-01'),
        dayjs('2010-01-30'),
    ]);
    const { sections, loading, setReturnFetch, returnFetch} = useGetDataSections(dateRange);
    const { sectionsForUsers, loadingForUsers, setReturnFetchForUsers, returnFetchForUsers} = useGetSectionForUsers(dateRange);

    

    const handleChangeDateRange = (newValue) => {
        if(newValue[1]){
            setDateRange(newValue);
            setReturnFetch(!returnFetch);
            setReturnFetchForUsers(!returnFetchForUsers);
        }
    }
   
    return (
        <>
            {/* header pague */}
            <HeaderPague 
                title={'Listado de Tramos'} 
            />

            {/* date range */}
            <Box>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateRangePicker']}>
                    <DateRangePicker
                        value={dateRange}
                        onChange={(newValue) => handleChangeDateRange(newValue)} 
                        localeText={{ start: 'Fecha Inicio', end: 'Fecha Final' }} 
                    />
                </DemoContainer>
                </LocalizationProvider>
            </Box>


            {/* list section */}
            <Grid container spacing={3} style={{ marginTop: 5 }}>
                <Grid item xs={12}>
                    <Box sx={{ width: '100%' }}>
                        <DataTable 
                            rows={sections}
                            columns={sectionColumns}
                            loading={loading}
                        />
                    </Box>
                </Grid>               
            </Grid>

            {/* header pague */}
            <HeaderPague 
                title={'Listado de Tramos por Usuario'} 
            />

            <Grid container spacing={3} >
                <Grid item xs={12}>
                    <Box sx={{  width: '100%' }}>
                        <DataTable 
                            rows={sectionsForUsers}
                            columns={sectionColumnsForUsers}
                            loading={loadingForUsers}
                        />
                    </Box>
                </Grid>
           </Grid>
        </>
    );
}

export default SectionList;
