const User = require('../database/models/User');

module.exports = {
  async create(req, res) {
    const { name, email, password } = req.body;

    const userExist = await User.findOne({ where: email });

    if (userExist) {
      return res.status(400).json({ message: 'Email incorreto ou já cadastrado!' });
    };

    try {
      const user = await User.create({
        name, email, password
      });

      user.save();

      return res.status(200).json({ 
        message: 'Usuário cadastrado com sucesso!',
        user
      });

    } catch (error) {
      return res.status(401).json({ 
        message: 'Erro ao cadastrar o usuário',
        erro: message.error
     });

    }
  }
}