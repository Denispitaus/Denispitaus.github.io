<script>
	import Button from '$shared/Button';
	import Input from '$shared/Input';
	import Paragraf from '$shared/Paragraf';
	import H3 from '$shared/H3';
  import Link from '$shared/Link';
  import {contactMeData, InputBlockData} from '$entities/ContactData'

</script>


<section class="contactPage">
  <section class="leftBlock">
    <H3 style='h3-name' text='Давайте работать вместе'/>
    <Paragraf text='Открыт к фриланс-проектам, full-time и любым интересным задачам.'/>
    <div class="activeWork">
      <div class="buttonactive"></div>
      <Paragraf style='p-black' text='Доступен для новых проектов'/>
    </div>
    <section class="contactBlock">
      {#each contactMeData as value}
        <div class="contactMe">
          <div class="nameBlock">
            <img class='icon' src={value.img} alt="">
            <Paragraf text={value.title}/>
          </div>
          <Link style='nav-link-open' href={value.href} text={value.link}/>
        </div>
      {/each}
    </section>
  </section>
  <section class="newBlock">
    <H3 text='Написать сообщение' style='h3-small'/>
    {#each InputBlockData as value}
      <div class="juf">
        <Paragraf text={value.title}/>
        <Input type='text' placeholder={value.placefolder}/>
      </div>

    {/each}
    <Button text='Отправить'/>
  </section>
</section>

<style>
.icon{
  width: 20px;
  height: auto;
}
  .juf{
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .newBlock{
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border);
    padding: 20px 40px;
    justify-content: space-between;
    border-radius: 5px;
    height: 100%;
    gap: 40px;
  }
  .contactBlock{
      border-top: 1px solid var(--border);
  }
.nameBlock{
  display: flex;
  align-items: center;
  gap: 10px;
}
.contactMe{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;
  border-bottom: 1px solid var(--border);

}
.buttonactive{
  background-color: rgb(0, 222, 0);
  border-radius: 100%;
  width: 7px;
  height: 7px;
}
.contactPage{
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 100px;
}
.activeWork{
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  border-bottom: 1px solid var(--border);
  border-top: 1px solid var(--border);
}
.leftBlock{
  display: flex;
  flex-direction: column;
  gap: 20px;
}
@media(max-width: 1800px){
  .contactPage{
    flex-direction: column;
    gap: 50px;
  }
}
@media(max-width: 500px){
    .newBlock{
      padding: 10px 20px;
  }
}
</style>
