import React from "react";
import Header from "@/app/ui/header";

export default function DashboardLayout({children} : {children: React.ReactNode}) {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
        </>
    )
}