import React from 'react'
import './collection-overview.scss';
import { connect } from 'react-redux';
import { selectCollectionForPreview } from '../../redux/shop/shop.selector'
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../collection-preview/collection-preview';
const ColletionOverview = ({ collections }) => {
            return (
                        <div className='collection-overview'>
                                    {collections.map(({ id, ...otherCollectionProps }) => (
                                                <CollectionPreview key={id} {...otherCollectionProps} />
                                    ))}
                        </div>
            )
}


const mapStateToProps = createStructuredSelector({
            collections: selectCollectionForPreview
});

export default connect(mapStateToProps)(ColletionOverview);
