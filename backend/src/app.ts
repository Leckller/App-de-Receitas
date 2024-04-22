import express from "express"
import mainRouter from "./routes";

export default class App {
    public app = express();

    constructor() {
        app.use(mainRouter)
    }
}

export const { app } = new App(); 