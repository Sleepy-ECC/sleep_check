import { createRouter, createRootRoute, createRoute } from "@tanstack/react-router";
import Top from "./page/Top/Top";
import Diagnosis from "./page/Diagnosis/Diagnosis";
import Choice from "./page/Choice/Choice";
import Shuffle from "./page/Shuffle/Shuffle";
import ShuffleTimer from "./page/ShuffleTimer/ShuffleTimer";

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

const shuffleTimerRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/ShuffleTimer",
    component: ShuffleTimer,
});

const routeTree = rootRoute.addChildren([
    topRoute,
    diagnosisRoute,
    choiceRoute,
    shuffleRoute,
    shuffleTimerRoute,
]);

export const router = createRouter({
    routeTree,
});
