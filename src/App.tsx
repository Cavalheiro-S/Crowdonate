import { GlobalStyle } from './assets/styles/global';
import Router from './routes/routes';
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  return (
    <>
      <ChakraProvider>
        <GlobalStyle />
        <Router />
      </ChakraProvider>
    </>
  );
}

export default App;
