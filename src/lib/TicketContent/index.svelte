<script>
    import {
        PlusIcon,
        PlayIcon,
        EditIcon,
        DeleteIcon,
    } from "svelte-feather-icons";
    import { Datatable, rows } from "$lib/common/SimpleDatatables";
    import isEmpty from "../../utils/is-empty";
    import {
        deleteData,
        startEtix,
    } from "$lib/api/soldOutTracker";

    import {
        editModalSoldOut,
        newModalSoldOut,
    } from "../../store";

    import Modal from "svelte-simple-modal";
    import OwnModal from "$lib/common/OwnModal.svelte";

    import NewModal from "./modal/NewModal.svelte";
    import EditModal from "./modal/EditModal.svelte";

    export let data = [];
    // export let site_name = "";
    // console.log(site_name)

    const editModalOpen = (id) => {
        editModalSoldOut.set(id);
    };

    const startEventCheck = async (id) => {
        await startEtix(id);
    };

    const deleteEvent = async (id) => {
        if (window.confirm("Do you really want to delete this event?")) {
            await deleteData(id);
        }
    };

    const openNewModal = () => {
        newModalSoldOut.set(NewModal);
    };

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
</script>

<div>
    <div class="new_ticket">
        <Modal show={$newModalSoldOut}>
            <button on:click={openNewModal}>
                <PlusIcon /><span>New</span>
            </button>
        </Modal>
    </div>
    <div class="table_content">
        <Datatable {settings} {data}>
            <thead>
                <th width="5%"> # </th>
                <th width="5%" data-key="eventName"> Event Name</th>
                <th width="20%" data-key="url"> Url</th>
                <th width="5%"> Result</th>
                <th width="5%"> Interval</th>
                <th width="5%" data-key="createdAt"> Added On</th>
                <th width="5%" data-key="updatedAt"> Last Check</th>
                <th width="5%">Actions </th>
            </thead>
            <tbody>
                {#each $rows as row, index}
                    <tr>
                        <td>{index + 1}</td>
                        <td>{row.eventName}</td>
                        <td
                            style=" overflow: hidden;
                                    text-overflow: ellipsis; "
                            class="truncation_text"
                        >
                            {row.url}</td
                        >
                        <td
                            >{!isEmpty(row.result)
                                ? JSON.parse(row.result).length
                                : ""}</td
                        >
                        <td>{row.interval}</td>
                        <td>{row.createdAt.slice(0, -5).replace("T", " ")}</td>
                        <td>{row.updatedAt.slice(0, -5).replace("T", " ")}</td>
                        <td>
                            <span on:click={startEventCheck(row._id)}>
                                <PlayIcon size="1.5x" class="primary" />
                            </span>
                            <span on:click={editModalOpen(row._id)}>
                                <EditIcon size="1.5x" class="success" />
                            </span>
                            <span on:click={() => deleteEvent(row._id)}>
                                <DeleteIcon size="1.5x" class="danger" />
                            </span>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </Datatable>
    </div>

    {#if $editModalSoldOut}
        <OwnModal modalContent={EditModal} />
    {/if}
</div>

<style>
    /* .ticket_content {
        margin-top: 20px;
    } */
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
