import React from 'react';
import PropTypes from 'prop-types';

class UserImage extends React.Component {
    constructor (props) {
        super(props);
    }
    get FN () {
        return this.props.firstName.slice(0, 1).toUpperCase();
    }
    get LN () {
        return this.props.lastName?.slice(0, 1).toUpperCase();
    }
    render() {
        return (
            <div style={{borderColor: this.props.fill || '#ccc', color: this.props.fill || '#ccc'}}>
                {this.FN}
                {this.LN}
                <style jsx>{`
                    div {
                        height: 35px;
                        width: 35px;
                        display: inline-flex;
                        justify-content: center;
                        align-items: center;
                        border: 2px solid;
                        border-radius: 50%;
                        background-color: #fff;
                    }
                `}</style>
            </div>
        )
    }
}
UserImage.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  fill: PropTypes.string,
};
export default UserImage;