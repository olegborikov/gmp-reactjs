import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import Search from "./Search";
import {navigateToSearch} from "../../common";

jest.mock("react-router-dom", () => {
  return {
    __esModule: true,
    useNavigate: jest.fn(),
    useSearchParams: jest.fn(() => [{}]),
    useParams: jest.fn(() => ({
      searchQuery: ""
    }))
  }
})

jest.mock("../../common");

it("search test", () => {
  const {asFragment} = render(<Search/>)
  expect(asFragment()).toMatchSnapshot()

  fireEvent.change(screen.getByRole("textbox"), {
    target: {value: "Movie name"}
  })
  expect(screen.getByDisplayValue("Movie name")).toBeInTheDocument

  fireEvent.click(screen.getByRole("button"))

  expect(navigateToSearch).toHaveBeenCalled()
})
