import { useParams } from 'react-router-dom';

function EditEventPage() {
  const params = useParams();

  return (
    <>
      <h1>Edit Event</h1>
      <h2>{params.id}</h2>
    </>
  );
}

export default EditEventPage;
