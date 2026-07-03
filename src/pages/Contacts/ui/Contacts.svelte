<script>
	import Button from '$shared/Button';
	import Input from '$shared/Input';
	import Paragraf from '$shared/Paragraf';
	import H3 from '$shared/H3';
  import Link from '$shared/Link';
  import {contactMeData, InputBlockData} from '$entities/ContactData'

  let Title = "Давайте работать вместе"
  let FinishTitle = $state('')
  let currentIndex = $state(0)
  let intervalTitle = null

  $effect(() => {
    intervalTitle = setInterval(() => {
      if(currentIndex < Title.length){
        FinishTitle = FinishTitle + Title[currentIndex]
        currentIndex++
      }
      else{
        clearInterval(intervalTitle)
        intervalTitle = null
      }
    }, 150)
      return () => {
        if(intervalTitle){
          clearInterval(intervalTitle)
          intervalTitle = null
        }
    }
  })

</script>


<section class="contactPage">
  <section class="leftBlock">
    <H3 style='h3-name' text={FinishTitle}/>
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
</section>

<style>
.icon{
  width: 20px;
  height: auto;
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
  width: 10px;
  height: 10px;
  transition: all 1s linear;
  animation: deactivebutton 3s linear infinite;
  box-shadow: 0 0 5px 1px rgb(0, 222, 0);
}
@keyframes deactivebutton {
  0%{
    background-color: rgb(0, 222, 0);
    box-shadow: 0 0 5px 1px rgb(0, 222, 0);

  }
  50%{
    background-color: rgb(186, 186, 186);
    box-shadow: none;
  }
  100%{
    background-color: rgb(0, 222, 0);
    box-shadow: 0 0 5px 1px rgb(0, 222, 0);

  }
}

.contactPage{
  display: flex;
  justify-content: center;
  align-items: start;
  width: 100%;
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
  width: 100%;
}
</style>
