"use server"
import { signOut } from "@/auth";

export default async function SignOutButton() {
    return (
    <form action={async () => {
        await signOut();
    }}
    >
        <button type="submit">Sign out</button>
    </form>
    )
};


