const form = document.querySelector('form');
const recipientInput = document.querySelector('#recipient-address');

form.addEventListener('submit', e => {
  e.preventDefault();
  
  // Replace with your own values
  const providerUrl = "https://<polygon-rpc-endpoint>";
  const mnemonic = "<add your private key>";

  const provider = new Web3.providers.HttpProvider(providerUrl);
  const web3 = new Web3(provider);

  const recipientAddress = recipientInput.value.trim();
  
  // Replace with your own values
  const faucetOptions = {
    interval: 120, // seconds
    amount: '10000000', // gwei
    log: console.log // or false to disable logging
  };

  const faucet = new PolygonFaucet(mnemonic, web3, faucetOptions);

  faucet.send(recipientAddress)
    .then(() => {
      alert(`Faucet successfully sent to ${recipientAddress}`);
    })
    .catch(error => {
      console.error(`Faucet sending failed: ${error}`);
    });
});
