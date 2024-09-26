import React, { useState, useContext } from "react";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import "./ToggleSwitch.scss";

const ToggleSwitch = () => {
  const { isDark } = useContext(StyleContext);
  // Set initial state to !isDark for the switch to be off by default
  const [isChecked, setChecked] = useState(!isDark);
  const styleContext = useContext(StyleContext);

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={isChecked} // Bind checked state to isChecked
        onChange={() => {
          styleContext.changeTheme();
          setChecked(!isChecked); // Toggle the checked state
        }}
      />
      <span className="slider round">
        <span className="emoji">{isChecked ? emoji("🌜") : emoji("☀️")}</span>
      </span>
    </label>
  );
};

export default ToggleSwitch;
