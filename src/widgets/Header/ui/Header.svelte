<script>
  import Button from '$shared/Button';
  import H3 from '$shared/H3';
  import Paragraf from '$shared/Paragraf';
  import { navItems } from '$entities/LinkData';

  let widthWindow = $state(0);
  let isOpenBurger = $state(false);

  let { onclick } = $props();

  function handleNavigation(href) {
    isOpenBurger = false;
    onclick(href);
  }

  function toggleBurger() {
    isOpenBurger = !isOpenBurger;
  }
</script>

<svelte:window bind:innerWidth={widthWindow} />

<header class="header">
  <section class="name-block">
    <H3 text="Denispitaus" />
    <Paragraf text="Frontend developer" />
  </section>

  {#if widthWindow > 920}
    <nav class="nav-block" aria-label="Основная навигация">
      {#each navItems as item}
        <Button
          text={item.text}
          onclick={() => handleNavigation(item.href)}
          style="nav-link"
        />
      {/each}
    </nav>
  {:else}
    <button
      class="burger"
      type="button"
      aria-label={isOpenBurger ? 'Закрыть меню' : 'Открыть меню'}
      aria-expanded={isOpenBurger}
      aria-controls="mobile-navigation"
      onclick={toggleBurger}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  {/if}

  {#if widthWindow <= 920 && isOpenBurger}
    <nav
      id="mobile-navigation"
      class="mobile-navigation"
      aria-label="Мобильная навигация"
    >
      {#each navItems as item}
        <Button
          text={item.text}
          onclick={() => handleNavigation(item.href)}
          style="mobile-nav-link"
        />
      {/each}
    </nav>
  {/if}
</header>

<style>
  .header {
    position: sticky;
    top: 0;
    z-index: 100;
    display: flex;
    min-height: 72px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--border);
    background: rgba(7, 17, 31, 0.9);
    box-shadow: 0 1px 15px 0 var(--border);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
  }

  .name-block {
    display: flex;
    padding: 10px 40px;
    flex-direction: column;
  }

  .nav-block {
    display: flex;
    padding: 0 40px;
    align-items: center;
    gap: 24px;
  }

  .burger {
    display: inline-flex;
    width: 44px;
    height: 44px;
    margin-right: 20px;
    padding: 0;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
    border: 1px solid var(--border);
    border-radius: 10px;
    color: var(--foreground);
    background: var(--input);
    cursor: pointer;
    transition:
      color 180ms ease,
      border-color 180ms ease,
      background-color 180ms ease,
      transform 180ms ease;
  }

  .burger:hover {
    color: var(--hover-foreground);
    border-color: var(--hover-foreground);
    background: var(--secondary);
  }

  .burger:active {
    transform: scale(0.94);
  }

  .burger:focus-visible {
    outline: 2px solid var(--hover-foreground);
    outline-offset: 3px;
  }

  .burger span {
    display: block;
    width: 20px;
    height: 2px;
    border-radius: 999px;
    background: currentColor;
    transition:
      transform 180ms ease,
      opacity 180ms ease;
  }

  .burger[aria-expanded='true'] span:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
  }

  .burger[aria-expanded='true'] span:nth-child(2) {
    opacity: 0;
  }

  .burger[aria-expanded='true'] span:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
  }

  .mobile-navigation {
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    display: flex;
    padding: 16px;
    flex-direction: column;
    gap: 8px;
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    background: var(--card);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.25);
  }

  .mobile-nav-link {
    width: 100%;
  }

  @media (max-width: 680px) {
    .header {
      min-height: 64px;
    }

    .name-block {
      padding: 8px 16px;
    }

    .burger {
      margin-right: 12px;
    }
  }

  @media (max-width: 475px) {
    .name-block {
      padding: 6px 10px;
    }

    .burger {
      margin-right: 8px;
    }
  }
</style>
