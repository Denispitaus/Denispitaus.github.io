<script>
const {
  text,
  style
} = $props()
</script>

<h3 class={style}>{text}</h3>

<style>
  .h3-info{
    font-size: 2.5rem;
    color: var(--foreground);
  }
  h3{
    font-size: 2rem;
    color: var(--foreground);
    font-weight: 500;
  }
  .h3-big{
    font-size: 2.5rem;
    color: var(--foreground);
    font-weight: 600;
  }
  .h3-small{
    font-size: 2.0rem;
    color: var(--foreground);
    font-weight: 600;
  }
  .h3-name{
    font-size: 3rem;
    font-weight: 600;
    color: var(--foreground);
  }
</style>
