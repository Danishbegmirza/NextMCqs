import React, { Component } from 'react';
import {Text} from 'react-native'
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
       this.setState({hasError:error})
    }
    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <Text>Something went wrong.</Text>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;