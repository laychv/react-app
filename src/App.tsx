import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      {visible && (
        <Alert onClose={() => setVisible(false)}>This is an Alert !</Alert>
      )}
      <Button
        color="danger"
        onClick={() => {
          setVisible(true);
          console.log("this is log from click button");
        }}
      >
        This is a Button
      </Button>
    </div>
  );
}

export default App;
