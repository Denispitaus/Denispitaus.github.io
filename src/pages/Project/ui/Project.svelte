<script>
	import { ProjectData } from '$entities/ProjectData.js';
	import Link from '$shared/Link';
	import H3 from '$shared/H3';
	import Paragraf from '$shared/Paragraf';

  let Title = "Проекты"
  let FinishTitle = $state('')
  let currentIndex = $state(0)
</script>




<section id='Projects' class="page">
  <section class="titlePage">
    <H3 text='Проекты' style='h3-big'/>
    <div class="projectCount">
      <Paragraf text='Отобранные работы'/>
      <Paragraf text={ProjectData.length + " работы"}/>
    </div>
  </section>
  <section class="project">
    {#each ProjectData as value, index}
      <div class="Card">
        <img src={value.link} alt="{`Скриншот проекта ${value.title}`}" class="img">
        <div class="titleBlock">
          <div class="headerCard">
            <Paragraf text={'0'+ (index+1)}/>
            <Paragraf text={value.year}/>
          </div>

          <H3 style='h3-small' text={value.title}/>
          <Paragraf text={value.text}/>
          <div class="footerCard">
            <Paragraf text={value.stek}/>
            <Link href='https://github.com/Denispitaus' style='nav-link-open' text='Открыть ↗'/>
          </div>
        </div>
      </div>
    {/each}
  </section>
</section>
<style>
.page{
  display: flex;
  justify-content: center;
  flex-direction: column;
}
  .titlePage{
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0 0 20px 0;
    margin-bottom: 20px;
    border-bottom: 2px solid var(--border);
  }
  .projectCount{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .project{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .titleBlock{
    padding: 15px 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .headerCard{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
.footerCard{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.img{
  width: 100%;
  height: 100%;

}
.Card{
  display: flex;
  flex-direction: column;
  border: 2px solid var(--border);
  width: 100%;
}
@media(max-width: 680px){
    .project{
      grid-template-columns: repeat(1, 1fr);
  }
}
</style>
