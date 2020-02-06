import React from 'react';
import SignaturePad from 'react-signature-pad-wrapper';
import Button from "@material-ui/core/Button";

class Signature extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: true,
            count: 0,
        }
        this.incrementCount = this.incrementCount.bind(this);
        this.doMagic = this.doMagic.bind(this);
        this.clearCanvas = this.clearCanvas.bind(this);
        this.exportSignature = this.exportSignature.bind(this);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>

                {this.state.show ?
                <SignaturePad width={600} height={300} options={
                    {
                        minWidth: 2,
                        maxWidth: 5,
                        penColor: 'rgb(0,0,0)',
                        dotSize: 5,
                        throttle: 10,
                        minDistance: 10,
                        backgroundColor: 'rgb(255,255,255)',
                        velocityFilterWeight: 1,
                    }
                }/>
                    : null}

                <Button variant="contained" color="primary" onClick={this.doMagic}> Clear Me</Button>
                <Button variant="contained" color="secondary" onClick={this.exportSignature}> Save SVG</Button>

            </div>

        )
    }

    doMagic() {
        // this.setState({ show: false });
        // setTimeout( () => { this.setState({ show: true }); }, 0);
        this.incrementCount()
        this.clearCanvas();
    }

    incrementCount() {
        this.setState((state) => {
            return {count: state.count + 1}
        })
    }

    clearCanvas() {
        this.setState({ show: false });
        setTimeout( () => { this.setState({ show: true }); }, 0);
    }

    exportSignature() {
        alert('Work in progress')
    }


}



export default Signature;
