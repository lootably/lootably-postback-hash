# Lootably Postback Hash

A TypeScript library for generating Lootably postback hashes.

## Description

This package provides a function to generate SHA256 postback hashes for Lootably postbacks.

## Installation

```bash
npm install lootably-postback-hash
```

## Usage

```typescript
import { generateSHA256PostbackHash } from 'lootably-postback-hash';

const hash = generateSHA256PostbackHash({
  userID: 'example_user_123',
  ip: '192.0.2.1',
  revenue: '0.5000',
  currencyReward: '100.00',
  postbackSecret: process.env.LOOTABLY_POSTBACK_SECRET,
});

console.log('Generated hash:', hash);
```

**Note:** Ensure that the environment variable `LOOTABLY_POSTBACK_SECRET` is set before running the script.

### Parameters

The `generateSHA256PostbackHash` function accepts an object with the following properties:

- `userID` (string): The user's ID from the postback.
- `ip` (string): The user's IP address from the postback.
- `revenue` (string): The revenue amount from the postback.
- `currencyReward` (string): The currency reward amount from the postback.
- `postbackSecret` (string): The secret key for your Lootably placement.
- `debug` (boolean, optional): If true, logs debug information.

## API Documentation

For detailed information about the Lootably API and postback system, please refer to the [Lootably Postback Documentation](https://documentation.lootably.com/docs/postbacks).

## Contact

If you have any questions or need assistance, please email us at [business@lootably.com](mailto:business@lootably.com) or reach out to your Lootably contact.