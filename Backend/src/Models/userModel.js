const connection = require('./connection');

const userGet = async () => {
  const usuario = await connection.query('SELECT * FROM inventario');
  return usuario.rows;
}; 

const insertuser = async(nome,notebook) => {
  const user = await connection.query('INSERT INTO inventario (nome, notebook) VALUES ($1, $2)', [nome, notebook]);
  return user.rows;
};

const deleteuser = async (id) => {
  const removeduser = await connection.query('DELETE FROM inventario WHERE id = $1', [id]);
  return removeduser;
};

const Updateduser = async (id, usuario) => {
  const query = 'UPDATE inventario SET nome=$1, notebook=$2 WHERE id=$3';
  
  const {nome,notebook} = usuario;
  
  const updatedUser = await connection.query(query, [nome, notebook, id]);
  return updatedUser.rows;
};





module.exports = {
   userGet, insertuser, deleteuser, Updateduser
  }
  