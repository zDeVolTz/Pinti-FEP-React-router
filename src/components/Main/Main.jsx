import Users from '../Users';
import Albums from '../Albums';
import Photos from '../Photos';
import { Link, Route, Switch } from 'react-router-dom';
import style from './Main.module.scss';

const Main = () => {

    return (
        <section className={style.main}>
            <Link to="/users"><button>Go to Users</button></Link>
            <Switch>
                <Route exact path={`/users`} component={Users} />
                <Route exact path={`/users/albums`} component={Albums} />
                <Route exact path={`/users/albums/photos`} component={Photos} />
            </Switch>
        </section>
    );
}


export default Main;