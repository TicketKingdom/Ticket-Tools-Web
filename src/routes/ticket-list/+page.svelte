<script>
    import { SettingsIcon, PlayIcon } from "svelte-feather-icons";
    import { getLists, startList } from "$lib/api/list";
    import { lists } from "../../store";

    const initLoad = async () => {
        await getLists();
    };

    $: if (true) {
        initLoad();
    }

    const startEvent = async () => {
        await startList();
    };
</script>

<svelte:head>
    <title>Ticket Buy List</title>
    <meta name="description" content="About this app" />
</svelte:head>

{#if $lists.length > 0}
    <div class="content ticket_list">
        <div class="mini_setting">
            <div class="update_at">
                Last Check: <span style="color: var(--blue); font-size: 24px">
                    {$lists[0]?.updatedAt.slice(0, -5).replace("T", " ")}
                </span>
            </div>
            <div class="buttons">
                <button class="icon_button">
                    <SettingsIcon />
                </button>
                <button class="icon_button" on:click={startEvent}>
                    <PlayIcon />
                </button>
            </div>
        </div>
        <div class="ticket_content">
            <div class="table_content">
                {#each $lists as item, key}
                    <div style="margin-bottom: 40px" {key}>
                        <span style="color: var(--blue); font-size: 16px"
                            >{item.sale_date}</span
                        >
                        <table>
                            <thead>
                                <th width="1%">#</th>
                                <th width="5%" data-key="artist"> Artist</th>
                                <th width="15%" data-key="venue"> Venue</th>
                                <th width="10%" data-key="location">
                                    City,State</th
                                >
                                <th width="5%" data-key="event_date">
                                    Event Date</th
                                >
                                <th width="5%"> Password</th>
                                <th
                                    width="5%"
                                    style="text-align: right;padding-right: 20px"
                                >
                                    Url</th
                                >
                            </thead>
                            <tbody>
                                {#each item.ticket_data as row, index}
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td
                                            width="5%"
                                            style="padding-left: 10px"
                                        >
                                            {row.artist}</td
                                        >
                                        <td width="20%"> {row.venue}</td>
                                        <td width="5%"> {row.location}</td>
                                        <td width="5%"> {row.event_date}</td>
                                        <td width="5%"> {row.password}</td>
                                        <td
                                            width="5%"
                                            style="text-align: right;padding-right: 20px"
                                        >
                                            <a href={row.event_url} target="_blank">Ticket</td
                                        >
                                    </tr>
                                {/each}
                            </tbody>
                        </table>
                    </div>
                {/each}
            </div>
        </div>
    </div>
{/if}

<style>
    .content {
        width: 100%;
        background-color: rgba(255, 255, 255, 0.3);
        border-radius: 20px;
        padding-left: 5px;
        padding-right: 5px;

        min-height: 65vh;
    }
    .mini_setting {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 20px;
        padding-left: 30px;
        padding-right: 30px;
    }
    .update_at {
        color: var(--primary);
        font-weight: 600;
        font-size: 18px;
    }

    .buttons {
        display: flex;
    }
    .icon_button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 7px;
        margin-left: 10px;
        color: #55cdf8;
        border-radius: 8px;
        border-color: #55cdf8;
        border-style: solid;
    }
    .icon_button:hover {
        background-color: #55cdf8;
        color: white;
    }
    .icon_button:active {
        background-color: #1bbdf8;
        color: grey;
    }
    .ticket_content {
        margin-top: 25px;
        padding-left: 15px;
        padding-right: 15px;
    }

    table {
        font-size: 12px;
        margin-top: 20px;
        border-collapse: collapse;
    }
    td,
    th {
        border: 1px solid var(--secondary-color);
        text-align: center;
        padding: 2px;
    }
    tr:nth-child(even) {
        background-color: var(--secondary-color);
    }
    table a{
        cursor: pointer;
    }
</style>
