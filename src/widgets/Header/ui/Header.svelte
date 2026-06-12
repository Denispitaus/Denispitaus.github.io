<script>
  import { page } from '$app/state';
  import Button from '$shared/Button';
  import H3 from '$shared/H3';
  import Paragraf from '$shared/Paragraf';
  import Link from '$shared/Link';
  import { navItems } from '$entities/LinkData';

  let widthWindow = $state(0);
  let isOpenBurger = $state(false);
</script>

<svelte:window bind:innerWidth={widthWindow} />

<header class="header">
  <div class="name-block">
    <H3 text="Денис Баскаков" />
    <Paragraf text="Frontend developer" />
  </div>
  {#if widthWindow<= 500}
    <div>
      <button class='button-line' onclick={()=>{isOpenBurger = !isOpenBurger}}>
        <div class="line-btn"></div>
        <div class="line-btn"></div>
        <div class="line-btn"></div>
      </button>
    </div>

  {:else}
  <nav>
    {#each navItems as item}
      <Link
        text={item.text}
        href={item.href}
        style={page.url.pathname === item.href ? 'nav-link-active' : 'nav-link'}
      />
    {/each}
  </nav>
  {/if}
    {#if isOpenBurger & widthWindow <= 500}
      <div class="openBurger">
        {#each navItems as item}
          <Link
            text={item.text}
            href={item.href}
            style={page.url.pathname === item.href ? 'nav-link-active' : 'nav-link'}
          />
        {/each}
      </div>
    {/if}
</header>

<style>
.line-btn{
  width: 10px;
  height: 2px;
  background-color: var(--background);
  border-radius: 5px;
}
.button-line{
  padding: 10px 15px;
  background-color: var(--primary);
  color: var(--primary-foreground);
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.7em;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  gap: 1px;
}
.button-line:hover{
  background-color:rgb(47, 47, 47);
}
.button-line:active{
  background-color:rgb(94, 94, 94);
}
.openBurger{
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: absolute;
  width: 100px;
  gap: 20px;
  background-color: rgba(232, 232, 232, 0.595);
  border-radius: 15px;
  top: 60px;
  right: 5px;
  padding: 20px 10px;
  align-items: center;
  border: 1px solid var(--border);
}
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
@media(max-width: 400px){
    .openBurger{
      padding: 10px 5px;
      gap: 10px;
  }
}
</style>
