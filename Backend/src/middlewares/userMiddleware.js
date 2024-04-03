const validateBody = (req,res, next) => {
    const {body} = req;
  
    
    if (body.nome === undefined){
      return res.status(400).json({mensage:'The field filme is required'});
    }
    if (body.nome === ''){
      return res.status(400).json({mensage:'Name cannot be empty'});
    }
    next();
  };
  
  module.exports = {
    validateBody
  };