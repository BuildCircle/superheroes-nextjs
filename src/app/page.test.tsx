import { render, screen } from "@testing-library/react";
import Home from "./page";

test("renders the hero and villain labels", () => {
  render(<Home />);
  const heroLabel = screen.getByText(/Hero/i);
  const villainLabel = screen.getByText(/Villain/i);

  expect(heroLabel).toBeInTheDocument();
  expect(villainLabel).toBeInTheDocument();
});
