import { initTRPC } from "@trpc/server";

const t = initTRPC.context().create();
export const router = t.router;

// It is apublic endpoint, so anyone can call thi sAPI
export const publicProcedure = t.procedure;
