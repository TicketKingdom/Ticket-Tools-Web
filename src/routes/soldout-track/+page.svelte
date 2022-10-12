<script>
    import Select from "svelte-select";
    import {
        PlusIcon,
        PlayIcon,
        EditIcon,
        DeleteIcon,
        SettingsIcon,
    } from "svelte-feather-icons";
    import Modal from "svelte-simple-modal";

    import Switch from "$lib/common/Switch.svelte";
    import TicketContent from "$lib/TicketContent/index.svelte";
    import NewModal from "./modal/NewModal.svelte";

    import { Datatable, rows } from "$lib/common/SimpleDatatables";
    import { newModalSoldOut } from "../../store";

    import etrix from "../../assets/site-logos/etrix.png";
    import eventbrite from "../../assets/site-logos/eventbrite.png";
    import frontgate from "../../assets/site-logos/frontgate.png";
    import seetickets from "../../assets/site-logos/seetickets.png";
    import showclix from "../../assets/site-logos/showclix.png";
    import ticketweb from "../../assets/site-logos/ticketweb.png";
    import prekindle from "../../assets/site-logos/prekindle.png";
    import bigtickets from "../../assets/site-logos/bigtickets.svg";

    let active_leftSidebar = "etrix";

    // let items = [
    //     { value: "capmonster", label: "Capmonster" },
    //     { value: "anticaptcha", label: "AntiCaptcha" },
    // ];

    // let value = { value: "capmonster", label: "Capmonster" };

    // let sliderValue;

    // const handleSelect = (event) => {
    //     console.log("selected item", event.detail);
    // };

    const clickTab = (value) => {
        active_leftSidebar = value;
    };

    const settings = {
        pagination: true,
        rowsPerPage: 25,
        columnFilter: false,
        searchInput: false,
        sortable: true,
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

    const data = [];

    const openNewModal = () => {
        newModalSoldOut.set(NewModal);
    };
</script>

<svelte:head>
    <title>Release-Checker</title>
    <meta name="description" content="About this app" />
</svelte:head>

<div class="content">
    <div class="left_sidebar">
        <ul>
            <li
                class={active_leftSidebar === "etrix" ? "active" : ""}
                on:click={() => clickTab("etrix")}
            >
                <img src={etrix} alt="site-logo" />
                <p>Etrix</p>
            </li>
            <!-- <li
                class={active_leftSidebar === "eventbrite" ? "active" : ""}
                on:click={() => clickTab("eventbrite")}
            >
                <img src={eventbrite} alt="site-logo" />
                <p>Eventbrite</p>
            </li>
            <li
                class={active_leftSidebar === "bigtickets" ? "active" : ""}
                on:click={() => clickTab("bigtickets")}
            >
                <img src={bigtickets} alt="site-logo" />
                <p>BigTicket</p>
            </li>
            <li
                class={active_leftSidebar === "frontgate" ? "active" : ""}
                on:click={() => clickTab("frontgate")}
            >
                <img src={frontgate} alt="site-logo" />
                <p>FrontGate</p>
            </li>
            <li
                class={active_leftSidebar === "ticketweb" ? "active" : ""}
                on:click={() => clickTab("ticketweb")}
            >
                <img src={ticketweb} alt="site-logo" />
                <p>TicketWeb</p>
            </li>
            <li
                class={active_leftSidebar === "seetickets" ? "active" : ""}
                on:click={() => clickTab("seetickets")}
            >
                <img src={seetickets} alt="site-logo" />
                <p>SeeTickets</p>
            </li>
            <li
                class={active_leftSidebar === "showclix" ? "active" : ""}
                on:click={() => clickTab("showclix")}
            >
                <img src={showclix} alt="site-logo" />
                <p>ShowClix</p>
            </li>
            <li
                class={active_leftSidebar === "prekindle" ? "active" : ""}
                on:click={() => clickTab("prekindle")}
            >
                <img src={prekindle} alt="site-logo" />
                <p>Prekindle</p>
            </li> -->
        </ul>
    </div>
    <div class="right_content">
        <div class="mini_setting">
            <!-- <div style="min-width: 250px" class="captcha">
                <Select
                    {items}
                    {value}
                    on:select={handleSelect}
                    inputStyles="font-size: 18px;"
                />
            </div>
            <div style="margin-left: 20px; display: flex">
                <Switch
                    bind:value={sliderValue}
                    label="Proxy: "
                    fontSize={18}
                    design="slider"
                />
                {#if active_leftSidebar === "etrix"}
                    <Switch
                        bind:value={sliderValue}
                        label="Decrease: "
                        fontSize={18}
                        design="slider"
                    />
                {/if}
            </div> -->
            <div class="buttons" style="float:right">
                <button class="icon_button">
                    <SettingsIcon />
                </button>
                <button class="icon_button">
                    <PlayIcon />
                </button>
            </div>
        </div>

        <div class="ticket_content">
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
                        <th width="5%" data-key="index"> # </th>
                        <th width="5%" data-key="name"> Event Name</th>
                        <th width="20%"> Url</th>
                        <th width="5%" data-key="result"> Result</th>
                        <th width="5%"> Interval</th>
                        <th width="5%" data-key="added_date"> Added On</th>
                        <th width="5%" data-key="last_check_date">
                            Last Check</th
                        >
                        <th>Actions </th>
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
    </div>
</div>

<style>
    .content {
        width: 100%;
        background-color: rgba(255, 255, 255, 0.3);
        border-radius: 20px;
        padding-left: 5px;
        padding-right: 5px;

        display: flex;
        min-height: 65vh;
    }
    .left_sidebar {
        width: 20%;
        padding-right: 20px;
        padding: 20px;
        padding-left: 0px;
        min-width: 280px;
    }
    .left_sidebar li {
        list-style: none;
        font-size: 22px;
        padding-top: 10px;
        padding-bottom: 10px;
        margin-top: 4px;
        margin-bottom: 4px;
        cursor: pointer;
        color: var (--heading-color);
        padding-left: 15px;

        display: flex;
        align-items: center;
    }
    .left_sidebar ul {
        padding-left: 15px;
    }
    .left_sidebar li:hover {
        background-color: #55cdf8;
        border-radius: 8px;
    }
    .left_sidebar li.active {
        background-color: #55cdf8;
        border-radius: 8px;
    }
    .left_sidebar li img {
        width: 25px;
        height: 25px;
    }
    .left_sidebar li p {
        margin-left: 7px;
        margin-top: 0px;
        margin-bottom: 0px;
    }
    .left_sidebar li:hover p,
    .left_sidebar li.active p {
        color: white;
    }

    .right_content {
        width: 80%;
        border-left: 2px solid #ccc;
        padding: 20px;
    }

    .right_content .mini_setting {
        display: flex;
        /* justify-content: space-between; */
        justify-content: flex-end;
        align-items: center;
        margin-bottom: 20px;
    }
    /* .right_content .mini_setting .captcha {
        --itemHoverBG: #55cdf8;
        --itemIsActiveBG: #55cdf8;
    } */

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

    .new_ticket {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 10px;
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
</style>
