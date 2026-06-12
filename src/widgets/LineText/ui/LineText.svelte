<script>
  import Paragraf from '$shared/Paragraf';
  const {
    title,
    text
  } = $props();
</script>

    <div class="line-info">
      <Paragraf text={title}/>
      <Paragraf style="p-black" text={text}/>
    </div>

<style>
.line-info{
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
</style>
