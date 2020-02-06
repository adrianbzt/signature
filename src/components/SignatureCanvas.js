import React from 'react';
import SignaturePad from 'react-signature-pad-wrapper';
import Button from "@material-ui/core/Button";

class Signature extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            count: 0,
            srcElement: 'canvas-test',
            buttons: {
                sign: false,
                clear: false,
                revoke: true
            },
            signInput: null
        }
        this.incrementCount = this.incrementCount.bind(this);
        this.doMagic = this.doMagic.bind(this);
        this.clearCanvas = this.clearCanvas.bind(this);
        this.exportSignature = this.exportSignature.bind(this);
        this.sign = this.sign.bind(this);
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

                <Button variant="contained" color="primary" onClick={this.sign}> Sign</Button>
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

    sign() {
        this.setState({show: true})
    }

    incrementCount() {
        this.setState((state) => {
            return {count: state.count + 1}
        })
    }

    clearCanvas() {
        this.setState({show: false});
        setTimeout(() => {
            this.setState({show: true});
        }, 0);
    }

    exportSignature() {

        let signature = document.getElementsByTagName('canvas')[0]

        var image = signature.toDataURL("image/png").replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception.

        window.location.href=image; // it will save locally


    }


}


export default Signature;
