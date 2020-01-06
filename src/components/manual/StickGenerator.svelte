<script>
    import { manualStick } from '../../game/producers/manual';
</script>

<div class="column is-4 box">
    <div class="level">
        <div class="level-item">
            <p class="icon is-medium {$manualStick.active ? 'has-text-success' : ''}">
                <i class="fas fa-staff fa-lg" />
            </p>
        </div>
        <div class="level-right">
            <div class="level-item buttons">
                <button class="button" on:click={() => manualStick.activate()}>
                    Gather Sticks
                </button>
                <button class="button is-danger" on:click={() => manualStick.deactivate()}>
                    Stop
                </button>
            </div>
        </div>
    </div>
</div>
