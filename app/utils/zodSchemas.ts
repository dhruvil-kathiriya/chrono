import { conformZodMessage } from '@conform-to/zod';
import { z } from 'zod';
export const onBoardingSchema = z.object({
    fullName: z.string().min(3).max(150),
    userName: z
        .string()
        .min(3).
        max(150).
        regex(/^[a-zA-Z0-9-]+$/, {
            message: "Username Can only contain letters, numbers and -",
        }),

})
//Unique Usename Validation 
export function onBoardingSchemaValidation(options?: {
    isUsenameUnique: () => Promise<boolean>;
}) {
    return z.object({
        userName: z
            .string()
            .min(3).
            max(150).
            regex(/^[a-zA-Z0-9-]+$/, {
                message: "Username Can only contain letters, numbers and -",
            })
            .pipe(
                z.string().superRefine((_, ctx) => {
                    if (typeof options?.isUsenameUnique !== "function") {
                        ctx.addIssue({
                            code: "custom",
                            message: conformZodMessage.VALIDATION_UNDEFINED,
                            fatal: true,
                        });
                        return;
                    }
                    return options.isUsenameUnique().then((isUnique) => {
                        ctx.addIssue({
                            code: "custom",
                            message: "Username is already taken"
                        })
                    })
                })
            ),
            fullName: z.string().min(3).max(150),
    })
}