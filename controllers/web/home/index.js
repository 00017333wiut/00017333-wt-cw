const ticket_service = require('../../../services/ticket')

const home_controller = {
    index: async (req, res) =>{
        res.render('home');
    },
    add: async (req, res) =>{
        res.render('home/add_update', { mode: 'Add' });
    },
    update: async (req, res) =>{
        const productData = await ticket_service.getById(req.params.id);
        res.render('home/add_update', { mode: 'Update', productData: productData });
    }
};
  
module.exports = home_controller;
