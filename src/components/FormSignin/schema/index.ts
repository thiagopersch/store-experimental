import { z } from "zod";

export const SingInSchema = z.object({
  email: z
    .string()
    .trim()
    .nonempty("Campo obrigatório.")
    .email("Precisa ser um e-mail.")
    .max(150, "Ultrapassou o limite de 150 caracteres."),
  password: z
    .string()
    .trim()
    .nonempty("Campo obrigatório.")
    .min(6, "Mínimo de 6 caracteres.")
    .max(32, "Ultrapassou o limite de 32 caracteres."),
});
