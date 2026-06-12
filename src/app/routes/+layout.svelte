<script>
	import '/src/app/app.css'
  import Header from '$widgets/Header';
  let { children } = $props();
</script>

<Header/>

<main class="main">
  {@render children()}
</main>
<style>
  .main{
    padding: 50px 250px;
  }
  @media(max-width: 1100px){
    .main{
      padding: 50px 100px;
    }
  }
  @media(max-width: 680px){
    .main{
      padding: 30px 50px;
    }
  }
  @media(max-width: 385px){
    .main{
      padding: 20px 50px;
    }
  }
</style>
