<script>
  const {
    text,
    style
  } = $props()
</script>


<p class={style}>{text}</p>

<style>
p{
  font-size: 1rem;
  color: var(--muted-foreground);
}
.p-black{
  font-size: 1rem;
  color: var(--foreground);
  font-weight: 600;
}
.p-big{
  font-size: 1rem;
  margin-bottom: 10px;
}
.p-text{
  font-size: 1rem;
  margin-bottom: 10px;
  color: var(--muted-foreground);
}
</style>
