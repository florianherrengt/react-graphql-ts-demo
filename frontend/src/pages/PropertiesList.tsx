// import { Property } from '../components/Property';

import { Query } from "react-apollo";
import * as React from 'react';
import query from '../queries/Property';
import {Properties} from 'ApiTypes/Properties';
import {Property} from '../components/Property';


interface Variables {}; // for future use

class PropertiesQuery extends Query<Properties, Variables> {}

const PropertiesList = () => (
    <PropertiesQuery query={query}>
        {
            ({ loading, error, data }) => {
                if (error) {
                    return <div>Error</div>;
                }
                if (loading || !data || !data.properties) {
                    return <div>Loading</div>;
                }
                return (<div>{data.properties.map(p => p && <Property property={p} actions={actions} />)}</div>)
            }
        }
    </PropertiesQuery>
)

const onSavedCliked = (id: string) => {
    console.log(id);
}

const onNotInterestedCliked = (id: string) => {
    console.log(id);
}

const onLinkClicked = (link: string) => {
    window.open(link, '_blank');
}

const actions = {onSavedCliked, onLinkClicked, onNotInterestedCliked};

export {PropertiesList};