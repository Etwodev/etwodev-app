import { render, screen } from "@testing-library/react";
import { App } from "../App";
import { AppTexts } from "../utils/constants";
import React from "react";

describe("App.tsx", () => {
  describe("when the app is running", () => {
    it("renders correctly", async () => {
      render(<App />);
      expect(screen.getByText(AppTexts.headerText)).toBeInTheDocument();
    });
  });
});
