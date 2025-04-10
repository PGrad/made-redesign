import events from '../data/events.json';
import type { EventsList } from '../models';

const events_list: EventsList = events;

export const load = (() => {
  return {
    events_list
  };
})
