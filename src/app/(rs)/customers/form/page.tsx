import BackButton from "@/components/BackButton";
import { getCustomers } from "@/lib/queries/getCustomers";
import CustomerForm from "./CustomerForm";

export default async function CustomerFormPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
    try {
        const { customerId } = await searchParams;

        // EDIT CUSTOMERS FORM
        if (customerId) {
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

            console.log(customer);

            // PUT CUSTOMER FORM COMPONENTS
            return (
                <>
                    {/* EDIT CUSTOMER FORM JSX HERE */}
                    <CustomerForm customer={customer}/>
                </>
            );
        }
        else {
            // NEW CUSTOMERS FORM COMPONENTS
            return (
                <>
                    {/* NEW CUSTOMER FORM JSX HERE */}
                    <CustomerForm/>
                </>
            );
        }
    }
    catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }

    return null;
}
