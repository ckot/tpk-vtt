import { auth, signIn, signOut} from "@/auth";

import { lusitana } from "@/app/ui/fonts";
// import SignOutButton from "@/app/ui/dashboard/signout-button";

// import { getSession } from "@/lib";

export default async function Header({title}: {title: string}) {
    let session = await auth()
    let user = session?.user;
    // const session = await useSession();

    return (
        <header className="w-full items-center justify-between">
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                {title}
            </h1>
            <nav className="w-full container columns-4 gap-24 md:gap-12">
                <ul>
                    <li><button className="" disabled>Home</button></li>
                    <li><button className="" disabled>Games</button></li>
                    <li><button className="" disabled>Tools</button></li>
                    <li><button className="" disabled>Name:{JSON.stringify(session)}</button></li>
                    {/* <li><SignOutButton /></li> */}
                </ul>
            </nav>
        </header>
    )
}