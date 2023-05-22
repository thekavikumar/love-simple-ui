import React ,{FC, ReactElement} from "react";
import { styled, setup } from "goober";

type childprops = {
    name: string
}

export const PrimaryModel:FC<childprops>=({name}):ReactElement=>{
return(
<div>
    <h2>{name}</h2>
</div>
)
};