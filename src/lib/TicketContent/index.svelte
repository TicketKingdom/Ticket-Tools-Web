<script>
    import { PlusIcon } from "svelte-feather-icons";
    import { Datatable, rows } from "$lib/common/SimpleDatatables";

    export let site_name = "";

    console.log(site_name);

    const settings = {
        pagination: true,
        rowsPerPage: 25,
        columnFilter: false,
        searchInput: false,
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

    let data = [{index:"0"}, {index:"1"}];
</script>

<div class="ticket_content">
    <div class="new_ticket">
        <button>
            <PlusIcon /><span>New</span>
        </button>
    </div>
    <div class="table_content">
        <Datatable {settings} {data}>
            <thead>
                <th width="3%" data-key="index">#</th>
                <th width="5%">Event Name</th>
                <th width="20%">Url</th>
                <th width="5%">Date</th>
                <th width="10%">Result</th>
                <th width="5%">Interval</th>
                <th width="5%">Notification</th>
                <th width="5%">Row</th>
                <th width="5%">Added On</th>
                <th width="5%">Last Check</th>
                <th width="5%">Cart Timer</th>
                <th width="10%">Presale Password</th>
            </thead>
            <tbody>
                {#each $rows as row, index}
                    <tr>
                        <td>{index + 1}</td>
                        <td>{index + 1}</td>
                    </tr>
                {/each}
            </tbody>
        </Datatable>
    </div>
</div>

<style>
    .ticket_content {
        margin-top: 20px;
    }

    .new_ticket {
        display: flex;
        justify-content: flex-end;
    }
    .new_ticket button {
        width: 94px;
        color: #fff;
        background-color: #28a745;
        border-color: #28a745;
        border-style: solid;
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        border-radius: 0.25rem;
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
            border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

        display: flex;
        align-items: center;
        justify-content: center;
    }
    .new_ticket button:hover {
        background-color: #218838;
        border-color: #1e7e34;
    }

    .table_content {
        margin-top: 20px;
    }

    thead {
        border-radius: 1px solid grey;
    }
    th {
        text-align: left;
        font-size: 14px;
        color: grey;
        cursor: pointer;
    }
    td {
        text-align: left;
        padding: 4px 0;
    }
</style>
