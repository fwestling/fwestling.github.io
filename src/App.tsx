import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TamaguiProvider, YStack } from "tamagui";
import tamaguiConfig from "./tamagui.config";
import Button from "./Button/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <YStack>
        <Button
          onPress={() => setCount((count) => count + 1)}
          variant="outlined"
        >
          Count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </YStack>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </TamaguiProvider>
  );
}

export default App;
