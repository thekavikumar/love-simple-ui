import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
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
} from "../index";

describe("Button Components", () => {
  test("ButtonOne should render correctly", () => {
    render(<Button1 />);
    const buttonElement = screen.getByText("Hello World!");
    expect(buttonElement).toBeInTheDocument();
  });

  test("ButtonTwo should render correctly", () => {
    render(<Button2 />);
    const buttonElement = screen.getByText("Hello World!");
    expect(buttonElement).toBeInTheDocument();
  });

  test("ButtonThree should render correctly", () => {
    render(<Button3 />);
    const buttonElement = screen.getByText("Hello World!");
    expect(buttonElement).toBeInTheDocument();
  });

  test("ButtonFour should render correctly", () => {
    render(<Button4 />);
    const buttonElement = screen.getByText("Hello World!");
    expect(buttonElement).toBeInTheDocument();
  });

  test("ButtonFive should render correctly", () => {
    render(<Button5 />);
    const buttonElement = screen.getByText("Hello World!");
    expect(buttonElement).toBeInTheDocument();
  });

  test("ButtonSix should render correctly", () => {
    render(<Button6 />);
    const buttonElement = screen.getByText("Hello World!");
    expect(buttonElement).toBeInTheDocument();
  });

  test("FaceBookBtn should render correctly", () => {
    render(<FaceBookButton />);
    const buttonElement = screen.getByTestId("facebook-button");
    expect(buttonElement).toBeInTheDocument();
  });

  test("TwitterBtn should render correctly", () => {
    render(<TwitterButton />);
    const buttonElement = screen.getByTestId("twitter-button");
    expect(buttonElement).toBeInTheDocument();
  });

  test("GithubBtn should render correctly", () => {
    render(<GithubButton />);
    const buttonElement = screen.getByTestId("github-button");
    expect(buttonElement).toBeInTheDocument();
  });

  test("GoogleBtn should render correctly", () => {
    render(<GoogleButton />);
    const buttonElement = screen.getByTestId("google-button");
    expect(buttonElement).toBeInTheDocument();
  });

  test("PayPalBtn should render correctly", () => {
    render(<PayPalButton />);
    const buttonElement = screen.getByTestId("paypal-button");
    expect(buttonElement).toBeInTheDocument();
  });

  test("MasterCardBtn should render correctly", () => {
    render(<MasterCardButton />);
    const buttonElement = screen.getByTestId("mastercard-button");
    expect(buttonElement).toBeInTheDocument();
  });
});
