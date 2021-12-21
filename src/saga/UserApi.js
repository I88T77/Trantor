import axios from 'axios';

const blogs = async () => {

    const { data } = await axios.get('http://demo3781918.mockable.io/getblog');

    console.log('in AXIOS ', data)
    return data;

}

export default { blogs};
