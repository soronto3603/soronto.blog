
import React,{Component} from 'react';
import Link from 'next/link'

const PostLink = (props) => (
    <li>
      <Link href={`/${props.title}`}>
        <div>
            <div>{props.title}</div>   
        </div>  
      </Link>
    </li>
  )

class Posts extends Component{
    // constructor(props){
    //     super(props);
    //     this.state={...}
    // }
    state = {

    }
    render(){
        const style = {
            padding:"10px"
        }
        return(
            <div style={style}>
                <ul>
                    <PostLink title="hi" ></PostLink>
                </ul>
            </div>
        );
    }
}

export default Posts;