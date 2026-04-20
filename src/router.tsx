import { createRouter, createRootRoute, createRoute } from "@tanstack/react-router";
import Top from "./Top";
import Diagnosis from "./Diagnosis";
import Choice from "./Choice";
import Shuffle from "./Shuffle";

const rootRoute = createRootRoute();

const topRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: Top,
});

const diagnosisRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/Diagnosis",
    component: Diagnosis,
});

const choiceRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/Choice",
    component: Choice,
});

const shuffleRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/Shuffle",
    component: Shuffle,
});

const routeTree = rootRoute.addChildren([topRoute, diagnosisRoute, choiceRoute, shuffleRoute]);

export const router = createRouter({
    routeTree,
});
