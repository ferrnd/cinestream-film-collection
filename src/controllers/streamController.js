import * as streamModel from "../models/streamModel.js";

export const listarTodos = async (req, res) => {
    try {
        const streams = await streamModel.encontreTodos();

        if (!streams || streams.length === 0) {
            return res.status(404).json({
                total: 0,
                message: "Não há títulos no catálogo",
                streams,
            });
        }

        res.status(200).json({
            total: streams.length,
            message: "Lista de títulos",
            streams,
        });
    } catch (error) {
        res.status(500).json({
            error: "Erro interno de servidor",
            details: error.message,
            status: 500,
        });
    }
};

export const listarUm = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const stream = await streamModel.encontreUm(id);

        if (!stream) {
            return res.status(404).json({
                error: "Título não encontrado",
                message: "Verifique o id do título",
                id: id,
            });
        }

        res.status(200).json({
            message: "Título encontrado",
            stream,
        });
    } catch (error) {
        res.status(500).json({
            error: "Erro interno de servidor",
            details: error.message,
            status: 500,
        });
    }
};

export const criar = async (req, res) => {
    try {
        const dado = req.body;

        const camposObrigatorios = ["titulo", "descricao", "genero"];

        const faltando = camposObrigatorios.filter((campo) => !dado[campo]);

        if (faltando.length > 0) {
            return res.status(400).json({
                erro: `Os seguintes campos são obrigatórios: ${faltando.join(", ")}.`,
            });
        }

        const novoTitulo = await streamModel.criar(dado);
        res.status(201).json({
            message: "Título criado com sucesso!",
            stream: novoTitulo,
        });
    } catch (error) {
        res.status(500).json({
            error: "Erro ao criar título",
            details: error.message,
        });
    }
};

export const deletar = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const streamExiste = await streamModel.encontreUm(id);

        if (!streamExiste) {
            return res.status(404).json({
                error: "Título não encontrado",
                id: id,
            });
        }

        await streamModel.deletar(id);

        res.status(200).json({
            message: "Título deletado com sucesso",
        });
    } catch (error) {
        res.status(500).json({
            error: "Erro ao deletar título",
            details: error.message,
        });
    }
};

export const atualizar = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const dados = req.body;

        const streamExiste = await streamModel.encontreUm(id);

        if (!streamExiste) {
            return res.status(404).json({
                error: "Título não existe",
                id: id,
            });
        }

        const streamAtualizado = await streamModel.atualizar(id, dados);
        res.status(200).json({
            message: "Título atualizado com sucesso",
            stream: streamAtualizado,
        });
    } catch (error) {
        res.status(500).json({
            error: "Erro ao atualizar título",
            details: error.message,
        });
    }
};
