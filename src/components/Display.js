import { useLocation, useHistory } from 'react-router-dom'

function Display() {
    const location = useLocation();
    var token = location.state.token;
}

export default Display