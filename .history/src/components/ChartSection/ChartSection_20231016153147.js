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

const ChartSection = ({ dateRange }) => {
    const [data, setData] = useState({});
    const [sections, setSections] = useState([]);
    //const { sections, loading, setReturnFetch, returnFetch} = useGetSections(date);
    const [dataConsumos, setDataConsumos] = useState({});
    const [dataPerdidas, setDataPerdidas] = useState({});
    const [dataCostos, setDataCostos] = useState({});
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
        getAllSections({ fechainicial: dayjs(dateRange[0]?.$d).format('YYYY-MM-DD'), fechafinal: dayjs(dateRange[1]?.$d).format('YYYY-MM-DD')})
        .then((response) => {
            if(response){
                setSections(response);
                const labelsData = response?.map((section) => section?.Linea);
                var dataP = {
                    labels: labelsData,
                    datasets: [
                        {
                          label: 'Perdidas',
                          data: response?.map((section) => section?.perdidas),
                          backgroundColor: 'rgba(255, 99, 132, 0.5)',
                        }
                      ],
                };
                var dataC = {
                    labels: labelsData,
                    datasets: [
                        {
                          label: 'Perdidas',
                          data: response?.map((section) => section?.costo),
                          backgroundColor: 'rgba(255, 99, 132, 0.5)',
                        }
                      ],
                };

                var dataCon = {
                    labels: labelsData,
                    datasets: [
                        {
                          label: 'Perdidas',
                          data: response?.map((section) => section?.consumo),
                          backgroundColor: 'rgba(255, 99, 132, 0.5)',
                        }
                      ],
                };
                console.log(dataP);
                setDataPerdidas(dataP);
                setDataCostos(dataC);
                setDataConsumos(dataCon);
               // console.log(datax);
                //setData(datax);
            }
        });
      }, []);

    useEffect(() => {
       /* console.log("Entra al effect");
        console.log(sections);
        const consumoData = sections.map((section) => section.consumo);
        const perdidasData = sections.map((section) => section.perdidas);
        const labelsData = sections.map((section) => section.Linea);
        const costosData = sections.map((section) => section.costo);
        setDataConsumos(consumoData);
        setDataPerdidas(perdidasData);
        setDataCostos(costosData);
        setLabels(labelsData);
        const datax = {
            labels: ["Tramo 1", "Tramo 2", "Tramo 3", "Tramo 4", " Tramo 5"],
            datasets: [
                {
                  label: 'Consumo',
                  data: consumoData,
                  backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },
                {
                  label: 'Perdidas',
                  data: perdidasData,
                  backgroundColor: 'rgba(53, 162, 235, 0.5)',
                },
              ],
        };
        console.log(datax);
        setData(datax);*/
       
       
    }, [sections]);

    var  datax = {
        labels: sections?.map((section) => section?.Linea),
        datasets: [
            {
              label: 'Perdidas',
              data: sections?.map((section) => section?.perdidas),
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
          ],
    };

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
            {dataPerdidas && dataConsumos && dataCostos && (
                <>
                <Line 
                    option={options}
                    height={40}
                    data={dataPerdidas}
                />
                <Line 
                    option={options}
                    height={40}
                    data={dataCostos}
                />
                 <Line 
                    option={options}
                    height={40}
                    data={dataConsumos}
                />
                </>
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