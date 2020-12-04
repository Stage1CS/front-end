import React from 'react';
import { useLocation, useHistory } from 'react-router-dom'

function History() {
    const location = useLocation();
    var token = location.state.token;
    console.log("token :  ->"+token)
}

export default History