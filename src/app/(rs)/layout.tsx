
export default function RSLayout({ children }: 
    Readonly<{children: React.ReactNode;}>){

    return (
        <div className="mx-auto w-full max-w-7xl">

            {/* ----------- HEADER ------------ */}
            <div className="px-4 py-2">
                {children}
            </div>
        </div>
    );
}
