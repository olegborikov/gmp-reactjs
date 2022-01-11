import React, {useEffect} from "react";
import classes from "./ParametersDropdown.module.css";
import {SORT_TYPES} from "../../../constants";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import {navigateToSearch} from "../../../common";

function ParametersDropdown() {
  const navigate = useNavigate();
  let [searchParams] = useSearchParams();
  const {searchQuery} = useParams();
  const parameter = searchParams.get("sortBy")?.toUpperCase().replaceAll("_", " ")

  const changeParameter = (newParameter) => {
    searchParams.set("sortBy", newParameter.toLowerCase().replaceAll(" ", "_"));
    navigateToSearch(navigate, searchQuery, searchParams)
  }

  useEffect(() => {
    if (!SORT_TYPES.includes(parameter)) {
      changeParameter("VOTE AVERAGE")
    }
  })

  return (
    <div className={classes.dropdown}>
      <select className={classes.select} onChange={(e) => changeParameter(e.target?.value)}>
        {
          SORT_TYPES.map(p => <option key={SORT_TYPES.indexOf(p)} selected={parameter === p}>{p}</option>)
        }
      </select>
    </div>
  );
}

export default ParametersDropdown
