import {z} from "zod"

export const acceptMessegesSchema = z.object({
    acceptMesseges: z.boolean(),
})