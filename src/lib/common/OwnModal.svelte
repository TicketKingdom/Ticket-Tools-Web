<script>
    import { editModalSoldOut } from "./../../store.js";
    export let modalContent;
    import { Minimize2Icon } from "svelte-feather-icons";
</script>

<div on:click|self class="modal">
    <div class="content">
        <div class="close" on:click={() => editModalSoldOut.set(null)}>
            <Minimize2Icon />
        </div>
        <svelte:component this={modalContent} on:click />
    </div>
</div>

<style>
    .modal {
        background-color: rgba(0, 0, 0, 0.4);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 999999999999999999999999999;
    }

    .content {
        background-color: white;
        width: 600px;
        padding: 20px;
        border-radius: 12px;
    }
    .close {
        float: right;
    }
</style>
