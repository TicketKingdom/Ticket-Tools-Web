<script>
    import { onMount } from "svelte";

    export const prerender = true;

    // start soldout tracker for etix and ticketweb
    import { startAllDatas } from "$lib/api/soldOutTracker";
    import { souldoutTrackerSidebar, eventAddTrackerSidebar } from "../store";
    import { startAllDatasEA } from "$lib/api/eventAddTracker";

    onMount(async () => {
        souldoutTrackerSidebar.set("etix");
        await startAllDatas();
        souldoutTrackerSidebar.set("ticketweb");
        await startAllDatas();
        eventAddTrackerSidebar.set("ticketmaster");
        await startAllDatasEA();
        eventAddTrackerSidebar.set("axs");
        await startAllDatasEA();
    });
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Landing page(home)" />
</svelte:head>

<section>
    <h1>
        <span class="welcome">
            <picture>
                <source srcset="svelte-welcome.webp" type="image/webp" />
                <img src="svelte-welcome.png" alt="Welcome" />
            </picture>
        </span>
        Welcome to Ticket Tools.<br />
        You can get tickets from 8 web sites and can see results.
    </h1>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 1024px;
        flex: 1;
    }

    h1 {
        width: 100%;
        margin-top: 100px;
    }

    .welcome {
        display: block;
        position: relative;
        width: 100%;
        height: 0;
        padding: 0 0 calc(100% * 495 / 2048) 0;
    }

    .welcome img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        display: block;
    }
</style>
