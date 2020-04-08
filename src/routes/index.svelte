<script>
    // Import components
    import ResourcePanel from '../components/ResourcePanel.svelte';
    import ManualStickGenerator from '../components/manual/StickGenerator.svelte';
    import Craft from '../components/Craft.svelte';
</script>

<svelte:head>
    <title>Fueling Infinity</title>
</svelte:head>

<div class="columns">
    <div class="column is-3">
        <ResourcePanel />
    </div>
    <div class="column is-9">
        <h2 class="title is-2">Produce</h2>
        <div class="columns is-multiline">
            <ManualStickGenerator />
        </div>

        <hr />
        <h2 class="title is-2">Craft</h2>
        <div class="columns is-multiline">
            <Craft />
        </div>
    </div>
</div>
