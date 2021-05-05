const express = require('express');
const { RtcTokenBuilder, RtcRole } = require('agora-access-token');

const { APP_ID, APP_CERTIFICATE } = process.env;
const router = express.Router();

if (!(APP_ID && APP_CERTIFICATE)) {
  throw new Error('You must define an APP_ID and APP_CERTIFICATE');
}

function nocache(req, res, next) {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  next();
}

function generateAccessToken(req, resp) {
  resp.header('Access-Control-Allow-Origin', '*');

  const { channel } = req.query;
  if (!channel) {
    return resp.status(500).json({ error: 'channel name is required' });
  }

  let { uid } = req.query;
  if (!uid) {
    uid = 0;
  }

  const expirationTimeInSeconds = 3600;
  const currentTimestamp = Math.floor(Date.now() / 1000);
  const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds;

  return resp.json({
    token: RtcTokenBuilder.buildTokenWithUid(
      APP_ID,
      APP_CERTIFICATE,
      channel,
      uid,
      RtcRole.PUBLISHER,
      privilegeExpiredTs,
    ),
  });
}

router.get('/', nocache, generateAccessToken);

module.exports = router;
