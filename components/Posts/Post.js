import {withRouter} from 'next/router'

const Post = withRouter((props) => (
    <div>
        <h1>{props.router.query.title}</h1>
        <p>{props.children}</p>
    </div>
))

export default Post