<script>
    import { stick } from '../game/resources/stick';
</script>

<nav class="panel">
    <p class="panel-heading">Resources</p>
    <div class="panel-block">
        <p class="control has-icons-left">
            <input class="input" type="text" placeholder="Filter" />
            <span class="icon is-left">
                <i class="fas fa-sack" aria-hidden="true" />
            </span>
        </p>
    </div>
    <div class="panel-block columns">
        <div class="column is-2">
            <span class="icon">
                <i class="fas fa-staff" aria-hidden="true" />
            </span>
        </div>
        <div class="column is-6">Sticks</div>
        <div class="column is-4">{$stick.count}</div>
    </div>
</nav>
