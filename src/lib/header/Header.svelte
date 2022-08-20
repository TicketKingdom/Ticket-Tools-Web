<script>
    import { page } from "$app/stores";
    import logo from "../../assets/logo.jpg";
</script>

<header>
    <div class="corner">
        <a href="/">
            <img src={logo} alt="SvelteKit" />
            <h2><b>T</b>ickets <b>C</b>hecker</h2>
        </a>
    </div>

    <nav>
        <svg viewBox="0 0 2 3" aria-hidden="true">
            <path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
        </svg>
        <ul>
            <li class:active={$page.url.pathname === "/"}>
                <a sveltekit:prefetch href="/">Home</a>
            </li>
            <li class:active={$page.url.pathname === "/release-check"}>
                <a sveltekit:prefetch href="/release-check">Release-Checker</a>
            </li>
            <li class:active={$page.url.pathname === "/x-check"}>
                <a sveltekit:prefetch href="/x-check">X-Checker</a>
            </li>
        </ul>
        <svg viewBox="0 0 2 3" aria-hidden="true">
            <path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
        </svg>
    </nav>
</header>

<style>
    header {
        display: flex;
        justify-content: space-between;
		width: 100%;
    }

    .corner a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }
    .corner h2 {
        font-size: 2em;
        color: var(--blue);
    }
	.corner h2 b{
		font-size: 1.2em;
	}

    .corner img {
        margin-left: 20px;
        width: 3em;
        height: 3em;
        object-fit: contain;
		margin-right: 10px;
    }

    nav {
        display: flex;
        justify-content: center;
        --background: rgba(255, 255, 255, 0.7);
    }

    svg {
        width: 2em;
        height: 3em;
        display: block;
    }

    path {
        fill: var(--background);
    }

    ul {
        position: relative;
        padding: 0;
        margin: 0;
        height: 3em;
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        background-size: contain;
		background-color: var(--background);
    }

    li {
        position: relative;
        height: 100%;
    }

    li.active::before {
        --size: 10px;
        content: "";
        width: 0;
        height: 0;
        position: absolute;
        top: 0;
        left: calc(50% - var(--size));
        border: var(--size) solid transparent;
        border-top: var(--size) solid var(--blue);
    }

    nav a {
        display: flex;
        height: 100%;
        align-items: center;
        padding: 0 1em;
        color: var(--heading-color);
        font-weight: 700;
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        text-decoration: none;
        transition: color 0.2s linear;
    }

    a:hover {
        text-decoration: none;
    }
</style>
