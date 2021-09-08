import React from 'react';
import PropTypes from 'prop-types'
import './scroll.css'

class ScrollContent extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            isActive: false,
            top: 0,

            activeFrom: props.activeFrom,
            activeTo: props.activeTo
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
        this.handleScroll();
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const { top } = this.wrapRef.getBoundingClientRect();
        console.log("top: " + top)

        if (top > this.state.activeFrom && top < this.state.activeTo && !this.state.isActive) {
            this.setState({isActive: true})
        }
        if ((top <= this.state.activeFrom || top >= this.state.activeTo) && this.state.isActive){
            this.setState({isActive: false})
        }
    }

    setWrapRef = ref => {
        this.wrapRef = ref;
    }

    render(){
        const {isActive } = this.state

        return(
            <div 
            className={`scroll-item ${isActive && 'scroll-item--active'}`}
            ref={this.setWrapRef}>
                {this.props.children}
            </div>
        )
    }
}

ScrollContent.propTypes = {
    children: PropTypes.element.isRequired,
    activeFrom: PropTypes.number.isRequired,
    activeTo: PropTypes.number.isRequired
};

export default ScrollContent