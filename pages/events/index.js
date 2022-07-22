import React from "react";
import { getAllEvents } from "../../dummy_data";

const AllEvents = () => {
  const events = getAllEvents()
  return (
    <div>
      <EventList events={events} />
    </div>)
};

export default AllEvents;
