# Countdown Dates
Custom Lovelace card to allow you to count down to the number of days an event will be happening

## Options

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| type | string | **Required** | `custom:countdown-dates`
| title | string | optional | Give your card a new title (default: Countdown)
| phrase | string | optional | Phrase to place after number of days (default: )
| dates | object | **Required** | Object to create events

Dates object

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| date | string | **Required** | A date value (i.e. 5/14/2019)
| name | object | **Required** | Give your event a name so you know what its for

```yaml
resources:
  - type: js
    url: /local/lovelace-countdown-dates/lovelace-countdown-dates.js?track=true
```

## Example
```yaml
- type: custom:countdown-dates
  title: 'Birthdays'
  phrase: 'days left'
  dates:
		- date: 10/25/2019
			name: Birthday
		- date: 7/1/2019
			name: Anniversary
```