<script>
	import Button from '$shared/Button';
	import Paragraf from '$shared/Paragraf';
  import H3 from "$shared/H3";
  import LineText from '$widgets/LineText';
  import { personalData } from '$entities/PersonalData';
  const smallInfoData = [
    {title: "10+", text: "Проектов"},
    {title: "1 год", text: "Опыта"},
    {title: "8+", text: "Технологий"},
  ]
</script>

<section class="aboutPage">
  <section class="block-logo">
    <img src="src/static/img/my-logo.gif" alt="My Logo" class="logo">
    <div class="description">
      <H3 style="h3-name" text="Денис Баскаков"/>
      <Paragraf style="p-big" text="Frontend Developer"/>
      <Paragraf style="p-text" text="Создаю быстрые и аккуратные веб-интерфейсы. Здесь - мои проекты, навыки и контакты."/>
    </div>
    <section class="nav-btn">
      <a href="/Contacts">
        <Button style="btn-white" text="Github"/>
      </a>
      <a href="/Contacts">
        <Button style="btn-white" text="Telegram"/>
      </a>
      <a href="/Contacts">
        <Button style="btn-white" text="Email"/>
      </a>
    </section>
  </section>
  <section class="block-info">
    <H3 text="Личные данные"/>
    <hr class="line"/>
    {#each personalData as value}
      <LineText title={value.title} text={value.text}/>
      <hr class="line"/>
    {/each}
    <section class="small-info">
      {#each smallInfoData as value}
      <div class='blockSmallInfo'>
        <H3 style='h3-small' text={value.title}/>
        <Paragraf text={value.text}/>
      </div>

      {/each}
    </section>
  </section>


</section>


<style>
  .blockSmallInfo{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid var(--border);
    padding: 10px 0;

  }
  .small-info{
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 20px;
  }
.nav-btn{
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 20px;
}
.line{
  background-color: var(--border);
  height: 0.01px;
}
.description{
  display: flex;
  flex-direction: column;
}
.aboutPage{
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 50px;
}
.logo{
  width: 70px;
  height: 70px;
  border-radius: 15px;
  margin-bottom: 20px;
}
.block-logo{
  display: flex;
  justify-content: center;
  flex-direction: column;

}
.block-info{
  width: 100%;
}
  @media(max-width: 560px){
  .aboutPage{
    flex-direction: column;
    }
  .block-logo{
    align-items: center;
  }
  .description{
    align-items: center;
  }
  }
</style>
