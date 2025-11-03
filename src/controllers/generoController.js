import * as generoModel from "../models/generoModel.js";

export const listarTodos = async (req, res) => {
  try {
    const generos = await generoModel.encontreTodos();

    if (!generos || generos.length === 0) {
      return res.status(404).json({
        total: 0,
        message: "No genres found",
        generos,
      });
    }

    res.status(200).json({
      total: generos.length,
      message: "List of genres",
      generos,
    });
  } catch (error) {
    res.status(500).json({
      error: "Internal server error",
      details: error.message,
      status: 500,
    });
  }
};

export const listarUm = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const genero = await generoModel.encontreUm(id);

    if (!genero) {
      return res.status(404).json({
        error: "Genre not found",
        id,
      });
    }

    res.status(200).json({
      message: "Genre found",
      genero,
    });
  } catch (error) {
    res.status(500).json({
      error: "Internal server error",
      details: error.message,
      status: 500,
    });
  }
};

export const criar = async (req, res) => {
  try {
    const { nome } = req.body;

    if (!nome) {
      return res.status(400).json({
        error: "The 'nome' field is required",
      });
    }

    const novoGenero = await generoModel.criar(req.body);
    res.status(201).json({
      message: "Genre created successfully",
      genero: novoGenero,
    });
  } catch (error) {
    res.status(500).json({
      error: "Error creating genre",
      details: error.message,
    });
  }
};

export const atualizar = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const dados = req.body;

    const generoExiste = await generoModel.encontreUm(id);
    if (!generoExiste) {
      return res.status(404).json({
        error: "Genre does not exist",
        id,
      });
    }

    const generoAtualizado = await generoModel.atualizar(id, dados);
    res.status(200).json({
      message: "Genre updated successfully",
      genero: generoAtualizado,
    });
  } catch (error) {
    res.status(500).json({
      error: "Error updating genre",
      details: error.message,
    });
  }
};

export const deletar = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const generoExiste = await generoModel.encontreUm(id);
    if (!generoExiste) {
      return res.status(404).json({
        error: "Genre not found",
        id,
      });
    }

    await generoModel.deletar(id);
    res.status(200).json({
      message: "Genre deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: "Error deleting genre",
      details: error.message,
    });
  }
};
