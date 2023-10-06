<script>
    import { editModalSoldOut } from "../../../store";

    import { updateEtix, getEtixById } from "$lib/api/soldOutTracker";
    import { onMount } from "svelte";

    let url, eventName, interval, data;

    onMount(async () => {
        data = await getEtixById($editModalSoldOut);
        url = data.url;
        eventName = data.eventName;
        interval = data.interval;
    });

    const updateEvent = async () => {
        event.preventDefault();
        let data = {
            id: $editModalSoldOut,
            eventName: eventName,
            url: url,
            interval: interval,
        };
        await updateEtix(data).then(() => {
            editModalSoldOut.set(null);
        });
    };
</script>

{#if data}
    <div class="newModal">
        <h2>Edit Event</h2>
        <form on:submit={updateEvent}>
            <div class="input_group">
                <label for="eventName">EventName:</label>
                <input name="eventName" type="text" bind:value={eventName} />
            </div>
            <div class="input_group">
                <label for="url">Url:</label>
                <input name="url" type="text" bind:value={url} />
            </div>
            <div class="input_group">
                <label for="interval">Interval:</label>
                <input name="interval" type="number" bind:value={interval} />
            </div>
            <div class="submit_button">
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
{/if}

<style>
    h2 {
        text-align: center;
        font-size: 28px;
    }
    .newModal {
        font-size: 20px;
        padding-top: 10px;
        padding-bottom: 30px;
    }
    form {
        width: 100%;
    }
    form .input_group {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 16px;
    }
    form input {
        width: 80%;
        border-radius: 6px;
        height: 25px;
        border-color: var(--grey);
        outline-color: var(--blue);
    }
    .submit_button {
        display: flex;
        justify-content: center;
        margin-top: 30px;
    }
    .submit_button button {
        width: 100%;
        background-color: var(--blue);
        border-radius: 6px;
        border: none;
        color: white;
        padding-top: 5px;
        padding-bottom: 5px;
    }
</style>
