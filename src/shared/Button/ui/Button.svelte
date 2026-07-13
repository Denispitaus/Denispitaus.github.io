<script>
const {
  text,
  onclick,
  style
} = $props()
</script>

<button class={style} onclick={onclick}>{text}</button>

<style>
.nav-link{
  font-weight: 600;
  font-size: 1.5rem;
  margin: 0 10px;
  text-decoration: none;
  color: var(--muted-foreground);
  transition: all 0.3s ease;
  background-color: rgba(255, 255, 255, 0);
}
.nav-link:hover{
  font-weight: 600;
  color: var(--foreground);
  background-color: rgba(255, 255, 255, 0);
}
.btn-skills{
    padding: 10px 15px;
    background-color: var(--primary);
    color: var(--primary-foreground);
    border: 1px solid var(--primary-foreground);
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
    font-size: 1.6rem;
    transition: all 0.3s ease;
}
button{
  padding: 10px 15px;
  background-color: var(--primary);
  color: var(--primary-foreground);
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  font-size: 1.6rem;
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
  font-size: 1.2rem;;
  transition: all 0.3s ease;
}
.btn-white:hover{
  background-color: var(--muted-foreground);
  color: var(--background);
  border: 1px solid var(--muted-foreground);
  transform: translateY(-5px);
}
.btn-white:active{
  background-color: var(--click-foreground);
  color: var(--background);
  border: 1px solid var(--click-foreground);
}
@media(max-width: 500px){
  .btn-white{
    font-size: 0.8rem;
  }
  button{
    font-size: 1rem;
  }
  .btn-skills{
    font-size: 1rem;
  }
}
@media(max-width: 680px){
  .nav-link{
  font-weight: 600;
  font-size: 1.20rem;
  text-decoration: none;
  color: var(--muted-foreground);
  transition: all 0.3s ease;
  background-color: rgba(255, 255, 255, 0);
  word-break: keep-all;
}
}
@media(max-width: 425px){
  .nav-link{
  font-weight: 600;
  font-size: 0.5rem;
  text-decoration: none;
  color: var(--muted-foreground);
  transition: all 0.3s ease;
  background-color: rgba(255, 255, 255, 0);
  word-break: keep-all;
  padding: 10px 12px;
  margin: 0;
}
}
@media(max-width: 553px){
  .nav-link{
  font-weight: 600;
  font-size: 0.80rem;
  text-decoration: none;
  color: var(--muted-foreground);
  transition: all 0.3s ease;
  background-color: rgba(255, 255, 255, 0);
  word-break: keep-all;
}
}
@media(max-width: 315px){
  .nav-link{
  font-weight: 600;
  font-size: 0.7rem;
  text-decoration: none;
  color: var(--muted-foreground);
  transition: all 0.3s ease;
  background-color: rgba(255, 255, 255, 0);
  word-break: keep-all;
  padding: 10px 12px;
  margin: 0;
}
}
</style>
