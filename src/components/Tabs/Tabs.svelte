<script>
    import { setContext, getContext, onMount, onDestroy, createEventDispatcher } from 'svelte';
    import { get, writable } from 'svelte/store';
    import { energy } from 'game/resources';

    const dispatch = createEventDispatcher();

    /** Index of the active tab (zero-based)
     * @svelte-prop {Number} [value=0]
     * */
    export let value = 0;

    let activeTab = 0;
    $: changeTab(value);

    const tabs = writable([]);

    const tabConfig = { activeTab, tabs };

    setContext('tabs', tabConfig);

    // This only runs as tabs are added/removed
    const unsubscribe = tabs.subscribe(ts => {
        if (ts.length > 0 && ts.length > value - 1) {
            ts.forEach(t => t.deactivate());
            if (ts[value]) ts[value].activate();
        }
    });

    function changeTab(tabNumber) {
        const ts = get(tabs);
        // NOTE: change this back to using changeTab instead of activate/deactivate once transitions/animations are working
        if (ts[activeTab]) ts[activeTab].deactivate();
        if (ts[tabNumber]) ts[tabNumber].activate();
        // ts.forEach(t => t.changeTab({ from: activeTab, to: tabNumber }))
        activeTab = tabConfig.activeTab = tabNumber;
        dispatch('activeTabChanged', tabNumber);
    }

    onMount(() => {
        /**
         * 0 = Manual
         * 1 = Energy
         * 2 = Gather
         * 3 = Process
         */
        changeTab(3);
    });

    onDestroy(() => {
        unsubscribe();
    });
</script>

<style lang="scss">
    .tabs-wrapper {
        margin-bottom: 5rem;
    }

    .tabs-wrapper .tab-content {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }
</style>

<div class="tabs-wrapper is-fullwidth">
    <div class="tabs is-boxed">
        <ul>
            {#each $tabs as tab, index}
                <li class:is-active={index === activeTab}>
                    <a href on:click|preventDefault={() => changeTab(index)}>
                        {#if tab.label === 'Energy'}
                            <span>{$energy.count.toLocaleString()} {tab.label}</span>
                        {:else}
                            <span>{tab.label}</span>
                        {/if}
                    </a>
                </li>
            {/each}
        </ul>
    </div>
    <section class="tab-content">
        <slot />
    </section>
</div>
