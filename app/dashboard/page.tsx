import { requireUser } from "../utils/hooks"

export default async function DashboardPage(){

  const session = await requireUser();
  return(
    <>
    <p>Hello From the Dashboard</p>
    </>
  )
}
