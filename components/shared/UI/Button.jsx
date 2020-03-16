import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icons/icon';

const Button = (props) => {
    const width = {
        ...((!props.fullWidth && props.width) && {width: props.width + 'px'}),
        ...(props.fullWidth && {width: '100%', display: 'flex'})
    };
    return (
        <button className={`btn-global btn-${props.size}`} style={width}>
            {props.icon.dir && props.icon.dir === 'left' ? <Icon name={props.icon.element} /> : null}
            {props.text}
            {props.icon.dir && props.icon.dir === 'right' ? <Icon name={props.icon.element} /> : null}
            <style global jsx>{`
                button.btn-global svg{ 
                    height: 30px;
                    fill: #fff;
                    margin:0 10px;
                }
                button.btn-global {
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    outline: none;
                    font-size: 13px;
                    text-transform: uppercase;
                    background: #37415c;
                    color: #ebe6e6;
                    border: none;
                    border-radius: 8px;
                    justify-content: center;
                    margin: auto;
                    padding: 0px 15px;
                    height: 30px;
                }
                button.btn-md {
                    padding: 0px 15px;
                    height: 40px;
                }
            `}</style>
        </button>
    )
};
Button.defaultProps = {
    size: 'md',
    icon: {},
    type: 'button',
    fullWidth: false
};
Button.propTypes = {
    fullWidth: PropTypes.bool,
    size: PropTypes.string,
    icon: PropTypes.object,
    type: PropTypes.string,
    width: PropTypes.number,
    text: PropTypes.string,
};
export default Button;