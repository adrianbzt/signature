import React from 'react';
// import Button from "@material-ui/core/Button";

class ClearButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClicks = this.handleClicks.bind(this);
    }

    render() {
        return (
            <div>

                {/*<img className="Avatar"*/}
                {/*     src={props.src}*/}
                {/*     alt={props.alt}*/}
                {/*/>*/}
                {/*<Button variant="contained" color="primary" onClick={this.handleClicks}> {this.props.value}</Button>*/}
            </div>
        )
    }

    handleClicks() {
        console.log('I was clicked')
    }

}

export default ClearButton;
