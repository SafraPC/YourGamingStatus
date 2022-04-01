const LoginModel = require("../../models/login");

const findAllAccounts = async (_req, res) => {
	try {
		const user = await LoginModel.find();
		if (user) {
			res.send(user);
			return;
		}
		res.status(400).send({ message: "Não foi encontrado nenhum usuário." });
	} catch (error) {
		res.status(500).json({ message: "Erro ao procurar usuário!" });
	}
};

const findAccount = async (req, res) => {
	try {
		const { email } = req.body;
		if (!email) {
			res.status(400).send({ message: "Email inválido!" });
			return;
		}
		const user = await LoginModel.findOne({ email: email });
		if (user) {
			res.send(user);
			return;
		}
		res.status(400).send({ message: "Não foi encontrado nenhum usuário." });
	} catch (error) {
		res.status(500).json({ message: "Erro ao procurar usuário!" });
	}
};

const createAccount = async (req, res) => {
	try {
		await LoginModel.create(req.body);
		res.send({ message: "Usuário criado com sucesso!" });
	} catch (error) {
		res.status(500).json({ message: "Erro ao procurar usuário!" });
	}
};

module.exports = { findAccount, createAccount, findAllAccounts };
