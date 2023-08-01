const { Products } = require('plaid');
const { getPlaidClient, handleWrapper } = require(`${process.env.LAYER_PATH}/utils`);

module.exports.handler = handleWrapper(async (event, context, res) => {
  const client = getPlaidClient()
  const PLAID_PRODUCTS = (process.env.PLAID_PRODUCTS || Products.Transactions).split(',');
  const PLAID_COUNTRY_CODES = (process.env.PLAID_COUNTRY_CODES || 'US').split(',');
  const PLAID_REDIRECT_URI = process.env.PLAID_REDIRECT_URI;

  const userId = 'user-id'
  const configs = {
    user: {
      client_user_id: userId,
    },
    client_name: 'Plaid demo',
    products: PLAID_PRODUCTS,
    country_codes: PLAID_COUNTRY_CODES,
    language: 'en',
  };

  if (PLAID_REDIRECT_URI !== '') {
    configs.redirect_uri = PLAID_REDIRECT_URI;
  }

  const createTokenResponse = await client.linkTokenCreate(configs);
  return res.json(200, createTokenResponse.data)
})
