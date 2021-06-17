import React from 'react';
import youtube from '../apis/youtube';
import "../styles/app.css"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {};
    }

    componentDidMount() {
        this.onTermSubmit();
    }

    onTermSubmit = async () => {
        const response = await youtube.get('/search', {
            params: {
                q: 'buildings'
            }
        });

        console.log(response.data.items);

    };

    render() {
        return (
            <div>
                { /*Your code starts here*/}
            </div>
        )
    }
}

export default App;
