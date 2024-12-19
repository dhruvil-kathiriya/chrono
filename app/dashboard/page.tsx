import { redirect } from "next/navigation";
import { auth } from "../utils/auth"
import { requireUser } from "../utils/hooks";

export default async function DashboardPage(){
  const session = await requireUser()
  return(
    <>
    <p>Hello</p>
    </>
  )
}
