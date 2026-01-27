import { customers } from "@/db/schema";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const insertCustomerSchema = createInsertSchema(customers, {
    firstName: () =>
        z.string().min(1, "First Name is Required"),

    lastName: () =>
        z.string().min(1, "Last Name is Required"),

    address1: () =>
        z.string().min(1, "Address is Required"),

    city: () =>
        z.string().min(1, "City is Required"),

    state: () =>
        z.string().length(2, "State must be exactly 2 characters"),

    email: () =>
        z.string().email("Invalid Email Address"),

    zip: () =>
        z.string().regex(/^\d{6}(-\d{4})?$/, "Invalid Zip Code"),

    phone: () =>
        z.string().regex(
            /^\d{3}-\d{3}-\d{4}$/,
            "Invalid Phone number format. Use XXX-XXX-XXXX"
        ),
});

export const selectCustomerSchema = createSelectSchema(customers);

// TYPES
export type InsertCustomerSchemaType = z.infer<typeof insertCustomerSchema>;
export type SelectCustomerSchemaType = z.infer<typeof selectCustomerSchema>;
