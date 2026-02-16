import { Suspense } from 'react';
import { useRouteLoaderData, redirect, Await } from 'react-router-dom';

import EventItem from '../components/EventItem';
import EventsList from '../components/EventsList';

function EventDetailsPage() {
  const { event, events } = useRouteLoaderData('event-details');

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: 'center' }}></p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>

      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export default EventDetailsPage;

async function loadEvent(id) {
  const response = await fetch('http://localhost:8080/events/' + id);

  if (!response.ok) {
    throw new Response(
      JSON.stringify({
        message: 'Could not fetch details for selected event.',
      }),
      { status: 500 },
    );
  } else {
    const resData = await response.json();
    return resData.event;
  }
}

async function loadEvents() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // return { isError: true, message: 'Error: Could not fetch events.' };
    throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
      status: 500,
    }); // makes use of the nearest errorElement in router
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

export async function loader({ request, params }) {
  const id = params.id;

  return {
    event: await loadEvent(id), //await => wait for data before moving to page
    events: loadEvents(), // no await => load data after moving to page
  };
}

export async function action({ params, request }) {
  const id = params.id;
  const response = await fetch('http://localhost:8080/events/' + id, {
    method: request.method,
  });

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: 'Could not delete this event.' }),
      { status: 500 },
    );
  }

  return redirect('/events');
}
