import { tickets } from "@/db/schema";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const insertTicketSchema = createInsertSchema(tickets, {
    id: z.union([z.number(), z.literal("(New)")]),

    title: () =>
        z.string().min(1, "Title is Required"),

    description: () =>
        z.string().min(1, "Description is Required"),

    tech: () =>
        z.string().email("Invalid Email Address"),

});

export const selectTicketSchema = createSelectSchema(tickets);

// TYPES
export type InsertCustomerSchemaType = z.infer<typeof insertTicketSchema>;
export type SelectCustomerSchemaType = z.infer<typeof selectTicketSchema>;
