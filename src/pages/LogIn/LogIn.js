import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };
  const setCookie = (name, value) => {
    deleteAllCookies();
    document.cookie = `${name}=${value};max-age=${3600}`;
  };

  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    var bodyData = {
      Email: email,
      Password: password,
    };
    fetch("http://localhost:8080/v1/login", {
      method: "POST",
      body: JSON.stringify(bodyData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data);
        setCookie("user", data.Id);
        console.log(getCookie("user"));
      });
  };

  return (
    <div>
      <form onChange={handleFormChange}>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="type in your email"
            className="form-control form-control"
          />
        </div>
        <div>
          <label>Passowrd</label>
          <input
            type="text"
            name="password"
            placeholder="enter your password"
            className="form-control form-control"
          />
        </div>
        <div>
          <label>Submit</label>
          <input
            type="submit"
            className="form-control form-control"
            onClick={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
