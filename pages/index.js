import React from 'react'
import EventList from '../components/events/EventList'
import { getFeaturedEvents } from '../dummy_data'

const FeaturedEvents = () => {
  const featured_events = getFeaturedEvents()
  return (
    <div>
      <EventList events={featured_events} />
    </div>
  )
}

export default FeaturedEvents