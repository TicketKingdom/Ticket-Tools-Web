<script>
  import Select from 'svelte-select';
  import Switch from '$lib/common/Switch.svelte';
  import Modal from 'svelte-simple-modal';

  import { getCounter, startCounter } from '$lib/api/counter';

  import {
    SettingsIcon,
    PlayIcon,
    PlusIcon,
    DeleteIcon,
    EditIcon,
  } from 'svelte-feather-icons';

  import { editModalCounter, newModalCounter, counters } from '../../store';

  import NewModal from './modal/NewModal.svelte';
  import EditModal from './modal/EditModal.svelte';

  const initLoad = async () => {
    await getCounter();
  };

  $: if (true) {
    initLoad();
  }

  let items = [
    { value: 'capmonster', label: 'Capmonster' },
    { value: 'anticaptcha', label: 'AntiCaptcha' },
  ];

  let value = { value: 'capmonster', label: 'Capmonster' };

  let sliderValue;

  const handleSelect = (event) => {
    console.log('selected item', event.detail);
  };
  const openNewModal = () => {
    newModalCounter.set(NewModal);
  };
  const editModalOpen = (id) => {
    editModalCounter.set(id);
  };

  const startEventCheck = async (id) => {
    await startCounter(id);
  };

  const deleteEvent = async (id) => {
    // if (window.confirm("Do you really want to delete this event?")) {
    //     await deleteEtix(id);
    // }
  };

  const startAllEvent = async () => {
    // if (!isEmpty(localStorage.getItem("etix"))) {
    //     localStorage.setItem("etix", !etix_status);
    //     etix_status = !etix_status;
    // } else {
    //     localStorage.setItem("etix", true);
    //     etix_status = true;
    // }
    // if (etix_status) {
    //     await startAllEtix();
    // } else {
    //     await stopAllEtix();
    // }
  };

  $: console.log($counters);
</script>

<svelte:head>
  <title>Release-Checker</title>
  <meta name="description" content="Release checker" />
</svelte:head>

<div class="content">
  <div class="right_content">
    <div class="mini_setting">
      <div style="min-width: 250px" class="captcha">
        <Select
          {items}
          {value}
          on:select={handleSelect}
          inputStyles="font-size: 16px;"
        />
      </div>
      <div style="margin-left: 20px; display: flex">
        <Switch
          bind:value={sliderValue}
          label="Proxy: "
          fontSize={16}
          design="slider"
        />
      </div>
      <div class="buttons">
        <button class="icon_button">
          <SettingsIcon />
        </button>
        <Modal show={$newModalCounter}>
          <button class="icon_button" on:click={openNewModal}>
            <PlusIcon />
          </button>
        </Modal>
        <button class="icon_button">
          <PlayIcon />
        </button>
      </div>
    </div>
    {#if $counters?.length > 0}
      <table class="table">
        <thead>
          <tr>
            <td width="2%">#</td>
            <td width="25%">Name</td>
            <td>Url</td>
            <td width="3%">Result</td>
            <td width="3%">Interval</td>
            <td width="3%">Presale</td>
            <td width="3%">Notification</td>
            <td width="10%">Add-on</td>
            <td width="10%">Last check</td>
            <td width="8%">Actions</td>
          </tr>
        </thead>
        <tbody>
          {#each $counters as item, key}
            <tr>
              <td>{key + 1}</td>
              <td>{item.eventName}</td>
              <td>{item.url}</td>
              <td>{item.result ? item.result : 0}</td>
              <td>{item.interval}</td>
              <td>{item.presale ? item.presale : ''}</td>
              <td>{item.notify_amount}</td>
              <td>{item.createdAt.slice(0, -5).replace('T', ' ')}</td>
              <td>{item.updatedAt.slice(0, -5).replace('T', ' ')}</td>
              <td>
                <span on:click={startEventCheck(item._id)}>
                  <PlayIcon size="1.5x" class="primary" />
                </span>
                <span on:click={editModalOpen(item._id)}>
                  <EditIcon size="1.5x" class="success" />
                </span>
                <span on:click={() => deleteEvent(item._id)}>
                  <DeleteIcon size="1.5x" class="danger" />
                </span>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    {/if}
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

  .right_content {
    width: 100%;
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
    width: 35px;
    height: 35px;
  }
  .icon_button:hover {
    background-color: #55cdf8;
    color: white;
  }
  .icon_button:active {
    background-color: #1bbdf8;
    color: grey;
  }

  table {
    font-size: 12px;
    margin-top: 20px;
    border-collapse: collapse;
    width: 100%;
    border-radius: 12px;
  }
  td,
  th {
    border: 1px solid var(--secondary-color);
    text-align: center;
    padding: 2px;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  tr:nth-child(even) {
    background-color: var(--secondary-color);
  }
  table a {
    cursor: pointer;
  }
</style>
