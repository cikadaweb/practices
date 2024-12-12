import express from "express";
import dotenv from "dotenv";
import saturateUserInfo from 'cikada-lib';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello express");
    console.log(saturateUserInfo(
        {
            name: 'иван иванов',
            dateBirth: '10.11.1987',
            purpose: 'карьерный рост'
        }
    ));
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});