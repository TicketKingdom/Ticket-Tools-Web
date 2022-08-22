<script>
    import Select from "svelte-select";
    import Switch from "$lib/common/Switch.svelte";
    import TicketContent from "$lib/TicketContent/index.svelte";

    import etrix from "../../assets/site-logos/etrix.png";
    import eventbrite from "../../assets/site-logos/eventbrite.png";
    import frontgate from "../../assets/site-logos/frontgate.png";
    import seetickets from "../../assets/site-logos/seetickets.png";
    import showclix from "../../assets/site-logos/showclix.png";
    import ticketweb from "../../assets/site-logos/ticketweb.png";
    import prekindle from "../../assets/site-logos/prekindle.png";
    import bigtickets from "../../assets/site-logos/bigtickets.svg";

    import { SettingsIcon, PlayIcon } from "svelte-feather-icons";

    let active_leftSidebar = "etrix";

    let items = [
        { value: "capmonster", label: "Capmonster" },
        { value: "anticaptcha", label: "AntiCaptcha" },
    ];

    let value = { value: "capmonster", label: "Capmonster" };

    let sliderValue;

    const clickTab = (value) => {
        active_leftSidebar = value;
    };
    const handleSelect = (event) => {
        console.log("selected item", event.detail);
    };
</script>

<svelte:head>
    <title>Release-check</title>
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
            <li
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
            </li>
        </ul>
    </div>
    <div class="right_content">
        <div class="mini_setting">
            <div style="min-width: 250px" class="captcha">
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
            </div>
            <div class="buttons">
                <button class="icon_button">
                    <SettingsIcon />
                </button>
                <button class="icon_button">
                    <PlayIcon />
                </button>
            </div>
        </div>
        <TicketContent site_name={active_leftSidebar} />
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
        justify-content: space-between;
        align-items: center;
    }
    .right_content .mini_setting .captcha {
        --itemHoverBG: #55cdf8;
        --itemIsActiveBG: #55cdf8;
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
</style>
