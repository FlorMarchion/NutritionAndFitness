import { Request, Response } from "express";
import { User } from "../entities/User";

export class UserController {
  constructor(private userRepository: typeof User,
  ) { }

  // async createUser(req: Request, res: Response) {
  //   try {
  //     const {
  //       firstName,
  //       lastName,
  //       userName,
  //       password,
  //       ubication,
  //       phoneNumber,
  //       image,
  //       email,
  //     } = req.body;

  //     // Verificar si el correo electrónico ya está registrado
  //     const existingEmailUser = await this.userRepository.findOneBy({email});
  //     if (existingEmailUser) {
  //       throw new Error("Email is already registered");
  //     }

  //     // Verificar si el nombre de usuario ya está registrado
  //     const existingUserNameUser = await this.userRepository.findOneBy({userName});
  //     if (existingUserNameUser) {
  //       throw new Error(`There is already a user with the name ${userName}`);
  //     }

  //     const user = this.userRepository.create({
  //       firstName,
  //       lastName,
  //       userName,
  //       password,
  //       ubication,
  //       phoneNumber,
  //       image,
  //       email,
  //     });
  //     await this.userRepository.save(user);

  //     // Crear el carrito para el usuario
  //     const cart = this.cartRepository.create({
  //       user: user,
  //       totalPrice: 0,
  //       isDeleted: false
  //     });

  //     await this.cartRepository.save(cart);

  //     if (!user || !cart) {
  //       throw new Error("User or cart not created");
  //     }
  //     return res.status(200).json({ user, cart });
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       return res.status(500).json({ message: error.message });
  //     }
  //     return res.status(500).json({ message: "Unknown Error" });
  //   }
  // }

  async getUsers(_req: Request, res: Response) {
    try {
      const users = await this.userRepository.find();
      if (users.length > 0) {
        return res.json(users);
      } else {
        const error = new Error("no users found");
        return res.status(500).json({ message: error.message });
      }
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      }
      return res.status(500).json({ message: "Unknown Error" });
    }
  }

  async getUserById(_req: Request, res: Response) {
    try {
      const { id } = _req.params;
      const userId = await this.userRepository.findOneBy({ id: parseInt(id) });

      if (!userId) {
        return res.status(404).json({ message: "User not exist" });
      }
      return res.status(200).json({ userId, message: "Getting User by ID" });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
    return res.status(500).json({ message: "Internal Server Error" });
  }

  async updateUser(_req: Request, res: Response) {
    try {
      const { id } = _req.params;
      const user = await this.userRepository.findOneBy({ id: parseInt(id) });
      if (!user)
        return res.status(404).json({ message: "User does not exists" });

      await User.update({ id: parseInt(id) }, _req.body);
      return res.status(200).json({ message: "Successfully modified user !" });
    } catch (error) {
      if (error instanceof Error) {
        res.status(404).json({ message: error.message });
      }
    }
    return res.status(200).json({ message: "Usuario modificado" });
  }

  async deleteUser(_req: Request, res: Response) {
    try {
      const { id } = _req.params;
      const user = await this.userRepository.findOneBy({ id: parseInt(_req.params.id) });
      if (!user)
        return res.status(404).json({ message: "User does not exists" });
      await User.delete({ id: parseInt(id) });
      return res.status(200).json({ message: "User deleted succssefuly" });
    } catch (error) {
      if (error instanceof Error) {
        res.status(404).json({ message: error.message });
      }
    }
    return res.status(500).json({ message: "Unknow error" });
  }
}
