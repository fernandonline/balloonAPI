import { PrismaClient } from "@prisma/client";
import fastify from "fastify";
import { z } from 'zod';

const app = fastify()
const prisma = new PrismaClient()

app.get('/mensagem', async () => {
    const mensagens = await prisma.balloon.findMany()
    return { mensagens }
})

app.post('/mensagem', async (request, reply) => {
    const createBalloonSchema = z.object({
        name: z.string(),
        mensagem: z.string(),
    })
    const { name, mensagem } = createBalloonSchema.parse(request.body);
    
    await prisma.balloon.create({
        data: {
            name,
            mensagem,
        }
    })
    
    return reply.status(201).send();
})

app.listen({
    host: '0.0.0.0',
    port: process.env.PORT ? Number(process.env.PORT) : 3333,
}).then(() => {
    console.log('Servidor Rodando!')
})