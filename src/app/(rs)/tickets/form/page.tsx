import BackButton from "@/components/BackButton";
import { getCustomers } from "@/lib/queries/getCustomers";
import { getTickets } from "@/lib/queries/getTickets";
import TicketForm from "./TicketsForm";


export default async function TicketFormPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
    try {
        
        const { customerId, ticketId } =  await searchParams

        if (!customerId && !ticketId) {
            return (
                <>
                    <h2 className="text-2xl mb-2">
                        Ticket ID or Customer ID is required to 
                        load ticket form
                    </h2>
                    <BackButton
                        title="Go Back"
                        variant="default"
                    />
                </>
            );
        }

        // NEW TICKET FORM
        if(customerId){
            const customer = await getCustomers(parseInt(customerId));
            if (!customer) {
                return (
                    <>
                        <h2 className="text-2xl mb-2">
                            Customer ID #{customerId} not Found!
                        </h2>
                        <BackButton
                            title="Go Back"
                            variant="default"
                        />
                    </>
                );
            }

            if(!customer.active){
                return (
                    <>
                        <h2 className="text-2xl mb-2">
                            Customer ID #{customerId} is not Active!
                        </h2>
                        <BackButton
                            title="Go Back"
                            variant="default"
                        />
                    </>
                );
            }

            // RETURN TICKET FORM
            console.log(customer);
            return (
                <>
                    <TicketForm customer={customer}/>
                </>
            )
        }

        // EDIT TICKET FORM 
        if(ticketId){
            const ticket = await getTickets(parseInt(ticketId));
            if(!ticket){
                return (
                    <>
                        <h2 className="text-2xl mb-2">
                            Ticket ID #{ticketId} not Found!
                        </h2>
                        <BackButton
                            title="Go Back"
                            variant="default"
                        />
                    </>
                );
            }

            const customer = await getCustomers(ticket.customer_id)
            
            // RETURN TICKET FORM
            console.log("Ticket : ", ticket);
            console.log("Customer : ", customer);
            return (
                <>
                    <TicketForm 
                        customer={customer}
                        ticket={ticket}
                    />
                </>
            )
        }
    } 
    catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
}