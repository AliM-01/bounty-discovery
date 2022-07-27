import express, { Application, Request, Response } from 'express';
import swaggerUi from "swagger-ui-express";
import Router from "./router";

const app: Application = express();

app.use(express.json());
app.use(express.static("public"));

app.use(Router);

app.use("/docs", swaggerUi.serve, 
                swaggerUi.setup(undefined, { 
                    swaggerOptions:  { 
                    url: "/swagger.json",
                    }, 
                })
);

app.listen(8080, () => {
    console.log("Running on http://localhost:8080");
    console.log("Docs available on http://localhost:8080/docs");
})