<script>
    import { newModalSoldOut } from "../../../store";
    import { page } from "$app/stores";
    import { newData } from "$lib/api/soldOutTracker";
    import { newData_eventAdd } from "$lib/api/eventAddTracker";
    let url, interval;

    const addNewEvent = async () => {
        event.preventDefault();
        let data = {
            url: url,
            interval: interval,
        };
        if ($page.routeId == "eventadd-track") {
            await newData_eventAdd(data).then(() => {
                newModalSoldOut.set(null);
            });
        } else {
            await newData(data).then(() => {
                newModalSoldOut.set(null);
            });
        }
    };
</script>

<div class="newModal">
    <h2>New Event</h2>
    <form on:submit={addNewEvent}>
        <div class="input_group">
            <label for="url">url:</label>
            <input name="url" type="text" bind:value={url} />
        </div>
        <div class="input_group">
            <label for="interval">interval:</label>
            <input name="interval" type="number" bind:value={interval} />
        </div>
        <div class="submit_button">
            <button type="submit">Submit</button>
        </div>
    </form>
</div>

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
