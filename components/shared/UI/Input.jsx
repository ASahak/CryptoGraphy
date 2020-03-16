import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
    const styleDiv = {
        ...(props.label && {
            display: props.fullWidth ? 'flex' : 'inline-flex',
            flexDirection: 'column'
        }),
        ...(!props.label && {
            display: props.fullWidth ? 'block' : 'inline-block'
        })
    };
    return (
        <div style={styleDiv} className={`input-wrap ${props.errors ? 'error-field' : ''}`}>
            {props.label ? <label>{props.label}</label> : null}
            {props.placeholder ? <input
                name={props.name}
                className={'input-' + props.size}
                ref={props.refBind}
                type={props.type}
                placeholder={props.placeholder} /> : <input
                ref={props.refBind}
                name={props.name}
                className={'input-' + props.size}
                type={props.type} />
            }
            {props.errors && <span className="error-line">{props.errors}</span>}
            <style jsx>{`
                .input-wrap label {
                    font-weight: 600;
                    margin-bottom: 5px;
                    color: #37415c;
                }
                .input-wrap {
                    position: relative;
                }
                .input-wrap input {
                    width: 100%;
                    background: #E5E6E8;
                    margin-bottom: 20px;
                    transition: all 400ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    position: relative;
                    z-index: 2;
                }
                .input-wrap .error-line {
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    display: inline-block;
                    margin-bottom: 10px;
                    transition: all 400ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    font-size: 14px;
                    color: red;
                }
                .input-wrap input.input-md{
                    padding: 15px;
                    border: none;
                }
                .error-field input {
                }
                .error-field input {
                    margin-bottom: 30px;
                }
            `}</style>
        </div>
    )
};

Input.defaultProps = {
    size: 'md',
    type: 'text',
    fullWidth: false
};
Input.propTypes = {
  fullWidth: PropTypes.bool,
  size: PropTypes.string,
  refBind: PropTypes.any,
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  errors: PropTypes.string,
  placeholder: PropTypes.string,
};
export default Input;