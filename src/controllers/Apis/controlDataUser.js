
const fetch = require('node-fetch');

const db = require('../../database/models');
const { json } = require('express');
const { use } = require('../../../../grupo_4_TuristAr-USO PARA REACT/TuristAr/src/routes/main');
const Op = db.Sequelize.Op;

/* module.exports = {
    list: async (req, res) => { 
        fetch('https://restcountries.eu/rest/v2/all') 
        .then(response => response.json()) 
        .then(users => { JSON.parse(users) 
            return res.render('users', { users })

        })
    }
} */

module.exports = {
    list: (req, res) => {
        db.Users.findAll()
        .then(products => {
            return res.json({
                totalCount: products.length,
                users: products,
                
            });
        })
    },
    detail: (req, res) =>{
        db.Users.findByPk(req.params.id)
        .then(product => {
            return res.json({
                data: product
            });
        })
    }
}









