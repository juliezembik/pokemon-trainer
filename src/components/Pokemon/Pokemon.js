import React, { Component } from 'react';

class Pokemon extends Component {
    render() {
        return (
            <div>Pokemon Shows up here!
                {JSON.stringify(Pokemon)}
            </div>
        )
    }
}

export default Pokemon;