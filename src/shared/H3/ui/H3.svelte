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
    font-size: 0.9em;
    color: var(--foreground);
    font-weight: 500;
  }
  .h3-big{
    font-size: 1.25em;
    color: var(--foreground);
    font-weight: 600;
  }
  .h3-small{
    font-size: 0.9em;
    color: var(--foreground);
    font-weight: 600;
  }
  .h3-name{
    font-size: 2em;
    font-weight: 600;
    color: var(--foreground);
  }
</style>
