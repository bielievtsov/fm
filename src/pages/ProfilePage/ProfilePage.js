import React, { useState, useEffect } from "react";
import { withRouter, Redirect } from "react-router-dom";
import FarmItem from "../../components/FarmItem/FarmItem";
import { Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./ProfilePage.module.css";

const ProfilePage = ({ strings }) => {
  const [name, setName] = useState("");
  const [sname, setSName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState(0);
  const [farms, setFarms] = useState([]);
  const [isRedirect, setIsRedirect] = useState(false);
  const [isRedirectCreate, setIsRedirectCreate] = useState(false);

  const handleRedirect = () => {
    setIsRedirect(!isRedirect);
  };

  const filter = (id) => {
    let farmss = farms.filter((el) => el.Id !== id);
    setFarms(farmss);
  };
  useEffect(() => {
    fetch(
      `http://localhost:8080/v1/users/${
        JSON.parse(localStorage.getItem("user")).Id
      }`
    )
      .then((data) => data.json())
      .then((data) => {
        const { Email, FirstName, SecondName, Phone, Id } = data;
        setEmail(Email);
        setName(FirstName);
        setSName(SecondName);
        setPhone(Phone);
        setUserId(Id);
      });
  }, []);

  useEffect(() => {
    fetch(
      `http://localhost:8080/v1/farms/?query=UserId%3A${
        JSON.parse(localStorage.getItem("user")).Id
      }`
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        data.filter((el) => (el.UserId.Id = userId));
        setFarms(data);
      });
  }, []);

  if (isRedirectCreate) {
    return <Redirect to={{ pathname: `/farm/create/` }}></Redirect>;
  } else if (isRedirect) {
    return <Redirect to={{ pathname: `/farm/create/` }}></Redirect>;
  } else {
    return (
      <Container className={styles.main}>
        <Row style={{ marginTop: 50, marginBottom: 100 }}>
          <Col>
            {strings.userName}: <span>{name}</span> <span>{sname}</span>
          </Col>
          <Col>
            {strings.userPhone}: <span>{phone}</span>
          </Col>
          <Col>
            {strings.email}: <span>{email}</span>
          </Col>
        </Row>
        <Container>
          <Button
            variant="primary"
            style={{ marginLeft: 500, marginBottom: 20 }}
            onClick={handleRedirect}
          >
            {strings.createFarm}
          </Button>
        </Container>
        <Container className={styles.list}>
          {farms.map((el) => {
            return (
              <FarmItem
                farm={el}
                key={el.Id}
                farms={farms}
                filter={filter}
                strings={strings}
              ></FarmItem>
            );
          })}
        </Container>
      </Container>
    );
  }
};

export default withRouter(ProfilePage);
