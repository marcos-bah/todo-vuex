import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: HomePage,
    },
    {
        path: "/new",
        name: "New",
        component: () =>
            import(/* webpackChunkName: "new" */ "../pages/AddToDoPage.vue"),
    },
    {
        path: "/edit/:id",
        name: "Edit",
        component: () =>
            import(/* webpackChunkName: "edit" */ "../pages/EditToDoPage.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;