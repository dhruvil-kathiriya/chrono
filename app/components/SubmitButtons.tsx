"use client"
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import Googlelogo from "@/public/google.svg";
import Githublogo from "@/public/github.svg";
import Image from "next/image";
import { Loader2 } from "lucide-react";

export function GoogleAuthButton() {
    const { pending } = useFormStatus()

    return (
        <>
            {pending ? (
                <Button disabled variant={"outline"} className="w-full">
                    <Loader2 className="size-4 mr-2 animate-spin"/>Please Wait
                </Button>
            ) : (
                <Button variant={"outline"} className="w-full">
                    <Image src={Googlelogo} alt="Google Logo" className="size-4 mr-2"></Image>
                    Sign in with Google</Button>
            )}
        </>
    )
}



export function GithubAuthButton() {
    const { pending } = useFormStatus()

    return (
        <>
            {pending ? (
                <Button disabled variant={"outline"} className="w-full">
                    <Loader2 className="size-4 mr-2 animate-spin"/>Please Wait
                </Button>
            ) : (
                <Button variant={"outline"} className="w-full">
                    <Image src={Githublogo} alt="Github Logo" className="size-4 mr-2"></Image>
                    Sign in with Github</Button>
            )}
        </>
    )
}
