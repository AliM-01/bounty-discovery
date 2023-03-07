import express, { Application } from 'express';
import { RegisterRoutes } from "./routes";

import * as swaggerJson from "./swagger.json";
import * as swaggerUI from "swagger-ui-express";

const app: Application = express();

app.use(express.json());

RegisterRoutes(app);
app.use(["/openapi", "/docs", "/swagger"], swaggerUI.serve, swaggerUI.setup(swaggerJson));

app.listen(8080, () => {
    console.log("Running on http://localhost:8080");
    console.log("Docs available on http://localhost:8080/docs");
})