"use server"

import prisma from "./utils/db"
import { requireUser } from "./utils/hooks"
import { parseWithZod } from '@conform-to/zod'
import { onBoardingSchemaValidation } from "./utils/zodSchemas";

export async function OnboardingAction(prevState: any, formData: FormData) {
    const session = await requireUser();

    const submission = await parseWithZod(formData, {
        schema: onBoardingSchemaValidation({
            async isUsenameUnique() {
                const existingUsername = await prisma.user.findUnique({
                    where: {
                        userName: formData.get("userName") as string,
                    }
                });
                return !existingUsername;
            }
        }),
        async: true
    })

    if (submission.status !== "success") {
        return submission.reply();
    }

    const data = await prisma.user.update({
        where: {
            id: session.user?.id
        },
        data: {
            userName: submission.value.userName,
            name: submission.value.fullName
        },
    })
} 