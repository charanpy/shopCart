import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux'
import { selectIsCollectionFetching } from '../../redux/shop/shop.selector'
import WithSpinner from '../with-spinner/with-spinner';
import ColletionOverview from './collection-overview';


const mapStateToProps = createStructuredSelector({
            isLoading: selectIsCollectionFetching
})

const ColletionOverviewContainer = compose(
            connect(mapStateToProps),
            WithSpinner
)(ColletionOverview);

export default ColletionOverviewContainer;