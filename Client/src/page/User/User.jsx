import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./User.css";
import Logo from "../../assets/img/coin+logo.png";
import NavProfile from "../../components/Nav/NavProfile";
import UserCard from "../../components/ProfileCard/ProfileCard";
import { useDispatch, useSelector } from "react-redux";
import { getUser, createUser } from "../../redux/reducers/cryptoRed";

import Footer from "../../components/Footer/Footer";

function User() {
  const { user } = useAuth0();
  const { usuarios } = useSelector((state) => state.crypto);
  const dispatch = useDispatch();

  let crear = {
    name: user.name,
    email: user.email,
    nickname: user.nickname,
    picture: user.picture,
    source: user.sub.toString(),
    blocked: user.blocked,
  };
  useEffect(() => {
    dispatch(getUser(user.email));

    dispatch(createUser(crear));
  }, [dispatch, user.email]);

  return (
    <div className="bg-global">
      <div>
        <div >
          {usuarios.blocked === true ? null : <NavProfile logo={Logo} />}
          <div id="User" className="row justify-content-center p-2">
            <UserCard user={user} className="col-12" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default User;
