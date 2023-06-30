import React from "react";
import {
  Button1,
  Button2,
  Button3,
  Button4,
  Button5,
  Button6,
  FaceBookButton,
  TwitterButton,
  GithubButton,
  GoogleButton,
  PayPalButton,
  MasterCardButton,
} from "./index";

export const ButtonOne = () => <Button1>Hello World!</Button1>; // Button one demo

export const ButtonTwo = () => <Button2 className="">Hello World!</Button2>; // Button two demo

export const ButtonThree = () => <Button3 className="">Hello World!</Button3>; // Button three demo

export const ButtonFour = () => <Button4 className="">Hello World!</Button4>; // Button four demo

export const ButtonFive = () => <Button5 className="">Hello World!</Button5>; // Button five demo

export const ButtonSix = () => <Button6 className="">Hello World!</Button6>; // Button six demo

export const FaceBookBtn = () => (
  <FaceBookButton className=""/>
); // FaceBookButton demo

export const TwitterBtn = () => (
  <TwitterButton className=""/>
); // TwitterButton demo

export const GithubBtn = () => (
  <GithubButton className=""/>
); // GithubButton demo

export const GoogleBtn = () => (
  <GoogleButton className=""/>
); // GoogleButton demo

export const PayPalBtn = () => (
  <PayPalButton className=""/>
); // PayPalButton demo

export const MasterCardBtn = () => (
  <MasterCardButton className=""/>
); // MasterCardButton demo
