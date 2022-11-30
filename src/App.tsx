import { GlobalStyle } from './assets/styles/global';
import Router from './routes/routes';
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from './Context/authContext';
import { UserProvider } from './Context/userContext';
function App() {
  return (
    <>
      <ChakraProvider>
        <AuthProvider>
          <UserProvider>
            <GlobalStyle />
            <Router />
          </UserProvider>
        </AuthProvider>
      </ChakraProvider>
    </>
  );
}

export default App;
