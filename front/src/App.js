import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./components/Layout";
import { MemoryContextProvider } from "./contexts/MemoriesContext"

function App() {
  return (
    <>
      <MemoryContextProvider>
        <Layout />
      </MemoryContextProvider>       
      
      <GlobalStyles />
    </>
  );
}

export default App;
