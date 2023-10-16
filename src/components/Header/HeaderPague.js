import React from 'react';
import { Header } from '../../styles/HeaderStyle';
import { Typography } from '@mui/material';



const HeaderPague = ({ title }) => {
    return (
        <Header>
            <Typography variant="h4" mt={2}>{title}</Typography>
        </Header>
    );
}

export default HeaderPague;