import React, { useState } from "react";
import { connect } from "react-redux";

const CreateFarm = () => {
  const [creationDate, setCreationDate] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");

  const handleChange = (e) => {
    if ((e.target.name = "desc")) {
      setDescription(e.target.value);
    }
    if ((e.target.name = "name")) {
      setName(e.target.value);
    }
  };

  const handleCreation = () => {
    const crD = new Date().toString();
    console.log(name, description);
    fetch("http://localhost:8080/v1/farms/", {
      method: "POST",
      body:
        '{"CreationDate":' +
        crD +
        ', "UserId": {"Id": ' +
        1 +
        '}, "Name": "' +
        name +
        '", "Description": "' +
        description +
        '"}',
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => console.log(res));
  };

  return (
    <div onChange={handleChange}>
      <div>
        <div> description</div>
        <input name="desc"></input>
      </div>
      <div>
        <div> name</div>
        <input name="name"></input>
      </div>
      <button onClick={handleCreation}>Submit</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(CreateFarm);
