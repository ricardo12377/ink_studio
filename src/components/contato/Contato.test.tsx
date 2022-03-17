import {render, screen} from "@testing-library/react"
import '@testing-library/jest-dom'
import Contato from "./Contato";

describe("Navbar component", () => {
   
    it("Render Navbar", () => {
        render(<Contato twitter="twitter" linkedin="linkedin" youtube="youtube" instagram="instagram" /> )

        const children = screen.getByTestId('contato-component')

        expect(children).toBeInTheDocument()
    })
})