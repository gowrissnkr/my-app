import React from "react";
import { render } from "@testing-library/react";
import CheckBox from "../Components/CheckBox";

describe("CheckBox Component", () => {
    const mockProps = {
        id: "1",
        value: "example",
        label: "Example Label",
        handleChange: jest.fn(),
        category: "exampleCategory",
    };

    const { getByText, getByRole } = render(<CheckBox {...mockProps} />);

    expect(getByText("Example Label")).toBeInTheDocument();

    const checkbox = getByRole("checkbox");
    expect(checkbox).toHaveAttribute("value", "example");
    expect(checkbox).toHaveAttribute("name", "exampleCategory");
})
