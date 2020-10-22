import { Request, Response } from "express";
import CreateUser from "./services/CreateUser"

// ! Em TS precisamos explicar o que é cada variavel
// ? Por exemplo a variavel request é do tipo Request que é exportado do express

export function helloWorld(request: Request, response: Response){
  const user = CreateUser({
    name: "André",
    email: "andre.victor29@hotmail.com",
    password: "Teste",
    techs: ["Node", "ts", "JS", {title: "java", experience: 100}, { title: "C++", experience: 50 }]
  });

  return response.json(user)
}