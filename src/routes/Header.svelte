<script lang="ts">
</script>

<header>
	<!-- Header with banner & nav buttons for modpacks / servers / TBD -->
	<div class="banner">
		<img src="/images/banner.png" alt="Banner" class="banner" />
	</div>
	<nav>
		<a href="/modpacks">Modpacks</a>
		<a href="/servers">Servers</a>
		<a href="/worlds">Worlds</a>
	</nav>
</header>

<style>
	header {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.banner {
		width: 100%;
		max-width: 1000px;
	}
	nav {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
	nav a {
		text-align: center;
		text-decoration: none;
		max-width: 10rem;
		width: 100%;
		background-color: #fff;
		border: 1px solid rgb(255, 255, 255);
		border-radius: 0.25rem;
		padding: 0.5rem 1rem;
		margin: 0.5rem;
		box-shadow: -0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 0.075);
		transition: all 0.2s ease-in-out;
	}
	nav a:hover {
		border: 1px solid rgb(255, 0, 0);
	}
	
</style>

