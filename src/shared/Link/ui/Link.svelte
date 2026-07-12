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
  color: white;
  text-decoration: none;
  background-color: var(--foreground);
  width: 100%;
  border-radius: 10px;
  padding: 5px 15px;
  text-align: center;
}
.nav-link-active-big{
  font-weight: 600;
  font-size: 1.5rem;
  color: var(--foreground);
  text-decoration: none;
  padding: 10px 10px;
  text-align: center;
  border-bottom: 4px solid var(--foreground);
  transition: all 0.1s ease-in;

}
.nav-link-open{
  font-weight: 600;
  font-size: 1.2rem;
  text-decoration: none;
  color: var(--foreground);
  cursor: pointer;
}
@media(max-width: 500px){
  .nav-link-open{
    font-size: 0.8rem;
  }
  .nav-link-active{
    font-size: 1rem;
    padding: 5px;
}
.nav-link{
  font-size: 1rem;
  padding: none;
}
}
.nav-link:hover{
  color: var(--foreground);
}
</style>
