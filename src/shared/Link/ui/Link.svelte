<script>
  const {
    text,
    style,
    href,
  } = $props()
</script>

<a class={style} href={href}>{text}</a>

<style>
.nav-link{
  font-weight: 600;
  font-size: 1.5rem;
  margin: 0 10px;
  text-decoration: none;
  color: var(--muted-foreground);
  transition: all 0.3s ease;
}
.nav-link-active{
  font-weight: 600;
  font-size: 1.5rem;
  color: var(--foreground);
  text-decoration: none;
  border-bottom: 2px solid var(--foreground);
  padding-bottom: 3px;
  margin: 0 10px;
}
.nav-link-open{
  font-weight: 600;
  font-size: 1.2rem;
  text-decoration: none;
  color: var(--foreground);
  cursor: pointer;
}
.nav-link:hover{
  color: var(--foreground);
}
</style>
