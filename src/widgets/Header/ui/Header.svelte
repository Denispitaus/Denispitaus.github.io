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
  <nav class="nav-block">
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
  box-shadow: 0 1px 15px 0 var(--border);

}
.name-block{
  display: flex;
  flex-direction: column;
}
@media(max-width: 680px){
    .header{
      padding: 5px 0px;
  }
}
@media(max-width: 900px){
    .header{
      background-color: var(--background);
      position: sticky;
      top: 0;
      padding: 10px 20px;
      display: flex;
      justify-content: space-between;
      align-items: start;
      border-bottom: 1px solid var(--border);
      flex-direction: column;
      gap: 10px;
}
.nav-block{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
}
@media(max-width: 425px){
    .header{
      padding: 5px 15px;
  }
}
@media(max-width: 475px){
    .header{
      padding: 5px 5px;
  }
}
</style>
