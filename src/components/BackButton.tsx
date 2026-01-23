'use client'

import { useRouter } from "next/navigation";
import { ButtonHTMLAttributes } from "react";
import { Button } from "./ui/button";


type Props = {
    title: string,
    className? : string,
    variant? : "default" | "destructive" | "outline" | 
        "secondary" | "ghost" | "link" | null | undefined,
} & ButtonHTMLAttributes<HTMLButtonElement>

const BackButton = ( {title, variant, className, ...props} : Props) => {

    const router = useRouter();

    return (
        <Button
            title={title}
            variant={variant}
            className={className}
            onClick={ () => router.back()}
        >
            {title}
        </Button>
    )
}

export default BackButton;
