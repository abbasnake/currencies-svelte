<script>
  import { currenciesStore } from '../store'
  import CurrenciesItem from './CurrenciesItem.svelte'
</script>

<style lang="scss">
  @import '../scss/_variables.scss';
  @import '../scss/_mixins.scss';

  .Currencies {
    flex: 4;
    overflow: hidden;
    overflow-y: auto;

    &-container {
      @include responsiveLayout;
    }

    &-spinner {
      border: 3px solid rgba(0, 0, 0, 0.2);
      border-top-color: $blue-dark;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin: 30px auto;
      animation: spin 1s ease-in-out infinite;
    }
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
</style>

<div class="Currencies">
  {#if $currenciesStore.length > 0}
    <div class="Currencies-container">
      {#each $currenciesStore as item (item.name)}
        <CurrenciesItem {item} />
      {/each}
    </div>
  {:else}
    <div class="Currencies-spinner" />
  {/if}
</div>
