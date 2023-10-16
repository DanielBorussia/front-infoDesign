import { LineChart } from '@mui/x-charts/LineChart';
import { useEffect, useState } from 'react';
import { Grid, Box } from '@mui/material';
import HeaderPague from '../Header/HeaderPague';
import { BarChart } from '@mui/x-charts';

const ChartSection = ({ sections, sectionsForUsers }) => {
    const [dataConsumos, setDataConsumos] = useState([]);
    const [dataPerdidas, setDataPerdidas] = useState([]);
    const [dataCostos, setDataCostos] = useState([]);
    const [labels, setLabels] = useState([]);
    const [labelsSecondary, setLabelsSecondary] = useState(["consumo_comercial","consumo_industrial","consumo_residencial","costo_comercial","costo_industrial","costo_residencial", "perdidas_comercial","perdidas_industrial","perdidas_residencial"]);
    const [colors, setColors] = useState([
        '#4e79a7',
        '#f28e2c',
        '#e15759',
        '#76b7b2',
        '#59a14f',
        '#edc949',
        '#af7aa1',
        '#ff9da7',
        '#9c755f',
        '#bab0ab',
      ]);
    useEffect(() => {
        console.log("Entra al effect");
        const consumoData = sections.map((section) => section.consumo);
        const perdidasData = sections.map((section) => section.perdidas);
        const labelsData = sections.map((section) => section.Linea);
        const costosData = sections.map((section) => section.costo);
        setDataConsumos(consumoData);
        setDataPerdidas(perdidasData);
        setDataCostos(costosData);
        setLabels(labelsData);
    }, [sections]);



    return (
        <>
        {  JSON.stringify(sections) }
            {sections.length > 0 && (
             
                JSON.stringify(labels),
                JSON.stringify(dataConsumos),
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <Box sx={{  width: '100%' }}>
                        
                        </Box>
                    </Grid>
                </Grid>
            )}
            {/*
            <HeaderPague title={'Grafica de Tramos por tipos de Usuario'}/>
            <Grid container spacing={3} >
                <Grid item xs={12}>
                    {sectionsForUsers && sectionsForUsers.map((section, index) => (
                    <Box sx={{  width: '100%' }}>
                    <LineChart
                        colors={[colors[index]]} // Use palette
                        xAxis={[{ scaleType: 'point', data: labelsSecondary }]}
                        series={[
                            {
                            data: [section.consumo_comercial, section.consumo_industrial, section.consumo_residencial, section.costo_comercial, section.costo_industrial, section.costo_residencial, section.perdidas_comercial, section.perdidas_industrial, section.perdidas_residencial],
                            area: true,
                            label: section.Linea
                            },
                        ]}
                        height={300}
                       
                        />
                    </Box>

                    ))}
                </Grid>
            </Grid>
          */}
        </>
    );
}

export default ChartSection;