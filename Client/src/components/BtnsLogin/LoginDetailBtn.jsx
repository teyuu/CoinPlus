import React from "react";
import "./loginbtn.css";
import { Link } from "react-router-dom";
import { createUser, getUser } from "../../redux/reducers/cryptoRed";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { FormattedMessage } from "react-intl";

export default function LoginDetailBtn() {
  const { user, isLoading } = useAuth0();
  const dispatch = useDispatch();

  if (isLoading) {
    return <div>Cargando ...</div>;
  }

  function HandleCreate(e) {
    let crear = {
      name: user.name,
      email: user.email,
      nickname: user.nickname,
      picture: user.picture,
      source: user.sub.toString(),
      blocked: user.blocked,
    };
    dispatch(getUser(user.email));

    dispatch(createUser(crear));
  }

  return (
    <Link to="/user" style={{ textDecoration: "none" }}>
      <button className="buttonLogin" onClick={(e) => HandleCreate(e)}>
        <FormattedMessage
          id='Perfil'
          defaultMessage='Profile'
        />
        <div className="arrow-wrapper">
          <div className="arrow"></div>
        </div>
      </button>
    </Link>
  );
}
