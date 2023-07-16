import "devextreme/dist/css/dx.dark.css";
import "./App.css";
import Button from "devextreme-react/button";
import TextBox from "devextreme-react/text-box";
import Popup from "devextreme-react/popup";
import { useCallback, useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [visible, setVisible] = useState(false);

  const handleValueChanged = useCallback((v) => {
    setValue(v.value);
  }, []);

  const togglePopup = () => {
    setVisible(!visible);
  };

  return (
    <div className="App">
      <Button text="Click me!" type="success" onClick={togglePopup} />
      <TextBox
        className="textbox"
        value={value}
        onValueChanged={handleValueChanged}
        label="Link"
        labelMode="floating"
      />
      <Popup
        contentRender={() => renderContent(value)}
        visible={visible}
        hideOnOutsideClick={true}
        showTitle={true}
        title="Information"
        onHiding={togglePopup}
        width={500}
        height={500}
      />
    </div>
  );
}

const renderContent = (value) => {
  return (
    <>
      <img
        src="https://visualstudio.microsoft.com/wp-content/uploads/2019/03/Devexpress-2.png"
        alt="logo"
      />
      <p>Text Button value: {value}</p>
    </>
  );
};

export default App;
