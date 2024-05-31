import { Admin } from "./Admin";
import { Request, Response } from "express";



export class AdminController {
    constructor(private adminRepository: typeof Admin) { }

    async createAdmin(req: Request, res: Response) {
        try {
            const {
                firstName,
                lastName,
                email,
                phoneNumber,
                password,
                instagram,
                facebook,
                twitter,
            } = req.body;

            const existingEmailAdmin = await this.adminRepository.findOne({ where: { email } });
            if (existingEmailAdmin) {
                throw new Error("This Admin is already registered");
            }

            const admin = await this.adminRepository.create({
                firstName,
                lastName,
                email,
                phoneNumber,
                password,
                instagram,
                facebook,
                twitter,
            })
            await this.adminRepository.save(admin);
            return res.status(200).json(admin)

        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({ message: error.message });
            }
        }
        return res.status(500).json({ message: "internal Error" });
    }
}
