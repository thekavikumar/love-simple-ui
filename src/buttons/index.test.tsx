import React from "react";
import { render, screen } from "@testing-library/react";
import {
  ButtonOne,
  ButtonTwo,
  ButtonThree,
  ButtonFour,
  ButtonFive,
  ButtonSix,
  FaceBookBtn,
  TwitterBtn,
  GithubBtn,
  GoogleBtn,
  PayPalBtn,
  MasterCardBtn,
} from "./index";

describe("Button Components", () => {
  test("ButtonOne should render correctly", () => {
    render(<ButtonOne />);
    const buttonElement = screen.getByText("Hello World!");
    expect(buttonElement).toBeInTheDocument();
  });

  test("ButtonTwo should render correctly", () => {
    render(<ButtonTwo />);
    const buttonElement = screen.getByText("Hello World!");
    expect(buttonElement).toBeInTheDocument();
  });

  test("ButtonThree should render correctly", () => {
    render(<ButtonThree />);
    const buttonElement = screen.getByText("Hello World!");
    expect(buttonElement).toBeInTheDocument();
  });

  test("ButtonFour should render correctly", () => {
    render(<ButtonFour />);
    const buttonElement = screen.getByText("Hello World!");
    expect(buttonElement).toBeInTheDocument();
  });

  test("ButtonFive should render correctly", () => {
    render(<ButtonFive />);
    const buttonElement = screen.getByText("Hello World!");
    expect(buttonElement).toBeInTheDocument();
  });

  test("ButtonSix should render correctly", () => {
    render(<ButtonSix />);
    const buttonElement = screen.getByText("Hello World!");
    expect(buttonElement).toBeInTheDocument();
  });

  test("FaceBookBtn should render correctly", () => {
    render(<FaceBookBtn />);
    const buttonElement = screen.getByTestId("facebook-button");
    expect(buttonElement).toBeInTheDocument();
  });

  test("TwitterBtn should render correctly", () => {
    render(<TwitterBtn />);
    const buttonElement = screen.getByTestId("twitter-button");
    expect(buttonElement).toBeInTheDocument();
  });

  test("GithubBtn should render correctly", () => {
    render(<GithubBtn />);
    const buttonElement = screen.getByTestId("github-button");
    expect(buttonElement).toBeInTheDocument();
  });

  test("GoogleBtn should render correctly", () => {
    render(<GoogleBtn />);
    const buttonElement = screen.getByTestId("google-button");
    expect(buttonElement).toBeInTheDocument();
  });

  test("PayPalBtn should render correctly", () => {
    render(<PayPalBtn />);
    const buttonElement = screen.getByTestId("paypal-button");
    expect(buttonElement).toBeInTheDocument();
  });

  test("MasterCardBtn should render correctly", () => {
    render(<MasterCardBtn />);
    const buttonElement = screen.getByTestId("mastercard-button");
    expect(buttonElement).toBeInTheDocument();
  });
});
