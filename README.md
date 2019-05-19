# Countdown Dates

<a href="https://www.buymeacoffee.com/mKIOQX3Re" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>


Custom Lovelace card to allow you to count down to the number of days an event will be happening

## Options

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| type | string | **Required** | `custom:countdown-dates`
| title | string | optional | Give your card a new title (`default: Countdown`)
| phrase | string | optional | Phrase to place after number of days (`default: days left`)
| show_age | boolean | optional | If you want to hide age, specify `false`
| dates | object | **Required** | Object to create events

Dates object

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| date | string | **Required** | A date value (i.e. 5/14/2019)
| name | object | **Required** | Give your event a name so you know what its for
| icon | string | optional | If you would like to use an [mdi] icon, specify it here

[mdi]: https://materialdesignicons.com/

You'll want to add this to your `custom_updater:` section.

```yaml
custom_updater:
  track:
    - cards
  card_urls:
    - https://raw.githubusercontent.com/jnpetersen/lovelace-countdown-dates/master/custom_cards.json
```

Inside your Configure UI section, Raw config editor, add the following:

```yaml
resources:
  - type: js
    url: /local/lovelace-countdown-dates/lovelace-countdown-dates.js?track=true
```

If your lovelace code:

## Example
```yaml
type: custom:countdown-dates
title: 'Birthdays'
show_age: false
phrase: 'days left'
dates:
  - date: 10/25/1982
    name: Birthday
    icon: 'mdi:cake'
  - date: 7/1/2014
    name: Anniversary
```
