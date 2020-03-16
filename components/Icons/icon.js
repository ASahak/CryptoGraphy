import React from "react";
import PropTypes from 'prop-types';
import {
    User,
    Exit,
    Loading,
    Success,
    Error,
    Logout
} from 'components/Icons';

const iconTypes = {
    exit: Exit,
    user: User,
    loading: Loading,
    error: Error,
    success: Success,
    logout: Logout
};

const IconComponent = ({ name, ...props }) => {
    let Icon = iconTypes[name];
    return <Icon {...props} />;
};
IconComponent.propTypes = {
    name: PropTypes.string
};

export default IconComponent;