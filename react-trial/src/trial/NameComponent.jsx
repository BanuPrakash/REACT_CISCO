import React, {memo} from 'react'


 function NameComponent({name}) {
     console.log("<NameComponent /> renders")
  return (
    <div>In NameComponent Name: {name} </div>
  )
}

const NameComponentMemo = memo(NameComponent);
export default NameComponentMemo;

// export default class NameComponent extends Component {
//   shouldComponentUpdate(nextProps, nextState) {
//     if(this.props.name === nextProps.name) {
//         return false
//     }
//     return true;
//  }
//   render() {
//      console.log("<NameComponent /> renders")
//     return (
//       <div>In NameComponent Name: {this.props.name} </div>
//     )
//   }
// }
