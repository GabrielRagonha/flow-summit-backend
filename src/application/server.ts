import express, { Router, json } from "express";
import { Environment } from "../shared.kernel/environment";


import { setupRoutes } from "./routes/routes";


export default class Server {
    private readonly express: express.Application;
    private readonly port: string = Environment.port;
    private router = Router();

  constructor() {
    this.express = express();
    this.express.use(json());
  }

  public start = () => {
    this.express.use(setupRoutes(this.router))

    this.express.listen(this.port, () => {
      console.log(`Servidor rodando na porta ${Environment.port} 🏆`);
    });
  };
}
