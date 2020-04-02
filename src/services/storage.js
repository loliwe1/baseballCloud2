
class Storage {

    saveHeaders = (response) => {
        const token = response.headers['access-token']
        const {client, uid} = response.headers
        localStorage.setItem('headers', JSON.stringify({token, client, uid}));
    }

    getHeaders = () => {
        return JSON.parse(localStorage.getItem('headers'));
    }

    saveCurrentProfile = (data) => {
        console.log(data);
        const {id, first_name} = data;
        localStorage.setItem('id', JSON.stringify(id));
        localStorage.setItem('name', JSON.stringify(first_name));
    }

}

export default new Storage();
