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
    <div class="loaderItem"></div>
    <H3 style='h3-small' text='{step}%'></H3>
    <div class="outline">
      <div class="inline" style="width: {step}%;"></div>
    </div>
  </main>
{:else}
  <div class="layout-wrapper">
    <Header />

    <main class="page-content">
      {@render children()}
    </main>
  </div>
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
    height: 8px;
    border-radius: 100px;
    transition: all 0.5s ease;
  }
  .loaderItem{
    border-radius: 500px;
    width: 180px;
    height: 180px;
    border: 15px dashed var(--foreground);
    animation: spin ease-in-out 2s infinite;
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
  .layout-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  /* 2. Стили для контента */
  .page-content {
    flex-grow: 1; /* Занимает всё оставшееся место по высоте */
    display: flex;
    flex-direction: column;
    justify-content: center; /* Центрирует по вертикали внутри main */
    align-items: center;    /* Центрирует по горизонтали внутри main */
    padding: 50px 250px;
  }

  /* Ваши адаптивные стили без изменений */
  @media(max-width: 1100px){
    .page-content{
      padding: 50px 100px;
    }
    .loaderItem{
    border-radius: 500px;
    width: 120px;
    height: 120px;
    border: 12px dashed black;
    animation: spin linear 2.5s infinite;
  }
  }
  @media(max-width: 680px){
    .page-content{
      padding: 30px 50px;
    }
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
    .page-content{
      padding: 20px 50px;
    }
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
