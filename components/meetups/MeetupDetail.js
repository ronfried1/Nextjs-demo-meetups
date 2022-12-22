import React from "react";
import classes from "./MeetupDetail.module.css";

function MeetuoDetail(props) {
  return (
    <section className={classes.detail}>
      <img  src={props.image} alt={props.detail} />
      <h1>{props.title}</h1>
      <address> {props.address}</address>
      <p>{props.description}</p>
    </section>
  );
}

export default MeetuoDetail;
