import React from "react";
import {render} from "@testing-library/react";
import Button from "./Button";

it("render test", () => {
  const {getByText} = render(<Button name="Submit" submit={true} size="large" color="grey-red"/>)
  expect(getByText(/submit/i)).toBeInTheDocument
})
