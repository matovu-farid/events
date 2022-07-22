import React from "react";
import EventList from "../../components/events/EventList";
import { getAllEvents } from "../../dummy_data";

const AllEvents = () => {
  const events = getAllEvents()
  return (
    <div>
      <EventList events={events} />
    </div>)
};

export default AllEvents;
