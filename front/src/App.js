import Layout from "./components/Layout";
import GlobalStyles from "./styles/GlobalStyles";
import { MemoryContextProvider } from "./contexts/MemoriesContext"

function App() {
  return (
    < >
      <MemoryContextProvider>
        <Layout />
      </MemoryContextProvider>
      
      <GlobalStyles />
    </>
  );
}

export default App;
