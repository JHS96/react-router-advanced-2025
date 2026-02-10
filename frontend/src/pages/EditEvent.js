import { useParams } from 'react-router-dom';

function EditEventPage() {
  const params = useParams();

  return <h1>{params.id}</h1>;
}

export default EditEventPage;
