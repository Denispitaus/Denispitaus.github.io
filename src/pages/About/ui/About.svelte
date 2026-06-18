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
    <img src="/img/my-logo.gif" alt="My Logo" class="logo">
    <div class="description">
      <H3 style="h3-name" text="Denispitaus"/>
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
    <section class="small-info">
      {#each smallInfoData as value}
      <div class='blockSmallInfo'>
        <H3 style='h3-small' text={value.title}/>
        <Paragraf text={value.text}/>
      </div>

      {/each}
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
.description{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.aboutPage{
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  gap: 50px;
}
.logo{
  width: 300px;
  height: 300px;
  border-radius: 50px;
  margin-bottom: 20px;
}
.block-logo{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

}
  @media(max-width: 1250px){
  .aboutPage{
    flex-direction: column;
    }
  .block-logo{
    align-items: center;
  }
  }
  @media(max-width: 500px){
  .logo{
    width: 150px;
    height: 150px;
}
}
</style>
