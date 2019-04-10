import React from 'react';
import { Menu ,Segment} from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
    return (
        <Segment inverted>
        <Menu inverted pointing secondary>
            <Link route="/">
                <a className="item">Evote</a>
            </Link>



            <Menu.Menu position = "right">
            <Link route="../pages/evote/candidates">
                <a className="item">Candidates</a>
            </Link>

                
            </Menu.Menu>
        </Menu>
        </Segment>

    );
}