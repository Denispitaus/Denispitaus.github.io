<script>
  import '/src/app/app.css'
  import Header from '$widgets/Header';
  let { children } = $props();
</script>

<!-- Оборачиваем всё в общий контейнер страницы -->
<div class="layout-wrapper">
  <Header />

  <main class="page-content">
    {@render children()}
  </main>
</div>

<style>

  /* 1. Создаем flex-контейнер на всю высоту экрана */
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
  }
  @media(max-width: 680px){
    .page-content{
      padding: 30px 50px;
    }
  }
  @media(max-width: 385px){
    .page-content{
      padding: 20px 50px;
    }
  }
</style>
