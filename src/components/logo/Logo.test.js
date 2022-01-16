import React from "react";
import {render} from "@testing-library/react";
import Logo from "./Logo";

it("snapshot test", () => {
  const {asFragment} = render(<Logo/>)
  expect(asFragment()).toMatchSnapshot()
})
