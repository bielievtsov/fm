import React, { useState, useEffect } from "react";
import queryString from "query-string";
import { withRouter, Redirect } from "react-router-dom";
import ProductItem from "../../components/ProductItem/ProductItem";
import styles from "./FarmPage.module.css";

const FarmPage = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("new Date()");
  const [products, setProducts] = useState([]);
  const [isRedirect, setIsRedirect] = useState(false);
  const [isRedirectCreateProduct, setIsRedirectProduct] = useState(false);

  queryString.parse(props.location.search);

  const { strings } = props;

  useEffect(() => {
    const Id = props.location.state.farm.Id;

    fetch("http://localhost:8080/v1/farms/" + Id)
      .then((resopse) => resopse.json())
      .then((data) => {
        const { Name, Description, CreationDate } = data;
        console.log(data);
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

  const handleRedirectCreateProduct = () => {
    setIsRedirectProduct(!isRedirectCreateProduct);
  };

  const filter = (id) => {
    let pr = products.filter((el) => el.Id !== id);
    setProducts(pr);
  };

  if (isRedirectCreateProduct) {
    return (
      <Redirect
        to={{
          pathname: "/product/create/",
          state: { farm: props.location.state.farm },
        }}
      ></Redirect>
    );
  } else if (isRedirect) {
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
        <div className={styles.header}>
          <div>
            {strings.Name} : {name}
          </div>
          <div>
            {strings.Description} : {description}
          </div>
          <div>
            {strings.farmDate} :{" "}
            {new Date(date).getFullYear() +
              " month " +
              new Date(date).getMonth() +
              " day " +
              new Date(date).getDate()}
          </div>
        </div>
        <div className={styles.buttons}>
          <button onClick={handleRedirect}>{strings.statistics}</button>
          <button onClick={handleRedirectCreateProduct}>
            {strings.creteNewProduct}
          </button>
        </div>
        <div className={styles.main}>
          {products.map((product) => {
            return (
              <ProductItem
                strings={strings}
                product={product}
                key={product.Id}
                filter={filter}
              ></ProductItem>
            );
          })}
        </div>
      </div>
    );
  }
};

export default withRouter(FarmPage);
