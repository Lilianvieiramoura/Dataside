const connection = require('../db/connection');

const userExists = async (id) => {
  const [rows] = await connection.execute('SELECT * FROM users WHERE id = ?', [id]);

  return rows.length > 0; 
}

const createUser = async (req, res) => {
  const { nome, email, dataNascimento } = req.body;

  if (!nome || !email || !dataNascimento) {
    return res.status(400).send({ message: 'Nome, email e data de nascimento são obrigatórios'});
  }

  const query = 'INSERT INTO users (nome, email, dataNascimento) VALUES (?, ?, ?)';
  await connection.execute(query, [nome, email, dataNascimento]);
  res.status(201).send({ message: 'Usuário criado com sucesso!'});
};

const getAllUsers = async (req, res) => {
  const { nome, ordenar } = req.query;
  let query = 'SELECT * FROM users';
  const queryParams = [];

  if (nome) {
    query += ' WHERE nome LIKE ?';
    queryParams.push(`${nome}%`);
  }

  if(ordenar === 'dataNascimento') {
    query += 'ORDER BY dataNascimento ASC'
  }

  const [rows] = await connection.execute(query, queryParams);

  const users = rows.map(user => ({
    ...user,
    dataNascimento: new Date(user.dataNascimento).toLocaleDateString("pt-BR")
  }));
  res.status(200).json(users);
}

const getUserById = async (req, res) => {
  const { id } = req.params;
  
  if (!(await userExists(id))) {
    return res.status(404).send({ message: 'Usuário não encontrado'});
  }

  const [rows] = await connection.execute('SELECT * FROM users WHERE id = ?', [id]);
  res.status(200).json(rows[0]);
}

const deleteUser = async (req, res) => {
  const { id } = req.params;
  if (!(await userExists(id))) {
    return res.status(404).send({ message: 'Usuário não encontrado' });
  }
  await connection.execute('DELETE FROM users WHERE id = ?', [id])
  res.status(200).send({ message: 'Usuário excluído com sucesso!'});
}

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { nome, email, dataNascimento } = req.body;
  await connection.execute('UPDATE users SET nome = ?, email = ?, dataNascimento = ? WHERE id = ?', [nome, email, dataNascimento, id]);
  res.status(200).send({ message : 'Usuário atualizado com sucesso!'});
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  deleteUser,
  updateUser,
};