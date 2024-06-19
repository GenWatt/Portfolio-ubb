import { z } from 'zod'
import { MAX_MESSAGE_LENGTH, MIN_MESSAGE_LENGTH } from '../constance'

export const contactValidator = z.object({
    from_email: z.string().email(),
    message: z.string()
        .min(MIN_MESSAGE_LENGTH, `Message should have at least ${MIN_MESSAGE_LENGTH} characters`)
        .max(MAX_MESSAGE_LENGTH, `Message should have max ${MAX_MESSAGE_LENGTH} characters`),
})