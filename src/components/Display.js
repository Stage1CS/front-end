import { useLocation, useHistory } from 'react-router-dom'

function Display() {
    const location = useLocation();
    var token = location.state.token;
    console.log("token :  ->"+token)
}

export default Display