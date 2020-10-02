<script>
    export let producer;
    import { tickDuration } from 'game/config';

    const ticksPerSecond = 1000 / tickDuration;
    const perSecond = (ticksPerSecond / producer.tickInterval).toLocaleString();
</script>

{#if $producer.unlocked}
    <div class="column is-4 box">
        <div class="level">
            <div class="level-left">
                <div class="level-item">
                    <span class="icon is-medium">
                        <i class="fas fa-{producer.icon} fa-fw" />
                    </span>
                    <span>{producer.name}</span>
                </div>
            </div>
            <div class="level-right">
                <div class="level-item">{perSecond}/s</div>
            </div>
        </div>
    </div>
{/if}
