import React from 'react'
import { memo } from 'react'

function AgeComponent({age}) {
  console.log("<AgeComponent /> renders")
  return (
    <div>In AgeComponent Age : {age} </div>
  )
}

const AgeComponentMemo = memo(AgeComponent);
export default AgeComponentMemo

// export default class AgeComponent extends Component {
//  shouldComponentUpdate(nextProps, nextState) {
//     if(this.props.age === nextProps.age) {
//         return false
//     }
//     return true;
//  }
//   render() {
//      console.log("<AgeComponent /> renders")
//     return (
//       <div>In AgeComponent Age : {this.props.age} </div>
//     )
//   }
// }
