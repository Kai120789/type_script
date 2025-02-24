import { Request, Response } from "express";
import { CreateUserDto } from "../dto/CreateUser.dto";
import { CreateUserQueryParams } from "../types/query-params";
import { User } from "../types/response";

export function getUsers(request: Request, response: Response) {
    response.send([])
}

export function getUserById(request: Request, response: Response) {
    response.send({})
}

export function createUser(request: Request<{}, {}, CreateUserDto, CreateUserQueryParams>, response: Response<User>) {
    response.status(201).send({
        id: 1,
        username: "d",
        email: "hj"
    })
}