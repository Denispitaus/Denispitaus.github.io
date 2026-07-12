<script>
	import About from '$pages/About';
  import Contacts from '$pages/Contacts';
  import Skills from '$pages/Skills';
  import Project from '$pages/Project';
  import Header from '$widgets/Header';


function ClickAndSkroll(id) {
  const element = document.getElementById(id);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  const offset = -110;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

  // Не даем уйти за пределы страницы
  const targetPosition = Math.min(elementPosition + offset, maxScroll);

  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
}
</script>

<Header onclick={ClickAndSkroll}/>
<section class="page-content">
  <About/>
  <Skills/>
  <Project/>
  <Contacts/>
</section>

<style>

  /* 2. Стили для контента */
  .page-content {
    flex-grow: 1; /* Занимает всё оставшееся место по высоте */
    display: flex;
    flex-direction: column;
    justify-content: center; /* Центрирует по вертикали внутри main */
    align-items: center;    /* Центрирует по горизонтали внутри main */
    padding: 50px 250px 200px 250px;
    gap: 200px;
  }

  /* Ваши адаптивные стили без изменений */
  @media(max-width: 1100px){
    .page-content{
      padding: 20px 100px 100px 100px;
    }
  }
  @media(max-width: 680px){
    .page-content{
      padding: 100px 20px 200px 20px;
    }
}

  @media(max-width: 385px){
    .page-content{
      padding: 100px 20px 200px 20px;
    }

  }
</style>
