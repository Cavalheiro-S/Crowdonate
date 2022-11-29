import { GlobalStyle } from './assets/styles/global';
import Router from './routes/routes';
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from './Context/authContext';
function App() {
  return (
    <>
      <ChakraProvider>
        <AuthProvider>
          <GlobalStyle />
          <Router />
        </AuthProvider>
      </ChakraProvider>
    </>
  );
}

export default App;
