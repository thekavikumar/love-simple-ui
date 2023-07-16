import React from "react";
import { SmallMessageModel } from "./index";

export const Primary_Model =()=>(
    <SmallMessageModel Button_Name="Open Modal" Modal_Title="ModalTitle" Modal_Message="Message About The Modal" />
);


/*
In this example, we define stories for the Modal Component using Storybook. The first story, Small Message Modal Component, renders the Component that consist of title prop , message prop and with close button  
We Made This Component Using HTML own Dialog Component Which Help's Us To Reduce No Of Line's Code And Also It Has Very Fast Execution Compare To Other

We Will Soon Create New Modal Component Where You Can Submit Form Also,

To use this stories.tsx file, make sure you have Storybook set up in your project. The stories will appear in the Storybook UI, allowing you to interact with and view the Modal omponent in different scenarios.
*/
