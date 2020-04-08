<script>
    import Unlock from './craft/Unlock.svelte';
    import { unlocks } from '../game/unlocks';
</script>

{#each Object.values(unlocks) as unlock}
    <Unlock {unlock} />
{/each}
