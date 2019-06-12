<script>
  import { currenciesStore } from '../store'

  export let item

  const onClick = () => currenciesStore.toggleCurrencyStatus(item.name)
</script>

<style lang="scss">
  @import '../scss/_variables.scss';

  .DisplayItem {
    border: 2px solid $grey-dark;
    border-radius: 3px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    &-button {
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 25px;
      height: 25px;
      background-color: $black;
      color: white;
      border: 2px solid $white;
      border-radius: 50%;
      position: absolute;
      right: -9px;
      top: -9px;
      outline: none;
      cursor: pointer;
      transition: all 100ms linear;

      &:hover {
        background-color: $white;
        color: $black;
        border-color: $black;
      }
    }
  }
</style>

<div class="DisplayItem">
  <span>{item.name}</span>
  <button class="DisplayItem-button" on:click={onClick}>x</button>
</div>
