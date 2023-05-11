const axios = require('axios');
API_URL = "http://localhost:5000/api"

test('test device array', async () => {
    let data = await axios.get(`${API_URL}/devices`);
    // .then(resp => resp.data)
    // .then(resp => {
    //     console.log(resp[0]);
    //     expect(resp[0].user).toEqual('mary123');
    // });
    expect(data.data[0].user).toEqual('someone-xyz');
});