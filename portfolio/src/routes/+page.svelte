<script>
    import { t, locale } from '$lib/translations';
    import profilePicture from '$lib/images/removed.png'

    export async function load({ fetch }) {
        const response = await fetch(`/api/projects?limit=3&lang=${$locale}`);

        if(!response.ok) {
            console.error('Error fetching projects:', response.statusText);
            return { projects: [] }
        }

        const projects = await response.json();
        console.log('Projects:', projects);

        return { projects };
    }

    let birthday = new Date(2008, 5, 10)

    function calculateAge(birthDate) {
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();

        const monthDiff = today.getMonth() - birthDate.getMonth;
        if(monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;
    }
</script>

<svelte:head>
    <title>{$t('home.head.title')}</title>
</svelte:head>

<div class="text-center">
    <h1>{$t('home.body.welcome.title')}</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-90% ml-auto mr-auto items-center">
        <div class="md:col-span-1">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img class="rounded-100 ml-auto mr-auto w-32 h-32 object-cover" src={ profilePicture } alt="SaurFort's profile picture" />
            <h3>Nathan Toumoulin<br/>allias SaurFort</h3>
        </div>
        <div class="md:col-span-2">
            <h2>{$t('home.body.presentation.title')}</h2>
            <p class="text-xl leading-8 font-medium">{$t('home.body.presentation.biography').replace(":age:", calculateAge(birthday))}</p>
            <a class="text-lg button" href="/about">{$t('common.navbar.about')}</a>
        </div>
    </div>
    <div class="mt-24">
        <h2>{$t('home.body.project.title')}</h2>
        <div class="grid grid-cols-3 gap-8 ml-auto mr-auto">
            {#if projects && projects.length > 0}
                {#each projects as project}
                    <div>
                        <h4>{project.name}</h4>
                    </div>
                {/each}
            {:else}
                <p>{$t('error.projects.not-found')}</p>
            {/if}
        </div>
    </div>
</div>