import "@/styles/globals.css";
import { theme } from "@/lib/theme";
import { CSSReset, ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <CSSReset />
            <Component {...pageProps} />
        </ChakraProvider>
    );
}
