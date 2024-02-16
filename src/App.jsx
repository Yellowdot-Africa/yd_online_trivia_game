import "./App.css";
import Wrapper from "./Components/Wrapper";
import { BalanceProvider } from "./Components/BalanceContext";



const App = () => {
  return (
    <>
      <div className="app-container">
        <BalanceProvider>
          <Wrapper />
        </BalanceProvider>
      </div>
    </>
  );
};

export default App;