// set signDigest; assumes `address` is set to the matching wallet address
const signDigest = async (message) => {
    console.log('requesting personal_sign in signDigest');
    return await ethereum.request({
      method: 'personal_sign',
      params: [address, message],
    });
  };
  client.signDigest = signDigest;
  client.signer.signDigest = signDigest;