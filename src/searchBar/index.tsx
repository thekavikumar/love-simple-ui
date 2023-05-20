import React, { FC, useState } from "react";
import { styled, setup } from "goober";

export interface SearchBarProps {
    text?: string,
    className?: string,
    dark?: boolean,
};

setup(React.createElement);

const StyledSearchBarForm = styled("form")`
    background-color: "#fff";
    display: flex;
    align-items: center;
`;
const StyledSearchBarInput = styled("input")`
    color: #B19CD7;
    padding: 10px 10px;
    border-radius: 3px;
    border: 1px solid #B19CD7;
    &::placeholder {
        color: #B19CD7;
    }
    &:focus {
        outline: 1px solid #B19CD7;
        caret-color: #B19CD7;
        color: #B65FCF;
        font-weight: 700;
    }
    ${(props: SearchBarProps) => {
        if (props.dark) return (`
            background-color: black;
        `);
        else return (`
        `)
    }}
`
const StyledSearchBarButton = styled("button")`
    background-color: #B19CD7;
    border: none;
    border-radius: 3px;
    padding: 7px 20px;
    margin-left: 3px;
    cursor: pointer;
    &:active {
        transform: translateY(1px) scale(0.95);
        transition-duration: 200ms;
    }
`
export const SearchBar: FC<SearchBarProps> = ({ text = "", className= "", dark = false, ...props})=> {
    const [inputData, setInputData] = useState("");
    const handleChange = (event: any)=> {
        setInputData(event.target.value);
    }
    const handleSubmit = (event: any)=> {
        event.preventDefault();
        console.log(inputData);
        setInputData("");
    }
    return(
        <StyledSearchBarForm onSubmit={handleSubmit}{...props}>
            <StyledSearchBarInput className= {className} type="search" placeholder={text} value={inputData} onChange={handleChange} dark={dark}></StyledSearchBarInput>
            <StyledSearchBarButton type="button" onClick={handleSubmit}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill={dark? '' : `white`} viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
            </StyledSearchBarButton>
        </StyledSearchBarForm>
    )
}