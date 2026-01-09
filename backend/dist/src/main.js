"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const logger_interceptor_1 = require("./shared/interceptor/logger.interceptor");
const express = require("express");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const PORT = process.env.PORT || 8000;
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true }));
    app.useGlobalInterceptors(new logger_interceptor_1.LoggerInterceptor());
    app.setGlobalPrefix('api');
    app.enableCors({
        origin: 'http://localhost:5173',
        methods: 'GET,POST,PUT,PATCH,DELETE',
        credentials: true,
    });
    const clientPath = (0, path_1.join)(process.cwd(), 'client');
    app.use(express.static(clientPath));
    app.use((req, res, next) => {
        if (req.path.startsWith('/api')) {
            return next();
        }
        res.sendFile((0, path_1.join)(clientPath, 'index.html'));
    });
    await app.enableShutdownHooks();
    await app.listen(PORT);
    console.log(`Server running on port ${PORT}`);
}
bootstrap();
//# sourceMappingURL=main.js.map