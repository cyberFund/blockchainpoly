### Demo

https://blockchainpoly.s3.eu-central-1.amazonaws.com/index.html

https://gateway.ipfs.io/ipfs/Qmcc11dgomF9PFT16NRYMMjhSe5f6oF3cRfD88n7eUFzDB

### Deploy

`npm run build`

#### S3

`aws s3 sync dist s3://blockchainpoly --acl public-read`

#### IPFS

`ipfs init`

`ipfs daemon`

`ipfs add -r dist`

`ipfs pin add -r <folder hash>`
