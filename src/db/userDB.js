const conn = require('./connection');

const insert = (usuario) => conn.execute(
  `INSERT INTO user
    (nome, email, dataNascimento) VALUES (?, ?, ?)`,
    [usuario.nome, usuario.email, usuario.dataNascimento],
);

module.exports = {
  insert,
}