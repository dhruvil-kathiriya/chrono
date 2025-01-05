"use server"

import prisma from "./utils/db"
import { requireUser } from "./utils/hooks"

export async function OnboardingAction(formData : FormData) {
const session = await requireUser();
 
    const data = await prisma.user.update({
        where:{
            id:session.user?.id 
        },
        data:{
            userName : "aad",
            name: "aad"
        },
    })
} 