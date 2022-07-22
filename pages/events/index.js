import React from "react";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/events-search";
import { getAllEvents } from "../../dummy_data";

const AllEvents = () => {
  const events = getAllEvents()
  return (
    <>
      <EventsSearch/>
      <EventList events={events} />
    </>)
};

export default AllEvents;
