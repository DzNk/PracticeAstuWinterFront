import { AppShell, Box, Paper, rem } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../../pages/login";
import { useUserContext } from "../../contexts/userContext/context.ts";
import { PrivateRouters } from "../../components/PrivateRouters/PrivateRouters.tsx";
import { useEffect } from "react";
import { client } from "../../api";
import { HomePage } from "../home/home.tsx";
import { Navbar } from "../../components/navbar/navbar.tsx";
import { LogoutPage } from "../logout/logout.tsx";

export function LayoutPage() {
    const { user } = useUserContext();

    useEffect(() => {
        client.setConfig({
            baseUrl: import.meta.env.VITE_API_BASE_URL,
        });
    }, [import.meta.env.VITE_API_BASE_URL]);

    return (
        <BrowserRouter>
            <AppShell
                navbar={{
                    width: rem("80px"),
                    breakpoint: "xs",
                    collapsed: {
                        mobile: !user.isAuthenticated,
                        desktop: !user.isAuthenticated,
                    },
                }}>
                <AppShell.Navbar>
                    <Navbar />
                </AppShell.Navbar>
                <AppShell.Main>
                    <Box p={"12px"}>
                        <Paper
                            shadow="md"
                            radius="md"
                            withBorder
                            h={"97vh"}
                            p="xl">
                            <Routes>
                                <Route element={<PrivateRouters />}>
                                    <Route
                                        path={"/"}
                                        element={<HomePage />}
                                    />
                                </Route>
                                <Route
                                    path={"login"}
                                    element={<LoginPage />}
                                />
                                <Route
                                    path={"logout"}
                                    element={<LogoutPage />}
                                />
                            </Routes>
                        </Paper>
                    </Box>
                </AppShell.Main>
            </AppShell>
        </BrowserRouter>
    );
}