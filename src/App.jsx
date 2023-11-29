import Wrapper from "./Components/Wrapper";
import { BalanceProvider } from "./Components/Common/BalanceContext";
import "./App.css";

const App = ()=> {
  return (
    <>
      <div className="app-container">
      <BalanceProvider>

        <Wrapper />
        </BalanceProvider>

      </div>
    </>
  );
}

export default App;
