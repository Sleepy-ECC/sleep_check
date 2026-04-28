import { createRouter, createRootRoute, createRoute } from "@tanstack/react-router";
import Top from "./page/Top/Top";
import Diagnosis from "./page/Diagnosis/Diagnosis";
import Choice from "./page/Choice/Choice";
import Shuffle from "./page/Shuffle/Shuffle";
import ShuffleTimer from "./page/ShuffleTimer/ShuffleTimer";
import Register from "./page/register/register";
import Login from "./page/login/login";
import Beigun from "./page/Beigun/Beigun";
import CalmBreathing from "./page/CalmBreathing/CalmBreathing";
import Alice from "./page/Alice/Alice";
import Pmr from "./page/Pmr/Pmr";
import Paradoxical from "./page/Paradoxical/Paradoxical";
import ImageRelax from "./page/ImageRelax/ImageRelax";
import WhiteNoise from "./page/WhiteNoise/WhiteNoise";

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

const registerRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/register",
    component: Register,
});

const loginRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/login",
    component: Login,
});

const beigunRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/Beigun",
    component: Beigun,
});

const calmbreathingRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/CalmBreathing",
    component: CalmBreathing,
});

const AliceRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/Alice",
    component: Alice,
});

const PmrRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/Pmr",
    component: Pmr,
});

const ParadoxicalRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/Paradoxical",
    component: Paradoxical,
});

const ImageRelaxRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/ImageRelax",
    component: ImageRelax,
});

const whitenoiseRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/WhiteNoise",
    component: WhiteNoise,
});

const routeTree = rootRoute.addChildren([
    topRoute,
    diagnosisRoute,
    choiceRoute,
    shuffleRoute,
    shuffleTimerRoute,
    registerRoute,
    loginRoute,
    beigunRoute,
    calmbreathingRoute,
    AliceRoute,
    PmrRoute,
    ParadoxicalRoute,
    ImageRelaxRoute,
    whitenoiseRoute,
]);

const basepath = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

export const router = createRouter({
    routeTree,
    basepath,
});
