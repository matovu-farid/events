import React from "react";
import {useRouter} from 'next/router'
import { getEventById } from "../../dummy_data";
import EventSummary from '../../components/event-detail/event-summary'
import EventLogistics from '../../components/event-detail/event-logistics'
import EventContent from '../../components/event-detail/event-content'
const EventsDetails = () => {
  const router = useRouter();
  const { id } = router.query
  const event = getEventById(id)
  if(!event){
    return <p>No event found!</p>
  }
  return (
    <>
    <EventSummary title={event.title} />
    <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title}/>
    <EventContent>
      <p>{event.description}</p>
    </EventContent>
    </>
  );
};

export default EventsDetails;
