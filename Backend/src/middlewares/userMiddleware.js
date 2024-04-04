const validateBody = (req,res, next) => {
    const {body} = req;
  
   
    if (body.nome === undefined){
      return res.status(400).json({mensage:'The field nome is required'});
    }
    if (body.nome === ''){
      return res.status(400).json({mensage:'Name cannot be empty'});
    }
    next();
  };
  
  module.exports = {
    validateBody
  };