<script>
  import DisplayItem from './DisplayItem.svelte'
  import { currenciesStore } from '../store'

  $: selectedCurrencies = $currenciesStore.filter(currency => currency.isSelected)
</script>

<style lang="scss">
  @import '../scss/_variables.scss';
  @import '../scss/_mixins.scss';

  .Display {
    border-radius: 3px;
    border: 1px solid $grey-dark;
    overflow: hidden;
    overflow-y: auto;
    flex: 1;

    &-container {
      @include responsiveLayout;
    }
  }
</style>

<div class="Display">
  <div class="Display-container">
    {#each selectedCurrencies as item (item.name)}
      <DisplayItem {item} />
    {/each}
  </div>
</div>
