# Plivo SMS GitHub Action

This action can be applied to your workflow and will enable you to send an SMS in any scenario you wish.

## Prerequisites

- A Plivo Account. [Sign up for free](https://console.plivo.com/accounts/register/)
- A [Plivo Auth_ID and Auth_Token](https://console.plivo.com/dashboard/)

## Usage

1. Set up your credentials as [secrets](https://docs.github.com/en/actions/reference/encrypted-secrets) in your repository settings using `PLIVO_AUTH_ID`, `PLIVO_AUTH_TOKEN`, `FROM_NUMBER`,`TO_NUMBER`

2. Add the following to your workflow

```yml
- name: 'Sending SMS Notification'
  uses: plivo/action-sms@v1
  with:
    fromPhoneNumber: ${{ secrets.FROM_NUMBER }}
    toPhoneNumber: ${{ secrets.TO_NUMBER }}
    message: '💡There has been new release to ${{ github.repository }}'
  env:
    PLIVO_AUTH_ID: ${{ secrets.PLIVO_AUTH_ID }}
    PLIVO_AUTH_TOKEN: ${{ secrets.PLIVO_AUTH_TOKEN }}
```

## Inputs

### `fromPhoneNumber`

**Required** The Phone number in your Plivo account to send SMS from, which is stored as [secret](https://docs.github.com/en/actions/reference/encrypted-secrets) and can also be hardcoded.

### `toPhoneNumber`

**Required** The phone number to which SMS must be sent, is stored as a [secret](https://docs.github.com/en/actions/reference/encrypted-secrets) and can also be hardcoded.

### `message`

**Required** The text message you want to send.

### `PLIVO_AUTH_ID`

A Plivo Auth_ID. To be stored in [secret](https://docs.github.com/en/actions/reference/environments) or as an environment variable.

### `PLIVO_AUTH_TOKEN`

A Plivo Auth_Token. To be stored in [secret](https://docs.github.com/en/actions/reference/environments) or as an environment variable.

## Outputs

Plivo returns a JSON response acknowledging the message.
### `Sample Output`

```
MessageResponse {
  apiId: 'de46ab04-b21d-11eb-80f8-0242ac110006',
  message: 'message(s) queued',
  messageUuid: [ 'de485472-b21d-11eb-80f8-0242ac110006' ]
}
```
## Contributing

## Third Party Licenses

This GitHub Action uses a couple of Node.js modules to work.

License and other copyright information for each module are included in the release branch of each action version under `node_modules/{module}`.

More information for each package can be found at `https://www.npmjs.com/package/{package}`

## License

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
