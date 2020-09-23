import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class CommentItem extends Component {
    getStyle = ()=> {
        return {
            background: '#f4f4f4',
            padding: '10px 120px',
            borderBottom: '1px #ccc dotted',
            display: 'flex',
            flexdirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        }
    }
    getStyleBtn = () => {
        return {
            minWidth: '40px',
            height: '40px',
            borderRadius: '100%',
            backgroundColor: '#BA1E4B',
            color: 'white',
            fontWeight: '700'
        }
    }
    render() {
        const {id,body} = this.props.comment;
        return (
            <div style = {this.getStyle()}>
                <p>{body}</p>
                <button style = {this.getStyleBtn()} onClick = {this.props.delComment.bind(this,id)}>X</button>
            </div>
        )
    }
}
CommentItem.propTypes = {
    comment: PropTypes.object.isRequired
}