<script>
    import { t, locale, locales } from '$lib/translations';
    import { page } from '$app/stores';
    import logo from '$lib/images/logo.svg';
    import Icon from '@iconify/svelte';

    let showMenu = false;

    const handleChange = ({ currentTarget }) => {
        const { value } = currentTarget;
        document.cookie = `lang=${value};`;
    };

    function toggleNavbar() {
        showMenu = !showMenu;
    }
</script>

<header>
    <div class="corner">
        <a href="/">
            <img src={logo} alt="SaurFort's Portfolio" />
        </a>
    </div>

    <nav class:responsive-show={showMenu}>
        <ul>
            <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
                <a href="/">{$t('common.navbar.home')}</a>
            </li>
            <li aria-current={$page.url.pathname.startsWith('/projects') ? 'page' : undefined}>
                <a href="/projects">{$t('common.navbar.projects')}</a>
            </li>
            <li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
                <a href="/about">{$t('common.navbar.about')}</a>
            </li>
        </ul>
        <select bind:value={$locale} on:change={handleChange}>
            {#each $locales as value}
                <option value="{value}" selected={$locale === value}>{$t(`lang.${value}`)}</option>
            {/each}
        </select>
    </nav>
    <button class="menu-toggle" on:click={toggleNavbar}>
        {#if showMenu}
            <Icon class="text-red-600 close w-6 h-6" icon="ic:round-close" />
        {:else}
            <Icon class="w-6 h-6" icon="humbleicons:bars" />
        {/if}
    </button>
</header>

<style lang="postcss">
    header {
        background-color: var(--theme-bg-1);
        display: flex;
        justify-content: space-between;
        padding-right: 1em;
        position: relative;
    }

    .corner {
        width: 3em;
        height: 3em;
    }

    .corner a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }

    .corner img {
        width: 2em;
        height: 2em;
        object-fit: contain;
    }

    nav {
        display: flex;
        justify-content: center;
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
    }

    li {
        position: relative;
        height: 100%;
    }

    li[aria-current='page']::after {
        --size: 3px;
        content: '';
        width: 0;
        height: 0;
        position: absolute;
        bottom: 10px;
        left: calc(15% - var(--size));
        border: var(--size) solid var(--theme-important-element);
        padding-left: 70%;
        @apply rounded-full;
    }

    nav a {
        display: flex;
        height: 100%;
        align-items: center;
        padding: 0 0.5rem;
        color: var(--theme-secondary-element);
        font-weight: 700;
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        text-decoration: none;
        transition: color 0.3s ease;
    }

    a:hover {
        color: var(--theme-important-element);
    }

    select {
        appearance: none;
        background-color: var(--theme-bg-1);
        color: var(--theme-secondary-element);
        font-weight: 700;
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        padding: 0.25em 0.5em 0.25em 0.5em;
        border: 2px solid transparent;
        @apply rounded;
        transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
        outline: none;
        cursor: pointer;
        position: relative;
    }

    select:hover {
        color: var(--theme-important-element);
        border-color: var(--theme-important-element);
        border: 2px solid;
    }

    select:hover::after {
        border-top-color: var(--theme-important-element);
    }

    select option {
        font-weight: 600;
        background-color: var(--theme-bg-1);
        color: var(--theme-secondary-element);
        text-transform: uppercase;
    }

    .menu-toggle {
        display: none;
        font-size: 1.5em;
        background: none;
        border: none;
        color: var(--theme-secondary-element);
        cursor: pointer;
    }

    @media (max-width: 768px) {
        nav {
            display: none;
            position: absolute;
            top: 100%;
            right: 0;
            background-color: var(--theme-bg-1);
            width: 100%;
            flex-direction: column;
            align-items: center;
            padding: 1em 0;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        }

        li[aria-current='page']::after {
            bottom: -4px;
        }

        .menu-toggle {
            display: block;
        }

        .responsive-show {
            display: flex;
        }

        ul {
            flex-direction: column;
            gap: 1em;
            height: auto;
        }

        select {
            margin-top: 1em;
        }
    }
</style>
