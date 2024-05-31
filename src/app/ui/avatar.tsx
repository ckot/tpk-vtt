import Image from "next/image";

export default function Avatar({href}:{href: string}) {

    return (
        <Image
            src={href}
            width={32}
            height={32}
            alt=""
            style={{
                borderRadius: "16px"
            }}
        />
    )
}