https://docs.metaplex.com/developer-tools/sugar/overview/installation
sugar --version

curl https://release.solana.com/v1.14.11/solana-install-init-x86_64-pc-windows-msvc.exe --output C:\solana-install-tmp\solana-install-init.exe --create-dirs
solana --version

# AbaDomr6yBEiXjKCRYrvync1LLutGviPFyMGXx2Krc66
solana-keygen new --outfile  ./wallets/Owner.json

# 7KpFJfYUr3AnkpbA93r18EWinev6m9n7F3uEdJDZS8Em
solana-keygen new --outfile  ./wallets/Treasury.json

# 2UwGQK4EL5HeEY27MZipraRzMiMfc4CMsFv8sug1cQBA
solana-keygen new --outfile  ./wallets/Creator.json

solana config set --keypair C:\Users\Win10\Desktop\udemy_web_tasarim_ve_kodlama_ve_seo_egitim\Patika-FrontEnd\Solana\nft\wallets\Owner.json
solana config set --url https://metaplex.devnet.rpcpool.com/

solana balance
solana airdrop 2

curl https://iyjuevm2fif2rdwtcef5aopmvgiy6sdpyiv7fhujjyxzny46ekba.arweave.net/RhNCVZoqC6iO0xEL0DnsqZGPSG_CK_KeiU4vluOeIoI --output ./assets.zip
unzip assets.zip

# EJPpfGuzz7FywQ8uP6ZBHqXehBqCo6oJ8aSgo6JcRbAS
Cand Machine id

sugar launch

git clone https://github.com/metaplex-foundation/candy-machine-ui ./candy-machine-ui/
yarn install

cp .env.example .env
yarn start