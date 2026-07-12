<script>
  import { page } from '$app/state';
  import Button from '$shared/Button';
  import H3 from '$shared/H3';
  import Paragraf from '$shared/Paragraf';
  import { navItems } from '$entities/LinkData';

  let widthWindow = $state(0);
  let isOpenBurger = $state(false);
  let {
    onclick
  } = $props()
</script>

<svelte:window bind:innerWidth={widthWindow} />

<header class="header">
  <div class="name-block">
    <H3 text="Denispitaus" />
    <Paragraf text="Frontend developer" />
  </div>
  <nav>
    {#each navItems as item}
      <Button
        text={item.text}
        onclick={() => onclick(item.href)}
        style={'nav-link'}
      />
    {/each}
  </nav>
</header>

<style>

.header{
  background-color: var(--background);
  position: sticky;
  top: 0;
  padding: 10px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--border);
}
.name-block{
  display: flex;
  flex-direction: column;
}
@media(max-width: 680px){
    .header{
      padding: 10px 20px;
  }
}
</style>
