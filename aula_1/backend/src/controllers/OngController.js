const crypto = require('crypto');//pacote de criptografia mas pode ser usado pra criar strings aleatórias
const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const {name, email, whatsapp, city, uf } = request.body;
    const  id = crypto.randomBytes(4).toString('HEX');//cria um id aleatório pra o id de cada ong
    //console.log(data);//mostra as coisas no terminal
    
    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })

    return response.json({ id });
    },

    async index(request,response){
        const ongs = await connection('ongs').select('*'); //lista tudo na tabela
    
        return response.json(ongs);
    }
};