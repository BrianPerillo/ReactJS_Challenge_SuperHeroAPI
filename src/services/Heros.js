import axios from 'axios';

export const getAllHeros = async (baseUrl) => {

    let list = [];

    for (let index = 1; index <= 8; index++) {
        const res = await axios.get(baseUrl + index)
        .then(res => list.push(res.data))
        // console.log(res.data);
        // console.log("heros" + heros);
    };

    // console.log("list desde service");
    // console.log(list);

    return list;
    
}

export const getHerosByName = async (baseUrl, name) => {

    let list = [];
    
    const res = await axios.get(baseUrl + name)
    .then(res => list.push(res.data.results))
    return list;
    

}

export const getHero = async (baseUrl, id) => {

    let hero;

    const res = await axios.get(baseUrl + id)
    .then(res => hero = res.data)

    return hero;

}


