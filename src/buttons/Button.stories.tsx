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

export const ButtonOne = () => <Button1 role="button" name="Button 1"className="Button 1">Hello World!</Button1>; // Button one demo

export const ButtonTwo = () => <Button2 role="button" name="Button 2" className="">Hello World!</Button2>; // Button two demo

export const ButtonThree = () => <Button3 role="button" name="Button 3" className="">Hello World!</Button3>; // Button three demo

export const ButtonFour = () => <Button4 role="button" name="Button 4" className="">Hello World!</Button4>; // Button four demo

export const ButtonFive = () => <Button5 role="button" name="Button 5" className="">Hello World!</Button5>; // Button five demo

export const ButtonSix = () => <Button6 role="button" name="Button 6" className="">Hello World!</Button6>; // Button six demo

export const FaceBookBtn = () => (
  <FaceBookButton role="button" name="facebook-button" className=""/>
); // FaceBookButton demo

export const TwitterBtn = () => (
  <TwitterButton role="button" name="twitter-button" className=""/>
); // TwitterButton demo

export const GithubBtn = () => (
  <GithubButton role="button" name="github-button" className=""/>
); // GithubButton demo

export const GoogleBtn = () => (
  <GoogleButton role="button" name="google-button" className=""/>
); // GoogleButton demo

export const PayPalBtn = () => (
  <PayPalButton role="button" name="paypal-button" className=""/>
); // PayPalButton demo

export const MasterCardBtn = () => (
  <MasterCardButton role="button" name="mastercard-button" className=""/>
); // MasterCardButton demo
