import {render, screen} from "@testing-library/react"
import '@testing-library/jest-dom'
import Form from "./Form";

describe("Testando o formulário", () => {
   
    it("should render form", () => {
        render(<Form />)
        
        const element = screen.getByTestId('form-element')

        expect(element).toBeInTheDocument()
    })

    it("should render apresentation", () => {
        render(<Form />)

        const apresentation = screen.getByTestId('apresentation-element')

        expect(apresentation).toBeInTheDocument()
    })
})
