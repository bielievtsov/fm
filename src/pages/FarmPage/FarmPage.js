import React, { useState, useEffect } from "react";
import queryString from "query-string";
import { withRouter, Redirect } from "react-router-dom";
import ProductItem from "../../components/ProductItem/ProductItem";

const FarmPage = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("new Date()");
  const [products, setProducts] = useState([]);
  const [isRedirect, setIsRedirect] = useState(false);

  queryString.parse(props.location.search);

  useEffect(() => {
    const Id = props.location.state.farm.Id;

    fetch("http://localhost:8080/v1/farms/" + Id)
      .then((resopse) => resopse.json())
      .then((data) => {
        const { Name, Description, CreationDate } = data;
        setName(Name);
        setDescription(Description);
        setDate(CreationDate);
      });
  });

  useEffect(() => {
    const Id = props.location.state.farm.Id;

    fetch("http://localhost:8080/v1/products/?query=farmId%3A" + Id)
      .then((resopse) => resopse.json())
      .then((data) => {
        setProducts(data || []);
      });
  }, []);

  const handleRedirect = () => {
    setIsRedirect(!isRedirect);
  };

  if (isRedirect) {
    return (
      <Redirect
        to={{
          pathname: `/profile/farm/:${props.location.state.farm.Id}/stats`,
          state: { farm: props.location.state.farm },
        }}
      ></Redirect>
    );
  } else {
    return (
      <div>
        <div>Name : {name}</div>
        <div>Description : {description}</div>
        <div>
          Date of farm creation :{" "}
          {new Date(date).getFullYear() +
            " month " +
            new Date(date).getMonth() +
            " day " +
            new Date(date).getDate()}
        </div>
        <button onClick={handleRedirect}>Statistics</button>
        <div>
          {products.map((product) => {
            return (
              <ProductItem product={product} key={product.Id}></ProductItem>
            );
          })}
        </div>
      </div>
    );
  }
};

export default withRouter(FarmPage);
