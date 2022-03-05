const FormData = require('form-data');
const fs = require('fs');

const postToPinata = (data) => {
    return axios.post(
        process.env.PINATA_URL,
        data,
        {
            headers: {
                'Content-Type': `multipart/form-data; boundary= ${data._boundary}`,
                'pinata_api_key': process.env.PINATA_API_KEY,
                'pinata_secret_api_key': process.env.PINATA_SECRET_KEY
            }
        }
    ).then(function (response) {
        var hash = response.data['IpfsHash'];
        console.log('success, ipfsh hash: ', hash)
        return 'success';
    }).catch(function (error) {
        console.log(error);
        return null;
    });
}

const uploadToPinataAndCallContract = (address, filename) => {
    const metadata = JSON.stringify({
        name: address + '-nft.png'
    });
    let data = new FormData();
    data.append('pinataMetadata', metadata);
    data.append('file', fs.createReadStream('./uploads/' + filename));
    postToPinata(data);
};

module.exports = { postToPinata, uploadToPinataAndCallContract };