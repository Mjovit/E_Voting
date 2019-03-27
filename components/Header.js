import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
    return (
        <Menu>
            <Link route="/">
                <a className="item">Evote</a>
            </Link>



            <Menu.Menu position = "right">
            <Link route="/">
                <a className="item">Candidates</a>
            </Link>

                
            </Menu.Menu>
        </Menu>

    );
}