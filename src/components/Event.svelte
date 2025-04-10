<script lang="ts">
    import type { Event } from "../models";
    import moment from "moment";
    export let event: Event;

    const getDatetime = (date: string) => {
        return moment(date).format('ddd h:mm A')
    };
</script>
  
<div class="event-item">
    <img
        class="event-image"
        src={event.image}
        alt={event.title}
    />
    <section class="event-details">
        <p class="event-time">{getDatetime(event.time.start.local)} - {getDatetime(event.time.end.local)}</p>
        <p class="event-title">{event.title}</p>
    </section>
</div>

<style>
    .event-image {
        max-width: min(80%, 500px);
    }
    .event-item {
        font-family: Rubik;
        border: 1px solid grey;
        padding: 2rem;
        margin: 1rem;
        border-radius: 10px;
    }

    .event-details {
        margin-top: 1em;
    }

    .event-time {
        font-size: 18px;
        font-weight: 700;
    }

    .event-title {
        font-size: 36px;
        font-weight: 700;
    }
</style>
