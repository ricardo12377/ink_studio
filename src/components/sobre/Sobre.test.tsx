import {render, screen} from "@testing-library/react"
import '@testing-library/jest-dom'
import Sobre from "./Sobre";

describe("Navbar component", () => {
   
    it("Render Navbar", () => {
        render(<Sobre h1="Presamos pela higiene e segurança" p="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi numquam rem excepturi quam tempore aspernatur mollitia digni
        ssimos deserunt illum id eveniet, voluptatum"/> )

        const children = screen.getByTestId('sobre-component')

        expect(children).toBeInTheDocument()
    })
})