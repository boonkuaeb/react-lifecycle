import React, {Component} from 'react';

class LikeButton extends Component {

    componentWillUnmount=()=>{
      console.log("Link Button componentWillUnmount")
    };

    handleClickLike=()=>{
        this.props.handleClickLike();
    };

    render() {
        return (
            <button onClick={this.handleClickLike}>Like</button>
        );
    }
}

export default LikeButton;
