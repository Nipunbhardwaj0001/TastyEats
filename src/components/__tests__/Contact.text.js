import Contact from "../Contact"
import { render,screen } from "@testing-library/react"
import "@testing-library/jest-dom";

test("should Load contact us component", () => {
    render(<Contact/>)  
    const heading = screen.getByRole("heading")
    expect(heading).toBeInTheDocument();
})

test("should Load Button inside contact component", () => {
    render(<Contact/>)  
    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument();
})