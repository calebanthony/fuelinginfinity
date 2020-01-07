<script>
    import { stick } from '../../game/resources/stick';
    import { unlockRoughStones } from '../../game/triggers/unlockRoughStones';
</script>

<div class="column is-4 box">
    <div class="level">
        <div class="level-item">
            <span class="has-text-weight-bold">Cost:</span>
            <span class="icon is-medium">
                <i class="fas fa-staff fa-lg" />
            </span>
            <span>{unlockRoughStones.cost}</span>
        </div>
        <div class="level-right">
            <div class="level-item buttons">
                <button class="button" on:click={() => unlockRoughStones.run()}>
                    Wooden Pickaxe
                </button>
            </div>
        </div>
    </div>
</div>
