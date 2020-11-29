import React from "react";
import "./searchCity.css";
import searchIcon from "../assets/search.svg";
export const SearchCity = (props) => {
  const { handleSubmit, error, onChangeError } = props;

  return (
    <form className={"form_content"} onSubmit={(event) => handleSubmit(event)}>
      <div className={"content_input"}>
        <input
          onChange={() => onChangeError()}
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
      {error.isError && (
        <div className="content_error">
          <p className="text_error"> {error.message} </p>
        </div>
      )}
    </form>
  );
};
