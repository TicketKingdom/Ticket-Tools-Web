<script>
    import { SettingsIcon, PlayIcon } from "svelte-feather-icons";
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
            <button class="icon_button">
                <PlayIcon />
            </button>
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
