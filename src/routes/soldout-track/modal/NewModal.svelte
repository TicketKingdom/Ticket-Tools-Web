<script lang="ts">
    import API from "../../../utils/api";
    let baseUrl = "http://127.0.0.1:8037/api";

    let url = "https://www.etix.com/ticket/v/3556/coyote-joes",
        interval = 5000;

    const addNewEvent = async (e) => {
        event.preventDefault();
        let data = {
            url: url,
            interval: interval,
        };

        await API.post(baseUrl + "/etix/new", data).then((res) => {
            console.log(res.data);
        });
    };
</script>

<div class="newModal">
    <h1>New Event</h1>
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
