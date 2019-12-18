<script>
	export let segment;
</script>

<nav class="navbar">
    <div class="navbar-brand">
        <a href="." class="navbar-item {segment === undefined ? 'is-active' : ''}">
            Home
        </a>
    </div>
</nav>
