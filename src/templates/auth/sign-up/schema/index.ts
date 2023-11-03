import { z } from "zod";

export const SignUpSchema = z.object({
  name: z
    .string({ required_error: "Campo obrigatório." })
    .trim()
    .min(3, { message: "Este precisa no mínimo de 3 caracteres." })
    .max(150, { message: "Este campo tem o limite de 150 caracteres." }),
  cpf: z.string({ required_error: "Campo obrigatório." }).trim(),
  phone: z
    .string({ required_error: "Campo obrigatório." })
    .trim()
    .min(11, "Este campo tem o limite de 11 caracteres.")
    .max(11, "Este campo tem o limite de 11 caracteres."),
  sex: z.string({ required_error: "Campo obrigatório." }).trim(),
  email: z
    .string({ required_error: "Campo obrigatório." })
    .trim()
    .email({ message: "E-mail inválido." })
    .max(120, { message: "Este campo tem o limite de 120 caracteres." }),
  password: z
    .string({ required_error: "Campo obrigatório." })
    .trim()
    .min(8, { message: "A senha precisa no mínimo de 8 caracteres." })
    .max(50, { message: "Este campo tem o limite de 50 caracteres." }),
  terms: z.boolean({ required_error: "Campo obrigatório." }),
});
