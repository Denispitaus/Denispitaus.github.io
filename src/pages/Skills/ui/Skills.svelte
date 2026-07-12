<script>
	import LineText from '$widgets/LineText';
	import Button from '$shared/Button';
	import Paragraf from '$shared/Paragraf';
	import H3 from '$shared/H3';
  import { baseSkills, fraimforks, other, level } from '$entities/SkillsData';

  let Title = "Навыки"
  let FinishTitle = $state('')
  let currentIndex = $state(0)
  let intervalTitle = null;
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
    }, 100)
      return () => {
        if(intervalTitle){
          clearInterval(intervalTitle)
          intervalTitle = null
        }
    }
  })
</script>

<section id='Skills' class="skills-page">
  <section class="title-block">
    <H3 text={FinishTitle} style="h3-big"/>
    <Paragraf text="Технологии, которые я использую в работе"/>
  </section>
  <section class="skills-block">
    <section class="base-skills">
      <H3 text={baseSkills[0].title}/>
      <div class="base-skills-list">
        {#each baseSkills as value}
          <Button style="btn-white" text={value.text} />
        {/each}
      </div>
      <H3 text={fraimforks[0].title}/>
      <div class="base-skills-list">
        {#each fraimforks as value}
          <Button style="btn-white" text={value.text} />
        {/each}
      </div>
      <H3 text={other[0].title}/>
      <div class="base-skills-list">
        {#each other as value}
          <Button style="btn-white" text={value.text} />
        {/each}
      </div>
    </section>
    <section class="additional-skills">
      <H3 text="Уровень владения"/>
      {#each level as value}
        <div class="skills-block-additional">
          <LineText title={value.title} text={value.text + '%'} />
          <div class="progress">
            <div class="progress-fill" style={`width: ${value.text}%`}></div>
          </div>
        </div>
      {/each}
    </section>
  </section>
  <section class="additional-info">
    <Paragraf text='Постоянно изучаю новое. Открыт к фриланс-проектам и full-time позициям.'/>
    <a href="/Contacts">
      <Button text="Связаться" onclick={() => {}} />
    </a>
  </section>
</section>

<style>
  .additional-info{
    display: flex;
    gap: 20px;
    align-items: end;
    flex-direction: column;
    margin-top: 50px;
  }

  .progress {
    width: 100%;
    height: 2px;
    background: var(--muted-foreground);
    border-radius: 999px;
    overflow: hidden;

}

.progress-fill {
  height: 100%;
  background: var(--foreground);
  border-radius: 999px;

}
  .skills-block-additional{
    display: flex;
    gap: 5px;
    flex-direction: column;
    width: 100%;
  }
.base-skills-list{
    display: flex;
    gap: 5px;
  }
.base-skills{
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.additional-skills{
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}
.skills-page{
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}
.title-block{
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.skills-block{
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 150px;
}
@media(max-width: 1500px){
    .skills-block{
      flex-direction: column;
      gap: 50px;
  }
  .progress{
    width: 100%;
  }
}
@media(max-width: 400px){
  .base-skills-list{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;
  }
}
</style>
