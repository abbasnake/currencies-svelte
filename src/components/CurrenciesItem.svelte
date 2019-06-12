<script>
  import { currenciesStore } from '../store'

  export let item

  const onClick = () => currenciesStore.toggleCurrencyStatus(item.name)
</script>

<style lang="scss">
  @import '../scss/_variables.scss';

  .CurrenciesItem {
    background-color: $white;
    border: 1px solid $grey-light;
    border-radius: 3px;
    height: 40px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 100ms linear;

    &-isSelected {
      background-color: $grey-dark;

      & .CurrenciesItem-name {
        color: $white;
      }
    }

    &:hover {
      border-color: $grey-dark;
      border-width: 2px;
    }

    &-name {
      color: $blue-dark;
      transition: color 200ms linear;
    }

    &-checkbox {
      margin: 0 5px;
    }
  }
</style>

<div
  class="CurrenciesItem"
  class:CurrenciesItem-isSelected={item.isSelected}
  on:click={onClick}>
  <input
    class="CurrenciesItem-checkbox"
    type="checkbox"
    checked={item.isSelected} />
  <span class="CurrenciesItem-name">{item.name}</span>
</div>
