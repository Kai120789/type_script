import express, { NextFunction, Request, Response } from "express"
import usersRouter from "./routes/user"

const app = express()

app.use('/api/users', usersRouter)

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`)
})