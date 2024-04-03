const userModel = require('../Models/userModel');

const userGetAll = async(req,res) => {

    const usuario = await userModel.userGet();
    return res.status(200).json(usuario);
  };



const insertuser = async(req,res) => {
  
    const nome = req.body.nome;
    const notebook = req.body.notebook;
  
    const usuario = await userModel.insertuser(nome,notebook);
    return res.status(201).json(usuario);
  };
  
  const deleteuser = async(req,res) =>{
    const {id} = req.params;
  
    await userModel.deleteuser(id);
    return res.status(204).json();
  };

  const Updateduser = async (req,res) => {
  
    const {id} = req.params;
    
    await userModel.Updateduser(id, req.body);
    
    return res.status(204).json();
  };

  module.exports = {
    insertuser, deleteuser, Updateduser, userGetAll
  }
  

  