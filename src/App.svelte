<script>
  import { onMount } from 'svelte'
  import { currenciesStore } from './store'
  import Display from './components/Display.svelte'
  import Currencies from './components/Currencies.svelte'

  onMount(() => currenciesStore.loadCurrencies())
</script>

<style>
  #app {
    height: 100%;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
  }
</style>

<div id="app">
  <Display />
  <Currencies />
</div>
