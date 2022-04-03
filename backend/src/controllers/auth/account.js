const LoginModel = require("../../models/login");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
	try {
		const { email, password } = req.body;
		if (!email) {
			res.status(400).send({ message: "Email inválido!" });
			return;
		}

		const user = await LoginModel.findOne({ email: email }).select("+password");

		if (user) {
			if (await bcrypt.compare(password, user.password)) {
				res.send(user);
			}
			res.status(400).send({ message: "senha man" });
			return;
		}
		res.status(400).send({ message: "Não foi encontrado nenhum usuário." });
	} catch (error) {
		res.status(500).json({ message: "Erro ao procurar usuário!" });
	}
};

const register = async (req, res) => {
	try {
		await LoginModel.create(req.body);
		res.send({ message: "Usuário criado com sucesso!" });
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Erro ao procurar usuário!" });
	}
};

module.exports = { register, login };
