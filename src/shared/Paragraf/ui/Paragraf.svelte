<script>
  const {
    text,
    style
  } = $props()
</script>


<p class={style}>{text}</p>

<style>
p{
  font-size: 1.5rem;
  color: var(--muted-foreground);
}
.p-black{
  font-size: 1.5rem;
  color: var(--foreground);
  font-weight: 600;
}
.p-big{
  font-size: 1.5rem;
  margin-bottom: 10px;
}
.p-text{
  font-size: 1.0rem;
  margin-bottom: 10px;
  color: var(--muted-foreground);
}
@media(max-width: 500px){
  .p-black{
    font-size: 1rem;
  }
  p{
    font-size: 0.8rem;
  }
  .h3-small{
    font-size: 1.6rem;
  }
}
</style>
