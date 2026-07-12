<script>
  import '/src/app/app.css'
  import H3 from '$shared/H3';
  import Header from '$widgets/Header';
  let { children } = $props();
  let timeot = null
  let isLoading = $state(true)
  let step = $state(20)
  let interval = null
  let finish = $state(100)

  $effect(() => {
        interval = setInterval(() =>{
          if(step < finish){
            step = step + 20;
          }
          else{
              clearInterval(interval)
              interval = null
              isLoading = false
          }
        },400)
        return () => {
          clearInterval(interval)
          interval = null
        }
    })

</script>

{#if isLoading}
  <main class="loadingPage">
    <svg width="180" height="180" viewBox="0 0 180 180">
      <circle
        cx="90"
        cy="90"
        r="75"
        fill="none"
        stroke="var(--foreground)"
        stroke-width="15"
        stroke-dasharray="30 30"
        stroke-linecap="round"
        class="loaderItem"
      />
    </svg>
    <H3 style='h3-small' text='{step}%'></H3>
    <div class="outline">
      <div class="inline" style="width: {step}%;"></div>
    </div>
  </main>
{:else}
    <main class="page-content">
      {@render children()}
    </main>
{/if}
<style>
  .outline{
    background-color: var(--muted-foreground);
    width: 300px;
    height: 10px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 0 2px;

  }
  .inline{
    background-color: var(--foreground);
    width: 10px;
    height: 6px;
    border-radius: 100px;
    transition: all 0.5s ease;
  }
  .loaderItem{
    animation: spin ease-in-out 2s infinite;
    transform-origin: center;
    transition: all 0.2;
  }
  @keyframes spin{
    100%{
      rotate: 360deg;
    }
  }
  .loadingPage{
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
  }

  /* Ваши адаптивные стили без изменений */
  @media(max-width: 1100px){
    .loaderItem{
    border-radius: 500px;
    width: 120px;
    height: 120px;
    border: 12px dashed black;
    animation: spin linear 2.5s infinite;
  }
  }
  @media(max-width: 680px){

    .loaderItem{
    border-radius: 500px;
    width: 100px;
    height: 100px;
    border: 10px dashed black;
    animation: spin linear 2.5s infinite;
  }
    .outline{
    background-color: var(--muted-foreground);
    width: 200px;
    height: 10px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 0 2px;

  }
  }
  @media(max-width: 385px){

    .loaderItem{
    border-radius: 500px;
    width: 70px;
    height: 70px;
    border: 9px dashed black;
    animation: spin linear 2.5s infinite;
  }
    .outline{
    background-color: var(--muted-foreground);
    width: 150px;
    height: 10px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 0 2px;

  }
  }
</style>
