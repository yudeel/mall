import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.component.scss';

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title}</h1>
        <div className='preview'>
            {
                items
                    .filter((item, ind) => ind < 4)
                    .map(({ id, ...otherParams }) => (
                        <CollectionItem key={id} {...otherParams} />
                    ))
            }
        </div>
    </div>
)

export default CollectionPreview;