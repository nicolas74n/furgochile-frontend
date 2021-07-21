import {authHeader, handleResponse} from '../../helpers';

const config = {
    apiUrl: 'https://furgochile-backend.herokuapp.com'
}

export const servicesService = {
    getMisServicios,
    contratarServicio
};

function getMisServicios() {
    const requestOptions = {method: 'GET', headers: authHeader()};
    return fetch(`${config.apiUrl}/mis-servicios`, requestOptions).then(handleResponse);
}

function contratarServicio(idServicio) {
    const requestOptions = {method: 'POST', headers: authHeader(), body: JSON.stringify({idServicio})};
    return fetch(`${config.apiUrl}/servicios/contratar`, requestOptions).then(handleResponse);
}

