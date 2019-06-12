import { writable } from 'svelte/store'
import backupCurrencies from './backupCurrencies'

const currencies = () => {
  const { subscribe, update } = writable([])

  const toggleCurrencyStatus = name => {
    update(items => {
      const clone = JSON.parse(JSON.stringify(items))
      const currency = clone.find(item => item.name === name)

      if (currency) {
        currency.isSelected = !currency.isSelected

        return clone
      }

      return items
    })
  }

  const loadCurrencies = async () => {
    try {
      const data = await fetch(
        'https://openexchangerates.org/api/currencies.json'
      )
      const json = await data.json()

      const currencies = []

      for (const currency in json) {
        currencies.push({ name: currency, isSelected: false })
      }

      update(() => currencies)
    } catch (error) {
      console.log('ERROR: STORE -> fetchCurrencies -> error', error)

      update(() => backupCurrencies)
    }
  }

  return {
    subscribe,
    loadCurrencies,
    toggleCurrencyStatus
  }
}

export const currenciesStore = currencies()
