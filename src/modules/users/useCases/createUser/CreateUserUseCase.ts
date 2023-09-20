import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const userExists = this.usersRepository.findByEmail(email)
    if (userExists) {
      throw new Error("O e-mail utilizado para cadatro já existe")
    }

    return this.usersRepository.create({ email, name });
  }
}

export { CreateUserUseCase };
