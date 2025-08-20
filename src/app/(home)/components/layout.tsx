import Footer from "@/app/components/global/footer";
import Navbar from "@/app/components/global/navbar";
import React from "react";

export default function LayoutHome({ children }: { children: React.ReactNode }) {
    return (
        <div className="px-3 md:px-0">

            <div className="mx-auto max-w-[1218px]">
                <Navbar />
                {children}
            </div>
            <Footer />
        </div>
    )
}