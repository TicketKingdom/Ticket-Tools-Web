<script>
    import {
        PlusIcon,
        PlayIcon,
        EditIcon,
        DeleteIcon,
    } from "svelte-feather-icons";
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

    let data = [
        {
            index: "0",
            url: "https://event.etix.com/ticket/online/performanceSale.do?specifiedYearMonth=true&performance_id=3101270&country=US&language=en&method=restoreToken",
            name: "BILLY STRINGS",
            date: "2022-08-12",
            result: 78,
            interval: 259200,
            notication: 5000,
            row: 1,
            added_date: "2022-08-15",
            last_check_date: "2022-08-12",
            cart_time: true,
            presale_pw: "",
        },
        {
            index: "1",
            url: "https://event.etix.com/ticket/online/performanceSale.do?specifiedYearMonth=true&performance_id=3101270&country=US&language=en&method=restoreToken",
            name: "BILLY STRINGS",
            date: "2022-08-12",
            result: 78,
            interval: 259200,
            notication: 5000,
            row: 1,
            added_date: "2022-08-15",
            last_check_date: "2022-08-12",
            cart_time: true,
            presale_pw: "",
        },
    ];
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
                <th width="5%" data-key="name">Event Name</th>
                <th width="15%">Url</th>
                <th width="5%" data-key="date">Date</th>
                <th width="3%" data-key="result">Result</th>
                <th width="5%">Interval</th>
                <th width="5%" data-key="notication">Notification</th>
                <th data-key="row">Row</th>
                <th width="5%" data-key="added_date">Added On</th>
                <th width="5%" data-key="last_check_date">Last Check</th>
                <th width="3%">Cart <br />Timer</th>
                <th data-key="presale_pw">Presale Password</th>
                <th>actions</th>
            </thead>
            <tbody>
                {#each $rows as row, index}
                    <tr>
                        <td>{index + 1}</td>
                        <td>{row.name}</td>
                        <td
                            style=" overflow: hidden;
                                    text-overflow: ellipsis; "
                            class="truncation_text"
                        >
                            {row.url}</td
                        >
                        <td>{row.date}</td>
                        <td>{row.result}</td>
                        <td>{row.interval}</td>
                        <td>{row.notication}</td>
                        <td>{row.row}</td>
                        <td>{row.added_date}</td>
                        <td>{row.last_check_date}</td>
                        <td>{row.cart_time}</td>
                        <td>{row.presale_pw}</td>
                        <td>
                            <PlayIcon size="1.5x" class="primary" />
                            <EditIcon size="1.5x" class="success" />
                            <DeleteIcon size="1.5x" class="danger" />
                        </td>
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

    tbody tr {
        text-align: center;
    }
</style>
