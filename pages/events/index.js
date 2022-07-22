import { useRouter } from "next/router";
import React from "react";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/events-search";
import { getAllEvents } from "../../dummy_data";

const AllEvents = () => {
  const events = getAllEvents()
  const router = useRouter()
  const findEventsHandler=(year,month)=>{
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath)
  }
  return (
    <>
      <EventsSearch onSearch={findEventsHandler}/>
      <EventList events={events} />
    </>)
};

export default AllEvents;
