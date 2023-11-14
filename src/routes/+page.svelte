<script>
    /* @type { import('./$houdini').PageData } */
    export let data
    
    $: ({ Info } = data)

    $: console.log(JSON.stringify($Info));
</script>

<div style="display: flex">
    <div style="flex: 1">
        <!-- This function call would have to somehow target "first". -->
        <button on:click={() => Info.loadPreviousPage()}>
            Prev
        </button>

        <ul>
            {#each $Info.data.first.edges ?? [] as pokemon}
                <li>{pokemon.node.id} - {pokemon.node.name}</li>
            {/each}
        </ul>

        <!-- This function call would have to somehow target "first". -->
        <button on:click={() => Info.loadNextPage()}>
            Next
        </button>
    </div>
    <div style="flex: 1">
        <!-- This function call would have to somehow target "second". -->
        <button on:click={() => Info.loadPreviousPage()}>
            Prev
        </button>

        <ul>
            {#each $Info.data.second.edges ?? [] as pokemon}
                <li>{pokemon.node.id} - {pokemon.node.name}</li>
            {/each}
        </ul>

        <!-- This function call would have to somehow target "second". -->
        <button on:click={() => Info.loadNextPage()}>
            Next
        </button>
    </div>
    <div style="flex: 1">
        <!-- This function call would have to somehow target "fragment". -->
        <button on:click={() => Info.loadPreviousPage()}>
            Prev
        </button>

        <ul>
            {#each $Info.data.fragment.edges ?? [] as pokemon}
                <li>{pokemon.node.id} - {pokemon.node.name}</li>
            {/each}
        </ul>

        <!-- This function call would have to somehow target "fragment". -->
        <button on:click={() => Info.loadNextPage()}>
            Next
        </button>
    </div>
</div>
