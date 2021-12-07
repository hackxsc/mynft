async function main() {
  console.log("In Deploy")
  const MyNFT = await ethers.getContractFactory("MyNFT")
  // start deployment, returning a promise that resolves to a contract object
  const myNft = await MyNFT.deploy()
  console.log("Contract deployed to address: ", myNft.address)
}

main()
  .then(()=>process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
