import React from "react";
import EventItem from "./EventItem";

const EventList = ({ events }) => {
  return (
    <ul>
      {events.map((event) => (
        <EventItem event={event} />
      ))}
    </ul>
  );
};

export default EventList;
