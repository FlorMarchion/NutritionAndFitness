import { Request, Response } from "express";
import { Admin } from "../entities/Admin";

export class AdminController {
  constructor(private adminRepository: typeof Admin) {}

  async createAdmin(req: Request, res: Response) {
    try {
      const {
        firstName,
        lastName,
        email,
        password,
        instagram,
        facebook,
        twitter,
      } = req.body;
      const admin = this.adminRepository.create({
        firstName,
        lastName,
        email,
        password,
        instagram,
        facebook,
        twitter,
      });
      await this.adminRepository.save(admin);

      if (!admin) {
        throw new Error("Admin not created");
      }
      return res.status(200).json(admin);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
      return res.status(500).json({ message: "Unknown Error" });
    }
  }

  async getAdmin(_req: Request, res: Response) {
    try {
      const admin = await this.adminRepository.find();
      if (admin.length > 0) {
        return res.status(200).json(admin);
      } else {
        const error = new Error("No admin found");
        return res.status(404).json({ message: error.message });
      }
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      }
      return res.status(500).json({ mesage: "Unknown error" });
    }
  }

  async getAdminById(_req: Request, res: Response) {
    try {
      const { id } = _req.params;
      const admin = await this.adminRepository.findOneBy({
        id: parseInt(id),
      });
      if (!admin) {
        return res.status(404).json({ message: "Admin not found not found" });
      }
      return res.status(200).json({ admin, message: "Getting admin by ID" });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
      return res.status(500).json({ message: "Unknow Error" });
    }
  }

  async updateAdminById(_req: Request, res: Response) {
    try {
      const { id } = _req.params;
      const admin = await this.adminRepository.findOneBy({
        id: parseInt(id),
      });
      if (!admin) {
        return res.status(404).json({ message: "Admin not found not found" });
      }
      await this.adminRepository.update({ id: parseInt(id) }, _req.body);
      return res
        .status(200)
        .json({ message: ' "Successfully modified admin !" ' });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async deleteAdminById(_req: Request, res: Response) {
    try {
      const { id } = _req.params;
      const admin = await this.adminRepository.findOneBy({
        id: parseInt(id),
      });
      if (!admin) {
        return res.status(404).json({ message: "Admin not found" });
      }
      await this.adminRepository.delete({ id: parseInt(id) });
      return res.status(200).json({ message: "Admin deleted" });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
