<script>
const {
  type,
  placeholder,
  style,
  value,
  max,
  min
} = $props()
</script>

<input type={type} placeholder={placeholder} class={style} value={value} max={max} min={min}/>

<style>
input{
  border: 1px solid var(--border);
  padding: 15px 15px;
  height: auto;
  border-radius: 5px;
  width: 90%;
  font-size: 1.5rem;
}
</style>
