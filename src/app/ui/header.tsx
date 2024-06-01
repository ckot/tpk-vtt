
// import Link from "next/link";
// import Image from "next/image";


// import { lusitana } from "@/app/ui/fonts";
import { auth } from "@/auth";
// signIn, signOut;
import TPKNavBar from "./navbar";

export default async function Header() {
    let session = await auth()
    return (
        <header className="">
            <TPKNavBar session={session} />
        </header>
    )
}
