import React, {Fragment} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {AppBarTitleAddSearch} from "../../utility/components/AppBarTitle";
import {OpenWith} from "@material-ui/icons";
import {CatalogTable} from "../catalog/CatalogTable";

export const HomeMain = ({}) => {
    //const { user, isAuthenticated } = useAuth0();

    return (
        <Fragment>
            <AppBarTitleAddSearch
                title="Catalogs"
                LeftIcon={OpenWith}
                onSearchChange={(value) => {}}
                onAdd={()=> {} }
            />
            <CatalogTable/>
        </Fragment>
    );
};