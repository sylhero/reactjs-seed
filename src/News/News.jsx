import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Card } from 'antd';
import styles from './News.scss';
import NewsActions from './NewsActions';
import loading from '../assets/img/loading.gif';

export class News extends React.Component {
    componentDidMount = () => {
        const { actions } = this.props;
        actions.getHeadlinesByCountry('us');
    }

    openLink = (link) => {
        window.open(link, '_blank');
    };

    printNews = () => {
        const { articles } = this.props.news.data.data;
        const { Meta } = Card;
        let content = <div />;
        // onClick={() => { this.openLink(article.url); }}
        if (articles && articles.length > 0) {
            content = articles.map((article) => {
                return (
                    <Col span={8} key={article.publishedAt}>
                        <Card hoverable cover={<img alt="cover" src={article.urlToImage} />}>
                            <Meta title={article.title} description={article.description} />
                        </Card>
                    </Col>
                );
            });
        }
        const result = (
            <div>
                <Row gutter={16}>
                    { content }
                </Row>
            </div>
        );

        return result;
    }

    renderLogic = () => {
        let result = (
            <div>
                <img src={loading} alt="loading" className={styles.loadingImage} />
            </div>
        );
        if (this.props.news.isFulfilled) {
            result = this.printNews();
        }
        return result;
    }

    render = () => {
        return (
            <div className={styles.news}>
                { this.renderLogic() }
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        news: state.news
    };
};


const mapDispatchToProps = (dispatch) => {
    const actions = bindActionCreators(NewsActions, dispatch);
    return {
        actions
    };
};

News.propTypes = {
    actions: PropTypes.object.isRequired,
    news: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(News);
