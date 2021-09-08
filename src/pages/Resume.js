import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import resume from '../assets/Benjamin_Bazan_Resume.pdf'
import { Container } from 'react-bootstrap';
import { throttle } from 'lodash';


class Resume extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            PDFWidth: null
        }
        this.widthFn = throttle(this.setPDFWidth, 500).bind(this)
    }

    componentDidMount(){
        document.title = "Resume - Benjamin Bazan"
        window.addEventListener('resize', this.widthFn)

        this.setPDFWidth()
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.widthFn)
    }

    setWrapRef = ref => {
        this.wrapRef = ref;
    }

    setPDFWidth = () => {
        let width = this.wrapRef.offsetWidth - 80

        if (width >= 1100) {width = 1100}
        console.log(width)
        this.setState({PDFWidth: width})
    }

    render(){
        return(
            <Container className="px-5" ref={this.setWrapRef} fluid>
                <h6><a href={resume}>Click Here to View/Download PDF</a></h6>
                    
                <Document file={resume}>
                    <Page pageNumber={1} width={this.state.PDFWidth}/>
                </Document>
                
                <br/>
            </Container>
        )
    }
}

export default Resume;