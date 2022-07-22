import { useRouter } from "next/router";
import React from "react";
import EventError from "../../components/events/event-error";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/results-title";
import { getFilteredEvents } from "../../dummy_data";

const FilteredEvents = () => {
  const {
    query: { slug },
  } = useRouter();
  if (!slug) return <p>Loading</p>;
  const [year, month] = slug;
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
    return <EventError text='Invalid filter. Please adjust your values'></EventError>;
  }
  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });
  if (filteredEvents.length === 0) {
    return (
      <EventError text="No events found for the chosen filter"/>
    );
  }
  if (!filteredEvents) {
    return <p className="center">Loading</p>;
  }
  const date = new Date(numYear, numMonth - 1);
  return (
    <>
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </>
  );
};

export default FilteredEvents;
