import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import { Box, useColorMode } from "@chakra-ui/react";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Router>
      <Box>
        <button onClick={toggleColorMode}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </button>
        <Routes>
          <Route exact path="/" element={<Index />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;