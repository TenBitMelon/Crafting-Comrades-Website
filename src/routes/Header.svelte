<header>
	<!-- Header with banner & nav buttons for modpacks / servers / TBD -->
	<div class="banner">
		<img src="/images/banner.png" alt="Banner" class="banner" />
	</div>
	<nav>
		<a href="/modpacks">Booty</a>
		<a href="/worlds">Seven Seas</a>
		<a href="/map">Treasure Map</a>
		<a href="/about">Crew</a>
		<a href="/tmp-files">Ship's Log</a>
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
		background-color: #2e2b27;
		border: 2px solid rgb(65, 61, 51);
		border-radius: 0.25rem;
		padding: 0.5rem 1rem;
		margin: 0.5rem;
		box-shadow: -0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 0.075);
		transition: all 0.2s ease-in-out;
		color: #ffd700;
	}
	nav a:hover {
		border: 2px solid var(--color-theme-1);
	}
</style>
