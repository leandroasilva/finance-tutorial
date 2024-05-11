import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { Hono } from "hono";
import { handle } from "hono/vercel";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.use("*", clerkMiddleware())

app.get("/hello", async (c) => {
    const auth = getAuth(c);
    return c.json({ hello: "world" });
});

export const GET = handle(app);
export const POST = handle(app);