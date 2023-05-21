import React, { useState } from "react";
import {
  Dropdown,
  DropdownWithIcon,
  DropdownWithSearch,
  DropdownOnHover,
} from "./index";

export const DropdownDefault = () => (
  <Dropdown options={["Option 1", "Option 2", "Option 3"]} />
);

export const DropdownWithIconDefault = () => (
  <DropdownWithIcon options={["Option 1", "Option 2", "Option 3"]} />
);

export const DropdownWithSearchDefault = () => (
  <DropdownWithSearch
    options={[
      "India",
      "United States",
      "United Kingdom",
      "Australia",
      "Canada",
      "France",
      "Germany",
      "Italy",
      "Japan",
      "Russia",
    ]}
  />
);

export const DropdownOnHoverDefault = () => (
  <DropdownOnHover options={["Option 1", "Option 2", "Option 3"]} />
);
