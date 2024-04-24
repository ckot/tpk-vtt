
import Header from "@/app/ui/header"
// import { signOut } from "@/auth"

export default async function Page() {
    // await signOut();

    return (
        <main className="w-full">
            <Header title="Dashboard" />
            <div>Your games</div>
            <div>Your profile</div>
        </main>
    )
}