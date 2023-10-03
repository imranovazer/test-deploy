import 'dotenv/config'
import express from 'express'
import TodoRoutes from './routes/TodoRoutes.js'
import { Logger } from './middlevire/logger.js';


const app = express();
app.use(express.json())
const PORT = process.env.PORT || 8080

app.use(Logger)
app.use('/api/todo', TodoRoutes);


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}...`);
})