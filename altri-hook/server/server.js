const fastify = require('fastify')({ logger: true });
const multipart = require('@fastify/multipart');
const fastifyCors = require('@fastify/cors')
const fs = require('node:fs')
const util = require('node:util')
const { pipeline } = require('node:stream')
const pump = util.promisify(pipeline)

fastify.register(multipart);
fastify.register(fastifyCors, { 'origin': '*' })

fastify.post('/upload', async (request, reply) => {
    const data = await request.file()
    await pump(data.file, fs.createWriteStream(data.filename))
    reply.send({ success: true, message: 'File caricato con successo' });
});

const start = async () => {
    try {
        await fastify.listen({ port: 3000 });
        fastify.log.info(`Server in ascolto su http://localhost:3000`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(0);
    }
};

start();
