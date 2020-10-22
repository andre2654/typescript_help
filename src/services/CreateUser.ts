/**
 * ! TUDO ABAIXO É UM EXEMPLO
 * * Para criar um usuário nós vamos precisar do
 * * Nome
 * * Email
 * * Senha
 */

// com a interface definimos o que é cada item dentro de um array
interface TechObject {
  title: string, // ? o item 'title' dentro desse array é do tipo string
  experience: number // ? o item 'experience' dentro desse array é do tipo number
}

interface CreateUserData {
  name: string, // ? o item 'name' dentro desse array é do tipo string
  email: string, // ? o item 'email' dentro desse array é do tipo string
  password: string, // ? o item 'password' dentro desse array é do tipo string
  techs: Array<string | TechObject>, // ? o item 'techs' dentro desse array é do tipo array que aceita strings ou TechObject
}

export default function createUser({ name, email, password, techs }: CreateUserData){ // aqui estamos desfragmentando tudo para facilitar
  const user = {
    name,
    email,
    password,
    techs
  }
  return user;
}