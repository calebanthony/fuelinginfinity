<script>
    import Tabs from '../components/Tabs/Tabs.svelte';
    import Tab from '../components/Tabs/Tab.svelte';
    import ResourcePanel from '../components/ResourcePanel.svelte';
    import Unlockable from '../components/Unlockable.svelte';

    import * as unlocks from 'game/unlocks';
    import { woodcutter } from 'game/producers/gatherers';

    import Manual from './Manual.svelte';
    import Gather from './Gather.svelte';
</script>

<svelte:head>
    <title>Fueling Infinity</title>
</svelte:head>

<main class="section">
    <div class="columns">
        <div class="column is-3">
            <ResourcePanel />
        </div>
        <div class="column is-9">
            <Tabs>
                <Tab label="Manual">
                    <Manual />
                </Tab>
                {#if $woodcutter.unlocked}
                    <Tab label="Gather">
                        <Gather />
                    </Tab>
                {/if}
            </Tabs>

            <hr />
            <h2 class="title is-2">Unlocks</h2>
            <div class="columns is-multiline">
                {#each Object.values(unlocks) as unlock}
                    <Unlockable {unlock} />
                {/each}
            </div>
        </div>
    </div>

</main>
