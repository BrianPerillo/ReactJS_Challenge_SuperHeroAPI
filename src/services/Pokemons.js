import axios from 'axios';

export const getAllPokes = async (baseUrl) => {

   

}

export const getPokesByName = async (baseUrl, name) => {

    let list = [];

    const res = await axios.get(baseUrl + '/' + name)
    .then(res => list.push(res.data))
    
    return list;
    
}

export const getPokeById = async (baseUrl, id) => {

    let hero;

    const res = await axios.get(baseUrl + '/' + id)
    .then(res => hero = res.data)

    return hero;

}


