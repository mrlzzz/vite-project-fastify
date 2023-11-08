import Fastify from "fastify";
import routes from "../routes.js";
import dbConnector from "../dbConnector.js";
import cors from "@fastify/cors";

const envToLogger = {
    development: {
        transport: {
            target: "pino-pretty",
            options: {
                translateTime: "HH:MM:ss Z",
                ignore: "pid,hostname",
                colorize: "true",
                colorizeObjects: "true",
            },
        },
    },
    production: true,
    test: false,
};

const fastify = Fastify({
    logger: envToLogger["development"] ?? true,
});

fastify.register(cors, {
    origin: "http://localhost:5173",
});
//fastify.register(dbConnector);
fastify.register(routes);

fastify.listen({ port: 3000 }, function (err, address) {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
});
