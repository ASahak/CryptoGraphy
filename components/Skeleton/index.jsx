import React from 'react';
import PropTypes from 'prop-types'

const Skeleton = props => {

    const _style = Object.assign({}, {
        width: props.width,
        height: props.height,
        borderRadius: props.radius,
        margin: props.margin[0] + 'px ' + props.margin[1] + 'px ' + props.margin[2] + 'px ' + props.margin[3] + 'px',
    });

    return (
        <div className="skeleton-wrap" style={_style}>

            <style jsx>{`
                .skeleton-wrap {
                    direction: ltr;
                    position: relative;
                    display: flex;
                    flex-wrap: wrap;
                    overflow: hidden;
                    background-color: #D3D8DD;
                    border: 1px solid #D3D8DD;
                }
                .skeleton-wrap:before {
                    content: " ";
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 50%;
                    z-index: 1;
                    width: 500%;
                    margin-left: -250%;
                    animation: phAnimation .8s linear infinite;
                    background: linear-gradient(to right, rgba(255, 255, 255, 0) 46%, rgba(255, 255, 255, 0.35) 50%, rgba(255, 255, 255, 0) 54%) 50% 50%;
                }
                @keyframes phAnimation {
                    0% {
                        transform: translate3d(-30%, 0, 0);
                    }
                    100% {
                        transform: translate3d(30%, 0, 0);
                    }
                }
            `}</style>
        </div>
    )
};

Skeleton.defaultProps = {
    width: 'auto',
    height: 'auto',
    radius: '0px',
    margin: [0, 0, 0, 0]
};

Skeleton.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    radius: PropTypes.string,
    margin: PropTypes.array
};
export default React.memo(Skeleton);