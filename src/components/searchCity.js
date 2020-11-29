import React from "react";
import "./searchCity.css";
import searchIcon from "../assets/search.svg";
export const SearchCity = (props) => {
  const { handleSubmit } = props;

  return (
    <form className={"form_content"} onSubmit={(event) => handleSubmit(event)}>
      <div className={"content_input"}>
        <input
          className="input_city"
          type="text"
          id="city"
          name="city"
          placeholder="Ingrese el nombre de la ciudad"
        />
        <button className={"button_submit"} type="submit" id="search">
          <img className={"icon_serach"} src={searchIcon} alt="search" />
        </button>
      </div>
    </form>
  );
};
