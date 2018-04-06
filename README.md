### Demo

https://blockchainpoly.s3.eu-central-1.amazonaws.com/index.html

https://gateway.ipfs.io/ipfs/QmWZ8NNE8FNmEc41mGBcaMeWCThynPQicwcxp9w8Xb2m6d

### Deploy

`npm run build`

#### S3

`aws s3 sync dist s3://blockchainpoly --acl public-read`

#### IPFS

`ipfs init`

`ipfs daemon`

`ipfs add -r dist`

`ipfs pin add -r <folder hash>`
