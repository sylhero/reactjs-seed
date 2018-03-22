import React from 'react';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CirclePicker } from 'react-color';
import ThemePreferenceActions from './ThemePreferenceActions';

class ThemePreference extends React.Component {
    handleColorChange = (color) => {
        this.props.actions.setThemeColor(color.hex);
        console.log(this.props.theme);
    };

    render = () => {
        const themeStyle = {
            backgroundColor: this.props.theme.themeColor,
            minHeight: '100%',
            height: '700px'
        };
        return (
            <div style={themeStyle}>
                <Row>
                    <Col md={{ span: 14, push: 10 }}>
                        <CirclePicker onChangeComplete={this.handleColorChange} />
                    </Col>
                </Row>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        theme: state.theme
    };
};


const mapDispatchToProps = (dispatch) => {
    const actions = bindActionCreators(ThemePreferenceActions, dispatch);
    return {
        actions
    };
};

ThemePreference.propTypes = {
    actions: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemePreference);
