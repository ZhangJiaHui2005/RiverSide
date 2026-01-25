import express, { type Response, type Request } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.send("Hello, World in RiverSide Backend!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});