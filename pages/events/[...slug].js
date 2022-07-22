import { useRouter } from "next/router";
import React from "react";
import EventList from "../../components/events/EventList";
import { getFilteredEvents } from "../../dummy_data";

const FilteredEvents = () => {
  const {
    query: {
      slug: [year, month],
    },
  } = useRouter();
  const numYear = +year;
  const numMonth = +month;
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p>Invalid filter. Please adjust your values</p>;
  }
  const filteredEvents = getFilteredEvents({year:numYear,month:numMonth});
  if(filteredEvents.length === 0){
    return <p className="center">No events found for the chosen filter</p>
  }
  if (!filteredEvents) {
    return <p className="center">Loading</p>;
  }
  return (
    <div>
      <EventList events={filteredEvents} />
    </div>
  );
};

export default FilteredEvents;
