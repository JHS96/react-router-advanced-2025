import EventsList from '../components/EventsList';

const events = [
  {
    id: 'e1',
    image: '',
    title: 'Awesome Event 1',
    date: new Date('2022-03-25').toDateString(),
  },
  {
    id: 'e2',
    image: '',
    title: 'Awesome Event 2',
    date: new Date('2025-04-26').toDateString(),
  },
  {
    id: 'e3',
    image: '',
    title: 'Awesome Event 3',
    date: new Date('2025-06-21').toDateString(),
  },
  {
    id: 'e4',
    image: '',
    title: 'Awesome Event 4',
    date: new Date('2026-09-07').toDateString(),
  },
];

function EventsPage() {
  return <EventsList events={events} />;
}

export default EventsPage;
