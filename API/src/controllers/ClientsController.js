const db = require('../database/Data');
const Clients = require('../models/Clients');

module.exports = {
  async index(req, res, index) {
    const { id } = req.params
    const query = 'SELECT * FROM Clients where id = ?'
    const [ rows, fields ] = await (await db).execute(query, [id])

    return res.status(200).json(rows)
  },

  async findAll(req, res) {
    const query = 'SELECT * FROM Clients'
    const [ rows, fields ] = await (await db).execute(query)

    return res.status(200).json(rows)
  },

  async createClient(req, res) {
    const { name, ssn, age, birthday, address, zipCode, active, relationship } = req.body

    const query = `INSERT INTO Clients (name, ssn, age, birthday, 
    address, zipCode, active, relationship ) 
    VALUES 
    ("${name}", "${ssn}", "${age}", "${birthday}", "${address}", 
    "${zipCode}", ${active}, "${relationship}")`

    const [ rows, fields ] = await (await db).query(query, (err) => {
      return res.status(400).json('Erro ao criar o perfil!')
    })

    return res.status(200).json(rows)
  },

  async drop(req, res, index) {
    const { id } = req.params
    const query = 'DELETE FROM Clients where id = ?'
    const [ rows, fields ] = await (await db).execute(query, [id])

    return res.status(200).json(rows)
  },

  async updateName(req, res, index) {
    const { name } = req.body
    const { id } = req.params

  
    const query = `UPDATE Clients SET name = "${name}" WHERE id = ?`
    console.log(query);

    await (await db).execute(query, [id])

    return res.status(202).json(`Nome atualizado para ${name}`)
  },
}