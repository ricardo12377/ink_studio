import {render, screen} from "@testing-library/react"
import '@testing-library/jest-dom'
import Navbar from "./Navbar";

describe("Navbar component", () => {
   
    it("Render Navbar", () => {
        render(<Navbar home='Home' jobs='Jobs' contato='Contate-nos' /> )

        const children = screen.getByTestId('navbar-component')

        expect(children).toBeInTheDocument()
    })
})