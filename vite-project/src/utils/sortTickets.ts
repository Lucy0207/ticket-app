import { Flight } from '../store/flights.slice';

export function sortTickets(arr: Flight[], filter: string): Flight[] {
  if (filter === 'cheap') {
    return [...arr].sort((a, b) => a.price - b.price);
  } else if (filter === 'fast') {
    return [...arr].sort((a, b) => {
      const durationA = a.segments.reduce((acc, segment) => acc + segment.duration, 0);
      const durationB = b.segments.reduce((acc, segment) => acc + segment.duration, 0);
      return durationA - durationB;
    });
  } else if (filter === 'optimum') {
    return [...arr].sort((a, b) => {
      const stopsA = a.segments.reduce((acc, segment) => acc + segment.stops.length, 0);
      const stopsB = b.segments.reduce((acc, segment) => acc + segment.stops.length, 0);
      return stopsA - stopsB;
    });
  } else {
    return arr;
  }
}
