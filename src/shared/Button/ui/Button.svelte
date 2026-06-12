<script>
const {
  text,
  onclick,
  style
} = $props()
</script>

<button class={style} onclick={onclick}>{text}</button>

<style>

button{
  padding: 10px 15px;
  background-color: var(--primary);
  color: var(--primary-foreground);
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.7em;
  transition: all 0.3s ease;
}

button:active{
  background-color: var(--click-primary);
  color: var(--background);
}
button:hover{
  background-color: var(--hover-foreground);
  color: var(--background);
}
.btn-white{
  background-color: var(--background);
  color: var(--muted-foreground);
  border: 1px solid var(--muted-foreground);
  font-size: 0.6em;
  transition: all 0.3s ease;
}
.btn-white:hover{
  background-color: var(--muted-foreground);
  color: var(--background);
  border: 1px solid var(--muted-foreground);
}
.btn-white:active{
  background-color: var(--click-foreground);
  color: var(--background);
  border: 1px solid var(--click-foreground);
}
</style>
