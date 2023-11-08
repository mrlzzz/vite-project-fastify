"use strict";

// Read the .env file.
// import * as dotenv from "dotenv";
// dotenv.config();

// Require the framework
import Fastify from "fastify";

// Instantiate Fastify with some config
const app = Fastify({
    logger: true,
});

// Register your application as a normal plugin.
app.register(import("../src/server.js"));

export default async (req, res) => {
    await app.ready();
    app.server.emit("request", req, res);
};

Unhandled Promise Rejection 	{"errorType":"Runtime.UnhandledPromiseRejection","errorMessage":"Error: unable to determine transport target for \"pino-pretty\"","reason":{"errorType":"Error","errorMessage":"unable to determine transport target for \"pino-pretty\"","stack":["Error: unable to determine transport target for \"pino-pretty\"","    at fixTarget (/var/task/node_modules/pino/lib/transport.js:144:13)","    at transport (/var/task/node_modules/pino/lib/transport.js:114:22)","    at normalizeArgs (/var/task/node_modules/pino/lib/tools.js:316:16)","    at pino (/var/task/node_modules/pino/pino.js:87:28)","    at createPinoLogger (/var/task/node_modules/fastify/lib/logger.js:42:14)","    at createLogger (/var/task/node_modules/fastify/lib/logger.js:101:18)","    at fastify (/var/task/node_modules/fastify/fastify.js:133:33)","    at file:///var/task/src/server.js:22:17","    at ModuleJob.run (node:internal/modules/esm/module_job:194:25)"]},"promise":{},"stack":["Runtime.UnhandledPromiseRejection: Error: unable to determine transport target for \"pino-pretty\"","    at process.<anonymous> (file:///var/runtime/index.mjs:1276:17)","    at process.emit (node:events:529:35)","    at emit (node:internal/process/promises:149:20)","    at processPromiseRejections (node:internal/process/promises:283:27)","    at process.processTicksAndRejections (node:internal/process/task_queues:96:32)"]}
Unknown application error occurred
Runtime.Unknown
