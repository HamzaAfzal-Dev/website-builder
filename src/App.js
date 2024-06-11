import React, {useState, useEffect} from "react";
import grapesjs from "grapesjs";
import gjsPresetWebpage from "grapesjs-preset-webpage";
import gjsBlocksBasic from "grapesjs-blocks-basic";
import gjsPluginForms from "grapesjs-plugin-forms";
import gjsNavbar from "grapesjs-navbar";
import gjsCountdown from "grapesjs-component-countdown";
import gjsStyleGradient from "grapesjs-style-gradient";
import gjsStyleFilter from "grapesjs-style-filter";
import gjsStyleBackground from "grapesjs-style-bg";
import gjsBlockFlexbox from "grapesjs-blocks-flexbox";
import gjsTooltip from "grapesjs-tooltip";
import gjsCustomeCode from "grapesjs-custom-code";
import gjsFloat from "grapesjs-float";

import "./styles/main.scss";

function App() {
  const [editor, setEditor] = useState(null);

  useEffect(
    () => {
      const editor = grapesjs.init({
        container: "#editor",
        plugins: [
          gjsPresetWebpage, 
          gjsBlocksBasic, 
          gjsPluginForms, 
          gjsNavbar,
          gjsCountdown,
          gjsStyleGradient,
          gjsStyleFilter,
          gjsStyleBackground,
          gjsBlockFlexbox,
          gjsTooltip,
          gjsCustomeCode,
          gjsFloat,
        ],
        pluginsOpts: {
          gjsPresetWebpage: {},
          gjsBlocksBasic: {},
          gjsPluginForms: {},
          gjsNavbar: {},
          gjsCountdown: {},
          gjsStyleGradient: {},
          gjsStyleFilter: {},
          gjsStyleBackground: {},
          gjsBlockFlexbox: {},
          gjsTooltip: {},
          gjsCustomeCode: {},
          gjsFloat: {},
        }
      });

      setEditor(editor);
    },
    []
  )



  return (
    <div className="App">
      <div id="editor"></div>
    </div>
  );
}

export default App;
