import { LineChart } from '@mui/x-charts/LineChart';
import { useEffect, useState } from 'react';
import { Grid, Box } from '@mui/material';
import HeaderPague from '../Header/HeaderPague';
import { Chart as ChartJS, BarElement } from 'chart.js';
import { Bar } from 'react-chartjs-2';

const ChartSection = ({ sections, sectionsForUsers }) => {
    const data = {
        labels: [1,2,3,4,5,6,7],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
    };
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
        console.log(labelsData);
    }, [sections]);

    var options = {
         maintainAspectRatio : false,
         scales:{
            y:{
                beginAtZero : true
            }
        },
        legend: {
            labels:{
                fontSize: 26
            }
        }   
    }

    return (
        <>
        
        {  JSON.stringify(sections) }
        <Bar
         data={data}
         height={400}
         options={options}
        />
            <h1>{sections.length}</h1>
        
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