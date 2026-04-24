import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/noto-sans-jp/index.css";
import "./index.css";
import { router } from "./router";
import { RouterProvider } from "@tanstack/react-router";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
