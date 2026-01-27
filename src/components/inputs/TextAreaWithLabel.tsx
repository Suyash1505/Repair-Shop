"use client";

import { useFormContext } from "react-hook-form"
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Textarea } from "../ui/textarea"
import { TextareaHTMLAttributes } from "react"

type Props<S> = {
    fieldTitle : string,
    nameInSchema : keyof S & string,
    className? : string
} & TextareaHTMLAttributes<HTMLTextAreaElement>

export function TextAreaWithLabel<S>({
    fieldTitle, nameInSchema, className, ...porps
} : Props<S>){
    const form = useFormContext();

    return (
        <FormField 
            control={form.control}
            name={nameInSchema}
            render={ ({ field }) => (
                <FormItem>
                    <FormLabel
                        className="text-base mb-2"
                        htmlFor={nameInSchema}
                    >
                        {fieldTitle}
                    </FormLabel>

                    <FormControl>
                        <Textarea 
                            id={nameInSchema}
                            className={className}
                            {...porps}
                            {...field}
                        />
                    </FormControl>

                    <FormMessage />
                </FormItem>
            )}
        />
    )
}