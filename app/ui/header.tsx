import { lusitana } from "@/app/ui/fonts";

export default function Header({title}: {title: string}) {
    return (
        <header className="flex w-full items-center justify-between">
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                {title}
            </h1>
        </header>
    )
}