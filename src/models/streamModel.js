import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const encontreTodos = async () => {
    return await prisma.stream.findMany({ orderBy: { id: "asc" } });
};

export const encontreUm = async (id) => {
    return await prisma.stream.findUnique({
        where: { id: Number(id) },
    });
};

export const criar = async (dado) => {
    return await prisma.stream.create({
        data: {
            titulo: dado.titulo,
            descricao: dado.descricao,
            genero: dado.genero,
        },
    });
};

export const deletar = async (id) => {
    return await prisma.stream.delete({
        where: { id: Number(id) },
    });
};

export const atualizar = async (id, dado) => {
    return await prisma.stream.update({
        where: { id: Number(id) },
        data: {
            ...(dado.titulo && { titulo: dado.titulo }),
            ...(dado.descricao && { descricao: dado.descricao }),
            ...(dado.genero && { genero: dado.genero }),
        },
    });
};