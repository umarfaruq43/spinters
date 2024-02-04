import "@/styles/globals.css";
import { theme } from "@/lib/theme";
import { CSSReset, ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
            // offset: 100,
            mirror: false,
        });
    }, []);

    return (
        <ChakraProvider theme={theme}>
            <CSSReset />
            <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
            </QueryClientProvider>
        </ChakraProvider>
    );
}
