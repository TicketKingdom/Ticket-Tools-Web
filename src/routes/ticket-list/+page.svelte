<script>
    import { SettingsIcon, PlayIcon } from "svelte-feather-icons";
    import { Datatable, rows } from "$lib/common/SimpleDatatables";
    import { getLists, startList } from "$lib/api/list";

    const initLoad = async () => {
        await getLists();
    };

    $: if (true) {
        initLoad();
    }

    const settings = {
        pagination: true,
        rowsPerPage: 20,
        columnFilter: false,
        searchInput: true,
        sortable: true,
        screenX: false,
        labels: {
            noRows: "No entries to found",
            previous: "<",
            next: ">",
        },
        blocks: {
            searchInput: false,
            paginationRowCount: false,
        },
    };

    const data = {};

    const startEvent = async () => {
        await startList();
    };
</script>

<svelte:head>
    <title>Ticket Buy List</title>
    <meta name="description" content="About this app" />
</svelte:head>

<div class="content">
    <div class="mini_setting">
        <div class="update_at">Last Check:</div>
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
            <Datatable {settings} {data}>
                <thead>
                    <th width="5%"> # </th>
                    <th width="5%"> Artist</th>
                    <th width="20%"> Venue</th>
                    <th width="5%"> City,State</th>
                    <th width="5%"> Event Date</th>
                    <th width="5%"> Password</th>
                    <th width="5%"> Clipboard</th>
                </thead>
                <tbody>
                    {#each $rows as row, index}
                        <tr> Hello </tr>
                    {/each}
                </tbody>
            </Datatable>
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
        font-size: 24px;
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
        margin-top: 50px;
        padding-left: 15px;
        padding-right: 15px;
    }
</style>
