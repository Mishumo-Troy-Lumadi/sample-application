import { createBrowserRouter, createRoutesFromElements, Outlet, Route } from "react-router-dom";
import Landing from "./pages/landing";
import SignIn from "./pages/auth/sign-in";
import Home from "./pages/(app)/home";
import Header from "./components/header";

export const router = createBrowserRouter(createRoutesFromElements(
    <Route element={
        <>
            <Header />
            <Outlet />
        </>
    }>
        <Route index element={<Landing />} />
        <Route path="auth">
            <Route index element={<SignIn />} />
        </Route>
        <Route>
            <Route path="home" element={<Home />} />
        </Route>
    </Route>
))