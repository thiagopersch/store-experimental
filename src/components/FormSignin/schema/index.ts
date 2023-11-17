import { z } from "zod";

export const SingInSchema = z.object({
  email: z
    .string({ required_error: "Campo obrigatório." })
    .trim()
    .email("Precisa ser um e-mail. Ex: seuemail@dominio.com")
    .max(150, "Este campo tem o limite de 150 caracteres."),
  password: z
    .string({ required_error: "Campo obrigatório." })
    .trim()
    .min(8, "A senha precisa no mínimo de 8 caracteres.")
    .max(32, "Este campo tem o limite de 32 caracteres."),
});
