import { useParams } from 'react-router-dom';

function EventDetailsPage() {
  const params = useParams();

  return (
    <>
      <h1>Event Details Page</h1>
      <h3>Event ID: {params.id}</h3>
    </>
  );
}

export default EventDetailsPage;
