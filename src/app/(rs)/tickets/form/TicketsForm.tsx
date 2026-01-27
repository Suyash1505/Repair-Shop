"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { InputWithLabel } from "@/components/inputs/InputWithLabel";
import { TextAreaWithLabel } from "@/components/inputs/TextAreaWithLabel";
import { SelectWithLabel } from "@/components/inputs/SelectWithLabel";
import { CheckBoxWithLabel } from "@/components/inputs/CheckBoxWithLabel";

import { insertTicketSchema, type InsertTicketSchemaType,
    type SelectTicketSchemaType
 } from "@/zod-schema/tickets";
import { SelectCustomerSchemaType } from "@/zod-schema/customers";

 type Props = {
    customer: SelectCustomerSchemaType,
    ticket? : SelectTicketSchemaType,
 }

 export default function TicketForm( { customer, ticket }: Props){

    const defaultValues: InsertTicketSchemaType = {
        id: ticket?.id || "(New)",
        customer_id: ticket?.customer_id || customer.id,
        title : ticket?.title || '',
        description : ticket?.description || '',
        completed : ticket?.completed || false,
        tech : ticket?.tech || 'new-ticket@example.com',
    }

    const form = useForm<InsertTicketSchemaType>({
        mode: 'onBlur',
        resolver: zodResolver(insertTicketSchema),
        defaultValues,
    })

    async function submitForm(data: InsertTicketSchemaType) {
        console.log(data);
    }

    return (
        <div className="flex flex-col gap-1 sm:px-8">
            <div>
                <h2 className="text-2xl font-bold">
                    {ticket?.id ? "Edit" : "New"} Ticket {ticket?.id ? `#${ticket.id}` : "Form"}
                </h2>
            </div>

            <Form {...form}>
                <form 
                    onSubmit={form.handleSubmit(submitForm)}
                    className="flex flex-col md:flex-row gap-4 md:gap-8"
                >

                    <div className="flex flex-col gap-4 w-full max-w-xs">
                        {/*----------- TITLE ------------ */}
                        <InputWithLabel <InsertTicketSchemaType>
                            fieldTitle="Title"
                            nameInSchema="title"
                        />

                        {/*----------- TECH ------------ */}
                        <InputWithLabel <InsertTicketSchemaType>
                            fieldTitle="Tech"
                            nameInSchema="tech"
                            disabled={true}
                        />
                        
                        <CheckBoxWithLabel <InsertTicketSchemaType>
                            fieldTitle="Completed"
                            nameInSchema="completed"
                            message="Yes"
                        />

                        <div className="mt-4 space-y-2">
                            <h3 className="text-lg">
                                Customer Info
                            </h3>
                            <hr className="w-4/5"/>

                            <p>
                                {customer.firstName} {customer.lastName}
                            </p>

                            <p>
                                {customer.address1}
                            </p>

                            {
                                customer.address2  
                                ? <p>
                                    {customer.address2}
                                </p>
                                : null
                            }

                            <p>
                                {customer.city} {customer.state} {customer.zip}
                            </p>
                            <hr className="w-4/5"/>


                            <p>
                                {customer.email}
                            </p>

                            <p>
                                Phone : {customer.phone}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 w-full max-w-xs">

                        {/*  ----------- TEXT AREA ------------ */}
                        <TextAreaWithLabel <InsertTicketSchemaType>
                            fieldTitle="Description"
                            nameInSchema="description"
                            className="h-96"
                        />
                        
                        {/*  ----------- BUTTON ------------ */}
                        <div className="flex gap-2">
                            <Button
                                type="submit"
                                className="w-3/4"
                                variant='default'
                                title="Save"
                            >
                                Save
                            </Button>

                            <Button
                                type="button"
                                variant='destructive'
                                title="Reset"
                                onClick={ () => form.reset(defaultValues)}
                            >
                                Reset
                            </Button>
                        </div>
                    </div>   
                </form>
            </Form>
        </div>
    )
 }
