import React ,{FC, ReactElement} from "react";
import { styled, setup } from "goober";

setup(React.createElement);

const StyleDilog=styled("dialog")`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&family=Poppins:wght@200&display=swap');
font-family: 'Poppins', sans-serif;
background-color: "#fff";
padding: 1rem 3rem;
background: white;
max-width: 400px;
padding-top: 2rem;
border-radius: 2px;
border: 0;
box-shadow: 0 5px 30px 0 rgb(0 0 0 / 10%);
animation: fadeIn 1s ease both;
&::backdrop {
    animation: fadeIn 1s ease both;
    background: rgb(255 255 255 / 40%);
    z-index: 2;
    backdrop-filter: blur(20px);
}

`;

const StyleButton = styled("button")`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&family=Poppins:wght@200&display=swap');
font-family: 'Poppins', sans-serif;
font-size: 2rem;
color: #e407efc !important;
background: linear-gradient(to left, pink, purpel ) right;
padding: 13px 25px;
border-radius: 17px;
transition: background-color 0.1s ease;
box-sizing: border-box;
transition: all 0.25s ease;
border: 0;
cursor: pointer;
box-shadow: 0 10px 20px -10px rgb(var(--vs-primary) / 50%);
font-size:smaller;
font-family:serif

&:hover {
    box-shadow: 0 20px 20px -10px rgb(var(--vs-primary) / 50%);
    transform: translateY(-5px);
}

`;

type childprops = {
    Button_Name: string
    Modal_Title: string
    Modal_Message: string
}


export const SmallMessageModel:FC<childprops>=({Button_Name,Modal_Title,Modal_Message}):ReactElement=>{


const OpenDialog=():void=>{
    let myDialog:any = document.getElementById("Primary");
    myDialog.showModal();
}

const CloseDialog=():void=>{
    let myDialog:any = document.getElementById("Primary");
    myDialog.close();
}

return(
<>
    <StyleDilog id='Primary'>
        <h3>{Modal_Title}</h3>
        <p>{Modal_Message}</p>
        <StyleButton onClick={()=>{CloseDialog()}}>Close</StyleButton> 
    </StyleDilog>
    <StyleButton onClick={()=>{OpenDialog()}}>{Button_Name}</StyleButton> 
</>
)

};
