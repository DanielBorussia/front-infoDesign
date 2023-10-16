import { LineChart } from '@mui/x-charts/LineChart';
import { useEffect, useState } from 'react';
import { Grid, Box } from '@mui/material';
import HeaderPague from '../Header/HeaderPague';
import dayjs from 'dayjs';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
  } from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import useGetSections from '../../hooks/useGetSections';
import { getAllSections } from '../../shared/Services/Tramo';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement
  );

const ChartSection = ({ sections, sectionsForUsers }) => {
    const [dataConsumos, setDataConsumos] = useState({});
    const [dataPerdidas, setDataPerdidas] = useState({});
    const [dataCostos, setDataCostos] = useState({});
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
        const labelsData = sections?.map((section) => section?.Linea);
        var dataP = {
            labels: labelsData,
            datasets: [
                {
                  label: 'Perdidas',
                  data: sections?.map((section) => section?.perdidas),
                  backgroundColor: '#4e79a7',
                }
              ],
        };
        var dataC = {
            labels: labelsData,
            datasets: [
                {
                  label: 'Perdidas',
                  data: sections?.map((section) => section?.costo),
                  backgroundColor: '#f28e2c',
                }
              ],
        };

        var dataCon = {
            labels: labelsData,
            datasets: [
                {
                  label: 'Consumos',
                  data: sections?.map((section) => section?.consumo),
                  backgroundColor: '#76b7b2',
                }
              ],
        };
      
        setDataPerdidas(dataP);
        setDataCostos(dataC);
        setDataConsumos(dataCon); 
    }, [sections]);

    var options = {
        responsive: true,
        plugins: {
            legend: {
            position: 'top',
            },
            title: {
            display: true,
            text: 'Chart.js Bar Chart',
            },
        },
    }

    return (
        <>
            {dataPerdidas && dataPerdidas?.datasets && dataConsumos && dataCostos && (
            <Grid container spacing={3} >
                <Grid item xs={4}>
                    <Box sx={{  width: '100%' }}>
                        <Line 
                            option={options}
                            height={100}
                            data={dataPerdidas}
                        />
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box sx={{  width: '100%' }}>
                        <Line 
                            option={options}
                            height={100}
                            data={dataCostos}
                        />
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box sx={{  width: '100%' }}>
                        <Line 
                            option={options}
                            height={100}
                            data={dataConsumos}
                        />
                    </Box>
                </Grid>
            </Grid>
            )}
          
               
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
          
        </>
    );
}

export default ChartSection;