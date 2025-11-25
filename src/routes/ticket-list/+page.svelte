<script>
    import {
        SettingsIcon,
        PlayIcon,
        FastForwardIcon,
    } from "svelte-feather-icons";
    import { getLists, startList } from "$lib/api/dailyList";
    import { lists } from "../../store";

    const initLoad = async () => {
        await getLists();
    };

    $: if (true) {
        initLoad();
    }

    const startEvent = async (date) => {
        await startList(date);
    };
</script>

<svelte:head>
    <title>Ticket Buy List</title>
    <meta name="description" content="Get ticket url daily" />
</svelte:head>

<div class="content ticket_list">
    <div class="mini_setting">
        <div class="update_at">
            {#if $lists?.length > 0}
                Last Check: <span style="color: var(--blue); font-size: 24px">
                    {$lists[0]?.updatedAt.slice(0, -5).replace("T", " ")}
                </span>
            {:else}
                <span
                    >There is no data. Check resource or restart the check.</span
                >
            {/if}
        </div>
        <div class="buttons">
             <button class="new_icon_button" on:click={() => startEvent("v3_today")}>
                <PlayIcon />
            </button>
            <button class="new_icon_button" on:click={() => startEvent("v3_tmr")}>
                <FastForwardIcon />
            </button>
            <button class="icon_button" on:click={() => startEvent("today")}>
                <PlayIcon />
            </button>
            <button class="icon_button" on:click={() => startEvent("tmr")}>
                <FastForwardIcon />
            </button>
        </div>
    </div>
    <div class="ticket_content">
        <div class="table_content">
            {#if $lists?.length > 0}
                {#each $lists as item, key}
                    <div style="margin-bottom: 40px" {key}>
                        <span style="color: var(--blue); font-size: 16px"
                            >{item.sale_date}</span
                        >
                        <table>
                            <thead>
                                <th width="1%">#</th>
                                <th width="5%"> Commentary</th>
                                <th width="20%" data-key="artist"> Artist</th>
                                <th width="5%" data-key="public_date">
                                    Price</th
                                >
                                <th width="15%" data-key="venue"> Venue</th>
                                <th width="8%" data-key="venue"> Venue Cap</th>
                                <th width="10%" data-key="location">
                                    City,State</th
                                >
                                <th width="5%" data-key="event_date">
                                    Event Date</th
                                >
                                <th width="5%"> Password</th>
                                <th width="5%" data-key="public_date">
                                    Public Sale</th
                                >
                            </thead>
                            <tbody>
                                {#each item.ticket_data as row, index}
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td width="5%"> {row.commentary}</td>
                                        <td
                                            width="5%"
                                            style="padding-left: 10px"
                                        >
                                            <a
                                                href={row.event_url}
                                                target="_blank">{row.artist}</a
                                            ></td
                                        >
                                        <td width="5%"> {row.price}</td>
                                        <td width="20%"> {row.venue}</td>
                                        <td width="5%"> {row.venue_cap}</td>
                                        <td width="5%"> {row.location}</td>
                                        <td width="5%"> {row.event_date}</td>
                                        <td width="5%"> {row.password}</td>
                                        <td width="5%"> {row.public_date}</td>
                                    </tr>
                                {/each}
                            </tbody>
                        </table>
                    </div>
                {/each}
            {/if}
        </div>
    </div>
</div>

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

    .new_icon_button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 7px;
        margin-left: 10px;
        color: #eb33c0;
        border-radius: 8px;
        border-color: #eb33c0;
        border-style: solid;
    }
     .new_icon_button:hover {
        background-color: #eb33c0;
        color: white;
    }
    .new_icon_button:active {
        background-color: #eb33c0;
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
    table a {
        cursor: pointer;
    }
</style>
