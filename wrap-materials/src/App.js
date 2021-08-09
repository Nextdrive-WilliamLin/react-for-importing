import React from "react";
import MoButton from "components-modules/dist/MoButton";
import MoAccordion from "./lib/MoAccordion";

function App (){

    const accordionData = [{
        title: "a",
        content: <MoButton color="primary">AAAAAAAA</MoButton>
    },
        {
            title: "b",
            content: <MoButton color="primary">BBBBBB</MoButton>
        },
        {
            title: "c",
            content: <MoButton color="primary">CCCCCCC</MoButton>
        }
        ]

  return  (
      <div>
          <React.StrictMode ignore>
              <MoAccordion data={accordionData}></MoAccordion>
          </React.StrictMode>
      </div>
  )
}

export default App;