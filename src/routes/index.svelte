<script>
    // Import components
    import ResourcePanel from '../components/ResourcePanel.svelte';
    import ManualStickGenerator from '../components/manual/StickGenerator.svelte';
</script>

<svelte:head>
    <title>Fueling Infinity</title>
</svelte:head>

<div class="columns">
    <div class="column is-3">
        <ResourcePanel />
    </div>
    <div class="column is-9">
        <div class="columns is-multiline">
            <ManualStickGenerator />
        </div>
    </div>
</div>
