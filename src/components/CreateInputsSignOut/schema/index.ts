import { z } from "zod";

export const CreateAccountSchema = z.object({
  name: z
    .string()
    .trim()
    .nonempty("Campo obrigatório.")
    .min(3, { message: "O Minimo é de 3 caracteres." })
    .max(150, { message: "O máximo é de 150 caracteres." }),
  // email: z.string().email().trim(),
  // password: z.string(),
  birth_date: z
    .string()
    .nonempty("Campo obrigatório.")
    .datetime({ offset: true, message: "A data é inválida" }),
  cpf: z.string().nonempty("Campo obrigatório."),
  phone: z.string().nonempty("Campo obrigatório."),
  sex: z.string().nonempty("Campo obrigatório."),
});
