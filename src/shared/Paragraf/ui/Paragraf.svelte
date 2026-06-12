<script>
  const {
    text,
    style
  } = $props()
</script>


<p class={style}>{text}</p>

<style>
p{
  font-size: 0.7em;
  color: var(--muted-foreground);
}
.p-black{
  font-size: 0.7em;
  color: var(--foreground);
  font-weight: 600;
}
.p-big{
  font-size: 0.7em;
  margin-bottom: 10px;
}
.p-text{
  font-size: 0.5em;
  margin-bottom: 10px;
  color: var(--muted-foreground);
}
</style>
