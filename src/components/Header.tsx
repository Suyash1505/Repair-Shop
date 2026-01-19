import { HomeIcon, File, UsersRound } from "lucide-react"
import NavButtom from "./NavButtom"
import Link from "next/link"
import { ModeToggle } from "./ModeToggle"

const Header = () => {

    return (
        <header className="h-12 p-2 border-b sticky z-20 top-0">
           
            <div className="flex items-center justify-between h-8 w-full">
                <div className="flex items-center gap-2">
                    <NavButtom 
                        href="/home"
                        label="Home"
                        icon={ HomeIcon }
                    />

                    <Link
                        href='/home'
                        className="flex justify-center items-center gap-2 ml-0"
                        title="Home"
                    >
                        <h1 className="hidden sm:block text-xl font-bold m-0 mt-1">
                            Steve's Shop
                        </h1>
                    </Link>
                </div>

                <div className="flex items-center">
                    <NavButtom 
                        href="/tickets"
                        label="Tickets"
                        icon={ File }
                    />

                    <NavButtom 
                        href="/customers"
                        label="Customers"
                        icon={ UsersRound }
                    />

                    <ModeToggle />
                </div>
            </div>
        </header>
    )
}

export default Header
