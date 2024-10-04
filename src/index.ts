import crypto from 'crypto';

/**
 * Generates a SHA256 postback hash for a Lootably postback.
 * 
 * @param {Object} params - The parameters for generating the hash.
 * @param {string} params.userID - The user's ID from the postback.
 * @param {string} params.ip - The user's IP address from the postback.
 * @param {string} params.revenue - The revenue amount from the postback.
 * @param {string} params.currencyReward - The currency reward amount from the postback.
 * @param {string} params.postbackSecret - The secret key for your Lootably placement.
 * @param {boolean} [params.debug] - Optional. If true, logs debug information.
 * @returns {string} The generated SHA256 hash.
 */
export function generateSHA256PostbackHash(
  {
    userID,
    ip,
    revenue,
    currencyReward,
    postbackSecret,
    debug,
  } : {
    userID: string,
    ip: string,
    revenue: string,
    currencyReward: string,
    postbackSecret: string,
    debug?: true,
  },
): string {
  // Put all the variables together
  const preHashString = `${userID}${ip}${revenue}${currencyReward}${postbackSecret}`;

  if(debug) console.log(`lootably-postback-hash: Pre hash string: ${preHashString}`);

  // Generate a sha256 hash of the preHashString
  const generatedHash = crypto.createHash('sha256').update(preHashString).digest('hex');

  if(debug) console.log(`lootably-postback-hash: Generated hash: ${generatedHash}`);

  return generatedHash;
}