### Demo

https://blockchainpoly.s3.eu-central-1.amazonaws.com/index.html

https://gateway.ipfs.io/ipfs/QmYVDRMcVeYJqXK8bkB4KJXziXjdm8rCTheV49cVGFxZBv

### Deploy

`npm run build`

#### S3

`aws s3 sync dist s3://blockchainpoly --acl public-read`

#### IPFS

`ipfs init`

`ipfs daemon`

`ipfs add -r dist`

`ipfs pin add -r <folder hash>`
